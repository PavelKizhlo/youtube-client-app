import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { SearchResponseModel } from '../../shared/models/search-response.model';
import { Id, SearchItemModel } from '../../shared/models/search-item.model';
import { saveSearchResults } from '../../redux/actions/youtube-cards.actions';

@Injectable()
export class YoutubeFetchService {
  constructor(private http: HttpClient, private store: Store) {}

  getVideoList(searchString: string): Observable<SearchItemModel[]> {
    const response = searchString ? this.getSearchedVideos(searchString) : this.getPopularVideos();

    return response.pipe(
      map((res) => res.items),
      tap((items) => this.store.dispatch(saveSearchResults({ response: [...items] }))),
    );
  }

  getSingleVideo(id: string): Observable<SearchItemModel> {
    return this.http
      .get<SearchResponseModel>('/videos', {
        params: {
          part: 'snippet,statistics',
          id: id,
        },
      })
      .pipe(map((res) => res.items[0]));
  }

  getPopularVideos(): Observable<SearchResponseModel> {
    return this.http.get<SearchResponseModel>('/videos', {
      params: {
        part: 'snippet,statistics',
        chart: 'mostPopular',
        regionCode: 'BY',
        maxResults: '20',
      },
    });
  }

  getSearchedVideos(searchString: string): Observable<SearchResponseModel> {
    return this.http
      .get<SearchResponseModel>('/search', {
        params: {
          part: 'snippet',
          maxResults: '20',
          q: searchString,
        },
      })
      .pipe(
        switchMap((videoList) => {
          const ids = videoList.items.map((item) => (<Id>item.id).videoId);
          return this.http.get<SearchResponseModel>('/videos', {
            params: {
              part: 'snippet,statistics',
              id: ids,
            },
          });
        }),
      );
  }
}
