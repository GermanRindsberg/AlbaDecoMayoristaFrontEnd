import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscadorProductos'
})
export class BuscadorProductosPipe implements PipeTransform {

  transform(value: any, args:any): any {
    const resultProducto=[];

    for (const producto of value){
      if (producto.nombre.toLowerCase().indexOf(args.toLowerCase())>-1 ||
      producto.nombre.toLowerCase().indexOf(args.toLowerCase())>-1 ){
        resultProducto.push(producto);
      };
    };
    return resultProducto;

  }

}


