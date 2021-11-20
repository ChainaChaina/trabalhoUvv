import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './card/card.module';
import { CardComponent } from './card/card/card.component';
import { ProductModule } from './product/product.module';
import { ProductComponent } from './product/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ProductModule,

    FormsModule,
    ReactiveFormsModule

  ], exports:[
    CardComponent,
    ProductComponent
  ]
})
export class ComponentsModule { }
