import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  
  resultado: number=0;
  constructor() { }

  ngOnInit(): void {
  }


  public suma(val2: number = 2){
     this.resultado =  this.resultado + val2
  }

  recibirFooter(resultado: number):void {
    this.resultado= resultado;
  }
  

}
