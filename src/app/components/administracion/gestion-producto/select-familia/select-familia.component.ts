import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorEvent } from 'ngx-color';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { SubcategoriaService } from 'src/app/services/categoria/subcategoria.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-select-familia',
  templateUrl: './select-familia.component.html',
  styleUrls: ['./select-familia.component.css']
})
export class SelectFamiliaComponent implements OnInit {


  @Output() categoriaEmit = new EventEmitter<any>();
  @Output() subCategoriaEmit = new EventEmitter<any>();
  @Output() varianteEmit = new EventEmitter<any>();


  listaFamilia: any[];
  listaSubcategorias: any[] = [];
  listaSubLlena: any[] = []; //lista de subcategorias para recorrer y filtrar con categoriaId
  nombreFamilia: any;
  nombreSubCategoria: any;
  idCategoria: any;
  idSubcategoria:any;
  colorSeleccionado: any;
  listaVariantes: any[] = ["#FFFFFF"];
  idProducto: any='';
  listaDeVariantes: any[] = ['']

  constructor(
    private servicioCategoria: CategoriaService,
    private servicioSubCategoria: SubcategoriaService,
    private route: ActivatedRoute,
    private servicioProducto: ProductoService
  ) { }

  ngOnInit(): void {
    this.servicioCategoria.getAllCategorias().subscribe(
      (response: any) => {
        this.nombreFamilia = ""
        this.nombreSubCategoria = ""
        this.listaVariantes = ["#FFFFFF"];
        this.listaFamilia = response

      })

    this.idProducto = this.route.snapshot.paramMap.get('idProducto');

    if (this.idProducto != "" && this.idProducto != null) {
      this.servicioProducto.getProductoId(this.idProducto).subscribe((response: any) => {
        this.listaDeVariantes = response.variantes
        this.nombreFamilia = response.categoria.nombre
        this.nombreSubCategoria = response.subCategoria.nombre
        this.idCategoria=response.categoria.id
        this.idSubcategoria=response.subCategoria.id
        this.listaVariantes = []
        for (var i = 0; i < this.listaDeVariantes.length; i++) {
          if(response.variantes[i].activo==1){
          this.listaVariantes.push(response.variantes[i].color)
          this.varianteEmit.emit(this.listaVariantes)
          this.subCategoriaEmit.emit(this.idSubcategoria)
          this.categoriaEmit.emit(this.idCategoria)
          }
        }
      })
    }
    this.varianteEmit.emit(this.listaVariantes)
  }

  eliminarSubcategoria(subCategoriaId: any) {

    Swal.fire({
      title: '¿Borrar Sub-Categoria?',
      icon: 'warning',
      confirmButtonText: "Si, borrar",
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
    }).then(choice => {
      if (choice.value === true) {
        this.servicioSubCategoria.deleteSubcategoria(subCategoriaId).subscribe(response => {
          this.ngOnInit();
        })

      }
    })
  }

  eliminarFamilia(familiaId: any) {


    Swal.fire({
      title: '¿Borrar Categoria?',
      icon: 'warning',
      confirmButtonText: "Si, borrar",
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
    }).then(choice => {
      if (choice.value === true) {

        this.servicioCategoria.deleteCategoria(familiaId).subscribe(response => {
          this.ngOnInit();
        })

      }
    })
  }

  seleccionarFamilia(nombreCategoria: any, idCategoria: any) {
    this.nombreFamilia = nombreCategoria
    this.idCategoria = idCategoria
    this.listaSubcategorias = []
    this.nombreSubCategoria = ''

    this.servicioSubCategoria.getAllSubcategorias().subscribe(
      (response: any) => {
        this.listaSubLlena = response

        for (var i = 0; i < this.listaSubLlena.length; i++) {
          if (this.listaSubLlena[i].categoria.id == idCategoria && this.listaSubLlena[i].activo == 'activo') {
            this.listaSubcategorias.push(this.listaSubLlena[i])
          }
        }

      })
    this.categoriaEmit.emit(idCategoria)
  }

  seleccionarSubcategoria(nombreSubCategoria: any, id: any) {
    this.nombreSubCategoria = nombreSubCategoria
    this.idSubcategoria=id
    this.subCategoriaEmit.emit(this.idSubcategoria)
  }

  agregarVariante($event: ColorEvent) {
    this.listaVariantes.push($event.color.hex)
    this.varianteEmit.emit(this.listaVariantes)
  }


  eliminarVariante(color: any) {
    var indice = this.listaVariantes.indexOf(color); // obtenemos el indice
    this.listaVariantes.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
    this.varianteEmit.emit(this.listaVariantes)

  }




}
