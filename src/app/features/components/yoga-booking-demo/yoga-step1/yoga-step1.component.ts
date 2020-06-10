import { Component, OnInit, ViewEncapsulation, ElementRef, OnDestroy } from '@angular/core';
import { IconDefinition, faCaretDown, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { NgbDateParserFormatter, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, takeUntil, map, tap } from 'rxjs/operators';
import { ClassModel } from '../models/class.model';
import { isAfter, isBefore, isEqual, getDay } from 'date-fns';
import { YogaBookingService } from '../services/yoga-booking.service';
import { StaffList } from '../constants/staff.constant';
import { Classes } from '../constants/class.constant';

const listStudio: Array<{name: string; address: string}> = [
    {
        name: 'Studio 1',
        address: '150 Nguyễn Thị Thập, Quận 7, TP.HCM'
    },
    {
        name: 'Studio 2',
        address: '110 Võ Văn Tần, Quận 3, TP.HCM'
    },
    {
        name: 'Studio 3',
        address: '256 Trần Hưng Đạo, Quận 7, TP.HCM'
    },
    {
        name: 'Studio 4',
        address: '87 Trần Văn Đang, Quận 7, TP.HCM'
    }
];

@Component({
    selector: 'app-yoga-step1',
    templateUrl: './yoga-step1.component.html',
    styleUrls: ['./yoga-step1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class YogaStep1Component implements OnInit, OnDestroy {
    marks: Array<string> = [
        '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'
        , '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00',
        '20:30', '21:00', '21:30', '22:00'
    ];
    icons: { [key: string]: IconDefinition } = {
        arrowDown: faCaretDown,
        arrowLeft: faCaretLeft,
        arrowRight: faCaretRight
    };
    classes: Array<{name: string; address: string}> = listStudio;
    today: Date = new Date();
    minDate: NgbDate = new NgbDate(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate());
    formFilterClass: FormGroup;
    step: number = 100 / (this.marks.length - 1);
    listClasses: Array<ClassModel> = [];
    listClassesToShow: Array<ClassModel> = [];
    listClassFilter: Array<{ title: string; value: string | null; }> = [
        {
            title: 'Features.DemoBooking.Yoga.Step.Step1.AllClass',
            value: null
        },
        {
            title: 'Twisting',
            value: 'Twisting'
        },
        {
            title: 'Vinyasa',
            value: 'Vinyasa'
        },
        {
            title: 'Hatha Flow',
            value: 'Hatha Flow'
        },
        {
            title: 'Morning Flow',
            value: 'Morning Flow'
        },
        {
            title: 'Yoga Santulan',
            value: 'Yoga Santulan'
        },
        {
            title: 'Dynamic Flow',
            value: 'Dynamic Flow'
        },
        {
            title: 'Hip Opening',
            value: 'Hip Opening'
        },
        {
            title: 'Power Vinyasa',
            value: 'Power Vinyasa'
        }
    ];
    listTeachers: Array<{ name: string; avatar: string, value: string | null }> = [
        {
            name: 'Features.DemoBooking.Yoga.Step.Step1.AllTeacher',
            value: null,
            avatar: null
        }
    ].concat(StaffList);

    private _onDestroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
        public formatter: NgbDateParserFormatter,
        private ngbCalendar: NgbCalendar,
        private fb: FormBuilder,
        private yogaBookingService: YogaBookingService
    ) {
    }

    ngOnInit() {
        this.initFormFilterClass();
        this.yogaBookingService.yogaFilterData$.subscribe((data: any) => {
            if (data) {
                this.formFilterClass.patchValue(data);
            }
            this.calculateListClassesData();
        });
        this.subscribe();
    }

    ngOnDestroy(): void {
        this._onDestroy$.next(true);
        this._onDestroy$.complete();
    }

    goDate(isNext: boolean): void {
        if (isNext) {
            this.formFilterClass.get('currentDate').setValue(
                this.ngbCalendar.getNext(this.formFilterClass.get('currentDate').value, 'd', 1)
            );
            this.calculateListClassesData();
            return;
        }
        this.formFilterClass.get('currentDate').setValue(this.ngbCalendar.getPrev(this.formFilterClass.get('currentDate').value, 'd', 1));
        this.calculateListClassesData();
    }

    changeDate(event: any): void {
        this.formFilterClass.get('currentDate').setValue(new NgbDate(event.year, event.month, event.day));
    }

    chooseClass(index: number) {
        this.formFilterClass.patchValue({ classIndex: index });
        this.calculateListClassesData();
    }

    chooseRoom(index: number): void {
        this.formFilterClass.get('roomIndex').setValue(index);
    }

    chooseTeacher(index: number): void {
        this.formFilterClass.get('teacherIndex').setValue(index);
    }

    chooseClassAndGoToPayment(index: number): void {
        if (this.listClassesToShow[index].slot < 10) {
            this.yogaBookingService.setYogaFilter(this.formFilterClass.value);
            this.yogaBookingService.setYogaData({ value: this.listClassesToShow[index], filter: this.formFilterClass.value });
            this.yogaBookingService.goToStepYoga(2);
        }
    }

    private initFormFilterClass(): void {
        this.formFilterClass = this.fb.group({
            classIndex: [0],
            rangeTime: [[(100 / (this.marks.length - 1)) * 4, (100 / (this.marks.length - 1)) * 26]],
            currentDate: [new NgbDate(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate())],
            timeFrom: [this.marks[Math.floor(((100 / (this.marks.length - 1)) * 4) / this.step)]],
            timeTo: [this.marks[Math.floor(((100 / (this.marks.length - 1)) * 26) / this.step)]],
            roomIndex: [0],
            teacherIndex: [0]
        });
    }

    private subscribe(): void {
        this.formFilterClass.get('rangeTime').valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            takeUntil(this._onDestroy$)
        ).subscribe((data: Array<number>) => {
            this.formFilterClass.patchValue({
                timeFrom: this.marks[Math.floor(data[0] / this.step)],
                timeTo: this.marks[Math.floor(data[1] / this.step)]
            });
        });

        this.formFilterClass.valueChanges.pipe(
            map((value: any) => ({
                roomIndex: value.roomIndex,
                teacherIndex: value.teacherIndex,
                timeFrom: value.timeFrom,
                timeTo: value.timeTo
            })),
            distinctUntilChanged((item: any, compareItem: any) => JSON.stringify(item) === JSON.stringify(compareItem)),
            takeUntil(this._onDestroy$)
        ).subscribe((data) => {
            this.filterClassByCondition(data);
        });
    }

    private filterClassByCondition(filterValue: any): void {
        this.listClassesToShow = this.listClasses.filter((item: ClassModel) => {
            return (!this.listClassFilter[filterValue.roomIndex].value || item.name === this.listClassFilter[filterValue.roomIndex].value)
                && (
                    !this.listClassFilter[filterValue.teacherIndex].value
                    || item.user.name === this.listTeachers[filterValue.teacherIndex].value)
                && (
                    (
                        isAfter(
                            item.timeFrom,
                            new Date(
                                2020,
                                5,
                                5,
                                parseFloat(filterValue.timeFrom.split(':')[0]),
                                parseFloat(filterValue.timeFrom.split(':')[1]),
                                0,
                                0
                            )
                        )
                        || isEqual(
                            new Date(
                                2020,
                                5,
                                5,
                                parseFloat(filterValue.timeFrom.split(':')[0]),
                                parseFloat(filterValue.timeFrom.split(':')[1]),
                                0,
                                0
                            ),
                            item.timeFrom
                        )
                    )
                    && (
                        isBefore(
                            item.timeTo,
                            new Date(
                                2020,
                                5,
                                5,
                                parseFloat(filterValue.timeTo.split(':')[0]),
                                parseFloat(filterValue.timeTo.split(':')[1]),
                                0,
                                0
                            )
                        )
                        || isEqual(
                            item.timeTo,
                            new Date(
                                2020,
                                5,
                                5,
                                parseFloat(filterValue.timeTo.split(':')[0]),
                                parseFloat(filterValue.timeTo.split(':')[1]),
                                0,
                                0
                            )
                        )
                    )
                );
        });
    }

    private calculateListClassesData(): void {
        const currentStudioIndex: number = this.formFilterClass.get('classIndex').value;
        const currentDate: NgbDate = this.formFilterClass.get('currentDate').value;
        const dateIndex: number = currentDate.day;
        const newClasses: Array<ClassModel> = [];
        for (let i = 0; i < Classes.length; i++) {
            if ((i >= (currentStudioIndex * 30) && i < ((1 + currentStudioIndex) * 30))
                && (dateIndex % 2) === i % 2    
            ) {
                newClasses.push(Classes[i]);
            };
            if (newClasses.length === 15) {
                break;
            }
        }
        this.listClasses = newClasses;
        const formValue: any = this.formFilterClass.value;
        this.filterClassByCondition({
            roomIndex: formValue.roomIndex,
            teacherIndex: formValue.teacherIndex,
            timeFrom: formValue.timeFrom,
            timeTo: formValue.timeTo
        });
    }
}