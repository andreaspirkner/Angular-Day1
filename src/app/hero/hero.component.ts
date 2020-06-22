import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
public heroHeading: string;
public  heroText: string;
public heroBtnText : string;
public heroBtnUrl:   string ;
  constructor() {
  this.heroHeading =  "Angular Tours" ;
  this.heroText =  "Travelling without limits" ;
  this.heroBtnText =  "About us" ;
  this.heroBtnUrl =  "aboutUs.html"  ;
    }

  ngOnInit(): void {
  }

}
