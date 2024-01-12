import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { ProductRepository } from './models/repository.model';
import { SimpleDataSource } from './models/datasource.model';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductComponent, ProductRepository, SimpleDataSource],
  bootstrap: [ProductComponent]
})
export class AppModule { }
