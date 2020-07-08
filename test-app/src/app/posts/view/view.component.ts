import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  posts=[[48738,"Hello","Sample Text",103,0]];
  // post=[48738,"Hello","Sample Text",103,0]

  constructor() { }

  ngOnInit(): void {
  }

  vote(post, value) {
    if (post[4] == 1) {
      if (value == '+') { post[4] = 0; post[3]--; }
      else if (value == '-') { post[4] = -1; post[3] -= 2; }
    } else if (post[4] == 0) {
      if (value == '+') { post[4] = 1; post[3]++; }
      else if (value == '-') { post[4] = -1; post[3]--; }
    } else if (post[4] == -1) {
      if (value == '+') { post[4] = 1; post[3] += 2; }
      else if (value == '-') { post[4] = 0; post[3]++; }
    }
    console.log(post[3],post[4])
  }

}
