import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  resgistration: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    age: new FormControl(null, [
      Validators.max(40),
      Validators.min(18),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.pattern(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
      ),
      Validators.required,
    ]),
  });

  constructor(private _auth: AuthService,private _Router:Router) {}
  isRegisterd = false;

  submitform() {
    if (this.resgistration.invalid) {
      return;
    } else {
      this._auth.register(this.resgistration.value).subscribe((data) => {
        if (data.errors) {
          this.isRegisterd = true;
        }
        else{
        console.log(data);
        this._Router.navigateByUrl('/')
        }

      });
    }
  }
  //resgistration.value ==> object b kol values inputs alform
  get IsNameValid() {
    return;
  }
  get IsFormValid() {
    return this.resgistration.valid;
  }
  ngOnInit(): void {}
}
