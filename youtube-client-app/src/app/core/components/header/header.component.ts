import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subscription } from 'rxjs';

import { SearchService } from '../../services/search.service';
import { AuthService } from '../../../auth/services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit, OnDestroy {
  showFilter = false;

  isAuthenticated: boolean;

  searchField: FormControl;

  searchSub: Subscription;

  constructor(private searchService: SearchService, private authService: AuthService) {}

  ngOnInit(): void {
    this.searchField = new FormControl('');
    this.searchSub = this.searchField.valueChanges
      .pipe(
        filter((value) => value.length >= 3),
        debounceTime(300),
        distinctUntilChanged(),
      )
      .subscribe((str) => {
        this.searchService.startSearch(str);
      });

    this.authService.isAuthenticated$.subscribe((isAuth) => (this.isAuthenticated = isAuth));
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  logout() {
    if (this.isAuthenticated) {
      this.authService.logout();
    }
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
}
