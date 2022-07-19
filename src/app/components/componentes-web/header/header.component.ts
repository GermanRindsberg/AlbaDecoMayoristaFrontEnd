import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { VisualesService } from 'src/app/services/visuales/visuales.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listaPortadas:any
  portadaActiva:any
  
  constructor(private portadaService: VisualesService) { }

  ngOnInit(): void {
    this.portadaService.getAllPortadas().subscribe((response: any) => {
      if(response!=""){
        this.portadaActiva=response.shift().direccionPortada
        this.listaPortadas=response
      }
    })
  }
  
}
