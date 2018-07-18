import {Component, OnInit, ViewChild} from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;

  public message: string;
  public items1: Array<number> = [1, 2, 3, 4, 5];

  public images: Array<string> = ['sports', 'abstract', 'people', 'transport', 'city', 'technics', 'nightlife', 'animals'];


  constructor() {}

  ngOnInit() {
    this.message = 'Hello Home';
  }

  init1(e) {
    console.log('Init1', e);
  }

  lazyload1(e) {
    console.log('Lazy Init Start',  e);
  }

  lazyload2(e) {
    console.log('Lazy Init Done: ',  e);
  }

}
