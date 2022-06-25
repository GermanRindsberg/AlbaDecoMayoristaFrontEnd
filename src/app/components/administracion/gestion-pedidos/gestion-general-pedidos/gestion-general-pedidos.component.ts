import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-general-pedidos',
  templateUrl: './gestion-general-pedidos.component.html',
  styleUrls: ['./gestion-general-pedidos.component.css']
})
export class GestionGeneralPedidosComponent implements OnInit {

  listaPedidos: any;
  listadoInicial: any;
  buscador:any='';

  constructor(private servicioPedido: PedidoService) { }

  ngOnInit(): void {
    this.servicioPedido.getAllPedidos().subscribe(data => {
      this.listadoInicial = data
      this.listaPedidos = data

    })

  }

  abrirModal(datosAenviar: any) {
    this.servicioPedido.disparadorModalPedido.emit(datosAenviar)
  }

  cambiarEstado(idPedido: any, estado: any) {
    var data = {}


    if (estado == 'señado')
      data = { estado: estado };

    else if (estado == 'listo')
      data = { estado: estado };

    else if (estado == 'archivado')
      data = { estado: estado };
    
    else if (estado == 'reabrir')
      data = { estado: 'recibido' };

    this.servicioPedido.patchPedidoId(idPedido, data).subscribe(data => {
      if (data = "editado") {
        this.ngOnInit();
        Swal.fire('Pedido modificado con exito')
      }
      else {
        Swal.fire('Hubo un error al editar el pedido')
      }
    });

    if (estado == "enviado") {
      Swal.fire({
        title: 'Ingresa los datos de envio',
        html: `<input type="text" id="transporte" class="swal2-input" placeholder="Ingresa el transporte utilizado">
      <input type="text" id="nroguia" class="swal2-input" placeholder="Ingresa el numero de guia">`,
        confirmButtonText: 'Registrar envio',
        focusConfirm: false,
        preConfirm: () => {
          const transporte = (<HTMLInputElement>Swal.getPopup()!.querySelector('#transporte')).value
          const numeroGuia = (<HTMLInputElement>Swal.getPopup()!.querySelector('#nroguia')).value
          if (!transporte || !numeroGuia) {
            Swal.showValidationMessage(`Transporte y numero de guia/remito obligatorios`)
          }
          return { transporte: transporte, numeroGuia: numeroGuia, estado: 'enviado' }
        }
      }).then((result) => {
        this.servicioPedido.patchPedidoId(idPedido, result.value).subscribe(data => {
          if (data = "editado") {
            this.ngOnInit();
            Swal.fire('Pedido modificado con exito')
          }
          else {
            Swal.fire('Hubo un error al editar el pedido')
          }

        })
      })
    }

    
  }

  seleccionEstado(estado: any) {
    if (estado != 'todos') {
      this.listaPedidos = this.listadoInicial.filter((listaPedidos => listaPedidos.estado === estado));
    }
    else{
      this.listaPedidos = this.listadoInicial
    }
  }

}

