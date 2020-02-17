import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    faAward,
    faCalendarAlt,
    faCaretDown,
    faChartBar,
    faChartPie,
    faClock,
    faCog,
    faFileAlt,
    faList,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, timer, Observable } from 'rxjs';
import { StepService } from '../services/step.service';

@Component({
    selector: 'app-demo-booking',
    templateUrl: './demo-booking.component.html',
    styleUrls: ['./demo-booking.component.scss'],
})
export class DemoBookingComponent implements OnInit, OnDestroy {
    faCaretDown = faCaretDown;
    faCalendarAlt = faCalendarAlt;
    faList = faList;
    faFileAlt = faFileAlt;
    faUser = faUser;
    faClock = faClock;
    faChartPie = faChartPie;
    faChartBar = faChartBar;
    faCog = faCog;
    faAward = faAward;
    ticketNumbers = new Array(70);
    weekDays = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday',
    };
    dowArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    timeBlocks = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'];

    selectDate: string;
    ticketData: Array<any>;
    private timerOpacityTicketSubscription: Subscription;
    private listenToCreateNewTicketDemoBooking: Subscription;
    private listenNewTicketDemoBookingData: Subscription;

    constructor(private translateService: TranslateService, private stepService: StepService) {
        this.selectDate = 'Monday, 19/01/2020';
    }

    ngOnInit(): void {
        this.ticketData = [
            {
                id: 1,
                timePeriod: '7:00 - 8:00',
                date: 'Mon',
                serviceName: 'Massage',
                staffName: 'Vicky My',
                styles: {
                    top: '0',
                    left: '14.29%',
                },
                opacityWhenNew: false,
            },
            {
                id: 2,
                timePeriod: '8:00 - 9:00',
                date: 'Tue',
                serviceName: 'Nails',
                staffName: 'My Diem',
                styles: {
                    top: '10%',
                    left: '28.58%',
                },
                opacityWhenNew: false,
            },
            {
                id: 3,
                timePeriod: '10:00 - 11:00',
                date: 'Tue',
                serviceName: 'Nails',
                staffName: 'Thuy Diem',
                styles: {
                    top: '30%',
                    left: '28.58%',
                },
                opacityWhenNew: false,
            },
            {
                id: 4,
                timePeriod: '7:00 - 8:00',
                date: 'Wed',
                serviceName: 'Hair Cut',
                staffName: 'Thanh Tam',
                styles: {
                    top: '0%',
                    left: '42.87%',
                },
                opacityWhenNew: false,
            },
            {
                id: 5,
                timePeriod: '11:00 - 12:00',
                date: 'Wed',
                serviceName: 'Massage',
                staffName: 'Thanh Nga',
                styles: {
                    top: '40%',
                    left: '42.87%',
                },
                opacityWhenNew: false,
            },
            {
                id: 6,
                timePeriod: '13:00 - 16:00',
                date: 'Wed',
                serviceName: 'Hair Cut',
                staffName: 'Thanh Huong',
                styles: {
                    top: '60%',
                    left: '42.87%',
                    height: '40%',
                },
                opacityWhenNew: false,
            },
            {
                id: 7,
                timePeriod: '7:00 - 8:00',
                date: 'Thu',
                serviceName: 'Hair Cut',
                staffName: 'Hong Phuc',
                styles: {
                    top: '0',
                    left: '57.16%',
                },
                opacityWhenNew: false,
            },
            {
                id: 8,
                timePeriod: '12:00 - 13:00',
                date: 'Thu',
                serviceName: 'Hair Cut',
                staffName: 'Hong Phuc',
                styles: {
                    top: '50%',
                    left: '57.16%',
                },
                opacityWhenNew: false,
            },
        ];
        this.listenToCreateNewTicketDemoBooking = this.stepService.dispatchCreateNewTicketBooking$.subscribe((status: boolean) => {
            if (status) {
                this.addTicket(this.stepService.testBookingData(), status)
            }
        })
    }

    addTicket(data: any, status: boolean) {
        if (data && data.selectedDOW && data.serviceName && data.staffName && data.time && status) {
            const temp = this.mapUserData(data, data.selectedDOW || null);
            this.selectDate = data.date;
            temp.id = this.ticketData.length;
            this.handleAnimation(temp);
            if (data.selectedDOW) {
                this.translateService.get(data.selectedDOW).subscribe((res: string) => {
                    this.selectDate = res + ', ' + data.date;
                });
            }
            this.ticketData = [...this.ticketData, temp];
            this.stepService.changeStep(1);
            this.stepService.dispatchCreateNewTicketBooking(false);
            this.stepService.setDataStep({}, true);
        }
    }

    handleAnimation(ticket: any): void {
        const serviceNameTranslated: string = this.translateService.instant(ticket.serviceName);
        this.ticketData.map((item: any, index: any) => {
            if (item.serviceName !== serviceNameTranslated) {
                this.ticketData[index].opacityWhenNew = true;
            }
        });
        this.timerOpacityTicketSubscription = timer(2100).subscribe(() => {
            this.ticketData.map((item: any, index: any) => {
                this.ticketData[index].opacityWhenNew = false;
            });
        });
    }

    mapUserData(data: any, dow?: string) {
        const newDow = dow.slice(0, 3);
        let space = this.dowArray.findIndex(x => x === newDow);
        space = space + 1;
        let timeIndex = this.timeBlocks.findIndex(x => x === data.time);
        timeIndex = timeIndex + 1;
        const newLeft = (space === 7) ? '0px' : '' + (space * 14.29) + '%';
        const newTop = '' + (timeIndex * 10) + '%';
        return {
            timePeriod: data.time,
            serviceName: data.serviceName,
            staffName: data.staffName,
            isNew: true,
            styles: {
                top: newTop === '0%' ? '0' : newTop,
                left: newLeft,
            },
            opacityWhenNew: false,
        } as any;
    }

    ngOnDestroy(): void {
        if (this.timerOpacityTicketSubscription) {
            this.timerOpacityTicketSubscription.unsubscribe();
        }
        if (this.listenNewTicketDemoBookingData) {
            this.listenNewTicketDemoBookingData.unsubscribe();
        }
        if (this.listenToCreateNewTicketDemoBooking) {
            this.listenToCreateNewTicketDemoBooking.unsubscribe();
        }
    }
}
