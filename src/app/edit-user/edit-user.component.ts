import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServicesService } from '../Services/user-services.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private useredit: UserServicesService) { }



  //this all implementation for put method 

  user: any = [];

  ngOnInit(): void {
    this.useredit.getdata().subscribe((data) => {
      //console.log(data);
      this.user = data;
    })
  }
  onsubmit(data: NgForm) {
    console.log(data)
  }

  userdata: any;

  // put method implementaion and subscribed
  updatedata(form: NgForm) {
    this.useredit.updateuser(form).subscribe((data) => {
      console.log(data)
    }, (err) => {
      console.log(err)
    })
  }

  @ViewChild('myForm') form: NgForm;

  editclick(id: string) {
    //console.log(id)
    // console.log(uid.id);
    // console.log(this.form)
    let uid = this.user.find((p) => { return p.id === id })
    this.form.setValue({
      firstn: uid.name,
      Lastname: uid.username,
      sid: uid.id,
      semail: uid.email
    });

  }
}
