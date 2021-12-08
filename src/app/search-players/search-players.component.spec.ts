import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {Observable, of} from 'rxjs';
import { FilterPipe } from '../shared/pipes/filter.pipe';

import { SearchPlayersComponent } from './search-players.component';
import { SearchPlayersService } from './services/search-players.service';

class MockLoginService {
  getAllByInches() {
      return of({values :[
        {first_name:"Alex",h_in:"77",h_meters:"1.96",last_name:"Acker"},
        {first_name:"Hassan",h_in:"76",h_meters:"1.93",last_name:"Adams"},
        {first_name:"Arron",h_in:"77",h_meters:"1.96",last_name:"Afflalo"}
      ]});
    }
}

describe('SearchPlayersComponent', () => {
  let component: SearchPlayersComponent;
  let fixture: ComponentFixture<SearchPlayersComponent>;
  let service = new MockLoginService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPlayersComponent, FilterPipe ],
      providers: [SearchPlayersService],
      imports: [HttpClientModule, FormsModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPlayersComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should consult all NBA player', () => {
    component.ngOnInit();
    service.getAllByInches().subscribe(response => component.players = response.values);
    let playersLength = component.players.length;

    fixture.detectChanges();
    expect(playersLength).toBeGreaterThan(0);
  });

});
