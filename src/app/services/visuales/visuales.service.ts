import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class VisualesService {

  private api_visuales = "http://127.0.0.1:5000/api/visuales";
  private token = this.cookieService.get('albaCookie');
  private headers: any = {
    "Authorization": 'Bearer ' + this.token
  }
  private httpOptions = {
    headers: new HttpHeaders(this.headers)
  }

  constructor(
    private http: HttpClient,
    private cookieService: CookieService) { }


  public getAllPortadas(): Observable<any> {
    return this.http.get(this.api_visuales);
  }

  public postPortada(data: any) {
    
    return this.http.post(this.api_visuales, data, this.httpOptions)
      .subscribe((response: any) => {
        if (response == 201) {
          Swal.fire({
            title: 'Portada agregada con exito!!',
            icon: 'success',
            confirmButtonText: "Aceptar",
          }).then(resulado => {
            if (resulado) window.location.reload();
          })
        }
        Swal.fire({
          title: 'Error',
          text: response.errors.msg,
          icon: 'error'
        })
      })
  }



  public deletePortada(idPortada: any): Observable<any> {
    return this.http.delete(this.api_visuales + "/" + idPortada, this.httpOptions);
  }




}
