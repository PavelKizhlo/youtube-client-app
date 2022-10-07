import { Component } from '@angular/core';
import { SearchResponseModel } from './models/search-response.model';
import { SortData } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchData: SearchResponseModel;

  getSearchResults(searchResults: SearchResponseModel) {
    this.searchData = searchResults;
  }

  sortResults(sortData: SortData) {
    const { type, sort } = sortData;

    if (type === 'date') {
      this.searchData.items.sort((a, b) => {
        const aDate = new Date(a.snippet.publishedAt).getTime();
        const bDate = new Date(b.snippet.publishedAt).getTime();

        switch (sort) {
          case 'asc':
            return aDate - bDate;
          case 'desc':
            return bDate - aDate;
          default:
            return 0;
        }
      });
    }

    if (type === 'views') {
      this.searchData.items.sort((a, b) => {
        const aViews = +a.statistics.viewCount;
        const bViews = +b.statistics.viewCount;

        switch (sort) {
          case 'asc':
            return aViews - bViews;
          case 'desc':
            return bViews - aViews;
          default:
            return 0;
        }
      });
    }
  }
}
