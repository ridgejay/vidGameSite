import { Injectable } from '@angular/core';
import { goods} from './goods';




@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  goods = goods;
  
  

  addToCart(goods) {
    this.items.push(goods);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
