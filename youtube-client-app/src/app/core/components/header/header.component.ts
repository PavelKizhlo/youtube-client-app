import { Component, ViewEncapsulation } from '@angular/core';

import { SearchService } from '../../services/search.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(private searchService: SearchService, private authService: AuthService) {}

  showFilter = false;

  searchString: string = '';

  submit() {
    this.searchService.startSearch(this.searchString);
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  logout() {
    this.authService.logout();
  }
}
