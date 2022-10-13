import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchResponseModel } from '../../shared/models/search-response.model';
import { response } from '../../shared/mocks/response-example';

@Injectable()
export class YoutubeFetchService {
  search(searchString: string): Observable<SearchResponseModel> {
    // fake functionality
    console.log(searchString);
    return of(response);
  }
}
