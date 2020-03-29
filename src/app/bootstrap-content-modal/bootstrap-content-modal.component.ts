import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bootstrap-content-modal',
  templateUrl: './bootstrap-content-modal.component.html',
  styleUrls: ['./bootstrap-content-modal.component.scss']
})
export class BootstrapContentModalComponent implements OnInit {

  @Input() closeMyModal: (any) => void;
  @Input() entradaDedato: any;
  @Output() salida: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitirEvento() {
    console.log('Emitido!');
    this.salida.emit('Texto emitido...');
  }

}
