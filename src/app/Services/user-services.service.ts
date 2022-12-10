import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) { }

// post method used
  postdata(body: any)    
  {                   
    this.http.post<any>('http://localhost:3000/user/',body).subscribe((data) => {
      console.log(data)
    }, (err) => {
      console.log(err)
    })
  }

  // get method used 
  getdata() 
  {
    return this.http.get('http://localhost:3000/user')
  }

  //put method used
  updateuser(body:any ,id:any)
  {
    console.log("data id"+body,id);
    return this.http.put<any>('http://localhost:3000/user/'+body,id)
  }

  deletedata(id:any)
  {
    console.log("data id"+id);
    return this.http.delete<any>('http://localhost:3000/user/'+id)
  }
}
