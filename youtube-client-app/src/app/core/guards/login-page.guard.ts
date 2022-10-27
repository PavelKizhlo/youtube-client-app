import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class LoginPageGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated$.pipe(
      map((isAuth) => !isAuth || this.router.createUrlTree(['/'])),
    );
  }
}
