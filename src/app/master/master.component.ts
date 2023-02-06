import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  studentForm:FormGroup;
  constructor(private formbuilder:FormBuilder) {
    this.studentForm = this.formbuilder.group({
      'name':[null,Validators.required],
      'age':[null,Validators.required],
      'gender':[null,Validators.required],
      'education':[null,Validators.required],
      'eligible':[null,Validators.required],
      
    })
   }

  ngOnInit() {
    this.getDetails()
  }
 stdArrays= new Array();
 stdObj:any;
 studentVlaues:any;
submit(){
 this.studentVlaues= this.studentForm.value
 console.log(this.studentVlaues)
// localStorage.setItem('studentsvalue',this.studentVlaues)
localStorage.setItem('stdValues',JSON.stringify( this.studentVlaues))
localStorage.getItem('stdValues')
console.log(JSON.parse(localStorage.getItem('stdValues')))

   this.getDetails()
}
getDetails(){
  this. stdObj =   JSON.parse(localStorage.getItem('stdValues')) 
  // this.stdArrays=[this.stdObj]
  this.stdArrays.push(this.stdObj)
  console.log(this.stdArrays)
}
// eligiable=false
// changeValue(val){
//   return this.eligiable=val
// }
change(data,status,e){
  
}
}
