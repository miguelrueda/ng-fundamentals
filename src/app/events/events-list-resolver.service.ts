import { Injectable } from "@angular/core";
import { EventsService } from "./shared/events.service";
import { map } from 'rxjs/operators'
import { Resolve } from "@angular/router";

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventsService) {

    }

    resolve() {
        return this.eventService.getEvents().pipe(map(events => events));
    }

}