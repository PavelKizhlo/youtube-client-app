import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FilteringBlockComponent } from './components/filtering-block/filtering-block.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FilteringBlockComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, FilteringBlockComponent],
})
export class CoreModule {}
