import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [CommonModule, MaterialModule, FormsModule],
})
export class SharedModule {}
