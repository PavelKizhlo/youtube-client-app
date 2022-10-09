import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { SearchResponseModel } from '../models/search-response.model';
import { response } from '../mocks/response-example';
import { SortOrder } from './filtering-block/filtering-block.component';

export type SortBy = 'date' | 'views';

export interface SortData {
  type: SortBy;
  sort: SortOrder;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Output() search: EventEmitter<SearchResponseModel> = new EventEmitter<SearchResponseModel>();

  @Output() sort: EventEmitter<SortData> = new EventEmitter<SortData>();

  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  showFilter = false;

  submit() {
    this.search.emit(response);
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  changeSort(sortOrder: SortOrder, sortBy: SortBy) {
    this.sort.emit({ type: sortBy, sort: sortOrder });
  }

  changeFilter(filterInputValue: string) {
    this.filter.emit(filterInputValue);
  }
}
