import { Injectable } from "@angular/core";
import { Cart } from './cart.model';

@Injectable()
export class Order {
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
    public shiped: boolean = false;

    constructor(public cart:Cart) { }

    clear() {
        this.id=null;
        this.name=null;
        this.address=null;
        this.city=null;
        this.state=null;
        this.zip=null;
        this.country=null;
        this.shiped=false;
        this.cart.clear();
    }

}