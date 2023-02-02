import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DecimalFormatPipe } from './pipes/decimal-format.pipe';
import {FormsModule} from "@angular/forms";
import { FilterStocksPipe } from './pipes/filter-stocks.pipe';

import { OrderModule } from 'ngx-order-pipe';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
    DecimalFormatPipe,
    FilterStocksPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
