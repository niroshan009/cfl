import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from '../model/player';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPlayerPageCount(): Observable<number> {
    let api = '';

    return this.http
      .get<any>(api)
      .pipe(map((data) => Math.ceil(data.data.length / 10)));
  }

  getPlayers(pageNumber: number): Observable<IPlayer[]> {
    let api: string = '';

    return this.http.get<any>(api).pipe(map((data) => (players = data.data)));
  }
}
