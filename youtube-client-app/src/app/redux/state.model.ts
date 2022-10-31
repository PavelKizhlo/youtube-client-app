import { CustomCardModel } from '../shared/models/custom-card.model';
import { SearchItemModel } from '../shared/models/search-item.model';

export interface StateModel {
  customCards: CustomCardModel[];
  youtubeCards: SearchItemModel[];
}
