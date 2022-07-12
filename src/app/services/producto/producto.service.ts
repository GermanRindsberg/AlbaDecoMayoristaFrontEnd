import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  @Output() disparadorCategoria : EventEmitter<any>=new EventEmitter();
  @Output() disparadorSubCategoria : EventEmitter<any>=new EventEmitter();
  @Output() disparadorFiltros : EventEmitter<any>=new EventEmitter();

  private api_producto="http://127.0.0.1:5000/api/producto";
  private token = this.cookieService.get('albaCookie');
  private headers: any = {
    "Authorization": 'Bearer ' + this.token
  }
  private httpOptions = {
    headers: new HttpHeaders(this.headers)
  }

  constructor(private http: HttpClient,private cookieService:CookieService ) { }
  

  public getAllProductos(): Observable<any>{
    return this.http.get(this.api_producto);
  }
  
  public getProductoId(idProducto:number): Observable<any>{
    
    return this.http.get(this.api_producto+"/"+idProducto);
  }

  public patchProductoId(id:number, data:any): Observable<any>{
    return this.http.patch(this.api_producto+"/"+id, data, this.httpOptions);
  }

  public postProducto(data:any): Observable<any>{
    
    return this.http.post(this.api_producto, data, this.httpOptions);
    
  }
  
  public deleteProducto(productoId:number): Observable<any>{
    return this.http.delete(this.api_producto+"/"+productoId, this.httpOptions);
  }
}
