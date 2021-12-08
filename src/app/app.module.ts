import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchPlayersComponent } from './search-players/search-players.component';
import { SearchPlayersService } from './search-players/services/search-players.service';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPlayersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreDevtoolsModule.instrument({maxAge:20})
  ],
  providers: [
    SearchPlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
