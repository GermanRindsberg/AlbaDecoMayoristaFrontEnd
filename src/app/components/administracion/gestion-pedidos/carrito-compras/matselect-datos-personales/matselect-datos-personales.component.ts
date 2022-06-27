import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';


@Component({
  selector: 'app-matselect-datos-personales',
  templateUrl: './matselect-datos-personales.component.html',
  styleUrls: ['./matselect-datos-personales.component.css']
})
export class MatselectDatosPersonalesComponent implements OnInit {
  
  formularioDatos:any;
  
  constructor(private servicioUsuario: UsuarioService, private servicioPedido:PedidoService) { }
  ngOnInit(): void {
    this.servicioUsuario.getUsuariosId().subscribe(data=>{
      this.formularioDatos.controls['email'].setValue(data.email)
      this.formularioDatos.controls['nombre'].setValue(data.perfil.nombre)
      this.formularioDatos.controls['apellido'].setValue(data.perfil.apellido)
      this.formularioDatos.controls['dni'].setValue(data.perfil.dni)
      this.formularioDatos.controls['cuit'].setValue(data.perfil.cuit)
      this.formularioDatos.controls['celular'].setValue(data.perfil.celular)
      this.formularioDatos.controls['telefono'].setValue(data.perfil.telefono)
    });

    this.formularioDatos = new FormGroup({
      email: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      cuit: new FormControl(''),
      celular: new FormControl('', Validators.required),
      telefono: new FormControl(''),
    });
      this.enviarDatosPersonales()
  
    
  }

  enviarDatosPersonales(){
    this.servicioPedido.datosUsuario.emit(this.formularioDatos.value)
    
  }


}
