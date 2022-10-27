export interface ThumbnailSize {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: ThumbnailSize;
  medium: ThumbnailSize;
  high: ThumbnailSize;
  standard: ThumbnailSize;
  maxres: ThumbnailSize;
}

export interface Localization {
  title: string;
  description: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localization;
  defaultAudioLanguage: string;
  defaultLanguage?: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface SearchItemModel {
  kind: string;
  etag: string;
  id: string | Id;
  snippet: Snippet;
  statistics: Statistics;
}
