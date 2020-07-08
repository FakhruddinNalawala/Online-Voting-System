import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  l=document.getElementById('l');
  s=document.getElementById('s');
  c=document.getElementById('c');
  v=document.getElementById('v');

  constructor() {  }
}