import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-foto-grande',
  templateUrl: './modal-foto-grande.component.html',
  styleUrls: ['./modal-foto-grande.component.css']
})
export class ModalFotoGrandeComponent implements OnInit {
  
  @Input() direccionFoto:any;
  constructor() { }

  ngOnInit(): void {
  }

}
