import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista-Jorge-Gomez';
  alumnos: string [] = ['Ignacio','Agustin', 'Alejandra', 'Barbara', 'Exequiel'];
  mrControl = 6;
  constructor() {
    setInterval(() => {
      this.mrControl++;
    }, 2000)
  }
// --- NgStyle ----

MyStyle = '2rem' 

// ---- NgIf ----

EsNgIf = true;

// ---- Pipes -----

IsTheDate = new Date();

}


