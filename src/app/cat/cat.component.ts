import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  test: object = {Food: "Yummy", Fur: true};
  catName: string = "Sir Mittens";
  //catPhoto: string = "https://m.media-amazon.com/images/I/81uf5kTqcLL._AC_SL1400_.jpg";
  catUpdated: Date = new Date();
  currentPhoto: number = 0;

  @Input() compontentPhotos: Array<string> = [];


  toggleImage(){
    this.currentPhoto = (this.currentPhoto == this.compontentPhotos.length - 1) ? 0 : this.currentPhoto + 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
