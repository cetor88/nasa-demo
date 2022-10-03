import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  valorHeredadoFooter: number=0;

  
  @Input() resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


}
