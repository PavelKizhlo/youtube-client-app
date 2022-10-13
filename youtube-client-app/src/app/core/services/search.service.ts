import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchString$: Subject<string> = new Subject<string>();

  startSearch(str: string) {
    this.searchString$.next(str);
  }
}
