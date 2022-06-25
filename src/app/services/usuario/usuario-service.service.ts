import { Injectable, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  @Output() disparadorModal: EventEmitter<any>  = new EventEmitter();
  @Output() disparadorLogin: EventEmitter<any>  = new EventEmitter();

  private api_usuarios="http://127.0.0.1:5000/api/usuarios";
  private token: string;

  
  constructor(
    private http: HttpClient

  ) { }

  
  public estaAutenticado(): boolean {
    return sessionStorage.getItem('nombreUsuario') != null;
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string) {
    this.token = token;
  }

  public getAllUsuarios(): Observable<any>{
    return this.http.get(this.api_usuarios);
  }
  
  public getUsuariosId(id:number): Observable<any>{
    return this.http.get(this.api_usuarios+"/"+id);
  }


  public patchUsuariosId(id:number, data:any): Observable<any>{
    return this.http.patch(this.api_usuarios+"/"+id, data);
  }

  public postUsuario(data:any): Observable<any>{
    
    return this.http.post(this.api_usuarios, data);
    
  }

  public deleteUsuario(id:number): Observable<any>{
    return this.http.delete(this.api_usuarios+"/"+id);
  }

  verificarLogin(data:any){
    return this.http.post(this.api_usuarios + "/token", data);
  }


}
