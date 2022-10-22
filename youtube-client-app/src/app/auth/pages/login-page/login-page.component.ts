import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator } from '../../utils/password-strength.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;

  email: FormControl;

  password: FormControl;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, PasswordStrengthValidator()]);

    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  submit() {
    if (!this.authService.isAuthenticated) {
      this.authService.login();
    }
  }
}
