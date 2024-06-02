import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class BindingComponent {
  name = ''; // Two-way binding
  isDisabled = false; // Property binding
  count = 0; // Event binding
  message = '¡Bienvenido a la Cesta de la Tienda de Apple!'; // String interpolation

  incrementCount() {
    this.count++;
  }
}
