import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isDestroyed: boolean = true

  countDown: number;
  intervalId: any;
  constructor(){
      this.countDown = 10;
      this.intervalId = setInterval(() =>{
          this.countDown--;
          if(this.countDown === 0) {
              clearInterval(this.intervalId)
              this.isDestroyed = false
          }
      },1000)
  }
}
