import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-button',
  templateUrl: './pay-button.component.html',
  styleUrls: ['./pay-button.component.css']
})
export class PayButtonComponent implements OnInit {


  color=false;
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(){
    this.color=!this.color;
    console.log(this.color);
  }

}
