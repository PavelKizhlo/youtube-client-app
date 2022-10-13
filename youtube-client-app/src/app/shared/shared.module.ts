import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, BrowserAnimationsModule],
  exports: [CommonModule, MaterialModule, FormsModule, BrowserAnimationsModule],
})
export class SharedModule {}
