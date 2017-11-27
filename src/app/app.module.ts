import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AdminModule } from 'app/admin/admin.module';
import { ShoppingModule } from 'app/shopping/shopping.module';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/components/products/products.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,

    AdminModule,
    ShoppingModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebase),
  
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
    ])

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

