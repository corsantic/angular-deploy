import { ShoppingCart } from './../models/shopping-cart';
import { async } from '@angular/core/testing';
import { ShoppingCartService } from './../shopping-card.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
    private auth: AuthService,
    private shoppingCardService: ShoppingCartService) {
  }



  logout() {
    this.auth.logout();
  }

  async ngOnInit() {

    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    this.cart$ = await this.shoppingCardService.getCart();



  }


}
