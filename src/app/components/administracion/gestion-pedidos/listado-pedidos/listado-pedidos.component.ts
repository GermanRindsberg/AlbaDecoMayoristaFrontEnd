import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.css']
})
export class ListadoPedidosComponent implements OnInit {
  
  listaPedidos:any[]
  
  constructor(private servicioPedido:PedidoService) { }

  ngOnInit(): void {
    
    this.servicioPedido.getAllPedidosPorUsuario(sessionStorage.getItem("idUsuario")).subscribe(response=>{
      this.listaPedidos=response
    })
  }
    
  abrirModal(datosAenviar:any){
    this.servicioPedido.disparadorModalPedido.emit(datosAenviar)
  }

}
