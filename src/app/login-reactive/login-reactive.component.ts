import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';


@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]]
  })

  constructor(private fb: NonNullableFormBuilder) {


  }

  ngOnInit() {

  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    const formValue = this.form.value;

    console.log(formValue.email, formValue.password);
  }

  reset() {
    this.form.reset();
    console.log(this.form.value);
  }

}
