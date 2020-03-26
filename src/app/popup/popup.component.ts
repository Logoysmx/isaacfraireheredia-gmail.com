import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() foo: string;
  @Output() salida = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.foo);
  }

  enviarData(data) {
    console.log('Salida de myPopup');
    this.salida.emit(data);
  }

}
