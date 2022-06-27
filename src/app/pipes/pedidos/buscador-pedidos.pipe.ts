import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscadorPedidos'
})
export class BuscadorPedidosPipe implements PipeTransform {


  transform(value: any[]=[], args: any):any {
    const resultPedido=[];
    for (const pedido of value){
      if (pedido.usuario.perfil.nombre.toLowerCase().indexOf(args.toLowerCase())>-1 ||
      pedido.usuario.perfil.apellido.toLowerCase().indexOf(args.toLowerCase())>-1 ){
        resultPedido.push(pedido);
      };
    };
    return resultPedido;
  }
}
