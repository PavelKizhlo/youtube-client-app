import { StateModel } from '../state.model';

export const selectYoutubeVideos = (state: StateModel) => state.youtubeCards;

export const selectCustomCards = (state: StateModel) => state.customCards;
