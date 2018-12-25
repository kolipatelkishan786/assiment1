import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSecret = false;
  log =[];
  onToggleDatails() {
      this.showSecret = !this.showSecret;
     /* this.log.push(this.log.length + 1);*/
    this.log.push(new Date());
  }
}
