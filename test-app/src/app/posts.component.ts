import { Component, OnInit, NgModule } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: 'posts.component.html',
    styleUrls: ['posts.component.scss']
})

export class PostsComponent implements OnInit   {

    ngOnInit()   {
        document.getElementById('logout').style.display='inline';
    }

    numOfPosts = 1;
    posts = [["Hello", "My Name is Fakhruddin", 0]];
    newPostTitle = '';
    newPostContent = '';

    addNewPost(form) {
        this.numOfPosts++;
        if (form.valid) {
            this.posts.push([form.value.title, form.value.content, 0]);
            // this.newPostTitle = '';
            // this.newPostContent = '';
        } 
    }
}