import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServicesService } from '../Services/user-services.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import ZebraBrowserPrintWrapper from "zebra-browser-print-wrapper-https";
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})


export class EditUserComponent implements OnInit {

  constructor(private httpservices: UserServicesService, private fb: FormBuilder) { }

  user: any = [];
  adminRoll: any = [];
  addNotificationData: any = [];
  lableTemplate: any;

  ngOnInit(): void {
    // get user data
    this.httpservices.getUserData().subscribe((res: any) => {
      this.user = res;
      console.log(this.user);
    })

    // get Admin Roll
    this.httpservices.getRoll().subscribe((res: any) => {
      this.adminRoll = res;
      // console.log(this.adminRoll);
    })

  }

  // reactive form for adding user details
  StudentLoginForm = this.fb.group({
    username: this.fb.control(''),
    password: this.fb.control(''),
    emailId: this.fb.control(''),
    roleId: this.fb.control('')
  })


  onsubmit(data: any) {
    if (data.valid) {
      console.log("get user all form data " + data);
    }
  }


  // post  user details
  PostData() {
    console.log("get user all form data " + JSON.stringify(this.StudentLoginForm.value));

    if (this.StudentLoginForm.valid) {
      this.addNotificationData.push(this.StudentLoginForm.value);

      this.httpservices.postdata(this.StudentLoginForm.value).subscribe((data) => {
        alert("user details Added successfully");
        this.ngOnInit();
        Swal.fire('Hi', 'Student Data Added Successfull');
      }, (err) => {
        alert("user details not Added successfully")
        console.log("user not added error " +err)
      })

    } else {
      alert("please enter student details");
    }


    // #####
    // const printlableCall = async (lableTemplate: string) => {
    //   try {
    //     const browserPrint = new ZebraBrowserPrintWrapper();
    //     const defaultPrinter = await (browserPrint.getDefaultPrinter());

    //     // console.log("defaultPrinter")

    //     browserPrint.setPrinter(defaultPrinter);

    //     const printerStatus = await browserPrint.checkPrinterStatus();

    //     // ZPL script to print a qr code
    //     lableTemplate = `
    //   ^XA~TA000~JSN^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR4,4~SD15^JUS^LRN^CI0^XZ
    //   ^XA
    //   ^MMT
    //   ^PW609
    //   ^LL0406
    //   ^LS0
    //   ^FO51,58^GB497,276,8^FS
    //   ^BY1,3,92^FT135,168^BCN,,Y,N
    //   ^FD>:BRiOT Technologies Pvt Ltd^FS
    //   ^FT81,278^ACN,18,10^FH\^FDAddress:^FS 
    //   ^FT79,243^ACN,18,10^FH\^FDID:^FS
    //   ^FT80,213^ACN,18,10^FH\^FDFull Name:^FS
    //   ^FT118,243^ACN,18,10^FH\^FD${this.StudentLoginForm.value.Lname}^FS
    //   ^FT181,301^ACN,18,10^FH\^FDPune, Maharashtra - 411033^FS
    //   ^FT181,278^ACN,18,10^FH\^FDThergaon^FS
    //   ^FT205,213^ACN,18,10^FH\^FD${this.StudentLoginForm.value.Fname}^FS
    //   ^PQ1,0,1,Y^XZ`;

    //     browserPrint.print(lableTemplate);
    //     console.log("Print succes" + lableTemplate);
    //     this.StudentLoginForm.reset();

    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // printlableCall(this.lableTemplate);

  }


  updateuserid: any;
  // edit user data
  editclick(id: any) {
    let add_update = document.getElementById("AddButton");
    add_update.style.display = "none";

    let hidepasswordfield = document.getElementById("passwordfield");
    hidepasswordfield.style.display = "none";

    let update = document.getElementById("updateButton");
    update.style.display = "block";

    this.updateuserid = id;
    let uid = this.user.find((p) => { return p.id === id });

    this.StudentLoginForm.patchValue({
      username: uid.username,
      emailId: uid.emailId,
      roleId: uid.role.id
    });
  }

  // update edited data
  updatedata() {
    this.httpservices.updateuser(this.StudentLoginForm.value, this.updateuserid).subscribe((data) => {
      this.ngOnInit();
      this.StudentLoginForm.reset();
    }, (err) => {
      console.log("error", err)
    })
  }


  // delete data
  DeleteUser(Data: any) {
    console.log("deleted" + Data);
    Data.status='false'
    this.httpservices.deleteUserData(Data).subscribe((data) => {
      console.log("deleted" + data);
      this.ngOnInit();
    }, (err) => {
      console.log("error" + err)
    })
  }

}
