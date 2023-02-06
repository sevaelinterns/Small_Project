import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  studentForm: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.studentForm = this.formbuilder.group({
      'name': [null, Validators.required],
      'age': [null, Validators.required],
      'gender': [null, Validators.required],
      'education': [null, Validators.required],
      'eligible': [null, Validators.required],
      status:false

    })
  }

  ngOnInit() {
    this.getDetails()
  }
  stdArrays = new Array();
  stdObj: any;
  studentVlaues: any;
  submit() {
    this.studentVlaues = this.studentForm.value

    localStorage.setItem('stdValues', JSON.stringify(this.studentVlaues))
    // localStorage.getItem('stdValues')
    this.getDetails()
  }
  getDetails() {
    this.stdObj = JSON.parse(localStorage.getItem('stdValues'))
    this.stdArrays.push(this.stdObj)

  }

  change(value) {
  console.log(value)
  }
  edit(val) {
    console.log(val)
    // this.studentForm=this.stdArrays[0]
    this.studentForm.patchValue(val)
  }
}
