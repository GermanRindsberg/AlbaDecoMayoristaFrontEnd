import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  private api_Subcategoria="http://127.0.0.1:5000/api/subCategoria";

  private token = this.cookieService.get('albaCookie');
  private headers: any = {
    "Authorization": 'Bearer ' + this.token
  }
  private httpOptions = {
    headers: new HttpHeaders(this.headers)
  }


  constructor(private http: HttpClient,private cookieService: CookieService ) { }
  
  public getAllSubcategorias(): Observable<any>{
    return this.http.get(this.api_Subcategoria);
  }
  
  public getSubcategoriaIdCategoria(idCategoria:number): Observable<any>{
    
    return this.http.get(this.api_Subcategoria+"/"+idCategoria);
  }

  public patchSubcategoriaId(id:number, data:any): Observable<any>{
    return this.http.patch(this.api_Subcategoria+"/"+id, data, this.httpOptions);
  }

  public postSubcategoria(data:any): Observable<any>{
    
    return this.http.post(this.api_Subcategoria, data, this.httpOptions);
    
  }
  
  public deleteSubcategoria(subCategoriaId:number): Observable<any>{
    return this.http.delete(this.api_Subcategoria+"/"+subCategoriaId, this.httpOptions);
  }
}
