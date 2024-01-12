import { Component } from '@angular/core';
import { ProductRepository } from './models/repository.model';

@Component({
    selector: "app",
    templateUrl: "product.component.html"
    })
    export class ProductComponent {
        constructor(public model: ProductRepository){}
    }