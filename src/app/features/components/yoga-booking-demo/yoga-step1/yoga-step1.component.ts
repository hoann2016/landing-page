import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconDefinition, faCaretDown, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { addDays, subDays } from 'date-fns';

const currentDate: Date = new Date();

@Component({
    selector: 'app-yoga-step1',
    templateUrl: './yoga-step1.component.html',
    styleUrls: ['./yoga-step1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class YogaStep1Component implements OnInit {
    icons: { [key: string]: IconDefinition } = {
        arrowDown: faCaretDown,
        arrowLeft: faCaretLeft,
        arrowRight: faCaretRight
    };
    
    currentDate: NgbDateStruct = {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        day: currentDate.getDate()
    }

    constructor(public formatter: NgbDateParserFormatter) {
    }

    ngOnInit() {
    }

    goDate(isNext: boolean): void {
        let date: Date;
        if (isNext) {
            date = addDays(new Date(this.currentDate.year, this.currentDate.month, this.currentDate.day), 1);
        } else {
            date = subDays(new Date(this.currentDate.year, this.currentDate.month, this.currentDate.day), 1);
        }
        this.currentDate = { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() }
    }

    changeDate(event: any): void {
        this.currentDate = { ...event, month: event.month };
    }
}
