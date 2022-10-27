import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

import { SearchService } from '../../services/search.service';
import { AuthService } from '../../../auth/services/auth.service';
import { FilterService } from '../../services/filter.service';

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

  nameSub: Subscription;

  userName: string;

  constructor(
    private searchService: SearchService,
    private authService: AuthService,
    private filterService: FilterService,
  ) {}

  ngOnInit(): void {
    this.nameSub = this.authService.userName$.subscribe((name) => {
      this.userName = name;
    });

    this.searchField = new FormControl({ value: '', disabled: true });
    this.searchSub = this.searchField.valueChanges
      .pipe(
        filter((value) => value.length >= 3),
        debounceTime(300),
        distinctUntilChanged(),
      )
      .subscribe((str) => {
        this.searchService.startSearch(str);
      });

    this.authService.isAuthenticated$.subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
      if (isAuth) {
        this.searchField.enable();
      } else {
        this.searchField.setValue('');
        this.searchField.disable();
      }
    });
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  logout() {
    if (this.isAuthenticated) {
      this.filterService.setViewSort(undefined);
      this.filterService.setDateSort(undefined);
      this.filterService.setFilterString('');

      this.showFilter = false;
      this.authService.logout();
    }
  }

  ngOnDestroy(): void {
    this.nameSub.unsubscribe();
    this.searchSub.unsubscribe();
  }
}
