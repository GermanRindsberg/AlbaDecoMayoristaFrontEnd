import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-modal-pedido',
  templateUrl: './modal-pedido.component.html',
  styleUrls: ['./modal-pedido.component.css']
})
export class ModalPedidoComponent implements OnInit {

  
  fechaPedido:any;
  fechaSena:any;
  fechaEnvio:any;
  numeroGuiaEnvio:any;
  estadoPedido:any;
  numeroPedido:any;
  montoTotal:any;
  maestroDetalle:any;
  transporte:any;
  subTotalSinDescuento:any;
  descuento:any;
  
  constructor(private servicioPedido:PedidoService) { }

  ngOnInit(): void {
    this.servicioPedido.disparadorModalPedido.subscribe(data=>{
    this.fechaPedido=data.fechaPedido
    this.fechaSena=data.fechaSeña
    this.fechaEnvio=data.fechaEnvio
    this.numeroGuiaEnvio=data.numeroGuia
    this.estadoPedido=data.estado
    this.numeroPedido=data.id
    this.montoTotal=data.montoTotal
    this.maestroDetalle=data.maestroDetalle
    this.subTotalSinDescuento=data.subTotal
    this.descuento=data.descuento
    this.transporte=data.transporte
    
      
    })
  }

}
