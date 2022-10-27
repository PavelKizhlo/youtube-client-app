import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SortParams, SortOrder } from '../../shared/models/sort.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _dateSort: SortOrder;

  private _viewSort: SortOrder;

  private _filterString: string;

  sortParams$: Subject<SortParams> = new Subject<SortParams>();

  filterString$: Subject<string> = new Subject<string>();

  get dateSort() {
    return this._dateSort;
  }

  get viewSort() {
    return this._viewSort;
  }

  get filterString() {
    return this._filterString;
  }

  setDateSort(sort: SortOrder) {
    this._dateSort = sort;
    this._viewSort = undefined;
    this.sortParams$.next({ type: 'date', sort });
  }

  setViewSort(sort: SortOrder) {
    this._viewSort = sort;
    this._dateSort = undefined;
    this.sortParams$.next({ type: 'views', sort });
  }

  setFilterString(str: string) {
    this._filterString = str;
    this.filterString$.next(str);
  }
}
