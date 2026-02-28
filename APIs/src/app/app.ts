import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data, RouterOutlet } from '@angular/router';   
import { DataService } from './Servicios/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App implements OnInit {
  protected readonly title = signal('APIs');

  pokemonList = signal<any[]>([]);

  constructor(private DataService: DataService) {}

   ngOnInit(): void {
    this.DataService.getPokemons().subscribe((data: any[]) => {
      this.pokemonList.set(data);
    });
   }
}
