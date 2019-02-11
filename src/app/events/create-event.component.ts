import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IEvent, EventsService } from "./shared";

@Component({
    templateUrl: 'create-event.component.html',
    styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error ::-ms-input-placeholder { color: #999 }
  `]
})
export class CreateEventComponent implements OnInit {

    newEvent: IEvent;
    isDirty = true;

    constructor(private router: Router, private eventService: EventsService) {

    }

    ngOnInit() {
        
    }

    saveEvent(formValues) {
        console.log(formValues);
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    public cancel() {
        this.router.navigate(['/events']);
    }

}