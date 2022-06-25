import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-familia',
  templateUrl: './modal-familia.component.html',
  styleUrls: ['./modal-familia.component.css']
})
export class ModalFamiliaComponent implements OnInit {

  @Output() eventoCargaCategoria = new EventEmitter<any>();
  nombreCategoria:any="";
  data:any
  constructor(private servicioCategoria:CategoriaService,   private router: Router) { }

  ngOnInit(): void {
  }


  guardarCategoria(){
    this.data={
      nombreCategoria:this.nombreCategoria
    }
    this.servicioCategoria.postCategoria(this.data).subscribe(
      (response: any) => {
          if(response.id!=null){
            Swal.fire({
              title: 'Categoria agregada con exito!!',
              icon: 'success',
              confirmButtonText: "Aceptar",
              }).then(resulado=>{
                if (resulado)
                {
                  this.eventoCargaCategoria.emit()
                } ;
              })
          }
          else{
            Swal.fire({
              title: 'Error',
              text: response.errors.msg,
              icon: 'error'
              })
            }
        }
    )}

    
}
