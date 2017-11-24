import { ShoppingCartService } from './../shopping-card.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {


  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart:ShoppingCart;
  @Input('show-actions') showActions = true;

  constructor(private cartService:ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }



}
