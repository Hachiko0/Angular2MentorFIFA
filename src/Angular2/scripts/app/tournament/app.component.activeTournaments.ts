import { Component } from '@angular/core';
import { TournamentService } from './app.service.tournament'
import { Tournament } from './tournament';

@Component({
    selector: 'active-tournament',
    template: `<button (click)="onClickMe()">Click me!</button>
<p>Hello {{ponyName}}</p>`,
    providers:  [TournamentService]
})

export class ActiveTournamentsComponent {
    ponyName: string = 'Krasko';
    constructor(private tournamentService: TournamentService) {

    }

    onClickMe() {
        alert(123);
        let tournaments: Array<Tournament> = this.tournamentService.getActiveTournaments();
        console.log(tournaments);
    }
}
