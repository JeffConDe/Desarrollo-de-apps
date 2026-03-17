import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Api } from './servicios/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ApiRicosa');

  listaDatos = signal<any[]>([]);

  constructor(private Api: Api) {}  

  ngOnInit(): void {
    this.Api.getDatos().subscribe(res => {
      this.listaDatos.set(res);
    });
  }
}
