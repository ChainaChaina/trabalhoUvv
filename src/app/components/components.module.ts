import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './card/card.module';
import { CardComponent } from './card/card/card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule
  ], exports:[
    CardComponent
  ]
})
export class ComponentsModule { }
