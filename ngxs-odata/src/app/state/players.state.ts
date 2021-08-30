import { Injectable } from '@angular/core';
import {  } from '@ngxs/store';
import { GetPlayers } from '../actions/players.actions';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PlayersService } from '../services/players.service';
import { tap } from 'rxjs/operators';

export class PlayersStateModel {
    players: any;
    dataIsLoaded!: boolean;
}
@State<string[]>({
  name: 'players',
  defaults: [
    //   dataIsLoaded: false
  ]
})
@Injectable()
export class PlayersState {
    constructor(private playersService: PlayersService){}

    @Action(GetPlayers)
    getCourses({getState, setState}: StateContext<PlayersStateModel>) {
      return this.playersService.getAllPlayers().pipe(
        tap(result => {
          const state = getState();
          setState({
            ...state,
            players: result,
            dataIsLoaded: true
          });
        })
      );
    }
}