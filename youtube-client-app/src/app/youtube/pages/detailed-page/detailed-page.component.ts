import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { YoutubeFetchService } from '../../services/youtube-fetch.service';
import { SearchItemModel } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent {
  cardData: SearchItemModel;

  constructor(private route: ActivatedRoute, private youtubeFetchService: YoutubeFetchService) {}
}
