import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { IpadComponent } from './ipad/ipad.component';
import { IphoneComponent } from './iphone/iphone.component';
import { BindingComponent } from './binding/binding.component';
import { HeaderComponent } from './header/header.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HomeComponent,
    IpadComponent,
    IphoneComponent,
    BindingComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
