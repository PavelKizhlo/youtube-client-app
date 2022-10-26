import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { YoutubeFetchService } from '../../services/youtube-fetch.service';
import { SearchItemModel } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
  cardData$: Observable<SearchItemModel>;

  constructor(private route: ActivatedRoute, private youtubeFetchService: YoutubeFetchService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cardData$ = this.youtubeFetchService.getSingleVideo(params['id']);
    });
  }
}
