import { createAction, props } from '@ngrx/store';
import { CustomCardModel } from '../../shared/models/custom-card.model';

export const addCustomCard = createAction(
  '[admin-page] add custom card',
  props<{ card: CustomCardModel }>(),
);
