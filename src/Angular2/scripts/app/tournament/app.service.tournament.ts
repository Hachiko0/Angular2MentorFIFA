import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Tournament } from './tournament';

@Injectable()
export class TournamentService {
    constructor(private http: Http) { }

    //getActiveTournaments(): Observable<Tournament[]> {
    //    return this.http.get('api/Tournaments').
    //}
}