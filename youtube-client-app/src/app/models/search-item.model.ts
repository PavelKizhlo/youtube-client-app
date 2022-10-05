export interface ThumbnailSize {
  url: string;
  width: number;
  height: number;
}

export interface SearchItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ThumbnailSize;
      medium: ThumbnailSize;
      high: ThumbnailSize;
      standard: ThumbnailSize;
      maxres: ThumbnailSize;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}
