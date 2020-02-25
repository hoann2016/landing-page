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
            year: this.currentDay.getFullYear(),
            month: this.currentDay.getUTCMonth(),
            day: this.currentDay.getDate()
    
        }
        this.calendarStruct.today = this.calendar.getToday();
        this.branches = [
            { id: 1, name: 'The Braizer Quận 7', address: '45 Tân Mỹ, p Phú Thuận, Quận 7' },
            { id: 2, name: 'Chi nhánh 1', address: '111 Phan Xích Long, Phú Nhuận' },
            { id: 3, name: 'Chi nhánh 2', address: '386 Điện Biên Phủ Quận 1' },
            { id: 4, name: 'Chi nhánh 3', address: '999 Lê Lợi quận 1' },
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
            { date: `${ this.selectedDate.day }-${ this.selectedDate.month }-${ this.selectedDate.year }`,
            selectedDOW: this.translateService.instant("Common.Day." + this.calendar.getWeekday(this.selectedDate))
        });
        this.stepService.changeStep(step);
    }

    changeBranch(event: any) {
        if (event && event.value && event.value.id === 0) {
            this.isCustomBranch = true;
        }
    }
}
