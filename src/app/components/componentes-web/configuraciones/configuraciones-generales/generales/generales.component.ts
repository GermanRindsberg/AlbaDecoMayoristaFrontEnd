import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generales',
  templateUrl: './generales.component.html',
  styleUrls: ['./generales.component.css']
})
export class GeneralesComponent implements OnInit {

  montoMinimo:any=0
  cantidadMinima:any=0
  constructor() { }

  ngOnInit() {
  }

}
