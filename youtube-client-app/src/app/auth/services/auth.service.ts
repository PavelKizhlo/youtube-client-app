import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  get isAuthenticated() {
    return !!localStorage.getItem('authToken');
  }

  login() {
    localStorage.setItem('authToken', 'someTokenWillBeHere');
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/', 'login']);
  }
}
