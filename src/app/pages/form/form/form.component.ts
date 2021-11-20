import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
 
  constructor(private router: Router, private formBuilder: FormBuilder,) { }


  name = new FormControl('');

  ngOnInit(): void {
    
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    phone: ''
  });



  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  goTo(){
    this.router.navigateByUrl('');
    console.log(this.name)
  }

}
