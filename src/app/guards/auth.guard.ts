import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario/usuario-service.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  respuesta:any

  constructor(private cookieService: CookieService, private router: Router,
     private servicioUsuario: UsuarioService) {
     }

  redirect(flag: boolean): any {
    if (!flag) {
      this.router.navigate([''])
      return false
    }
    return true
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.respuesta=this.servicioUsuario.esAdmin(sessionStorage.getItem('idUsuario'))
      return this.redirect(this.respuesta)
  }

}
