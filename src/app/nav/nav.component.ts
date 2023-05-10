import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private _auth: AuthService, private router: Router) {
    if(localStorage.getItem('token')){
      
    }
  }
  isLoggedIn: Boolean = false;
  checkUser() {
    this._auth.userData.subscribe(() => {
      if (this._auth.userData.getValue()) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  logOut() {
    localStorage.removeItem('token');
    this._auth.userData.next(null);
    this.router.navigateByUrl('/');
  }
  ngOnInit(): void {
    this.checkUser();
  }
}
