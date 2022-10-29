import { createReducer, on } from '@ngrx/store';

import { StateModel } from '../state.model';
import { addCustomCard } from '../actions/custom-cards.actions';

export const initialState: StateModel = {
  customCards: [],
  youtubeCards: [],
};

export const CardsReducer = createReducer(
  initialState,
  on(
    addCustomCard,
    (state, action): StateModel => ({
      ...state,
      customCards: [...state.customCards, action.card],
    }),
  ),
);
