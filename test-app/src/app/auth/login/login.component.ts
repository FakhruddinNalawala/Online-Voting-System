import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userList = ['a','b'];
  passList = ['12345678','12345678'];
  permList = ['admin','user'];

  constructor() {  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      let index = this.userList.indexOf(form.value.username);
      if (index>-1) {
        if (form.value.password == this.passList[index]) {
          console.log("Correct Input!");
        } else  {
          console.log("Invalid Input!")
        }
      }
    }
  }

}
