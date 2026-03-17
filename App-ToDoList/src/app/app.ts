import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { ToDO } from './to-do/to-do';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDO],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App-ToDoList');
}
