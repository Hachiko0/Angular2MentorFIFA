import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
//import { Observable }     from 'rxjs/Observable';
import { Tournament } from './tournament';

import {Observable} from 'rxjs/Rx';

import './rxjs-operators767687';


@Injectable()
export class TournamentService {
    constructor(private http: Http) { }

    public getActiveTournaments(): Observable<Tournament[]> {
        return this.http.get('api/teams')
            .map(this.extractData)
            .catch(this.handleError);

        //let result = this.http.get('api/teams').forEach(v => console.log(v.json()));
        //return result;
    }

    public asdf(): Promise<Tournament[]> {
        return this.http.get('api/teams')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);

        //let result = this.http.get('api/teams').forEach(v => console.log(v.json()));
        //return result;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}