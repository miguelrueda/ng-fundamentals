import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventsService } from "../shared/events.service";

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventsService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
    }

}
