import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscadorUsuario'
})
export class BuscadorUsuarioPipe implements PipeTransform {

  transform(value: any[]=[], args: any):any {
    const resultUsuario=[];

    for (const usuario of value){
      if (usuario.perfil.nombre.toLowerCase().indexOf(args.toLowerCase())>-1 ||
      usuario.perfil.apellido.toLowerCase().indexOf(args.toLowerCase())>-1 ){
        resultUsuario.push(usuario);
      };
    };
    return resultUsuario;

  }

}
