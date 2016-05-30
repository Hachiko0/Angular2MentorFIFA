import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Tournament } from './tournament';

@Injectable()
export class TournamentService {
    constructor(private http: Http) { }

    getActiveTournaments(): any {
        //alert(666);
        //return this.http.get('http://localhost:6456/api/teams').forEach(v => console.log(v.json));
        alert(444);
        return this.http.get('api/teams').forEach(v => console.log(v.json));
    }
}