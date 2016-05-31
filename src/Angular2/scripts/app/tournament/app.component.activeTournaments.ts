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
        let tournaments: Array<Tournament> = null;
        let result: Promise<void> = this.tournamentService.getActiveTournaments();
        
        //let tournaments: Array<Tournament> = this.tournamentService.getActiveTournaments();
        //tournaments.forEach(t => console.log(t.name));
    }
}
