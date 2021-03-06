import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  items=[{
    name: 'Cliente 1',
    phone: 27991736435,
    CPF: 17253676544,
    address: {
      state: 'ES',
      city: 'Vila Velha',
      district: 3,
      street: 'Jair de Andrade',
      CEP: 29374674
    }
  },
  {
    name: 'Cliente 1',
    phone: 27991736435,
    CPF: 17253676544,
    address: {
      state: 'ES',
      city: 'Vila Velha',
      district: 3,
      street: 'Jair de Andrade',
      CEP: 29374674
    }
  }]

  ngOnInit(): void {
  }

  goTo(){
    this.router.navigateByUrl('/form');
  }

}
