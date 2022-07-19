import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  @Input() productoRecibido: any;
  @Input() fotoRecibida: any;
  @Input() categoriaRecibida: any;
  @Input() subCategoriaRecibida: any;
  @Input() variantesRecibidas: any;
  data: any[] = []


  constructor(private servicioCarrito: CarritoService) { }

  ngOnInit(): void {
    var datosEnSession=JSON.parse(sessionStorage.getItem('productosCarrito')!);
    if(datosEnSession!=null){
      this.data=datosEnSession
    }
  }

  agregarProducto() {
    console.log(this.data)
    this.servicioCarrito.disparadorCarrito.emit(this.data)
    sessionStorage.setItem("productosCarrito", JSON.stringify(this.data))
  }
  
  modificaCantidades(event: any, variante: any) {
    
      var varianteData= variante;
      var cantidad=  event.target.value
      if(cantidad=='')
      {
        cantidad=0;
      }
      var datos={
        variante:varianteData,
        cantidad:cantidad,
        producto:this.productoRecibido
      }

    for (let i = 0; i < this.data.length; i++) {
      var element = this.data[i].variante.id;
      if(element == variante.id)
       {
         this.data.splice(i,1)
       }
    }
    if(cantidad!=0)
      {this.data.push(datos)}
    }

}
