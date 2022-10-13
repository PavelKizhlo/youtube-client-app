import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FilteringBlockComponent } from './components/filtering-block/filtering-block.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [HeaderComponent, FilteringBlockComponent, NotFoundPageComponent],
  imports: [SharedModule, RouterModule],
  exports: [HeaderComponent, FilteringBlockComponent, NotFoundPageComponent],
})
export class CoreModule {}
