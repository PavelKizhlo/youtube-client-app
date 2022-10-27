import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator } from '../../utils/password-strength.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form: FormGroup;

  email: FormControl;

  password: FormControl;

  isAuthSub: Subscription;

  isAuthenticated: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, PasswordStrengthValidator()]);

    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });

    this.isAuthSub = this.authService.isAuthenticated$.subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
    });
  }

  submitLoginForm() {
    if (!this.isAuthenticated) {
      this.authService.login(this.email.value, this.password.value);
    }
  }

  ngOnDestroy(): void {
    this.isAuthSub.unsubscribe();
  }
}
