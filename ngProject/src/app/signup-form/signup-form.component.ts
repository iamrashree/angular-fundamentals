import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserNameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  form = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UserNameValidators.cannotContainSpace // Custom Validation
    ], UserNameValidators.shoulBeUnique // async Validation.
    ),
    password: new FormControl('', Validators.required),
  });

  login() {
    this.form.setErrors({
      inValidLogin: true
    })
  }

  get userName() {
    return this.form && this.form.get('userName');
  }

}
