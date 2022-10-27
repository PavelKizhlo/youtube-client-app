import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName$: BehaviorSubject<string> = new BehaviorSubject<string>(this.name);

  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!this.authToken);

  constructor(private router: Router) {}

  private get authToken() {
    return localStorage.getItem('authToken');
  }

  private get name() {
    const storedName = localStorage.getItem('userName');
    return storedName ? storedName : '';
  }

  login(name: string, password: string) {
    const token = name + password;
    this.userName$.next(name);

    localStorage.setItem('authToken', token);
    localStorage.setItem('userName', name);
    this.isAuthenticated$.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.clear();
    this.userName$.next('');
    this.isAuthenticated$.next(false);
    this.router.navigate(['/', 'login']);
  }
}
