import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { YoutubeFetchService } from '../../services/youtube-fetch.service';
import { SearchItemModel } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  cardData: SearchItemModel;

  constructor(private route: ActivatedRoute, private youtubeFetchService: YoutubeFetchService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // replace with YouTube API request by id
      this.cardData = <SearchItemModel>(
        this.youtubeFetchService.currentResults.items.find((item) => item.id === params['id'])
      );
    });
  }
}
