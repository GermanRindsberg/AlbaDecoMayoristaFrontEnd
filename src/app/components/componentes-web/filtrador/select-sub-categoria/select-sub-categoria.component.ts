import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-select-sub-categoria',
  templateUrl: './select-sub-categoria.component.html',
  styleUrls: ['./select-sub-categoria.component.css']
})
export class SelectSubCategoriaComponent implements OnInit {
  listaProductos:any;
  nombreCategoria:any="todos";
  selectInfo:any=""
  constructor(
    private servicioProducto:ProductoService
  ) { }

  ngOnInit(): void {
    this.servicioProducto.getAllProductos().subscribe(data=>{
      console.log(data)
      var listaSinFiltrar=[]
      for (let i = 0; i < data.length; i++) {
         listaSinFiltrar.push(data[i].subCategoria.nombre)  
      }
      this.listaProductos = _.uniq(listaSinFiltrar)
    })
   
  }

  filtrarSubCategoria(event:any){
    if(event!=""){
      this.servicioProducto.disparadorSubCategoria.emit(event)
    }
    else{
      this.servicioProducto.disparadorSubCategoria.emit("todos")
    }
  }

}
