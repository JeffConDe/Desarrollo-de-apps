import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDO {

  tarea: string = '';
  lista: string[] = [];

  agregar() {
    if (this.tarea.trim() !== '') {
      this.lista.push(this.tarea);
      this.tarea = '';
    }
  }


}




