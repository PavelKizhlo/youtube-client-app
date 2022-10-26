import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class SharedModule {}
