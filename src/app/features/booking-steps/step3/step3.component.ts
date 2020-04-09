import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StepService } from 'app/features/services/step.service';

@Component({
    selector: 'app-home-step3',
    styleUrls: ['./step3.component.scss'],
    templateUrl: './step3.component.html',
})

export class Step3Component implements OnInit {

    timeBlocks = [
        {
            title: '8:00 AM',
            value: '8:00'
        },
        {
            title: '9:00 AM',
            value: '9:00'
        },
        {
            title: '10:00 AM',
            value: '10:00'
        },
        {
            title: '11:00 AM',
            value: '11:00'
        },
        {
            title: '12:00 PM',
            value: '12:00'
        },
        {
            title: '1:00 PM',
            value: '13:00'
        }
    ];
    demoUser: { staffName: string, timeSelect: string } = {
        staffName: null, timeSelect: null
    };
    numberPeople: number = 1;
    constructor(
        private stepService: StepService
    ) { }

    ngOnInit() {
    }

    selectStaff(staffName: string): void {
        this.demoUser.staffName = staffName;
    }

    selectTime(time: string): void {
        this.demoUser.timeSelect = time;
    }

    goToStep(step: number, prev: boolean = false): void {
        if (!prev) {
            if (this.numberPeople && this.demoUser.timeSelect) {
                this.stepService.setDataStep({
                    timePeriod: this.demoUser.timeSelect,
                    time: this.demoUser.timeSelect,
                    quantity: this.numberPeople
                });
                this.stepService.changeStep(step);
            }
        } else {
            this.stepService.changeStep(step);
        }
    }
    increase(): void {
        this.numberPeople++;
    }
    decrease(): void {
        if (this.numberPeople > 1) {
            this.numberPeople--;
        }
    }

}
