import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { FilterService } from '../../../core/services/filter.service';
import { YoutubeFetchService } from '../../services/youtube-fetch.service';
import { SortParams } from '../../../shared/models/sort.model';
import { SearchItemModel } from '../../../shared/models/search-item.model';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  searchString: string;

  searchData: Observable<SearchItemModel[]>;

  filterString: string = '';

  searchSub: Subscription;

  sortSub: Subscription;

  filterSub: Subscription;

  sortParams: SortParams = { sort: undefined, type: undefined };

  constructor(
    private filterService: FilterService,
    private searchService: SearchService,
    private youtubeFetchService: YoutubeFetchService,
  ) {}

  ngOnInit(): void {
    this.searchSub = this.searchService.searchString$.subscribe((str) => {
      this.searchString = str;
      this.searchData = this.youtubeFetchService.getVideoList(this.searchString);
    });

    this.sortSub = this.filterService.sortParams$.subscribe((sortParams) => {
      this.sortParams = sortParams;
    });

    this.filterSub = this.filterService.filterString$.subscribe((filterString) => {
      this.filterString = filterString;
    });
  }

  ngOnDestroy(): void {
    this.sortSub.unsubscribe();
    this.filterSub.unsubscribe();
  }
}
