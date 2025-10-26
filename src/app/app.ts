import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrathmeshComponent } from './prathmesh-component/prathmesh-component';
import { PythonComponent } from './python-component/python-component';
import { LBComponent } from './lbcomponent/lbcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PrathmeshComponent,PythonComponent,LBComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Inline');
}
