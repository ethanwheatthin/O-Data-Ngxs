import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class PlayersService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllPlayers(): Observable<[]> {
    return this.http.get<any>('/api/players');
  }
}