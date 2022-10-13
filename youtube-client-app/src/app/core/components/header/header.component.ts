import { Component, ViewEncapsulation } from '@angular/core';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(private searchService: SearchService) {}

  showFilter = false;

  searchString: string = '';

  submit() {
    this.searchService.startSearch(this.searchString);
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
}
