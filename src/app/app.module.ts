import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapContentModalComponent } from './bootstrap-content-modal/bootstrap-content-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    BootstrapContentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  entryComponents: [BootstrapContentModalComponent],
  exports: [BootstrapContentModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
