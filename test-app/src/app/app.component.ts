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
    this.lo = document.getElementById('lo');
    this.s = document.getElementById('s');
    this.c = document.getElementById('c');
    this.v = document.getElementById('v');
    this.li.style.display = 'inline';
    this.s.style.display = 'inline';
    this.c.style.display = 'none';
    this.v.style.display = 'none';
    this.lo.style.display = 'none';
    console.log(this.li, this.lo, this.s, this.c, this.v)
  }

  clicked() {
    console.log("Running?")
  }

  goToView(str) {
    console.log(str);
    this.li.style.display = 'none';
    this.s.style.display = 'none';
    this.c.style.display = 'inline';
    this.v.style.display = 'inline';
    this.lo.style.display = 'inline';
  }

}