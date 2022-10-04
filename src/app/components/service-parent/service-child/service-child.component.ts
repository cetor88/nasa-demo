import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ResultadoService } from 'src/app/services/resultado.service';

@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
  styleUrls: ['./service-child.component.css']
})
export class ServiceChildComponent implements OnInit {
  resultado =0;
  constructor(private appService: ResultadoService) { }

  ngOnInit(): void {
    //.pipe(take(1))
    this.appService.currentApprovalStageMessage.pipe(take(3)).subscribe(resul => this.resultado = resul);
  }

  resta(valor:number):void{
    this.appService.restar(valor);
    this.appService.currentApprovalStageMessage.pipe(take(3)).subscribe(resul => this.resultado = resul);
  }

}
