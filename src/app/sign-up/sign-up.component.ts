import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppConfigService } from '../core/app-config.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  showPassword: boolean;
  showPasswordRepeat: boolean;

  constructor(private fb: FormBuilder, private appConfig: AppConfigService) {
    this.showPassword = false;
    this.showPasswordRepeat = false;
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(this.appConfig.emailRegex)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  signUp() {
    if (this.signUpForm.valid) {

    }
  }
}
