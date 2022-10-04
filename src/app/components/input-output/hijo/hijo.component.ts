import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  valorHeredadoFooter: number=0;

  
  @Input() resultadoHeredado: number = 0;
  @Output() emitir: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  restar(): void{
    this.resultadoHeredado= this.resultadoHeredado -1;
    this.emitir.emit(this.resultadoHeredado);
  }

}
