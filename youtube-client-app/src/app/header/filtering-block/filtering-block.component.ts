import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

export type SortOrder = 'asc' | 'desc' | undefined;

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilteringBlockComponent {
  @Output() dateSort: EventEmitter<SortOrder> = new EventEmitter<SortOrder>();

  @Output() viewSort: EventEmitter<SortOrder> = new EventEmitter<SortOrder>();

  dateSortOrder: SortOrder;

  viewSortOrder: SortOrder;

  changeDateSort(sort: SortOrder) {
    this.viewSortOrder = undefined;
    this.dateSortOrder = sort;
    this.dateSort.emit(sort);
  }

  changeViewSort(sort: SortOrder) {
    this.dateSortOrder = undefined;
    this.viewSortOrder = sort;
    this.viewSort.emit(sort);
  }
}
