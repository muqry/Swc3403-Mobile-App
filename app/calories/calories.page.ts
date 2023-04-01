import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calories',
  templateUrl: './calories.page.html',
  styleUrls: ['./calories.page.scss'],
})
export class CaloriesPage {
  result: number | undefined;
  firstNumber!: string;


  add() {
    this.result = parseInt(this.firstNumber) + 3
  }

  sub() {
    this.result = parseInt(this.firstNumber) - 2
  }

  malt() {
    this.result = parseInt(this.firstNumber) * 0.1;
  }

  div() {
    this.result = parseInt(this.firstNumber) / 1
  }

}



  
