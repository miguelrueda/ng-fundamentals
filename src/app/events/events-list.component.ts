import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

    events: IEvent[];

    constructor(private eventsService: EventsService,
        private activatedRoute: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.events = this.activatedRoute.snapshot.data['events'];
    }

}