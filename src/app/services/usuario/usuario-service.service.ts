import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  @Output() disparadorModal: EventEmitter<any>  = new EventEmitter();
  @Output() disparadorLogin: EventEmitter<any>  = new EventEmitter();
  
  
  constructor(
    private http: HttpClient, 
    private cookieService:CookieService, 
    private router: Router,
  ) { }
  private api_usuarios="http://127.0.0.1:5000/api/usuarios";
  private token = this.cookieService.get('albaCookie');

  private header = new HttpHeaders({ 
  "Content-Type": "application/json", 
  'Authorization': 'Bearer ' + this.token });
   
  

  public getAllUsuarios(): Observable<any>{
    return this.http.get(this.api_usuarios, {headers : this.header});
  }
  
  public getUsuariosId(): Observable<any>{
    return this.http.post(this.api_usuarios +"/usuario",'', {headers : this.header});
  }

  public patchUsuariosId(data:any): Observable<any>{
    return this.http.patch(this.api_usuarios+"/usuario", data, {headers : this.header});
  }

  public darAdmin(idUsuario:any): Observable<any>{
    return this.http.patch(this.api_usuarios+"/"+idUsuario,'', {headers : this.header});
  }

  public postUsuario(data:any): Observable<any>{
    return this.http.post(this.api_usuarios, data);
  }

  public deleteUsuario(): Observable<any>{
    return this.http.delete(this.api_usuarios+"/usuario", {headers : this.header});
  }

  public verificarLogin(data:any, recordar:boolean, rutaOrigen){
    return this.http.post(this.api_usuarios + "/token", data).subscribe((response:any)=>{
    
      if(response['msg'])
          {
              Swal.fire({
              title: 'Error', 
              text: response['msg'], 
              icon: 'error',
            })
          }
        else{
            this.cookieService.set('albaCookie', response.token)
            sessionStorage.setItem('idUsuario', response.usuario.id);
            this.disparadorLogin.emit(response.usuario);
            this.router.navigate([rutaOrigen]);
        }
    });
  }



}
