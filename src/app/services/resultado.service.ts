import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  private resultado: number=0;

  private resultado$ = new BehaviorSubject(0);
  currentApprovalStageMessage = this.resultado$.asObservable();
 
  constructor() { }

  sumar(valor: number): void{
    this.resultado = this.resultado + valor;
    this.resultado$.next(this.resultado);
  }

  restar(valor:number):void{
    this.resultado = this.resultado - valor;
    this.resultado$.next(this.resultado);
  }
}
