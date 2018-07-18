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
  public imagesList: Array<string> = [];

  public imageList1: Array<any> = [];

  constructor() {}

  ngOnInit() {
    this.message = 'Hello Home';

    this.images.forEach((item) => {
      this.imagesList.push(`http://lorempixel.com/400/200/${item}`);
    });

    this.imageList1.push({
      'display' : false,
      'imgsrc': 'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-wildlife.jpg'
    });

    this.imageList1.push({
      'display' : false,
      'imgsrc': 'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-specially-abled.jpg'
    });

    this.imageList1.push({
      'display' : false,
      'imgsrc': 'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-festival.jpg'
    });

    this.imageList1.push({
      'display' : false,
      'imgsrc': 'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-womens.jpg'
    });

    this.imageList1.push({
      'display' : false,
      'imgsrc': 'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-seniors.jpg'
    });

    this.imageList1.push({
      'display' : false,
      'imgsrc': 'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-honeymoon.jpg'
    });

    console.log(this.imagesList);
  }

  init1(e) {
    console.log('Init1', e);
  }


  doSomething(event, imgRef) {

    const rtime = Math.floor((Math.random() * 2000) + 1500);

    setTimeout(() => {
      imgRef.display = 'block';
    }, rtime);
  }

}
