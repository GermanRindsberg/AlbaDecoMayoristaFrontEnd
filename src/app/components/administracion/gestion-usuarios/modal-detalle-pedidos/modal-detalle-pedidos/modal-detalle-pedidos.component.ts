import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';

@Component({
  selector: 'app-modal-detalle-pedidos',
  templateUrl: './modal-detalle-pedidos.component.html',
  styleUrls: ['./modal-detalle-pedidos.component.css']
})
export class ModalDetallePedidosComponent implements OnInit {

  nombre:any;
  listaPedidos:any;
  
  constructor(private servicioUsuario: UsuarioService, private servicioPedido:PedidoService) { }


  ngOnInit() {
    this.servicioUsuario.disparadorModal.subscribe((response)=>
    {
     this.servicioPedido.getAllPedidosPorUsuario(response.id).subscribe(data=>{
      this.listaPedidos=data
     })
      this.nombre=response.perfil.nombre +" "+ response.perfil.apellido

    });
  }

}
