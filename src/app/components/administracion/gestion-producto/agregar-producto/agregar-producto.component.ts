import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
})
export class AgregarProductoComponent implements OnInit {

  datosProducto: any;
  archivoFotos: Array<any>;
  fotosExistentes: any[]=[];
  categoriaProducto: any;
  subCategoriaProducto: any;
  variantesProducto: any;
  idProducto: any = "";
  formularioParaEnviar = new FormData


  constructor(private serviceProducto: ProductoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idProducto = this.route.snapshot.paramMap.get('idProducto');
  }

  guardarProducto() {
    
    //#region Variables
    this.formularioParaEnviar.append('nombreProducto', this.datosProducto['nombreProducto'])
    this.formularioParaEnviar.append('alto', this.datosProducto['alto'])
    this.formularioParaEnviar.append('ancho', this.datosProducto['ancho'])
    this.formularioParaEnviar.append('largo', this.datosProducto['largo'])
    this.formularioParaEnviar.append('precio', this.datosProducto['precio'])
    this.formularioParaEnviar.append('capacidad', this.datosProducto['capacidad'])
    this.formularioParaEnviar.append('descripcion', this.datosProducto['descripcion'])
    this.formularioParaEnviar.append('idSubCategoria', this.subCategoriaProducto)
    this.formularioParaEnviar.append('idCategoria', this.categoriaProducto)
    this.formularioParaEnviar.append('variantes', this.variantesProducto)
    //#endregion

    //si no hay idProducto que haga un post, sino un patch
    if (this.idProducto == '' || this.idProducto == null) {
      this.postearProducto();
    }

    else {
      this.patchearProducto();
    }
  }

  //metodo para crear un blob a partir del base 64 que viene desde fotosProducto en la variable "fotosProducto"
  convertirBase64toBlob(dataURI: any) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab)
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg'});

  }

  postearProducto() {
    for (let i = 0; i < this.archivoFotos.length; i++) {
      var blobFoto = this.convertirBase64toBlob(this.archivoFotos[i].direccionImage)
      this.formularioParaEnviar.append("" + i + "", blobFoto)
    }

    this.serviceProducto.postProducto(this.formularioParaEnviar).subscribe(
      (response: any) => {
        if (response.id != null) {
          Swal.fire({
            title: 'Producto agregado con exito!!',
            icon: 'success',
            confirmButtonText: "Aceptar",
          }).then(resulado => {
            if (resulado) window.location.reload();
          })
        }
        Swal.fire({
          title: 'Error',
          text: response.errors.msg,
          icon: 'error'
        })
      }
    )

  }

  patchearProducto() {
    //corroboro que sean nuevas fotos
    for (var i = 0; i < this.archivoFotos.length; i++) {
      
      if (this.archivoFotos[i].direccionImage.startsWith('data:')) {
        console.log("guardo foto nueva")  
        var blobFoto = this.convertirBase64toBlob(this.archivoFotos[i].direccionImage)
        this.formularioParaEnviar.append("" +this.archivoFotos[i].posicion+ "", blobFoto)
      }
      else {
        console.log("guardo foto existente")  
        this.fotosExistentes.push(this.archivoFotos[i])
      }
      
    }
    var myJsonString = JSON.stringify(this.fotosExistentes);
    this.formularioParaEnviar.append('fotosExistentes', myJsonString)

    this.serviceProducto.patchProductoId(this.idProducto, this.formularioParaEnviar).subscribe(
      (response: any) => {
        if (response.id != null) {
          Swal.fire({
            title: 'Producto editado con exito!!',
            icon: 'success',
            confirmButtonText: "Aceptar",
          }).then(resulado => {
          //  if (resulado)  this.router.navigate(['gestionProductos']); 
          })
        }
      }
    )
  }

    
}


