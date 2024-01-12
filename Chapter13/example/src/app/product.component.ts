import { ApplicationRef, Component, Injectable } from '@angular/core';
import { triggerAsyncId } from 'async_hooks';
import { Product } from './models/product.model';
import { ProductRepository } from './models/repository.model';

@Component({
	selector: 'app',
	templateUrl: 'product.component.html'
})
export class ProductComponent {
	constructor(public model: ProductRepository, ref: ApplicationRef) {
		(<any>window).appRef = ref;
		(<any>window).model = this.model;
	}

	getProductByPosition = (position: number): Product => this.model.getProducts()[position];

	getClassesByPosition(position: number): string {
		let product = this.getProductByPosition(position);
		return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
	}

	getClasses(key: number): string {
		let product = this.model.getProduct(key);
		return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
	}

	getClassMap(key: number): Object {
		let product = this.model.getProduct(key);
		return {
			'text-center bg-danger': product.name == 'Kayak',
			'bg-info': product.price < 50
		};
	}

	getStyles(key: number) {
		let product = this.model.getProduct(key);
		return {
			fontSize: '30px',
			'mrgin.px': 100,
			color: product.price > 50 ? 'red' : 'green'
		};
	}

	getProduct(key: number): Product {
		return this.model.getProduct(key);
	}

	getProducts(): Product[] {
		return this.model.getProducts();
	}

	getProductCount(): number {
		return this.model.getProducts().length;
	}

	getKey(index: number, product: Product) {
		return product.id;
	}

	targetName: string = 'Kayak';

	counter: number = 1;

	get nextProduct(): Product {
		return this.model.getProducts().shift();
		}
}
