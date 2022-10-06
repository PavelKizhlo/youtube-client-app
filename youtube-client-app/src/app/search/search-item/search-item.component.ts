import { Component } from '@angular/core';
import { SearchItemModel } from '../../models/search-item.model';
import { cardData } from '../../mocks/card-example';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  searchItemData: SearchItemModel = cardData;
}
