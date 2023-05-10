import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isNotReg = false;

    login: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
    Validators.pattern(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
      ),
      Validators.required,
    ]),
  });
  constructor(private _auth: AuthService,private _Router:Router) {}
  submitform() {
    if (this.login.invalid) {
      return;
    } else {
      this._auth.login(this.login.value).subscribe((res) => {
        if (res.token) {
          console.log(res);
           localStorage.setItem('token',res.token)
           this._auth.saveData()
          this._Router.navigateByUrl('/home')
        } else {
          this.isNotReg = true;
        }
      });
    }
  }

  ngOnInit(): void {
    console.log(this.login.controls);
    
  }
}
