import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private route:Router,private FormGroup:FormBuilder) { }
  loginGroup:FormGroup
  ngOnInit() {
    this.loginGroup= this.FormGroup.group({ 
      'username': [null,Validators.required],
      'password':[null,Validators.required]   
    }
    )
  }

  navigat(){
    this.route.navigateByUrl('/home');
  }

}
