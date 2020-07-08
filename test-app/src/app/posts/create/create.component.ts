import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  numOfPosts = 0;
  posts= [[]];

  constructor() { }

  ngOnInit(): void {
  }
  
  addNewPost(form: NgForm) {
    this.numOfPosts++;
    if (form.valid) {
        this.posts.push([form.value.title, form.value.content, 0]);
        // this.newPostTitle = '';
        // this.newPostContent = '';
    } 
}

}
