import {
    Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef,
    Output, EventEmitter
} from '@angular/core';
import { startOfWeek, endOfWeek, format, add, addMinutes } from 'date-fns';
import {
    faCalendarAlt,
    faClock,
    faFileAlt,
    faUser,
    faClipboardList,
    faFileInvoice,
    faBoxOpen,
    faChartLine,
    faCogs,
    faBell,
    faAlignCenter,
    faCaretDown,
    faFilter,
    faChartBar,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { CurrentWeekDay } from '../../models/calendar-viewer/current-week-day.model';
import { CalendarStaff } from '../../models/calendar-viewer/calendar-staff.model';
import {
    CalendarStaffList, CalendarDefaultBookings, ServiceBookingsColor, CalendarSidebar
} from './calendar.constant';
import { SidebarIconsModel, CalendarSidebarItem } from '../../models/calendar-viewer/sidebar-icons.model';
import { CalendarBooking } from 'app/features/models/calendar-viewer/calendar-booking.model';
import { StepService } from 'app/features/services/step.service';
import { timer } from 'rxjs';

@Component({
    selector: 'app-calendar-view',
    templateUrl: './calendar-view.component.html',
    styleUrls: ['./calendar-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarViewComponent implements OnInit {
    listIcons: SidebarIconsModel = {
        faCalendarAlt,
        faClock,
        faFileAlt,
        faUser,
        faClipboardList,
        faFileInvoice,
        faBoxOpen,
        faChartLine,
        faCogs,
        faBell,
        faAlignCenter,
        faCaretDown,
        faChartBar,
        faFilter,
        faChevronLeft,
        faChevronRight
    };
    currentWeekDay: CurrentWeekDay = {
        from: format(add(startOfWeek(new Date()), { days: 1 }), 'dd-MM-yyyy'),
        to: format(add(endOfWeek(new Date()), { days: 1 }), 'dd-MM-yyyy')
    }
    staffs: Array<CalendarStaff> = CalendarStaffList;
    servicesColor: { [key: string]: string } = ServiceBookingsColor;
    tickets: Array<CalendarBooking> = CalendarDefaultBookings;
    sidebarItems: Array<CalendarSidebarItem> = CalendarSidebar;
    listDaysInWeek: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    @Output('bookingIsCreated') bookingCreated: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private cdr: ChangeDetectorRef,
        private stepService: StepService
    ) { }

    ngOnInit() {
        // Cong thuc: height: 45px; -> top: so half * 45px + 3px. height: half * 45px - 8px
        this.stepService.dispatchCreateNewTicketBooking$.subscribe((status: boolean) => {
            if (status && this.stepService.testBookingData()) {
                const booking: any = this.stepService.testBookingData();
                const bookingHelperData: any = {
                    today: new Date(),
                    bookingTime: booking.timePeriod.split(' ')[0],
                }
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
                        background: ServiceBookingsColor.haircut,
                        zIndex: this.tickets.length + 1
                    },
                    type: booking.type,
                    isOpacity: false,
                    isNew: true
                }
                this.tickets.push(newBooking);
                this.tickets.map((item: CalendarBooking, index: number) => {
                    if (item.type !== newBooking.type) {
                        this.tickets[index].isOpacity = true;
                    }
                });
                this.bookingCreated.emit(true);
                this.cdr.markForCheck();
                this.handleCloseBlurAnimation();
            }
        })
    }

    handleCloseBlurAnimation(): void {
        timer(2100).subscribe(_ => {
            this.tickets.map((item: CalendarBooking, index: number) => {
                this.tickets[index].isOpacity = false;
                this.tickets[index].isNew = false;
            });
            this.cdr.markForCheck();
        })
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
