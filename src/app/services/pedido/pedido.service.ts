import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  @Output() datosUsuario : EventEmitter<any>=new EventEmitter();
  @Output() datosDireccion : EventEmitter<any>=new EventEmitter();
  @Output() disparadorModalPedido: EventEmitter<any>  = new EventEmitter();
  private api_pedido="http://127.0.0.1:5000/api/pedido";

  constructor(private http: HttpClient) { }

   
  public getAllPedidosPorUsuario(idUsuario:any): Observable<any>{
    return this.http.get(this.api_pedido+"/"+"misPedidos"+"/"+idUsuario);
  }
  public getAllPedidos(): Observable<any>{
    return this.http.get(this.api_pedido);
  }
  
  public getPedidoId(id:number): Observable<any>{
    
    return this.http.get(this.api_pedido+"/"+id);
  }

  public patchPedidoId(idPedido:number, data:any): Observable<any>{
    return this.http.patch(this.api_pedido+"/"+idPedido, data);
  }

  public postPedido(data:any): Observable<any>{
    
    return this.http.post(this.api_pedido, data);
    
  }

}
