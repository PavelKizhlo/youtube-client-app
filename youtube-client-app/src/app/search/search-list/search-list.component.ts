import { Component, Input } from '@angular/core';
import { SearchItemModel } from '../../models/search-item.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() searchData: SearchItemModel[];
}
