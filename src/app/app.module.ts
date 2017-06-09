import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Broadcaster, Ng2Cable} from 'ng2-cable/js/index';

import {AppComponent} from './app.component';
import {ProductService} from './_providers/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Ng2Cable, Broadcaster, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
