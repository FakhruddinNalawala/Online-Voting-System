import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  li; lo; s; c; v;

  userList = ['a','b'];
  passList = ['12345678','12345678'];
  permList = ['admin','user'];

  @Output() goToView = new EventEmitter<object>();

  constructor(public router: Router) {  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.li = document.getElementById('li');
    this.lo = document.getElementById('lo');
    this.s = document.getElementById('s');
    this.c = document.getElementById('c');
    this.v = document.getElementById('v');
    console.log(this.li, this.lo, this.s, this.c, this.v)
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      let index = this.userList.indexOf(form.value.username);
      if (index>-1) {
        if (form.value.password == this.passList[index]) {
          console.log("Correct Input!");
          this.goToView.emit(['v',[this.userList[index],this.permList[index]]]);
          this.li.style.display = 'none';
          this.s.style.display = 'none';
          this.c.style.display = 'inline';
          this.v.style.display = 'inline';
          this.lo.style.display = 'inline';
          this.router.navigate(['/view']);
          console.log('View posts');
        } else  {
          console.log("Invalid Input!");
        }
      }
    }
  }

}
