import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule

  ], exports:[
    ProductComponent
  ]
})
export class ProductModule { }
