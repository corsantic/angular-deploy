import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'app/core/components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharedModule } from 'shared/shared.module';




@NgModule({
imports: [
SharedModule,
  RouterModule.forChild([])
    
  ],
  declarations: [
    LoginComponent,
    NavBarComponent,
    HomeComponent
  ],
  exports:[
    NavBarComponent
  ]
})
export class CoreModule { }
