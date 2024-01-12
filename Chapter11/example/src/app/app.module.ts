import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { ProductRepository } from './models/repository.model';
import { SimpleDataSource } from './models/datasource.model';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductComponent, ProductRepository, SimpleDataSource],
  bootstrap: [ProductComponent]
})
export class AppModule { }
