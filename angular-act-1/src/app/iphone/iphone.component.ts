import { Component } from '@angular/core';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css'],
  standalone: true
})
export class IphoneComponent {
  message = '';

  onBuy() {
    this.message = 'iPhone purchased!';
  }
}
