import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  valorHeredado: number = 0;

  @Input() resultado: number = 0;
  constructor() { }

  ngOnInit(): void {
  
  }



}
