 import { Component, Output, Input } from '@angular/core';


interface Post {
  title: string; 
  post: string; 
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})


export class AppComponent {
  title = 'socialPosts';

  postArray = [
    {title: 'Work', post: 'Good day today, very productive'},
    {title: 'Fitness', post: 'I gotta say, it was a good day!'},
  ];

  show: boolean = false;
  

  toggleForm = () => {
    this.show = !this.show;

  
  }
    onSubmit=(event)=>{
      this.postArray.unshift(event);
      console.log(this.postArray);
    }

    

    

    
  



}

  

  









