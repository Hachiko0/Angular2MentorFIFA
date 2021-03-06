"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_service_tournament_1 = require('./app.service.tournament');
var ActiveTournamentsComponent = (function () {
    function ActiveTournamentsComponent(tournamentService) {
        this.tournamentService = tournamentService;
        this.ponyName = 'Krasko';
    }
    ActiveTournamentsComponent.prototype.onClickMe = function () {
        var tournaments = null;
        var result = this.tournamentService.getActiveTournaments();
        //let tournaments: Array<Tournament> = this.tournamentService.getActiveTournaments();
        //tournaments.forEach(t => console.log(t.name));
    };
    ActiveTournamentsComponent = __decorate([
        core_1.Component({
            selector: 'active-tournament',
            template: "<button (click)=\"onClickMe()\">Click me!</button>\n            <p>Hello {{ponyName}}</p>",
            providers: [app_service_tournament_1.TournamentService]
        }), 
        __metadata('design:paramtypes', [app_service_tournament_1.TournamentService])
    ], ActiveTournamentsComponent);
    return ActiveTournamentsComponent;
}());
exports.ActiveTournamentsComponent = ActiveTournamentsComponent;
//# sourceMappingURL=app.component.activeTournaments.js.map