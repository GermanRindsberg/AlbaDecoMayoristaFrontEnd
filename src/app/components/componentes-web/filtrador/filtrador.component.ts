import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-filtrador',
  templateUrl: './filtrador.component.html',
  styleUrls: ['./filtrador.component.css']
})
export class FiltradorComponent implements OnInit {

  listaDeFiltros: string[] = [];
  listaSinFiltrar: string[] = [];
  constructor(private servicioProducto: ProductoService) { }

  ngOnInit(): void {



    this.servicioProducto.disparadorCategoria.subscribe(data => {
      if (data != "todos") {
        this.listaSinFiltrar.push(data)
      }
      else {
        this.listaSinFiltrar = []
      }
      this.listaDeFiltros = _.uniq(this.listaSinFiltrar)
      this.servicioProducto.disparadorFiltros.emit(this.listaDeFiltros)
    })

    this.servicioProducto.disparadorSubCategoria.subscribe(data => {
      if (data != "todos") {
        this.listaSinFiltrar.push(data)
      }
      else {
        this.listaSinFiltrar = []
      }
      this.listaDeFiltros = _.uniq(this.listaSinFiltrar)
      this.servicioProducto.disparadorFiltros.emit(this.listaDeFiltros)
    })

  }

  eliminarFiltro(filtroBorrar: any) {

    this.listaSinFiltrar.forEach(function (filtro, index, object) {
      if (filtro === filtroBorrar) {
        object.splice(index, 1);
      }
    });
    this.listaDeFiltros = _.uniq(this.listaSinFiltrar)
    this.servicioProducto.disparadorFiltros.emit(this.listaDeFiltros)
  }

}
