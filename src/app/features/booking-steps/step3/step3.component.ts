import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StepService } from 'app/features/services/step.service';

@Component({
    selector: 'app-home-step3',
    styleUrls: ['./step3.component.scss'],
    templateUrl: './step3.component.html',
})

export class Step3Component implements OnInit {

    timeBlocks = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM'];
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
                this.stepService.setDataStep({ timePeriod: this.demoUser.timeSelect, time: this.demoUser.timeSelect, quantity: this.numberPeople });
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
        this.numberPeople--;
    }

}
