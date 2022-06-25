import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  private api_Subcategoria="http://127.0.0.1:5000/api/subCategoria";

  constructor(private http: HttpClient ) { }
  
  public getAllSubcategorias(): Observable<any>{
    return this.http.get(this.api_Subcategoria);
  }
  
  public getSubcategoriaIdCategoria(idCategoria:number): Observable<any>{
    
    return this.http.get(this.api_Subcategoria+"/"+idCategoria);
  }

  public patchSubcategoriaId(id:number, data:any): Observable<any>{
    return this.http.patch(this.api_Subcategoria+"/"+id, data);
  }

  public postSubcategoria(data:any): Observable<any>{
    
    return this.http.post(this.api_Subcategoria, data);
    
  }
  
  public deleteSubcategoria(subCategoriaId:number): Observable<any>{
    return this.http.delete(this.api_Subcategoria+"/"+subCategoriaId);
  }
}
