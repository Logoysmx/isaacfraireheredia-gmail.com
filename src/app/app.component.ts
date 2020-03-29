import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapContentModalComponent } from './bootstrap-content-modal/bootstrap-content-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myModal = false;
  texto: string;

  constructor(private ngbModalRef: NgbModal) {}

  mostrarModal() {
    this.myModal = true;
  }

  cerrarModal(e) {
    this.myModal = e;
  }

  // Bootstrap Modal
  mostrarBootstrapModal() {
    const opts = {
      windowClass: 'myCustomClass'
    };

    const modalRefNgBots = this.ngbModalRef.open(BootstrapContentModalComponent, opts);
    
    modalRefNgBots.componentInstance.entradaDedato = 'Dato de entrada...';

    modalRefNgBots.componentInstance.closeMyModal = () => {
      modalRefNgBots.close();
    }

    modalRefNgBots.componentInstance.salida.subscribe(res => {
      this.texto = res;
      console.log('Recibo: ', res);
    });

  }

}
