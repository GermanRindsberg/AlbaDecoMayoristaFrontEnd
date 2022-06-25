import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

  buscador:any;
  listaProductos:any;
  constructor(private servicioProducto: ProductoService,
    private router:Router
    
    ) { }

  ngOnInit(): void {
    this.servicioProducto.getAllProductos().subscribe(
      (response: any) => {
        this.listaProductos=response
      })
  }
  editarProducto(idProducto:any){
    this.router.navigate(['productoNuevo/'+idProducto]);
  }

  borrarProducto(idProducto:any){
    Swal.fire({
      title: '¿Seguro que quiere eliminar el producto?',
      icon: "warning",
      confirmButtonText: "Aceptar",
    }).then(resulado => {
     if (resulado)this.eliminarProducto(idProducto); 
     
    })
  }

  eliminarProducto(idProducto:any){
    this.servicioProducto.deleteProducto(idProducto).subscribe(
      (response: any) => {
        if (response != null) {
          Swal.fire({
            title: 'Producto eliminado con exito!!',
            icon: 'success',
            confirmButtonText: "Aceptar",
          }).then(resulado => {
           if (resulado) this.ngOnInit(); 
          })
        }
      }
    )

  }

}
