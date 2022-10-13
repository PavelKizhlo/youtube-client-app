import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FilterService } from '../../services/filter.service';
import { SortOrder } from '../../../shared/models/sort.model';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilteringBlockComponent implements OnInit {
  dateSortOrder: SortOrder;

  viewSortOrder: SortOrder;

  filterInputValue = '';

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.dateSortOrder = this.filterService.dateSort;
    this.viewSortOrder = this.filterService.viewSort;
    this.filterInputValue = this.filterService.filterString;
  }

  changeDateSort(sort: SortOrder) {
    this.dateSortOrder = sort;
    this.viewSortOrder = undefined;
    this.filterService.setDateSort(sort);
  }

  changeViewSort(sort: SortOrder) {
    this.viewSortOrder = sort;
    this.dateSortOrder = undefined;
    this.filterService.setViewSort(sort);
  }

  changeFilterString() {
    this.filterService.setFilterString(this.filterInputValue);
  }

  clearFilterString() {
    this.filterInputValue = '';
    this.filterService.setFilterString(this.filterInputValue);
  }
}
