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
  public imageList2: Array<any> = [];
  public imageList3: Array<any> = [];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.loaderDelay = (params['d']) ? params['d'] : 0;
    });
  }

  ngOnInit() {
    let loaderDisplay = false;
    this.route.queryParams.subscribe(params => {
      if (params['d']) {
        loaderDisplay = true;
      }
    });

    const list1 = [
      'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-specially-abled.jpg',
      'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-wildlife.jpg',
      'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-festival.jpg',
      'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-womens.jpg',
      'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-seniors.jpg',
      'https://img.veenaworld.com/home/Speciality-Package-Thb/speciality-thb-honeymoon.jpg'
    ];

    const list2 = [
      'https://img.veenaworld.com/group-tours/world/africa/afsf/afsf-thb.jpg',
      'https://img.veenaworld.com/group-tours/world/japan-china-korea-taiwan/ascn/ascn-thb.jpg',
      'https://img.veenaworld.com/group-tours/world/south-east-asia/ashk/ashk-thb.jpg',
      'https://img.veenaworld.com/group-tours/world/south-east-asia/asza/asza-thb.jpg'
    ];

    const list3 = [
      'https://betaimg.veenaworld.com/home/banner/honeymoon-kerala-bnn-30072018.jpg',
      'https://betaimg.veenaworld.com/home/banner/turkey-jewels-bnn-30072018.jpg',
      'https://betaimg.veenaworld.com/home/banner/women-special-bnn-30072018.jpg',
      'https://betaimg.veenaworld.com/home/banner/winter-offer-bnn-30072018.jpg',
      'https://betaimg.veenaworld.com/home/banner/dubai-with-burj-khalifa-bnn-30072018.jpg'
    ];

    list1.forEach((item) => {
      this.imageList1.push({'display' : true, 'imgsrc': item});
    });

    list2.forEach((item) => {
      this.imageList2.push({'display' : true, 'imgsrc': item});
    });

    list3.forEach((item) => {
      this.imageList3.push({'display' : true, 'imgsrc': item});
    });
  }

  init1(e) {
    console.log('Init1', e);
  }


  doSomething(event, imgRef) {
    try {
      console.log(this.loaderDelay);
      let rtime = 100;
      if (this.loaderDelay) {
        rtime = (rtime <= 3000) ? rtime : 100;
      }

      setTimeout(() => {
        imgRef.display = 'block';
      }, rtime);
    } catch (err) {
      console.log(err);
    }
  }
}
