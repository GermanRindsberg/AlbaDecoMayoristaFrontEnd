import { Component, OnInit } from '@angular/core';
import { SortableOptions } from 'sortablejs';
import { VisualesService } from 'src/app/services/visuales/visuales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuraciones-visuales',
  templateUrl: './configuraciones-visuales.component.html',
  styleUrls: ['./configuraciones-visuales.component.css']
})
export class ConfiguracionesVisualesComponent implements OnInit {
  archivoFotos: Array<any> = [];
  habilitarBoton:boolean=false;
  formularioParaEnviar = new FormData()
  
  opcionesSortable: SortableOptions =
    {
      animation: 300,
      ghostClass: 'ghost',
      onUpdate: (event: any) => {
      },
    }

    constructor(private servicioVisuales: VisualesService) { }

    ngOnInit() {
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
    this.habilitarBoton=true
    console.log(this.archivoFotos)
    
  }

  onRemove($event: any) {
    this.archivoFotos.splice(this.archivoFotos.indexOf($event), 1);
    if (this.archivoFotos.length==0){
      this.habilitarBoton=false
    }
  }

  convertirBase64toBlob(dataURI: any) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab)
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg'});
  }

  guardarFotos(){
    for (let i = 0; i < this.archivoFotos.length; i++) {
      var blobFoto = this.convertirBase64toBlob(this.archivoFotos[i].direccionImage)
      this.formularioParaEnviar.append('imagen'+i,blobFoto)
    }
    this.servicioVisuales.postPortada(this.formularioParaEnviar)
  }       
    
  
}
