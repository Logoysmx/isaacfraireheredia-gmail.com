import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() isVisible: boolean;
  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  cerrarPopUp() {
    this.close.emit(false);
  }

}
