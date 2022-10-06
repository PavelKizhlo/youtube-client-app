import { Component, Input } from '@angular/core';
import { SearchResponseModel } from '../../models/search-response.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() searchData: SearchResponseModel;
}
