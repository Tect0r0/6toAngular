import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css',
})
export class BotonComponent {
  @Input() texto = 'click';
  @Input() color = 'blue';
  @Output() onClick = new EventEmitter();
  // Metodo, no funcion:
  clicked() {
    this.onClick.emit();
  }
}
