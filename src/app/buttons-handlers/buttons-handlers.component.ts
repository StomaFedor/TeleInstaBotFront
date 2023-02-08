import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-handlers',
  templateUrl: './buttons-handlers.component.html',
  styleUrls: ['./buttons-handlers.component.css']
})
export class ButtonsHandlersComponent implements OnInit {

  constructor() { 
    this.startTimer();
  }

  @Output() nextSubscription = new EventEmitter

  public timer: number = 0;
  public interval: any;
  public clickTimer: number = 0;
  public admin: boolean = false;

  public clickEvent(direction: string) {
    this.nextSubscription.emit(direction);
    if (direction = 'right') {
      if (this.timer < 2.1) {
        this.clickTimer++;
      } else if (this.timer > 2.1) {
        this.stopTimer();
        this.timer = 0;
        this.clickTimer = 1;
        this.startTimer();
      }
      if (this.clickTimer == 4) {
        this.admin = true;
      }
    }
  }

  public startTimer(): void {
    this.interval = setInterval(() => { this.timer++; }, 1000)
  }

  public stopTimer(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
  }

}
