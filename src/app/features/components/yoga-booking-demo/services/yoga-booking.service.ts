import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class YogaBookingService {
    private yogaFilterDataSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public yogaFilterData$: Observable<any> = this.yogaFilterDataSource.asObservable();

    private yogaBookingDataSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public yogaBookingData$: Observable<any> = this.yogaBookingDataSource.asObservable();

    private yogaBookingStepSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public yogaBookingStep$: Observable<number> = this.yogaBookingStepSource.asObservable();

    public setYogaFilter(data: any, isNew: boolean = false): void {
        this.yogaFilterDataSource.next(isNew ? data : { ...this.yogaFilterDataSource.value, ...data });
    }

    public setYogaData(data: any, isNew: boolean = false) {
        this.yogaBookingDataSource.next(isNew ? data : { ...this.yogaBookingDataSource.value, ...data });
    }

    public goToStepYoga(step: number): void {
        this.yogaBookingStepSource.next(step);
    }
}
