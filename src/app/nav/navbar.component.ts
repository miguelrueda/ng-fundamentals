import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ISession, EventsService } from "../events";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px }
        #searchForm { margin-right: 100px }
        li > a.active { color: #F97924; }
        @media (max-width: 1200px) { #searchForm { display: none } } 
    `]
})
export class NavBarComponent {

    searchTerm: string = '';
    foundSessions: ISession[];

    constructor(private auth: AuthService, private eventService: EventsService) {
        
    }

    searchSessions(term: string) {
        this.eventService.searchSessions(term).subscribe(sessions => {
            console.log(`size is: ${sessions.length}`);
            this.foundSessions = sessions;
        });
    }

}