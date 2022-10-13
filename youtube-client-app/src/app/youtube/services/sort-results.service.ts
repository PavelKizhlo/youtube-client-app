import { Injectable } from '@angular/core';

import { SortParams } from '../../shared/models/sort.model';
import { SearchResponseModel } from '../../shared/models/search-response.model';

@Injectable()
export class SortResultsService {
  sortResults(results: SearchResponseModel, sortParams: SortParams) {
    const { type, sort } = sortParams;

    if (type === 'date') {
      results.items.sort((a, b) => {
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
      results.items.sort((a, b) => {
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
