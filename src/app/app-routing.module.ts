import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchPlayersComponent } from './search-players/search-players.component';

const routes: Routes = [
  { path: 'search-players', component: SearchPlayersComponent },
  { path: '**', component: SearchPlayersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
