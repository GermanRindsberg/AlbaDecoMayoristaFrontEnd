import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  listaUsuarios:any;
  buscador:string="";

  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.servicioUsuario.getAllUsuarios().subscribe(
      (response: any) => {
        this.listaUsuarios=response
      })
  }

  darAdmin(idUsuario:any, tipoUsuario:any){
    if(tipoUsuario=='cliente'){
      tipoUsuario='admin'
    }
    else{
      tipoUsuario='cliente'
    }
      var data=  {
      tipoUsuario:tipoUsuario
    }
    this.servicioUsuario.patchUsuariosId(data).subscribe(
      (response: any) => {
        console.log(response)
      })
  }

  abrirModal(datosAenviar:any){
    this.servicioUsuario.disparadorModal.emit(datosAenviar)
  }

  
}
