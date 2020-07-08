import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';

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

  clicked() {
    console.log("Running?")
  }
}