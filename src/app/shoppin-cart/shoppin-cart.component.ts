import { async } from '@angular/core/testing';
import { ShoppingCartService } from './../shopping-card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppin-cart',
  templateUrl: './shoppin-cart.component.html',
  styleUrls: ['./shoppin-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$;

  constructor(private shoppingCartService:ShoppingCartService) { }

  async ngOnInit() {
    this.cart$=await this.shoppingCartService.getCart();
  }

}
