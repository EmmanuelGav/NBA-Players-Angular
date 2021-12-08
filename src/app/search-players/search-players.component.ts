import { Component, OnInit } from '@angular/core';
import { Player } from './model/player.model';
import { SearchPlayersService } from './services/search-players.service';

@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.scss']
})
export class SearchPlayersComponent implements OnInit {

  players!: Player[];
  inches!: number;
  constructor(private searchPlayerService: SearchPlayersService) { }

  ngOnInit(): void {
    this.searchPlayerService.getAllByInches()
      .subscribe(response => {
        this.players = response.values;
      });
  }

}
