import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario-service.service';
import Swal from 'sweetalert2';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  mail: any
  password: any
  recordar: boolean = false;
  show: boolean = false;
  returnUrl: any;
  socialUser: SocialUser;
  isLogin: boolean;



  constructor(
    private servicioUsuario: UsuarioService,
    private router: Router,
    route: ActivatedRoute,
    private socialAuthService: SocialAuthService,
    private serviceCookie:CookieService
  ) {
    route.queryParams.subscribe(params => {
      this.returnUrl = params.r || '';
    });
  }

  ngOnInit(): void {
    //#region metodo para loguearse con facebook y almacenar datos en la bbdd
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLogin = (user != null);
      if (this.isLogin == true) {
        this.mail = user.response.email
        var formularioRegistro = {
          email: this.mail,
          nombre: user.response.first_name,
          apellido: user.response.last_name,
          password: 'facebook'
        }
        this.servicioUsuario.postUsuario(formularioRegistro).subscribe(
          (response: any) => {
            if (response.usuario.id != null) {
              this.servicioUsuario.disparadorLogin.emit(response.usuario);
              this.serviceCookie.set('albaCookie', response.token)
              sessionStorage.setItem('emailUsuario', response.usuario.email)
              sessionStorage.setItem('idUsuario', response.usuario.id);
              this.router.navigate([''])
            }
            else {
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


  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);

  }
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.socialAuthService.signOut(true);
  }

  //boton ingresar
  iniciar() {

    try {
      let dataLogin = {
        email: this.mail,
        password: this.password,
      }
      this.servicioUsuario.verificarLogin(dataLogin, this.returnUrl)
    }
    catch (error) {
      console.log(error)
    }
  }

  mostrarPass() {
    this.show = !this.show;
  }
}