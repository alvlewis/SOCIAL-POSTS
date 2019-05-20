import { Component, OnInit } from '@angular/core';




interface FruitsToEat {
moreFruit: string;
sweetness: string;
}


@Component({
  selector: 'app-push-array-today-lol',
  templateUrl: './push-array-today-lol.component.html',
  styleUrls: ['./push-array-today-lol.component.css']
})
export class PushArrayTodayLolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  fruits: any = ['pears', 'oranges'];


  fruitsToEatArray = [
  {moreFruit: 'blueberries', sweetness: 'pineapples'},
  {moreFruit: 'strawberries', sweetness: 'kiwi'},
  
  ];
    // ('strawberries');
    
    
    
    
    
    
    
    
  }
  
  
  
  
  