import { Component } from '@angular/core';
import { SearchResponseModel } from '../../models/search-response.model';
import { response } from '../../mocks/response-example';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  searchData: SearchResponseModel = response;
}
