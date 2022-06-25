import { Component,  OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';

@Component({
  selector: 'app-modal-detalle-usuario',
  templateUrl: './modal-detalle-usuario.component.html',
  styleUrls: ['./modal-detalle-usuario.component.css']
})
export class ModalDetalleUsuarioComponent implements OnInit {

  //#region perfil
  email:any;
  nombre:any;
  apellido:any;
  dni:any;
  cuit:any;
  celular:any;
  telefono:any;
//#endregion

//#region Direccion
  calle:any;
  numero:any;
  piso:any;
  depto:any;
  observaciones:any;
  localidad:any;
  codigoPostal:any;
  provincia:any;
//#endregion

  constructor(private servicioUsuario: UsuarioService) { }


  ngOnInit(): void {
    this.servicioUsuario.disparadorModal.subscribe((valor)=>
    {
      this.email=valor.email;
      this.nombre=valor.perfil.nombre;
      this.apellido=valor.perfil.apellido;
      this.dni=valor.perfil.dni;
      this.cuit=valor.perfil.cuit;
      this.celular=valor.perfil.celular;
      this.telefono=valor.perfil.telefono;
      
      this.calle=valor.direccion.calle;
      this.numero=valor.direccion.numero;
      this.piso=valor.direccion.piso;
      this.depto=valor.direccion.depto;
      this.observaciones=valor.direccion.observaciones;
      this.localidad=valor.direccion.localidad.nombre;
      this.codigoPostal=valor.direccion.localidad.codigoPostal;
      this.provincia=valor.direccion.localidad.provincia.nombre;
      
    });
  }
  
}
