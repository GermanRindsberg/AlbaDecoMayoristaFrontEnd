import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-datos-producto',
  templateUrl: './datos-producto.component.html',
  styleUrls: ['./datos-producto.component.css']
})
export class DatosProductoComponent implements OnInit {

  @Output() datosProducto = new EventEmitter<any>();
 
  nombreProducto: any = ''
  alto: any = ''
  ancho: any = ''
  largo: any = ''
  capacidad: any = ''
  precio: any = ''
  descripcion: any = ''
  idProducto:any="";
  constructor( private route :ActivatedRoute, private servicioProducto :ProductoService) { }

  ngOnInit(): void {
    
    this.idProducto=this.route.snapshot.paramMap.get('idProducto');
    if(this.idProducto!="" && this.idProducto!=null){
      this.servicioProducto.getProductoId(this.idProducto).subscribe((response: any) => {
        this.alto=response.alto
        this.ancho=response.ancho
        this.largo=response.largo
        this.precio=response.precio
        this.capacidad=response.capacidad
        this.descripcion=response.descripcion
        this.nombreProducto=response.nombre
        var data = {
          "nombreProducto": this.nombreProducto,
          "alto": this.alto,
          "ancho": this.ancho,
          "largo": this.largo,
          "capacidad": this.capacidad,
          "precio": this.precio,
          "descripcion": this.descripcion
        }
        this.datosProducto.emit(data)
      })
    }
      
      
  }
  

  cambioInput() {
    var data = {
      "nombreProducto": this.nombreProducto,
      "alto": this.alto,
      "ancho": this.ancho,
      "largo": this.largo,
      "capacidad": this.capacidad,
      "precio": this.precio,
      "descripcion": this.descripcion
    }
    this.datosProducto.emit(data)


  }

}
