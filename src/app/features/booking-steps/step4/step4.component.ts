import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepService } from 'app/features/services/step.service';

@Component({
    selector: 'app-home-step4',
    styleUrls: ['./step4.component.scss'],
    templateUrl: './step4.component.html',
})

export class Step4Component implements OnInit {
    stepForm: FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private stepService: StepService
    ) { }

    ngOnInit() {
        this.stepForm = this.formBuilder.group({
            fullName: ['Ludiino Booking', Validators.required],
            phoneNumber: ['0987654321', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            email: ['ludiino@ludiino.com', [Validators.required, Validators.email]],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.stepForm.controls; }

    goToStep(step: number) {
        this.stepService.changeStep(step);
    }
    onSubmit() {
        this.submitted = true;
        if (this.stepForm.invalid) {
            return;
        }
        this.stepService.setDataStep({ staffName: this.stepForm.get('fullName').value });
        this.stepService.changeStep(5);
    }
}
