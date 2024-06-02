import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IpadComponent } from './ipad/ipad.component';
import { IphoneComponent } from './iphone/iphone.component';
import { BindingComponent } from './binding/binding.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ipad', component: IpadComponent },
  { path: 'iphone', component: IphoneComponent },
  { path: 'binding', component: BindingComponent }
];
