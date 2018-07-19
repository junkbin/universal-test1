import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {OwlCarousel} from 'ngx-owl-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;

  public loaderDelay: number;
  public imageList1: Array<any> = [];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.loaderDelay = (params['d']) ? params['d'] : 0;
    });
  }

  ngOnInit() {
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

  }

  init1(e) {
    console.log('Init1', e);
  }


  doSomething(event, imgRef) {
    try {
      let rtime = 500;
      if (this.loaderDelay) {
        rtime = (rtime <= 3000) ? rtime : 500;
      }

      setTimeout(() => {
        imgRef.display = 'block';
      }, rtime);
    } catch (err) {
      console.log(err);
    }
  }
}
