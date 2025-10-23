import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello-component/hello-component';
import { SecondComponent } from './second-component/second-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HelloComponent,SecondComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Demo');
}
