import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyComponente } from './components/my-componente/my-componente.components';


@NgModule({
  declarations: [
    MyComponente
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
