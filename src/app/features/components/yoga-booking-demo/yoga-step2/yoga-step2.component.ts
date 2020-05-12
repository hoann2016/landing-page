import { Component, OnInit, ViewEncapsulation, OnDestroy, Output, EventEmitter } from '@angular/core';
import { YogaBookingService } from '../services/yoga-booking.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil, map } from 'rxjs/operators';
import { getDay, format } from 'date-fns';
import { StepService } from 'app/features/services/step.service';
import { StaffList } from '../constants/staff.constant';

@Component({
    selector: 'app-yoga-step2',
    templateUrl: './yoga-step2.component.html',
    styleUrls: ['./yoga-step2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class YogaStep2Component implements OnInit, OnDestroy {
    public formPaymentYoga: FormGroup;
    public yogaData: any;
    public submit: boolean = false;
    listDaysInWeek: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    private _onDestroy$: Subject<boolean> = new Subject<boolean>();

    @Output('bookingIsCreated') bookingIsCreated: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private yogaBookingService: YogaBookingService,
        private fb: FormBuilder,
        private stepService: StepService
    ) { }

    ngOnInit() {
        this.initFormPaymentYoga();
        this.subscribe();
    }

    goToStep(step: number): void {
        this.yogaBookingService.goToStepYoga(step);
    }

    increase(): void {
        this.formPaymentYoga.get('quantity').setValue(parseFloat(this.formPaymentYoga.get('quantity').value) + 1);
    }

    decrease(): void {
        if (parseFloat(this.formPaymentYoga.get('quantity').value) > 1) {
            this.formPaymentYoga.get('quantity').setValue(parseFloat(this.formPaymentYoga.get('quantity').value) -1);
        }
    }

    initFormPaymentYoga(): void {
        this.formPaymentYoga = this.fb.group({
            quantity: [1],
            name: [null, Validators.required],
            email: [null, Validators.compose([Validators.required, Validators.email])],
            phone: [null],
            payNow: [true],
            day: [null],
            time: [null],
            className: [null],
            price: [null],
            dayTime: [null],
            total: [0],
            discount: [0],
            subTotal: [0],
            serviceName: [null],
            type: [null],
            user: [1]
        });
    }

    subscribe(): void {
        this.yogaBookingService.yogaBookingData$.pipe(
            distinctUntilChanged(),
            takeUntil(this._onDestroy$)
        ).subscribe((data: any) => {
            if (data && data.value && data.filter) {
                const value: any = data.value;
                const filter: any = data.filter;
                const total: number = value.price * parseFloat(this.formPaymentYoga.get('quantity').value);
                const discount: number = this.formPaymentYoga.get('payNow').value ? total * 10 / 100 : 0;
                this.formPaymentYoga.patchValue({
                    dayTime: getDay(new Date(filter.currentDate.year, filter.currentDate.month - 1, filter.currentDate.day)),
                    day: format(new Date(filter.currentDate.year, filter.currentDate.month - 1, filter.currentDate.day), 'dd/MM/yyyy'),
                    price: value.price,
                    time: format(value.timeFrom, 'HH:mm a'),
                    subTotal: total,
                    discount: discount,
                    total: total - discount,
                    serviceName: value.name,
                    type: value.type,
                    user: value.user.id
                });
            }
        });

        this.formPaymentYoga.valueChanges.pipe(
            map((formValue: any) => ({
                quantity: formValue.quantity,
                payNow: formValue.payNow
            })),
            distinctUntilChanged((x: { quantity: any, payNow: boolean }, y: { quantity: any, payNow: boolean }) => {
                return parseFloat(x.quantity) === parseFloat(y.quantity) && x.payNow === y.payNow;
            }),
            takeUntil(this._onDestroy$)
        ).subscribe((data: any) => {
            this.reCalculateYogaBooking(this.formPaymentYoga.value);
        });
    }

    submitForm(): void {
        this.submit = true;
        if (this.formPaymentYoga.valid) {
            const formValue: any = this.formPaymentYoga.value;
            this.stepService.setDataStep({
                date: formValue.day,
                demoPrice: formValue.total,
                duration: 60,
                quantity: formValue.quantity,
                selectedDOW: this.listDaysInWeek[formValue.dayTime],
                serviceName: formValue.serviceName,
                staffName: StaffList[formValue.user - 1].name || null,
                time: formValue.time.split(" ")[0],
                timePeriod: formValue.time.split(" ")[0],
                type: formValue.type
            });
            this.bookingIsCreated.emit(true);
        }
    }

    private reCalculateYogaBooking(data: any): void {
        const total: number = data.price * parseFloat(this.formPaymentYoga.get('quantity').value);
        const discount: number = this.formPaymentYoga.get('payNow').value ? total * 10 / 100 : 0;
        this.formPaymentYoga.patchValue({
            price: data.price,
            subTotal: total,
            discount: discount,
            total: total - discount
        });
    }

    ngOnDestroy(): void {
        this._onDestroy$.next();
        this._onDestroy$.complete();
    }
}
