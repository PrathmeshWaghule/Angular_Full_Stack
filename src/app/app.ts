import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prathmesh } from './prathmesh/prathmesh';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Prathmesh],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Interpolation');
}
