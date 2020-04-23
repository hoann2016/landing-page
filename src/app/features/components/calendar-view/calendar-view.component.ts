import {
    Component, OnInit, ChangeDetectionStrategy,
    ChangeDetectorRef, Output, EventEmitter, ViewChild, ElementRef, Input, OnChanges, SimpleChanges
} from '@angular/core';
import { timer } from 'rxjs';
import { startOfWeek, endOfWeek, format, add, addMinutes } from 'date-fns';
import {
    faCaretDown,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { CurrentWeekDay } from '../../models/calendar-viewer/current-week-day.model';
import { CalendarStaff } from '../../models/calendar-viewer/calendar-staff.model';
import {
    ServiceBookingsColor, CalendarSidebar, CalendarDefaultBookingsType,
    CalendarStaffListType
} from './calendar.constant';
import { SidebarIconsModel, CalendarSidebarItem } from '../../models/calendar-viewer/sidebar-icons.model';
import { CalendarBooking } from '../../models/calendar-viewer/calendar-booking.model';
import { StepService } from '../../services/step.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { BookingStepConstant } from '../../constants/booking-step.constant';

@Component({
    selector: 'app-calendar-view',
    templateUrl: './calendar-view.component.html',
    styleUrls: ['./calendar-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('flyTicket', [
            state('initial', style({
                top: '{{top_var}}',
                left: '{{left_var}}'
            }), { params: { top_var: 0, left_var: '270%'} }),
            state('go', style({
                top: '{{top_var}}',
                left: '{{left_var}}'
            }), { params: { top_var: 0, left_var: 0 } }),
            transition('* => go', [
                animate(1600, keyframes([
                    style({ left: '{{init_left}}', top: '{{top_first}}', offset: 0}),
                    style({ left: '{{init_left}}', top: '{{top_first}}', offset: 0.45}),
                    style({
                        left: 'calc({{left_var}} + {{left_or_right}})',
                        top: 'calc({{top_var}} + {{top_animation}})', offset: 0.62
                    }),
                    style({ left: '{{left_var}}', top: '{{top_var}}', offset: .85}),
                    style({ transform: 'rotate(-5deg)', left: '{{left_var}}', top: '{{top_var}}', offset: .92}),
                    style({ transform: 'rotate(5deg)', left: '{{left_var}}', top: '{{top_var}}', offset: .94}),
                    style({ transform: 'rotate(-5deg)', left: '{{left_var}}', top: '{{top_var}}', offset: .96}),
                    style({ transform: 'rotate(5deg)', left: '{{left_var}}', top: '{{top_var}}', offset: .98}),
                    style({ left: '{{left_var}}', top: '{{top_var}}', offset: 1.0})
                ]))
            ], { params: { top_var: 0, left_var: 0, top_first: 0, init_left: '270%', left_or_right: 0, top_animation: 0 } })
        ])
    ]
})
export class CalendarViewComponent implements OnInit, OnChanges {
    @Input('type') solutionType: string = BookingStepConstant.defaultType;
    listIcons: SidebarIconsModel = {
        faCaretDown,
        faChevronLeft,
        faChevronRight
    };
    currentWeekDay: CurrentWeekDay = {
        from: format(add(startOfWeek(new Date()), { days: 1 }), 'dd-MM-yyyy'),
        to: format(add(endOfWeek(new Date()), { days: 1 }), 'dd-MM-yyyy')
    };
    staffs: Array<CalendarStaff> = CalendarStaffListType[this.solutionType];
    servicesColor: { [key: string]: string } = ServiceBookingsColor;
    tickets: Array<CalendarBooking> = CalendarDefaultBookingsType[this.solutionType];
    sidebarItems: Array<CalendarSidebarItem> = CalendarSidebar;
    listDaysInWeek: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    @Output('bookingIsCreated') bookingCreated: EventEmitter<boolean> = new EventEmitter<boolean>();
    @ViewChild('calendar', { static: true }) calendarEl: ElementRef<any>;

    constructor(
        private cdr: ChangeDetectorRef,
        private stepService: StepService
    ) { }

    ngOnInit() {
        // Cong thuc: height: 45px; -> top: so half * 45px + 3px. height: half * 45px - 8px
        this.stepService.dispatchCreateNewTicketBooking$.subscribe((status: boolean) => {
            const booking = this.stepService.testBookingData();
            if (status && booking) {
                const bookingHelperData: any = {
                    today: new Date(),
                    bookingTime: booking.timePeriod,
                };
                const dateBooking: Date =  new Date(
                    bookingHelperData.today.getFullYear(),
                    bookingHelperData.today.getMonth(),
                    bookingHelperData.today.getDate(),
                    +bookingHelperData.bookingTime.split(':')[0],
                    +bookingHelperData.bookingTime.split(':')[1], 0, 0
                );
                const newBooking: CalendarBooking = {
                    id: this.tickets.length + 1,
                    timePeriod: `${bookingHelperData.bookingTime} - ${
                        format(addMinutes(dateBooking, booking.duration), 'HH:mm' )
                    }`,
                    serviceName: booking.serviceName,
                    staffName: this.staffs[Math.floor(Math.random() * this.staffs.length)].name,
                    styles: {
                        top: (this.compareDiffTwoHour(bookingHelperData.bookingTime) * 45 * 2 + 3) + 'px',
                        left: `calc(${ this.listDaysInWeek.indexOf(booking.selectedDOW) }00% + 4px)`,
                        height: (((booking.duration / 30) * 45) - 8) + 'px',
                        background: ServiceBookingsColor[booking.type],
                        zIndex: this.tickets.length + 1,
                        animationTop: `calc(${this.compareDiffTwoHour(bookingHelperData.bookingTime) * -1 * 45 * 2 + 3 - 200 }px)`
                    },
                    type: booking.type,
                    isOpacity: false,
                    isNew: true,
                    at: this.listDaysInWeek.indexOf(booking.selectedDOW)
                };
                this.tickets.push(newBooking);
                this.tickets.map((item: CalendarBooking, index: number) => {
                    if (item.type !== newBooking.type) {
                        this.tickets[index].isOpacity = true;
                    }
                });
                this.bookingCreated.emit(true);
                this.calendarEl.nativeElement.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                this.cdr.markForCheck();
                this.handleCloseBlurAnimation();
            }
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes && changes.solutionType && !changes.solutionType.firstChange) {
            this.tickets = CalendarDefaultBookingsType[this.solutionType];
            this.staffs = CalendarStaffListType[this.solutionType];
        }
    }

    handleCloseBlurAnimation(): void {
        timer(2100).subscribe(_ => {
            this.tickets.map((item: CalendarBooking, index: number) => {
                this.tickets[index].isOpacity = false;
                this.tickets[index].isNew = false;
            });
            this.cdr.markForCheck();
        });
    }

    trackByCalendarStaff(index: number, item: CalendarStaff): any {
        return item.id;
    }

    trackByBookingInCalendar(index: number, item: any): any {
        return item.id;
    }

    private compareDiffTwoHour(hour: string): number {
        const dateLeft: any = new Date(2020, 4, 5, 8, 0, 0);
        const dateRight: any = new Date(2020, 4, 5, +hour.split(':')[0], +hour.split(':')[1], 0);
        const diffHours: number  = Math.floor(((dateRight - dateLeft) % 86400000) / 3600000);
        const diffMinutes: number = Math.round((((dateRight - dateLeft) % 86400000) % 3600000) / 60000);
        return diffHours + ((diffMinutes % 60) / 60);
    }
}
