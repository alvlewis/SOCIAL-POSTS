import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

 interface NewItem{
   title: string;
   post: string;
 }



@Component({
  selector: 'app-postForm',
  templateUrl: './postForm.component.html', 
  styleUrls: ['./postForm.component.css']
})
export class PostFormComponent {
  newTitle: string;
  newPost: string;

  // @Input() closeForm: boolean ="";
  
  
  @Output() submitted = new EventEmitter<NewItem>();  

  name: string = 'BOOCH!';
  
  public showForm: boolean = true;
  onSubmit = () => {    
    const newItem ={
      title: this.newTitle,
      post: this.newPost,
    }
    this.submitted.emit(newItem);      
    
    this.showForm = !this.showForm;
  }
  
}
