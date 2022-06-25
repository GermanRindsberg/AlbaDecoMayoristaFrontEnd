import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SortableOptions } from 'sortablejs';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-fotos-producto',
  templateUrl: './fotos-producto.component.html',
  styleUrls: ['./fotos-producto.component.css']
})
export class FotosProductoComponent implements OnInit {

  @Output() fotosEmit = new EventEmitter<any>();
  @Output() fotosExistentes = new EventEmitter<any>();
  archivoFotos: Array<any> = [];
  idProducto: any;
  fotoExistente:any[]
  


  opcionesSortable: SortableOptions =
    {
      animation: 300,
      ghostClass: 'ghost',
      onUpdate: (event: any) => {
        this.posicionesDefotos()
        this.fotosExistentes.emit(this.fotoExistente)
        this.fotosEmit.emit(this.archivoFotos)
      },
    }

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private servicioProducto: ProductoService) {
  }
  ngOnInit(): void {
    this.idProducto = this.route.snapshot.paramMap.get('idProducto');
    if (this.idProducto != "" && this.idProducto != null) {
      this.servicioProducto.getProductoId(this.idProducto).subscribe((response: any) => {
        var fotos = []
        fotos = response.fotos

        fotos.sort(function (a: any, b: any) {
          return (a.posicion - b.posicion)
        })

        for (var i = 0; i < fotos.length; i++) {
          this.archivoFotos.push({
            'idImagen': fotos[i].id,
            'posicion': fotos[i].posicion,
            'direccionImage': "http://127.0.0.1:5000/static/files/" + fotos[i].direccionImage
          },
          );
        }
      })
    }
    this.posicionesDefotos()
    this.fotosEmit.emit(this.archivoFotos)

  }

  onSelect(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.archivoFotos.push({
        'direccionImage': reader.result as string,
        'posicion': this.archivoFotos.length
      });
    }
    reader.readAsDataURL(event.target.files[0])
    this.fotosEmit.emit(this.archivoFotos)
  }

  onRemove($event: any) {
    this.archivoFotos.splice(this.archivoFotos.indexOf($event), 1);
    this.fotosEmit.emit(this.archivoFotos)
  }

  posicionesDefotos() {
    for (var i = 0; i < this.archivoFotos.length; i++) {
      this.archivoFotos[i].posicion=i      
      
    }
    console.log(this.archivoFotos)
  }


}
