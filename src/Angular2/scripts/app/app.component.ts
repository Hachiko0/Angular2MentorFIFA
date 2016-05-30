import { Component } from '@angular/core';
import { ActiveTournamentsComponent } from './tournament/app.component.activeTournaments';
import { DashboardComponent } from './app.component.dashboard';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';



@Component({
    selector: 'my-app',
    templateUrl: 'app/component.html',
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ROUTER_PROVIDERS ]
})

@RouteConfig([
    {
        path: '/activeTournament',
        name: 'ActiveTournaments',
        component: ActiveTournamentsComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
])
export class AppComponent { }
