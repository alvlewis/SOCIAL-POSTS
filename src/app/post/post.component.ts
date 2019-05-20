import { Component, Input } from '@angular/core';
// import { post } from 'selenium-webdriver/http';

interface Post{
title: string;
post: string;

}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

@Input() post:Post;

// const remove = () => {
//   const index= this.;
// }


}
