import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginGroup:FormGroup;
signupGroup:FormGroup
  constructor(private formbuilder:FormBuilder ,private router:Router) { 
  this.loginGroup = this.formbuilder.group({
    'email': [null, Validators.required],
    'password':[null,Validators.required]
  });
  this.signupGroup = this.formbuilder.group({
    'name':[null,Validators.required],
    'email':[null,Validators.required],
    'password':[null,Validators.required],
    'confirmPassword':[null,Validators.required]
  })
  }

  ngOnInit() {
    localStorage.removeItem('loginvalues')
  }

isSignUP:boolean=false;
signUP(val){
  return this.isSignUP=val
}
loginFunction(){
  let loginvalues = this.loginGroup.value
  console.log(loginvalues)
  if(loginvalues.email == "lokesh@123.com" && loginvalues.password == "123456"){
this.router.navigateByUrl('/dashboard/home')
localStorage.setItem("loginvalues",JSON.stringify(loginvalues))

  }
  // this.markFormGroupTouched(loginvalues)
}
// private markFormGroupTouched(formGroup: FormGroup) {
//   (<any>Object).values(formGroup.controls).forEach(control => {
//     control.markAsTouched();

//     if (control.controls) {
//       this.markFormGroupTouched(control);
//     }
//   });
// }
}
