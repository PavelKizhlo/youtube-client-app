import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { SearchResponseModel } from '../models/search-response.model';
import { response } from '../mocks/response-example';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Output() search: EventEmitter<SearchResponseModel> = new EventEmitter<SearchResponseModel>();

  showFilter = false;

  submit() {
    this.search.emit(response);
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
}
