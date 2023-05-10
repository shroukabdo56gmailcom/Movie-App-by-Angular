import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData:any=new BehaviorSubject(null);
  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.saveData()
    }
  }
saveData(){
 let encoded=localStorage.getItem('token')||''
 let decoded=jwtDecode(encoded)
 this.userData.next(decoded)
 console.log(this.userData);
}
  register(data: any): Observable<any> {
    return this.http.post('https://sticky-note-fe.vercel.app/signup', data);
  }
  login(data: any): Observable<any>{
    return this.http.post('https://sticky-note-fe.vercel.app/signin', data)
  }
}
