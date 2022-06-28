import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-boton-user',
  templateUrl: './boton-user.component.html',
  styleUrls: ['./boton-user.component.css']
})
export class BotonUserComponent implements OnInit {

  usuario:any='';
  mostrar:boolean=false;//muestra hola "nombre"
  admin:boolean=false
  idUsuario:any=''
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
    private servicioUsuario:UsuarioService,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    
    this.servicioUsuario.disparadorLogin.subscribe(data=>{
      if (data!=null){
      this.usuario=data.perfil.nombre
      this.mostrar=true
      if(data.tipoUsuario=="admin"){
        this.admin=true
      }
    }
    })
    if(this.cookieService.get('albaCookie')){
    this.servicioUsuario.getUsuariosId().subscribe(response=>{
      this.usuario=response.perfil.nombre
      this.mostrar=true
      if(response.tipoUsuario=="admin"){
        this.admin=true
      }
    })
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
    sessionStorage.removeItem('idUsuario');
    this.cookieService.delete('albaCookie');
    this.socialAuthService.signOut();
    this.admin=false
    this.servicioUsuario.disparadorLogin.emit()
    this.router.navigate(['login'])
    this.socialAuthService.signOut();
  }
}


