import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private api_categoria="http://127.0.0.1:5000/api/categoria";

  constructor(private http: HttpClient ) { }
  
  public getAllCategorias(): Observable<any>{
    return this.http.get(this.api_categoria);
  }
  
  public getCategoriaId(id:number): Observable<any>{
    return this.http.get(this.api_categoria+"/"+id);
  }

  public postCategoria(data:any): Observable<any>{
    return this.http.post(this.api_categoria, data);
    
  }
  public deleteCategoria(id:number): Observable<any>{
    return this.http.delete(this.api_categoria+"/"+id);
  }
}
