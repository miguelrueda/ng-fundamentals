import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .pad-left { margin-left: 10px; }
        .thumbnail { min-height: 210px; }
        .well div { color: #bbb; }
        .green { color: #003300 !important; }
        .bold: { font-weight: bold }
    `]
})
export class EventThumbnailComponent {

    @Input() event: any;
    someProperty: any = 'some value';

    logFoo() {
        console.log('foo');
    }

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return ['green', 'bold'];
        } 
        return [];
    }

    getStartTimeStyle() {
        if (this.event && this.event.time === '8:00 am') {
            return {color: '#003300', 'font-weight': 'bold'}
        }
        return {}
    }

}