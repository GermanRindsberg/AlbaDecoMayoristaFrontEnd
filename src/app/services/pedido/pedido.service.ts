import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  @Output() datosUsuario : EventEmitter<any>=new EventEmitter();
  @Output() datosDireccion : EventEmitter<any>=new EventEmitter();
  @Output() disparadorModalPedido: EventEmitter<any>  = new EventEmitter();
  private api_pedido="http://127.0.0.1:5000/api/pedido";

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  private token = this.cookieService.get('albaCookie');
  private headers: any = {
    "Authorization": 'Bearer ' + this.token
  }
  private httpOptions = {
    headers: new HttpHeaders(this.headers)
  }

   
  public getAllPedidosPorUsuario(): Observable<any>{
    return this.http.get(this.api_pedido+"/"+"misPedidos", this.httpOptions);
  }
  public getAllPedidos(): Observable<any>{
    return this.http.get(this.api_pedido, this.httpOptions);
  }
  
  public getPedidoId(id:number): Observable<any>{
    
    return this.http.get(this.api_pedido+"/"+id, this.httpOptions);
  }

  public patchPedidoId(idPedido:number, data:any): Observable<any>{
    return this.http.patch(this.api_pedido+"/"+idPedido, data, this.httpOptions);
  }

  public postPedido(data:any): Observable<any>{
    
    return this.http.post(this.api_pedido, data, this.httpOptions);
    
  }

}
