import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';

@Component({
  selector: 'app-modal-detalle-pedidos',
  templateUrl: './modal-detalle-pedidos.component.html',
  styleUrls: ['./modal-detalle-pedidos.component.css']
})
export class ModalDetallePedidosComponent implements OnInit {

  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit() {
    this.servicioUsuario.disparadorModal.subscribe((response)=>
    {
console.log(response)
      
    });
  }

}
