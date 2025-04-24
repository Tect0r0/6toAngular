import { Component } from '@angular/core';
import { BotonComponent } from '../../boton/boton.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ BotonComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'angularTest';
  edad = 20;
  suma() {
    this.edad++;
  }
  resta() {
    this.edad--;
  }
}
