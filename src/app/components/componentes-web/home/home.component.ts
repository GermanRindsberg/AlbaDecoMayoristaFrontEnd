import { Component, OnInit} from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaProductos: any
  direccionFoto: any;
  productoAenviar: {} = {};
  fotoAenviar: any;
  categoriaAenviar: any;
  subCategoriaAenviar: any;
  variantesAenviar: any;
  mostrar: false;
  listaFiltrada: any;



  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

    this.productoService.getAllProductos().subscribe((response: any) => {
      this.listaProductos = response
      this.listaFiltrada = this.listaProductos
    })
  }

  ngAfterContentInit() {
    
    this.productoService.disparadorFiltros.subscribe((data:[]) => {
      var listaTemporal=[]
      if (data.length != 0) {
        for (let i = 0; i < this.listaProductos.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (this.listaProductos[i].categoria.nombre==data[j] || this.listaProductos[i].subCategoria.nombre==data[j] ){
              listaTemporal.push(this.listaProductos[i])
              this.listaFiltrada = _.uniq(listaTemporal)
            }
          }
        }
      }
      else{
        this.listaFiltrada=this.listaProductos
      }




    })
 }


  abrirModalFoto(direccionFoto: any) {
    this.direccionFoto = direccionFoto;
  }

  abrirOffCanvasProducto(producto: any) {
    this.productoAenviar = producto;
    this.fotoAenviar = producto.fotos[0].direccionImage
    this.categoriaAenviar = producto.categoria.nombre
    this.subCategoriaAenviar = producto.subCategoria.nombre
    this.variantesAenviar = producto.variantes
  }


}
