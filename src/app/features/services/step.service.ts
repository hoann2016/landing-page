import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class StepService {
    private currentStepSource: BehaviorSubject<number> = new BehaviorSubject<number>(1);
    public currentStep$: Observable<number> = this.currentStepSource.asObservable();

    private stepTestBookingData: BehaviorSubject<any> = new BehaviorSubject<any>({});

    private dispatchCreateNewTicketBookingSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public dispatchCreateNewTicketBooking$: Observable<boolean> = this.dispatchCreateNewTicketBookingSource.asObservable();

    constructor() { }

    changeStep(stepNumber: number): void {
        this.currentStepSource.next(stepNumber);
    }

    setDataStep(data: { [key: string]: any }, clean: boolean = false): void {
        this.stepTestBookingData.next(clean ? {} : { ...this.stepTestBookingData.value, ...data });
    }

    dispatchCreateNewTicketBooking(status: boolean) {
        this.dispatchCreateNewTicketBookingSource.next(status);
    }

    testBookingData(): any {
        return this.stepTestBookingData.value;
    }
}