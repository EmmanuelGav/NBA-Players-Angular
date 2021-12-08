import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../model/player.model';
import { ResponsePlayers } from '../model/response-players.model';

const baseUrl = environment.url;
@Injectable({
  providedIn: 'root'
})
export class SearchPlayersService {

  constructor(private http:HttpClient) { }

  getAllByInches(): Observable<ResponsePlayers> {
    return this.http.get<ResponsePlayers>(baseUrl)
      .pipe(catchError(this.handleError<ResponsePlayers>(baseUrl, {values:[]})))

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
