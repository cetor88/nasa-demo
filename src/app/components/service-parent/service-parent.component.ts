import { Component, OnInit } from '@angular/core';
import { ResultadoService } from 'src/app/services/resultado.service';

@Component({
  selector: 'app-service-parent',
  templateUrl: './service-parent.component.html',
  styleUrls: ['./service-parent.component.css']
})
export class ServiceParentComponent implements OnInit {
  resultado: number=0;

  constructor(private appService: ResultadoService) { }

  ngOnInit(): void {
    this.appService.currentApprovalStageMessage.subscribe(resul => this.resultado = resul);
  }


  public suma(val2: number = 2){
     //this.resultado =  this.resultado + val2
     this.appService.sumar(val2);
  }


}
