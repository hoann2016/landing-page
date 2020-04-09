import { Component, OnInit } from '@angular/core';
import { StepService } from 'app/features/services/step.service';
import { TranslateService } from '@ngx-translate/core';

interface Service {
    name: string;
    duration: number;
    price: number;
    type: string;
    description: string;
}
interface Services {
    name: string;
    services: Array<Service>;
}

@Component({
    selector: 'app-home-step1',
    styleUrls: ['./step1.component.scss'],
    templateUrl: './step1.component.html',
})
export class Step1Component implements OnInit {
    services: Array<Services> = [];
    constructor(
        private stepService: StepService,
        private translateService: TranslateService
    ) { }

    ngOnInit() {
        this.services = [
            {
                name: 'Features.DemoSteps.Step1.Services.Styling.Title',
                services: [
                    {
                        name: 'Features.DemoSteps.Step1.Services.Styling.Services.ShampooStyle',
                        duration: 60,
                        price: 45000,
                        type: 'sampo_blow',
                        description: 'Features.DemoSteps.Step1.Services.Styling.Services.ShampooStyleDes'
                    },
                    {
                        name: 'Features.DemoSteps.Step1.Services.Styling.Services.ShampooStyleFlatIron',
                        duration: 60,
                        price: 90000,
                        type: 'sampo_blow',
                        description: 'Features.DemoSteps.Step1.Services.Styling.Services.ShampooStyleFlatIronDes'
                    },
                    {
                        name: 'Features.DemoSteps.Step1.Services.Styling.Services.Braids',
                        duration: 120,
                        price: 130000,
                        type: 'sampo_blow',
                        description: 'Features.DemoSteps.Step1.Services.Styling.Services.BraidsDes'
                    },
                ]
            },
            {
                name: 'Features.DemoSteps.Step1.Services.HairCutting.Title',
                services: [
                    {
                        name: 'Features.DemoSteps.Step1.Services.HairCutting.Services.CutStyle',
                        duration: 60,
                        price: 45000,
                        type: 'haircut',
                        description: 'Features.DemoSteps.Step1.Services.HairCutting.Services.CutStyleDes'
                    },
                    {
                        name: 'Features.DemoSteps.Step1.Services.HairCutting.Services.CutSet',
                        duration: 60,
                        price: 90000,
                        type: 'haircut',
                        description: 'Features.DemoSteps.Step1.Services.HairCutting.Services.CutSetDes'
                    },
                    {
                        name: 'Features.DemoSteps.Step1.Services.HairCutting.Services.BarberShort',
                        duration: 120,
                        price: 130000,
                        type: 'haircut',
                        description: 'Features.DemoSteps.Step1.Services.HairCutting.Services.BarberShortDes'
                    },
                ]
            },
            {
                name: 'Features.DemoSteps.Step1.Services.Manicures.Title',
                services: [
                    {
                        name: 'Features.DemoSteps.Step1.Services.Manicures.Services.HandExfoliate',
                        duration: 60,
                        price: 45000,
                        type: 'massage',
                        description: 'Features.DemoSteps.Step1.Services.Manicures.Services.HandExfoliateDes'
                    },
                    {
                        name: 'Features.DemoSteps.Step1.Services.Manicures.Services.HandMassage',
                        duration: 60,
                        price: 90000,
                        type: 'massage',
                        description: 'Features.DemoSteps.Step1.Services.Manicures.Services.HandMassageDes'
                    }
                ]
            }
        ];
    }

    goToStep(step: number, value: any) {
        if (value) {
            this.stepService.setDataStep({ serviceName: value.name, demoPrice: value.price, duration: value.duration, type: value.type });
        }
        this.stepService.changeStep(step);
    }
}
