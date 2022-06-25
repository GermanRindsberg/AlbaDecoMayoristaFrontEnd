import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-carrito-compras',
    templateUrl: './carrito-compras.component.html',
    styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

    subTotal:any;
    descuento:any=0;
    totalPedido: any=0;
    productos: any[]=[]
    datosUsuario:any;
    datosDireccion:any;
    banderaPedido:any=0;

    
    constructor(private servicioCarrito: CarritoService,private servicioPedido:PedidoService){}

    ngOnInit(): void {
        this.productos= JSON.parse(sessionStorage.getItem('productosCarrito')!);
        this.calcularTotal();
            
    this.servicioPedido.datosUsuario.subscribe(data => {
        this.datosUsuario=data
      })
      
    this.servicioPedido.datosDireccion.subscribe(data => {
        this.datosDireccion=data
      })
    }


    borrarProducto(varianteId: any) {
        Swal.fire({
            title: '¿Seguro que quiere eliminar el producto?',
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText:"Cancelar",
        }).then(resulado => {
            if (resulado.isConfirmed) {
                var elemento=this.productos.find(el => el.variante.id== varianteId);
                this.productos.splice(elemento,1)
                this.calcularTotal();
            }

        })
    }

    restarCantidad(varianteId:any){
        var elemento=this.productos.find(el => el.variante.id== varianteId);
        if(elemento.cantidad>0)
        {
        elemento.cantidad-=1
        }
        this.calcularTotal();
        
    }

    sumarCantidad(varianteId:any){
        var elemento=this.productos.find(el => el.variante.id== varianteId);
        if(elemento.cantidad>=0)
        {
        elemento.cantidad=parseInt(elemento.cantidad)+1
        }
        this.calcularTotal()
    }

    calcularTotal(){
        this.subTotal=0;
        sessionStorage.setItem("productosCarrito", JSON.stringify(this.productos))
        for (let i = 0; i < this.productos.length; i++) {
            var subTotal=parseInt(this.productos[i].cantidad)*parseInt(this.productos[i].producto.precio);
            this.subTotal+=subTotal
        }
        this.servicioCarrito.disparadorCarrito.emit(this.productos)
        
    }

    realizarPedido(){
        var data={
            productos:this.productos,
            subTotal:this.subTotal,
            descuento:this.descuento,
            montoTotal:this.subTotal-this.descuento,
            idUsuario:sessionStorage.getItem("idUsuario"),
            nombreUsuario:sessionStorage.getItem("nombreUsuario"),
            emailUsuario:sessionStorage.getItem("emailUsuario")
        }

        this.banderaPedido=1;
        this.servicioPedido.postPedido(data).subscribe(response=>{
            console.log(response.estado)
            if (response.estado == "recibido") {
                Swal.fire({
                  title: 'Pedido realizado con exito!!',
                  icon: 'success',
                  confirmButtonText: "Aceptar",
                });
            sessionStorage.removeItem('productosCarrito')
            this.productos=[]
            this.calcularTotal();
        }
    })
}
}
