import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrathmeshComponent } from './prathmesh-component/prathmesh-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PrathmeshComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EventBinding');
}
