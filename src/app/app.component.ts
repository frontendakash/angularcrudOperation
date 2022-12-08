import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServicesService } from './Services/user-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

constructor(private services:UserServicesService)
{}

  ngOnInit(): void {

  }


  getdatafrommongo(){
    this.services.getdata().subscribe((data)=>{
      console.log(data)
    },(err)=>{
      console.log(err)
    })
  }

  // for form data reset 
  restefomr(fomrrset:NgForm)
  {
    fomrrset.reset();
  }


  // for post method implementation 
  onsubmit(from:NgForm) // line no 3
  {
    this.services.postdata(from);
  }

  user:any
  // for get implemented and subscribe
  getdatafromapi() // line no 59
  {
    this.services.getdata().subscribe((data)=>{
      //console.log(data);
      this.user=data;
    })
  }







  //   user:any=[];
  // onsubmit(userdetail:{uname:string,ulname:string})
  // {
  //   // console.log(datasubmited.value)
  //   this.http.post('https://angular-13-c34da-default-rtdb.firebaseio.com/Userdata.json',userdetail).subscribe((data)=>{
  //     console.log(data)
  //   })
  // }

  // private fetchdatafromfirebase()  //https://jsonplaceholder.typicode.com/users
  // {
  //   this.http.get('https://angular-13-c34da-default-rtdb.firebaseio.com/Userdata.json').subscribe((res)=>{
  //     // console.log(res)
  //     this.user.push(res);
  //   })

  //   console.log(this.user);
  //   // this.user.map((da: any)=>{
  //   //   console.log(da)
  //   // })
  // }
}
