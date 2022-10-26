import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { DateStatusDirective } from './directives/date-status.directive';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeFetchService } from './services/youtube-fetch.service';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { SortPipe } from './pipes/sort.pipe';
import { YoutubeApiInterceptor } from './services/youtube-api.interceptor';

const INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: YoutubeApiInterceptor,
  multi: true,
};

@NgModule({
  declarations: [
    SearchListComponent,
    SearchItemComponent,
    SearchFilterPipe,
    DateStatusDirective,
    MainPageComponent,
    DetailedPageComponent,
    SortPipe,
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
  providers: [YoutubeFetchService, INTERCEPTOR_PROVIDER],
})
export class YoutubeModule {}
