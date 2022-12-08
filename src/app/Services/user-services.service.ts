import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) { }

// post method used
  postdata(body: any)    //https://angular-13-c34da-default-rtdb.firebaseio.com/customer.json
  {                   
    this.http.post('https://angular-13-c34da-default-rtdb.firebaseio.com/Userdata.json',body).subscribe((data)=>{
      console.log(data)
    })
  }

  // get method used 
  getdata() //https://jsonplaceholder.typicode.com/users  //mongodb://localhost:27017/ishop.categories
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  //put method used
  updateuser(body:any)
  {
    return this.http.put('https://angular-13-c34da-default-rtdb.firebaseio.com/Userdata.json',body)
  }
}
