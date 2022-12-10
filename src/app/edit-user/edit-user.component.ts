import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServicesService } from '../Services/user-services.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private api: UserServicesService) { }

  user: any = [];

  ngOnInit(): void {
    this.api.getdata().subscribe((data) => {
      //console.log(data);
      this.user = data;
    })
  }

  onsubmit(data: NgForm) {
    // console.log(data)
  }



// post method implementaion
  PostData(data: NgForm) {
    this.api.postdata(data);
    this.ngOnInit();
    this.form.reset();
  }



  userdata: any;
  updateuserid: any;
  @ViewChild('myForm') form: NgForm;



  editclick(id: any) {
    this.updateuserid = id;
    // var formdata = document.getElementById("formshow");
    // formdata.style.display = "block";

    let uid = this.user.find((p) => { return p.id === id });
    this.form.setValue({
      firstn: uid.firstn,
      Lastname: uid.Lastname,
      sid: uid.sid,
      semail: uid.semail
    });
  }

  // put method implementaion and subscribed
  updatedata() {
    //const jsoindata=JSON.stringify(formdata);
    console.log(this.form.value);
    this.api.updateuser(this.form.value, this.updateuserid).subscribe((data) => {
      console.log("data updated" + this.form)
    }, (err) => {
      console.log("error",err)
    })
  }

// delete method implementaion and subscribed
  Deletedata(id: any) {
    this.api.deletedata(id).subscribe((data) => {
      console.log("deleted" + id);
      this.ngOnInit();
      // console.log(data)
    }, (err) => {
      console.log("error"+err)
    })
  }

}
