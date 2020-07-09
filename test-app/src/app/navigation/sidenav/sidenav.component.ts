import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  li; lo; s; c; v;
  constructor(public router: Router) { 

  }

  ngOnInit(): void {
    this.router.navigate(['/']);
  }

  ngAfterViewInit() {
    this.li = document.getElementById('li');
    this.lo = document.getElementById('lo');
    this.s = document.getElementById('s');
    this.c = document.getElementById('c');
    this.v = document.getElementById('v');
    console.log(this.li, this.lo, this.s, this.c, this.v)
  }

  onSidenavToggle(str: string) {
    this.sidenavToggle.emit();
    console.log(str);

    switch (str) {
      case 'c':
      case 'v':
        {
          this.li.style.display = 'none';
          this.s.style.display = 'none';
          this.c.style.display = 'inline';
          this.v.style.display = 'inline';
          this.lo.style.display = 'inline';
          break;
        }
      case 's':
      case 'li':
      case 'lo':
      default:
        {
          this.li.style.display = 'inline';
          this.s.style.display = 'inline';
          this.c.style.display = 'none';
          this.v.style.display = 'none';
          this.lo.style.display = 'none';
          break;
        }
    }
  }
}
