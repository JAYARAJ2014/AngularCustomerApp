import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms';
import {  RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { MasterComponent } from './home/customer.master.component';
import { SupplierComponent } from './supplier/app.supplier.component';
import { HomeComponent } from './home/customer.home.component';
import {MainRoutes} from './routing/main.routing';
@NgModule({
  declarations: [
    CustomerComponent
    , MasterComponent
    , HomeComponent
    , SupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
    
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class CustomerModule { }
