import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

    events: IEvent[];

    constructor(private eventsService: EventsService, private toastr: ToastrService,
        private activatedRoute: ActivatedRoute) {
    }
    
    ngOnInit() {
        this.events = this.activatedRoute.snapshot.data['events'];
    }
   
    public handleThumbnailClick(event: any) {
        this.toastr.success(event);
    }

}