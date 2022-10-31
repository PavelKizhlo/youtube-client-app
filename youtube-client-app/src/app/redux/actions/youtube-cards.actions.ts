import { createAction, props } from '@ngrx/store';
import { SearchItemModel } from '../../shared/models/search-item.model';

export const saveSearchResults = createAction(
  '[YouTube API] save search data',
  props<{ response: SearchItemModel[] }>(),
);
