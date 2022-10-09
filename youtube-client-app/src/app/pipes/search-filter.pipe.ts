import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from '../models/search-item.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(searchData: SearchItemModel[], filterString: string): SearchItemModel[] {
    if (filterString.trim()) {
      return searchData.filter((item) =>
        item.snippet.title.toLowerCase().includes(filterString.trim().toLowerCase()),
      );
    }
    return searchData;
  }
}
