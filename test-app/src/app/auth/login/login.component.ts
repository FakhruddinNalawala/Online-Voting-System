import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userList = ['a','b'];
  passList = ['12345678','12345678'];
  permList = ['admin','user'];

  @Output() goToView = new EventEmitter<object>();

  constructor(public router: Router) {  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      let index = this.userList.indexOf(form.value.username);
      if (index>-1) {
        if (form.value.password == this.passList[index]) {
          console.log("Correct Input!");
          this.goToView.emit(['v',[this.userList[index],this.permList[index]]]);
          this.router.navigate(['/view'])
        } else  {
          console.log("Invalid Input!")
        }
      }
    }
  }

}
