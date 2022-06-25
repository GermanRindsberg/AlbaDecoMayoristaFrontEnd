import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listaProductos:any
  fotos:[]=[]

  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getAllProductos().subscribe((response: any) => {
      this.listaProductos=response
      
    })
  }
  
}
