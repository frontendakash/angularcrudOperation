import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from '../Services/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private httpservices: UserServicesService, private router: Router) { }

  ngOnInit(): void {
    
  }

  StudentLoginForm = this.fb.group({
    username: this.fb.control(''),
    password: this.fb.control(''),
  })

  onsubmit(data: any) {
    console.log(data);
  }

  onLoginUser() {
    // debugger
    this.httpservices.onLogin(this.StudentLoginForm.value).subscribe((res: any) => {
      // console.log("response from services" + JSON.stringify(res))
      // window.sessionStorage.setItem("token", res.token);
      
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl("header");
    });

  }

}
