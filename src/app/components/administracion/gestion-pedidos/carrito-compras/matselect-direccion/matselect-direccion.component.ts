import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';

@Component({
  selector: 'app-matselect-direccion',
  templateUrl: './matselect-direccion.component.html',
  styleUrls: ['./matselect-direccion.component.css']
})
export class MatselectDireccionComponent implements OnInit {

  formularioDatosDireccion:any
  
  constructor(private servicioUsuario: UsuarioService, private servicioPedido:PedidoService) { }

  ngOnInit(): void {
    this.servicioUsuario.getUsuario().subscribe(data=>{
      
      this.formularioDatosDireccion.controls['calle'].setValue(data.direccion.calle)
      this.formularioDatosDireccion.controls['numero'].setValue(data.direccion.numero)
      this.formularioDatosDireccion.controls['piso'].setValue(data.direccion.piso)
      this.formularioDatosDireccion.controls['depto'].setValue(data.direccion.depto)
      this.formularioDatosDireccion.controls['codigoPostal'].setValue(data.direccion.localidad.codigoPostal)
      this.formularioDatosDireccion.controls['localidad'].setValue(data.direccion.localidad.nombre)
      this.formularioDatosDireccion.controls['provincia'].setValue(data.direccion.localidad.provincia.nombre)
      this.formularioDatosDireccion.controls['observacionesDomicilio'].setValue(data.direccion.observaciones)
    });
    this.formularioDatosDireccion = new FormGroup({
      calle: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      piso: new FormControl('' ),
      depto: new FormControl(''),
      codigoPostal: new FormControl('',Validators.required),
      localidad: new FormControl('', Validators.required),
      provincia: new FormControl('', Validators.required),
      observacionesDomicilio: new FormControl(''),
    });
    this.enviarDatosDireccion
 
  }
  enviarDatosDireccion(){
    this.servicioPedido.datosDireccion.emit(this.formularioDatosDireccion.value)

  }

}
