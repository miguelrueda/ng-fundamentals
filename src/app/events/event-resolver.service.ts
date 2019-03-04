import { Injectable } from "@angular/core";
import { EventsService } from "./shared/events.service";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private eventService: EventsService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(+route.params['id']);
    }

}