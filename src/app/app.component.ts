import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logClick(msg :string){
   console.log(msg)
  }

  //catPhotos: Array<string> = ["https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg", "https://m.media-amazon.com/images/I/81uf5kTqcLL._AC_SL1400_.jpg"]

  title: string = "Nate's Cool App";
}
