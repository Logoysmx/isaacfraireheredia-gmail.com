import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mostrar = false;

  mostrarPopUp() {
    this.mostrar = true;
  }

  callBackCerrar(e) {
    this.mostrar = e;
  }

}
