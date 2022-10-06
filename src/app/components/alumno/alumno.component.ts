import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Payload } from 'src/app/interfaces/Alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  alumnoList:Payload[]=[];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.getAllStundents().pipe(take(1)).subscribe((res: Payload[])=>{
      this.alumnoList = res;
    });
  }

}
