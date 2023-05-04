import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductComponent} from "./component";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent, ProductComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
