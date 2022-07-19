import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-modal-variante',
  templateUrl: './modal-variante.component.html',
  styleUrls: ['./modal-variante.component.css']
})
export class ModalVarianteComponent implements OnInit {
  
  listaVariantes:string[]=[]
  @Output() varianteEmit = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  
  agregarVariante($event: ColorEvent) {
    this.listaVariantes.push($event.color.hex)
    this.varianteEmit.emit(this.listaVariantes)
  }


  eliminarVariante(color: any) {
    var indice = this.listaVariantes.indexOf(color); // obtenemos el indice
    this.listaVariantes.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
    this.varianteEmit.emit(this.listaVariantes)

  }


}
