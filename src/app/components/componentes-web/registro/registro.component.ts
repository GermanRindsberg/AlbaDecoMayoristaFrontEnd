
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //#region variables User
  email: string;
  password: string;
  confPassword: string;
  //bandera que muestra o no mensaje de error de password distinto
  banderaPass: boolean;
  //#endregion

  //#region variables Profile
  nombre: string;
  apellido: string;
  dni: string;
  cuit: string;
  celular: string;
  telefono: string;
  //#endregion

  //#region variables Domicilio
  calle: string;
  numero: string;
  piso: string;
  depto: string;
  codigoPostal: string;
  localidad: string;
  provincia: string;
  observacionesDomicilio: string;
  //#endregion

  formularioRegistro: any;
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  options = {
    types: [],
    componentRestrictions: { country: 'ar' }
  } as unknown as Options;

  constructor(
    private servicio: UsuarioService,
    private router: Router,
    private cookieService: CookieService
  ) { }


  ngOnInit(): void {
    
    this.servicio.getUsuario().subscribe(
        (response: any) => {
          //#region Datos Usuario
          this.email = response.email
          this.nombre = response.perfil.nombre;
          this.apellido = response.perfil.apellido;
          this.dni = response.perfil.dni;
          this.cuit = response.perfil.cuit;
          this.celular = response.perfil.celular;
          this.telefono = response.perfil.telefono;
          //#endregion
          //#region Direccion
          this.calle = response.direccion.calle;
          this.numero = response.direccion.numero;
          this.piso = response.direccion.piso;
          this.depto = response.direccion.depto;
          this.observacionesDomicilio = response.direccion.observaciones;
          this.localidad = response.direccion.localidad.nombre;
          this.codigoPostal = response.direccion.localidad.codigoPostal;
          this.provincia = response.direccion.localidad.provincia.nombre;
          //#endregion

        })

  }

  public handleAddressChange(address: Address) {
    if (address.address_components.length > 5) {
      this.calle = address.address_components[1].long_name
      this.numero = address.address_components[0].long_name
      this.localidad = address.address_components[2].long_name
      this.provincia = address.address_components[4].long_name
    }
    else {
      this.localidad = address.address_components[0].long_name
      this.provincia = address.address_components[2].long_name
    }

  }

  registrar() {

    try {
      //#region formData 
      this.formularioRegistro = {
        email: this.email,
        password: this.confPassword,
        nombre: this.nombre,
        apellido: this.apellido,
        dni: this.dni,
        cuit: this.cuit,
        celular: this.celular,
        telefono: this.telefono,
        calle: this.calle,
        numero: this.numero,
        piso: this.piso,
        depto: this.depto,
        codigoPostal: this.codigoPostal,
        localidad: this.localidad,
        provincia: this.provincia,
        observacionesDomicilio: this.observacionesDomicilio,
      }
      //#endregion

      if (this.cookieService.check("albaCookie") == false) {
        this.servicio.postUsuario(this.formularioRegistro).subscribe(
          (response: any) => {
            if (response.id != null) {
              let idUsuario = response['id'];
              sessionStorage.setItem('idUsuario', idUsuario);
              this.router.navigate(['']);
            }
            Swal.fire({
              title: 'Error',
              text: response.errors.msg,
              icon: 'error'
            })
          }
        )
      }
      else {
        this.servicio.patchUsuariosId(this.formularioRegistro).subscribe(
          (response: any) => {
            this.router.navigate(['']);
            if(response.id){
              Swal.fire({
                title: 'Usuario editado con exito!!',
                icon: 'success',
                confirmButtonText: "Aceptar",
              }).then(resulado => {
                if (resulado) window.location.reload();
              })
            }
          },
          error => {
            console.log(error);
            Swal.fire({
              title: 'Error',
              text: 'Ha ocurrido un error al editar el usuario',
              icon: 'error'
            });
          }
        );
      }

    }
    catch (error) {
      console.log(error);
    }
  }

  verificarPass(evento: any) {
    if (this.password == this.confPassword) {
      this.banderaPass = true;
    }
    else {
      this.banderaPass = false;
    }
  }

  eliminarUsuario() {
    Swal.fire({
      title: '¿Estas seguro de eliminar tu cuenta?',
      text: "Recuerda que puedes volver a activar tu cuenta cuando asi lo decidas",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: '¡Si, quiero eliminar mi cuenta!'
    }).then((result) => {

      if (result.isConfirmed) {
        this.servicio.deleteUsuario().subscribe(
          (response: any) => {
            Swal.fire(
              'Ususario eliminado',
              'Fuiste dado de baja en nuestro sistema, esperamos que vuelvas pronto',
              'success'
            ),
              sessionStorage.removeItem("nombreUsuario");
            sessionStorage.removeItem("idUsuario");
            this.router.navigate(['']);
          })
      }
    })
  }



}
