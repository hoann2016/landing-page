import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbCalendar, NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { StepService } from 'app/features/services/step.service';
import { TranslateService } from '@ngx-translate/core';

export const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'dddd, DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LLLL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@Component({
    selector: 'app-home-step2',
    styleUrls: ['./step2.component.scss'],
    templateUrl: './step2.component.html'
})

export class Step2Component implements OnInit {
    date
    branches: Array<any>;
    districts: Array<any>;
    wards: Array<any>;
    selectedBranch: any;
    selectedDistrict: any;
    selectedCity: any;
    selectedWard: any;
    numberPeople: number;
    currentDay: Date = new Date();
    isCustomBranch: boolean = false;
    cities: Array<any> = [];
    icon: { [key: string]: any } = {
        calendar: faCalendarAlt
    };
    calendarStruct: { today: NgbDateStruct } = {
        today: null
    };
    selectedDate: any;

    constructor(
        private calendar: NgbCalendar,
        private stepService: StepService,
        private translateService: TranslateService
    ) {
        this.currentDay.setMonth(this.currentDay.getMonth() + 1);
        this.selectedDate = {
            day: this.currentDay.getDate(),
            month: this.currentDay.getUTCMonth(),
            year: this.currentDay.getFullYear()
        }
        this.calendarStruct.today = this.calendar.getToday();
        this.branches = [
            { id: 1, name: 'The Braizer - 150 Nguyễn Thị Thập, Quận 7, TPHCM' },
            { id: 2, name: 'The Braizer - 110 Võ Văn Tần, Quận 3, TPHCM' },
            { id: 3, name: 'The Braizer - 256 Trần Hưng Đạo, Quận 5, TPHCM' },
            { id: 4, name: 'The Braizer - 87 Trần Văn Đang, Quận 3, TPHCM' },
        ];
        this.districts = [
            { id: 1, name: 'Quận 7' },
            { id: 2, name: 'Quận 1' },
            { id: 3, name: 'Quận 2' },
            { id: 4, name: 'Quận 3' },
        ];
        this.wards = [
            { id: 1, name: 'Phường 1' },
            { id: 2, name: 'Phường 2' },
            { id: 3, name: 'Phường 3' },
            { id: 4, name: 'Phường 4' },
        ];
        this.cities = [
            { id: 1, name: "TP. Hồ Chí Minh" },
            { id: 2, name: "TP. Hà Nội" },
            { id: 3, name: "Đà Nẵng" }
        ]
        this.numberPeople = 1;
    }

    ngOnInit() {
        this.selectedBranch = this.branches[1];
        this.selectedDistrict = this.districts[0];
        this.selectedWard = this.wards[0];
        this.selectedCity = this.cities[0];

    }
    increase(): void {
        this.numberPeople++;
    }
    decrease(): void {
        this.numberPeople--;
    }
    change(eventData: any) {
        console.log(this.selectedBranch);
    }
    goToStep(step: number) {
        this.stepService.setDataStep(
            { date: `${ this.selectedDate.day > 9 ? this.selectedDate.day : '0' + this.selectedDate.day }/${ this.selectedDate.month > 9 ? this.selectedDate.month : '0' + this.selectedDate.month }/${ this.selectedDate.year }`,
            selectedDOW: this.translateService.instant('Common.Day.' + this.calendar.getWeekday(this.selectedDate))
        });
        this.stepService.changeStep(step);
    }

    changeBranch(event: any) {
        if (event && event.value && event.value.id === 0) {
            this.isCustomBranch = true;
        }
    }
    
    isDisabled = (date: NgbDate, current: {month: number}) => {
        return new Date(date.year, date.month, date.day).getDay() === 2;
    };
}
