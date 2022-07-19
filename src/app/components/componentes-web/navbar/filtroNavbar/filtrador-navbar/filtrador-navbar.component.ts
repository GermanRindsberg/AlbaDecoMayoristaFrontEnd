import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-filtrador-navbar',
  templateUrl: './filtrador-navbar.component.html',
  styleUrls: ['./filtrador-navbar.component.css']
})
export class FiltradorNavbarComponent implements OnInit {
  
  listaCategorias:any

  constructor(private servicioProducto: ProductoService) { }

  ngOnInit() {
    this.servicioProducto.getAllProductos().subscribe(data=>{
      var listaCategoriasSinFiltrar=[]
      for (let i = 0; i < data.length; i++) {
        listaCategoriasSinFiltrar.push(data[i])  
      }
      this.listaCategorias = _.uniqBy(listaCategoriasSinFiltrar,'categoria.nombre');
    })
  }
  
  
  filtrarCategoria(categoria:any){
    if(categoria!=""){
      this.servicioProducto.disparadorCategoria.emit(categoria)
    }
    else{
      this.servicioProducto.disparadorCategoria.emit("todos")
    }
  }
}

