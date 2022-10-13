import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { DateStatusDirective } from './directives/date-status.directive';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SortResultsService } from './services/sort-results.service';
import { YoutubeFetchService } from './services/youtube-fetch.service';

@NgModule({
  declarations: [
    SearchListComponent,
    SearchItemComponent,
    SearchFilterPipe,
    DateStatusDirective,
    MainPageComponent,
  ],
  imports: [SharedModule],
  exports: [MainPageComponent],
  providers: [SortResultsService, YoutubeFetchService],
})
export class YoutubeModule {}
