import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!localStorage.getItem('authToken'),
  );

  constructor(private router: Router) {}

  login() {
    localStorage.setItem('authToken', 'someTokenWillBeHere');
    this.isAuthenticated$.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.clear();
    this.isAuthenticated$.next(false);
    this.router.navigate(['/', 'login']);
  }
}
