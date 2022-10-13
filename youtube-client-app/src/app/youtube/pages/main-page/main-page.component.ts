import { Component, OnDestroy, OnInit } from '@angular/core';

import { SearchResponseModel } from '../../../shared/models/search-response.model';
import { SearchService } from '../../../core/services/search.service';
import { FilterService } from '../../../core/services/filter.service';
import { SortResultsService } from '../../services/sort-results.service';
import { YoutubeFetchService } from '../../services/youtube-fetch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  searchData: SearchResponseModel;

  filterString: string = '';

  searchSub: Subscription;

  sortSub: Subscription;

  filterSub: Subscription;

  fetchSub: Subscription;

  constructor(
    private searchService: SearchService,
    private filterService: FilterService,
    private sortResultsService: SortResultsService,
    private youtubeFetchService: YoutubeFetchService,
  ) {}

  ngOnInit(): void {
    this.searchSub = this.searchService.searchString$.subscribe((searchString) => {
      this.getSearchResults(searchString);
    });

    this.sortSub = this.filterService.sortParams$.subscribe((sortParams) => {
      if (this.searchData) {
        this.sortResultsService.sortResults(this.searchData, sortParams);
      }
    });

    this.filterSub = this.filterService.filterString$.subscribe((filterString) => {
      this.filterString = filterString;
    });
  }

  getSearchResults(searchString: string) {
    this.fetchSub = this.youtubeFetchService
      .search(searchString)
      .subscribe((results: SearchResponseModel) => {
        this.searchData = results;
      });
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
    this.sortSub.unsubscribe();
    this.filterSub.unsubscribe();
    this.fetchSub.unsubscribe();
  }
}
