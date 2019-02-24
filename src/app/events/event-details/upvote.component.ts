import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from "@angular/core";

@Component({
    selector: 'upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                    <i class="glyphicon glyphicon-heart" 
                    [style.color]="iconColor"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent implements OnInit {

    @Input() count: number;
    @Input() set voted(val){
        this.iconColor = val ? 'red' : 'white';
    };
    @Output() vote  = new EventEmitter();
    iconColor: string

    constructor() {

    }

    ngOnInit() {

    }

    onClick() {
        this.vote.emit({});
    }


}