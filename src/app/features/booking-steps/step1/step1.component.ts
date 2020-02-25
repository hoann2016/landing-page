import { Component, OnInit } from '@angular/core';
import { StepService } from 'app/features/services/step.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home-step1',
    styleUrls: ['./step1.component.scss'],
    templateUrl: './step1.component.html',
})

export class Step1Component implements OnInit {
    constructor(
        private stepService: StepService,
        private translateService: TranslateService
    ) { }

    ngOnInit() { }

    goToStep(step: number, value: any) {
        if (value) {
            this.stepService.setDataStep({ serviceName: this.translateService.instant(value.name), demoPrice: value.price });
        }
        this.stepService.changeStep(step);
    }
}
