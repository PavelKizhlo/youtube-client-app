import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class MainPageGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, // eslint-disable-line @typescript-eslint/no-unused-vars
    state: RouterStateSnapshot, // eslint-disable-line @typescript-eslint/no-unused-vars
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/', 'login']);
      return false;
    }
  }
}
