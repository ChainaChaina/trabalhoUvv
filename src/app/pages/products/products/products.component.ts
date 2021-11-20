import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }

  products = [
    {
      name: 'product1',
      price: 33.23
    },
    {
      name: 'product2',
      price: 36.00
    }
    ,
    {
      name: 'product3',
      price: 23.23
    }
  ]

  ngOnInit(): void {
  }

  goTo(){
    this.router.navigateByUrl('');
  }


  buy(){
    this.router.navigateByUrl('');
  }


}
