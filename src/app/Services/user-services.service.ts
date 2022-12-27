import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  constructor(private http: HttpClient) { }

  // user login 
  onLogin(obj: any) {
    // debugger
    return this.http.post<any>('http://192.168.1.6:3000/users/sign_in', obj)
  }

  // get Admin Roll 
  getRoll() {
    // debugger
    return this.http.get('http://192.168.1.6:3000/roles?status=1')
  }

  // post Admin Roll
  addAdminRoll(obj: any) {
    // debugger
    return this.http.post<any>('http://192.168.1.6:3000/roles', obj)
  }

  // put Admin Roll
  updateRoll(body: any, id: any): Observable<any> {
    // console.log("data id"+body,id);
    return this.http.put<any>('http://192.168.1.6:3000/roles/' + id, body)
  }

  // Delete User Data
  deleteRoll(data: any) {
    console.log("data id" + data.id);
    return this.http.put<any>('http://192.168.1.6:3000/roles/' + data.id, data)
  }


  // get User Data
  getUserData() {
    // debugger
    return this.http.get('http://192.168.1.6:3000/users?status=1')
  }

  // post user details
  postdata(body: any) {
    return this.http.post<any>('http://192.168.1.6:3000/users', body)
  }

  // put User Data
  updateuser(body: any, id: any): Observable<any> {
    // console.log("data id"+body,id);
    return this.http.put<any>('http://192.168.1.6:3000/users/' + id, body)
  }

  // Delete User Data
  deleteUserData(data: any) {
    console.log("data id" + data.id);
    return this.http.put<any>('http://192.168.1.6:3000/users/' + data.id, data)
  }
}
