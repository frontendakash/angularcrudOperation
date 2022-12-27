import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserServicesService } from '../Services/user-services.service';

@Component({
  selector: 'app-admin-roll',
  templateUrl: './admin-roll.component.html',
  styleUrls: ['./admin-roll.component.css']
})
export class AdminRollComponent implements OnInit {

  constructor(private httpservices: UserServicesService, private fb: FormBuilder) { }

  adminRoll: any = [];

  ngOnInit(): void {
    // get Admin Roll
    this.httpservices.getRoll().subscribe((res: any) => {
      this.adminRoll = res;
      // console.log(this.adminRoll);
    })
  }

  // reactive form for adding Admin roll
  Roll = this.fb.group({
    name: this.fb.control('')
  })

  onsubmit(data: any) {
    if (data.valid) {
      console.log("get user all form data " + data);
    }
  }

  // post admin roll
  addRoll() {
    console.log("get user all form data " + JSON.stringify(this.Roll.value));

    this.httpservices.addAdminRoll(this.Roll.value).subscribe((res: any) => {
      alert("roll added successfully");
      console.log("roll added ", res, res.id)
    }, (err) => {
      alert("roll not added");
      console.log("roll not added ", err)
    })
  }


  updateuserid: any;
  // edit user data
  editclick(id: any) {
    // let add_update = document.getElementById("AddButton");
    // add_update.style.display = "none";

    let update = document.getElementById("updateButton");
    update.style.display = "block";

    this.updateuserid = id;
    let uid = this.adminRoll.find((p) => { return p.id === id });

    this.Roll.patchValue({
      name: uid.name
    });
  }

  // update edited data
  updatedata() {
    this.httpservices.updateRoll(this.Roll.value, this.updateuserid).subscribe((data) => {
      alert("Admin Roll Updated")
      this.ngOnInit();
      this.Roll.reset();
    }, (err) => {
      console.log("error", err)
    })
  }




  // delete data
  Deletedata(Data: any) {
    // console.log("deleted" + JSON.stringify(Data));
    Data.status='false'
    this.httpservices.deleteRoll(Data).subscribe((data) => {
      console.log("deleted" + JSON.stringify(data));
      this.ngOnInit();
    }, (err) => {
      console.log("error" + err)
    })
  }


}
