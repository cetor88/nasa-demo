import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nasa-app';
  valorA=2;
  resultado: number=0;
  @Output() actualiza: EventEmitter<number> = new EventEmitter();


  public suma(val2: number = 2){
     this.resultado =  this.resultado + val2

     //return this.resultado;
     //this.actualiza.emit(this.resultado);

  }
}
