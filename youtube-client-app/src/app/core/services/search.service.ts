import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchString$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  startSearch(str: string) {
    this.searchString$.next(str);
  }
}
