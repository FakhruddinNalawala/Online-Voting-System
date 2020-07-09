import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

  li; lo; s; c; v;

  constructor() {
  }

  ngAfterViewInit() {
    this.li = document.getElementById('li');
    this.lo = document.getElementById('li');
    this.s = document.getElementById('s');
    this.c = document.getElementById('c');
    this.v = document.getElementById('v');
    console.log(this.li, this.lo, this.s, this.c, this.v)

  }

  clicked() {
    console.log("Running?")
  }
}