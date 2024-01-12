import { ApplicationRef, Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductRepository } from './models/repository.model';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls:["product.component.css"]
})
export class ProductComponent {
    constructor(public model: ProductRepository) { }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        return this.getProducts().length;
    }

    newProduct: Product = new Product();

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
    
    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(p);
    }
}
