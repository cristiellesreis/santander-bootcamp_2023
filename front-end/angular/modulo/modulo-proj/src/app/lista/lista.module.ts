import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { LisViewComponent } from './lis-view/lis-view.component';



@NgModule({
  declarations: [
    InputComponent,
    LisViewComponent
  ],
  exports:[
    InputComponent,
    LisViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListaModule { }
