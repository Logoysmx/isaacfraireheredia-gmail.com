import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cualquier otra cosa';
  obj = [{name: 'Isaac'}];
  myString: string;

  recibirData(e) {
    this.myString = e;
    console.log('Data que llega de event: ', e);
  }
}
