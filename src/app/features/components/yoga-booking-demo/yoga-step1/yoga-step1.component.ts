import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { IconDefinition, faCaretDown, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { NgbDateParserFormatter, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

const listStudio: Array<{name: string; address: string}> = [
    {
        name: 'Studio 1',
        address: '150 Nguyễn Thị Thập, Quận 7, TP.HCM'
    },
    {
        name: 'Studio 2',
        address: '110 Võ Văn Tần, Quận 3, TP.HCM'
    },
    {
        name: 'Studio 3',
        address: '256 Trần Hưng Đạo, Quận 7, TP.HCM'
    },
    {
        name: 'Studio 4',
        address: '87 Trần Văn Đang, Quận 7, TP.HCM'
    }
]


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
    classes: Array<{name: string; address: string}> = listStudio;
    today: Date = new Date();
    minDate: NgbDate = new NgbDate(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate());
    currentDate: NgbDate = new NgbDate(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate());
    formFilterClass: FormGroup;

    constructor(
        public formatter: NgbDateParserFormatter,
        private ngbCalendar: NgbCalendar,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.initFormFilterClass();
    }

    goDate(isNext: boolean): void {
        if (isNext) {
            this.currentDate = this.ngbCalendar.getNext(this.currentDate, 'd', 1);
            return;
        }
        this.currentDate = this.ngbCalendar.getPrev(this.currentDate, 'd', 1);
    }

    changeDate(event: any): void {
        this.currentDate = new NgbDate(event.year, event.month, event.day);
    }

    chooseClass(index: number) {
        this.formFilterClass.patchValue({ classIndex: index });
    }

    rangeValue(event: any, el: ElementRef): void {
        console.log({ event });
    }

    private initFormFilterClass(): void {
        this.formFilterClass = this.fb.group({
            classIndex: [0]
        });
    }
}
