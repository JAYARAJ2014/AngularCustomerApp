import { Component } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  templateUrl: './customer.view.html',
  styleUrls: ['./customer.view.css']
})
export class CustomerComponent {
  title = 'Customer App';

  CustomerModel : Customer = new Customer();
  CustomerModels :Array<Customer> = new Array<Customer>();

  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
}
