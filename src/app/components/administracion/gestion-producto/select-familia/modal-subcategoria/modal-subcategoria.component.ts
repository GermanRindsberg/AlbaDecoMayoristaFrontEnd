import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SubcategoriaService } from 'src/app/services/categoria/subcategoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-subcategoria',
  templateUrl: './modal-subcategoria.component.html',
  styleUrls: ['./modal-subcategoria.component.css']
})
export class ModalSubcategoriaComponent implements OnInit {

  @Input() idCategoria:any;
  @Output() eventoCargaSubCategoria = new EventEmitter<any>();
  nombreSubCategoria:any="";
  data:any
  constructor(private servicio: SubcategoriaService) { }

  ngOnInit(): void {

  }


  
  guardarSubCategoria(){
    this.data={
      nombreSubCategoria:this.nombreSubCategoria,
      idCategoria:this.idCategoria
    }
    this.servicio.postSubcategoria(this.data).subscribe(
      (response: any) => {
          if(response.id!=null){
            Swal.fire({
              title: 'SubCategoria agregada con exito!!',
              icon: 'success',
              confirmButtonText: "Aceptar",
              }).then(resulado=>{
                if (resulado)  this.eventoCargaSubCategoria.emit();
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
