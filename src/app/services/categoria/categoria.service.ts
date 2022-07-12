import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http: HttpClient, private cookieService: CookieService ) { }

  private api_categoria="http://127.0.0.1:5000/api/categoria";

  private token = this.cookieService.get('albaCookie');
  private headers: any = {
    "Authorization": 'Bearer ' + this.token
  }
  private httpOptions = {
    headers: new HttpHeaders(this.headers)
  }

  public getAllCategorias(): Observable<any>{
    return this.http.get(this.api_categoria);
  }
  
  public getCategoriaId(id:number): Observable<any>{
    return this.http.get(this.api_categoria+"/"+id);
  }

  public postCategoria(data:any): Observable<any>{
    return this.http.post(this.api_categoria, data, this.httpOptions);
    
  }
  public deleteCategoria(id:number): Observable<any>{
    return this.http.delete(this.api_categoria+"/"+id, this.httpOptions);
  }
}
