import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchListComponent } from './search/search-list/search-list.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchItemComponent, SearchListComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
