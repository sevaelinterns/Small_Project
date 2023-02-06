import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.myFunction()
  }

stdDetails:any= new Array()
myFunction(){
let stdObj = JSON.parse(localStorage.getItem('stdValues')) 
this.stdDetails.push(stdObj)
}
change(e){
console.log(e)
}
}
