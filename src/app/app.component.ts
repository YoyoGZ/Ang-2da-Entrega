import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista-Jorge-Gomez';
  alumnos: string [] = ['Ignacio','Agustin', 'Alejandra', 'Barbara', 'Exequiel'];
  mrcontrol = 5;
  constructor() {
    setInterval(() => {
      this.mrcontrol++;
    }, 1000)
  }
// --- NgStyle ----

MyStile = '3rem' 

// ---- NgIf ----

EsNgIf = true;

// ---- Pipes -----

IsTheday = new Date();

}


