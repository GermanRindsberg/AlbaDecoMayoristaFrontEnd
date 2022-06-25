import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';
import Swal from 'sweetalert2';
import {SocialAuthService,GoogleLoginProvider, FacebookLoginProvider, SocialUser} from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  mail:any
  password:any
  recordar: boolean = false;
  show: boolean = false;
  returnUrl: any;
  socialUser:SocialUser;
  isLogin:boolean;
  


  constructor(
    private servicioUsuario: UsuarioService,
    private router: Router,
    route: ActivatedRoute,
    private socialAuthService: SocialAuthService
  ) {
    route.queryParams.subscribe(params => {
      this.returnUrl = params.r || '';
    });
   }

  ngOnInit(): void {
    this.mail = localStorage.getItem('emailUsuario') || '';
   
    //#region metodo para loguearse con facebook y almacenar datos en la bbdd
    this.socialAuthService.authState.subscribe((user)=>{
      
        this.socialUser=user;
        this.isLogin=(user !=null);

        if (this.isLogin==true)
        {
          sessionStorage.setItem('nombreUsuario', user.response.first_name)
          sessionStorage.setItem('emailUsuario', user.response.email)
          this.mail=user.response.email
      
          var formularioRegistro = {
            email: this.mail,
            nombre:  user.response.first_name,
            apellido:  user.response.last_name,
            password:'facebook'
          }
          this.servicioUsuario.postUsuario(formularioRegistro).subscribe(
            (response: any) => {
              
              if(response.id!=null){
                let nombreUsuario = response.perfil.nombre;
                let idUsuario = response['id'];
                sessionStorage.setItem('nombreUsuario', nombreUsuario);
                sessionStorage.setItem('idUsuario', idUsuario);
                sessionStorage.setItem('emailUsuario', response.email);
                this.servicioUsuario.disparadorLogin.emit(response);
                this.router.navigate([''])
              }
              else{
                Swal.fire({
                  title: 'Error',
                  text: response.errors.msg,
                  icon: 'error'
                  })
                }
            })
        }
      
    })


    //#endregion
  }

  
  loginWithFacebook():void{
  this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  
  }
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut():void{
    this.socialAuthService.signOut();
  }

//boton ingresar
  iniciar() {
    
    try {
      let dataLogin = {
        email:this.mail,
        password: this.password,
      }
      this.servicioUsuario.verificarLogin(dataLogin).subscribe(
        (response: any) => {
          if(response['msg'])
          {
              Swal.fire({
              title: 'Error', 
              text: response['msg'], 
              icon: 'error',
            })
          }
          else{
          let nombreUsuario = response.usuario.perfil.nombre;
          let idUsuario = response.usuario.id;
          sessionStorage.setItem('nombreUsuario', nombreUsuario);
          sessionStorage.setItem('idUsuario', idUsuario);
          if(this.recordar==true)
          {
            localStorage.setItem('nombreUsuario', nombreUsuario);
            localStorage.setItem('idUsuario', idUsuario);
            localStorage.setItem('emailUsuario', response.usuario.email);
          }
          
          this.servicioUsuario.setToken(response.token);
          this.servicioUsuario.disparadorLogin.emit(response);
          this.router.navigate([this.returnUrl]);
        }
      })
    }
  
    catch (error) {
    }
  } 

  mostrarPass() {
    this.show = !this.show;
}
}