import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-boton-carrito',
  templateUrl: './boton-carrito.component.html',
  styleUrls: ['./boton-carrito.component.css']
})
export class BotonCarritoComponent implements OnInit {
  productosRecibidos: any[] = []
  cantidades: any = 0;
  mostrarBoton:any=0;
  @Output() mostrar = new EventEmitter<any>();

  constructor(private carritoService: CarritoService,private router:Router) { }

  ngOnInit(): void {
    
    this.carritoService.disparadorCarrito.subscribe(data => {
      this.productosRecibidos=data
      this.cantidadProducto()
    })
    this.productosRecibidos = JSON.parse(sessionStorage.getItem('productosCarrito')!);
    this.cantidadProducto()
  }
  
  cantidadProducto(){
    var suma = 0
    if(this.productosRecibidos!=null){
    for (let i = 0; i < this.productosRecibidos.length; i++) {
      var cantidad = this.productosRecibidos[i].cantidad;
     
      if (cantidad != '') {
         suma = suma + parseInt(cantidad)
       }
     }
     this.cantidades = suma
     if (this.cantidades!=0){
       this.mostrarBoton=1
     }
  }
}
}