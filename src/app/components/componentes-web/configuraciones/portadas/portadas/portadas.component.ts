import { Component, OnInit } from '@angular/core';
import { VisualesService } from 'src/app/services/visuales/visuales.service';
import Swal from 'sweetalert2';
import { SortableOptions } from 'sortablejs';

@Component({
  selector: 'app-portadas',
  templateUrl: './portadas.component.html',
  styleUrls: ['./portadas.component.css']
})
export class PortadasComponent implements OnInit {

  constructor(private servicioVisuales: VisualesService) { }

  archivoFotos: Array<any> = [];
  habilitarBoton:boolean=false;
  formularioParaEnviar = new FormData()

  opcionesSortable: SortableOptions =
  {
    animation: 300,
    ghostClass: 'ghost',
    onUpdate: (event: any) => {
    },
  }

  

  ngOnInit() {
    this.servicioVisuales.getAllPortadas().subscribe(response=>{
      this.archivoFotos=response
      if(this.archivoFotos!=[]){
        this.habilitarBoton=true
      }
      
    })
  }
  onSelect(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.archivoFotos.push({
        'direccionPortada': reader.result as string
      });
    }
    reader.readAsDataURL(event.target.files[0])
    this.habilitarBoton=true
  }

  onRemove(event: any) {
    
    this.archivoFotos.splice(this.archivoFotos.indexOf(event), 1);
    if (this.archivoFotos.length==0){
      this.habilitarBoton=false
    }
    if (event.id!=null){
      this.servicioVisuales.deletePortada(event.id).subscribe(response=>{
        if (response == 201) {
          Swal.fire({
            title: 'Portada borrada con exito!!',
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
      })
    }
  }

  convertirBase64toBlob(dataURI: any) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab)
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg'});
  }

  guardarFotos(){
    for (let i = 0; i < this.archivoFotos.length; i++) {
      console.log(this.archivoFotos[i].id)
      if(this.archivoFotos[i].id==null){
      var blobFoto = this.convertirBase64toBlob(this.archivoFotos[i].direccionPortada)
      this.formularioParaEnviar.append('imagen'+i,blobFoto)
      }
    }
    this.servicioVisuales.postPortada(this.formularioParaEnviar)
  }       
    
}
