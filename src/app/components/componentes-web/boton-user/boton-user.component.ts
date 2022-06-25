import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-boton-user',
  templateUrl: './boton-user.component.html',
  styleUrls: ['./boton-user.component.css']
})
export class BotonUserComponent implements OnInit {

  usuario:string;
  mostrar:boolean=false;
  admin:boolean=false
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
    private servicioUsuario:UsuarioService
    ) { }

  ngOnInit(): void {
    
    this.servicioUsuario.disparadorLogin.subscribe(data=>{
      console.log(data)
      if(data.tipoUsuario=="admin"){
        this.admin=true;
      }
      this.ngOnInit()
    })

    let nombreSesion = sessionStorage.getItem('nombreUsuario');
    let nombreLocal = localStorage.getItem('nombreUsuario');
    this.mostrar=false

    if(nombreLocal!=null)
    {
      this.usuario = nombreLocal;
      sessionStorage.setItem('emailUsuario', localStorage.getItem('emailUsuario') || '{}')
      sessionStorage.setItem('idUsuario', localStorage.getItem('idUsuario') || '{}')
      sessionStorage.setItem('nombreUsuario', localStorage.getItem('nombreUsuario') || '{}')
      this.mostrar=true;
    }
    if (nombreSesion != null){
      this.usuario = nombreSesion;
      this.mostrar=true;
    }

  }

  signOut():void{
    Swal.fire({
      title: '¿Seguro que quiere salir del sistema?',
      icon: "warning",
      confirmButtonText: "Aceptar",
      cancelButtonText:"Cancelar",
      showCancelButton:true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.salir();
      } else {
        
      }


    })
  }

  salir(){
    this.mostrar=false
    this.usuario=null
    sessionStorage.removeItem('nombreUsuario');
    sessionStorage.removeItem('idUsuario');
    sessionStorage.removeItem('emailUsuario');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('idUsuario');
    localStorage.removeItem('emailUsuario');
    this.socialAuthService.signOut();
    this.router.navigate([''])
    this.ngOnInit()

  }
}


