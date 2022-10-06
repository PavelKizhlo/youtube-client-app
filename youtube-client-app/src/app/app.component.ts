import { Component } from '@angular/core';
import { SearchResponseModel } from './models/search-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchData: SearchResponseModel;

  getSearchResults(searchResults: SearchResponseModel) {
    this.searchData = searchResults;
  }
}
