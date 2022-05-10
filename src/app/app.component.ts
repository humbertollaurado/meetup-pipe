import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meetup-pipe';


  ngOninit() {

    try {
      [].forEach(item => console.log(item));
    } catch (error) {
      throw new Error("this.is an error");
    }

    
  }
}
