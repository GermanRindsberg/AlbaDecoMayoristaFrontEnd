import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-select-categoria',
  templateUrl: './select-categoria.component.html',
  styleUrls: ['./select-categoria.component.css']
})
export class SelectCategoriaComponent implements OnInit {

  listaProductos:any;
  selectInfo:any="";
  constructor(
    private servicioProducto:ProductoService
  ) { }

  ngOnInit(): void {
    this.servicioProducto.getAllProductos().subscribe(data=>{
      var listaSinFiltrar=[]
      for (let i = 0; i < data.length; i++) {
         listaSinFiltrar.push(data[i].categoria.nombre)  
      }
      this.listaProductos = _.uniq(listaSinFiltrar)
    })
   
  }

  filtrarCategoria(event:any){
    if(event!=""){
      this.servicioProducto.disparadorCategoria.emit(event)
    }
    else{
      this.servicioProducto.disparadorCategoria.emit("todos")
    }
  }

}
