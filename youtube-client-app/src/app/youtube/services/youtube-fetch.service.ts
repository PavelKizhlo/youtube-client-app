import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SearchResponseModel } from '../../shared/models/search-response.model';
import { response } from '../../shared/mocks/response-example';

@Injectable()
export class YoutubeFetchService {
  private _currentResults: SearchResponseModel;

  get currentResults(): SearchResponseModel {
    if (this._currentResults) {
      return this._currentResults;
    }
    return <SearchResponseModel>JSON.parse(<string>localStorage.getItem('currentResults'));
  }

  set currentResults(results: SearchResponseModel) {
    this._currentResults = results;
    localStorage.setItem('currentResults', JSON.stringify(results));
  }

  search(searchString: string): Observable<SearchResponseModel> {
    // fake functionality
    console.log(searchString);
    return of(response);
  }
}
