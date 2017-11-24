import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-card.service';

@Injectable()
export class OrderService {

  constructor(
    private shoppingCartService: ShoppingCartService,
    private db: AngularFireDatabase) { }

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }



}
