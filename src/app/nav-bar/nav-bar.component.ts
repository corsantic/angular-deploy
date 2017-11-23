import { async } from '@angular/core/testing';
import { ShoppingCartService } from './../shopping-card.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  shoppingCartItemCount:number;

  constructor(
    private auth: AuthService,
    private shoppingCardService: ShoppingCartService) {
  }



  logout() {
    this.auth.logout();
  }

  async ngOnInit() {

    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    let cart$ = await this.shoppingCardService.getCart();

    cart$.subscribe(cart=>{
      this.shoppingCartItemCount=0;
      for(let productId in cart.items)
       this.shoppingCartItemCount+=cart.items[productId].quantity;
      
    
    });

  }


}
