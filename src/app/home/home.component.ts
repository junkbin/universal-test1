import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public message: string;
  public items1: Array<number> = [1, 2, 3, 4, 5];

  public images: Array<string> = ['sports', 'abstract', 'people', 'transport', 'city', 'technics', 'nightlife', 'animals'];


  constructor() {}

  ngOnInit() {
    this.message = 'Hello Home';
  }
}
