import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade',
        [
          state('void', style({ opacity : 0})),
          transition(':enter', [ animate(300)]),
          transition(':leave', [ animate(500)]),
        ]
    )]
})
export class AppComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) {}
  ngOnInit() {  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const topOfNav = document.getElementById('navbar').offsetTop;
    if (window.pageYOffset >= 1) {
        const element = document.getElementById('navbar');
        element.classList.add('sticky');
      } else {
      const element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }

    // if (window.pageYOffset > 550) {
    //   const element = document.getElementById('navbar');
    //   element.classList.add('sticky');
    // } else {
    //   const element = document.getElementById('navbar');
    //   element.classList.remove('sticky');
    // }
  }
}

