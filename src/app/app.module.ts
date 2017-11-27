import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminModule } from 'app/admin/admin.module';
import { ShoppingModule } from 'app/shopping/shopping.module';
import { CustomFormsModule } from 'ng2-validation';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/components/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    AdminModule,
    ShoppingModule,
    ReactiveFormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
    ])

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }

