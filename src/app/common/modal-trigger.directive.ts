import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
        this.el = ref.nativeElement;
    }

   ngOnInit(): void {
       this.el.addEventListener('click', e => {
            console.log(`Modal trigger is for #${this.modalId}()`)
            this.$(`#${this.modalId}`).modal({});
        });
    }

}
