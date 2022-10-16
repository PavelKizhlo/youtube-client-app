import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { DateStatusDirective } from './directives/date-status.directive';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SortResultsService } from './services/sort-results.service';
import { YoutubeFetchService } from './services/youtube-fetch.service';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';

@NgModule({
  declarations: [
    SearchListComponent,
    SearchItemComponent,
    SearchFilterPipe,
    DateStatusDirective,
    MainPageComponent,
    DetailedPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainPageComponent,
      },
      { path: 'id/:id', component: DetailedPageComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [SortResultsService, YoutubeFetchService],
})
export class YoutubeModule {}
