import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  li; lo; s; c; v;

  constructor() {
  }

  clicked() {
    console.log("Running?")
  }
}