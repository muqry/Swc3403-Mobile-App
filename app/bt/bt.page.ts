import { Component } from '@angular/core';
import { Timer } from 'easytimer.js';

@Component({
  selector: 'app-bt',
  templateUrl: './bt.page.html',
  styleUrls: ['./bt.page.scss'],
})
export class BtPage{

  firstNumber: any;
  secondNumber: 0.2 | undefined;
  result: any;
  timer: Timer;
  countdownTime: number = 30; // in seconds

  constructor() { 
    this.timer = new Timer();
  }


  startTimer() {
    this.timer.start({ countdown: true, startValues: { seconds: this.countdownTime } });
    this.timer.addEventListener('secondsUpdated', () => {
      this.countdownTime = this.timer.getTimeValues().seconds;
    });
  }

  stopTimer() {
    this.timer.stop();
  }

  // ... rest of component code


  

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
