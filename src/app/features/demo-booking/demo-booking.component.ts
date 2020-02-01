import { Component, OnInit} from '@angular/core';
import { faCaretDown, faCalendarAlt, faList, faFileAlt, faUser, faClock, faChartPie, faChartBar, faCog, faAward } from '@fortawesome/free-solid-svg-icons';
import {TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-demo-booking',
  templateUrl: './demo-booking.component.html',
  styleUrls: ['./demo-booking.component.scss'],
})
export class DemoBookingComponent implements OnInit {
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
    7: 'Sunday'
  };
  dowArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  timeBlocks = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'];

  selectDate: string;
  ticketData: Array<any>;
  constructor(private translateService: TranslateService) {
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
          left: '14.29%'
        }
      },
      {
        id: 2,
        timePeriod: '8:00 - 9:00',
        date: 'Tue',
        serviceName: 'Nails',
        staffName: 'My Diem',
        styles: {
          top: '10%',
          left: '28.58%'
        }
      },
      {
        id: 3,
        timePeriod: '10:00 - 11:00',
        date: 'Tue',
        serviceName: 'Nails',
        staffName: 'Thuy Diem',
        styles: {
          top: '30%',
          left: '28.58%'
        }
      },
      {
        id: 4,
        timePeriod: '7:00 - 8:00',
        date: 'Wed',
        serviceName: 'Hair Cut',
        staffName: 'Thanh Tam',
        styles: {
          top: '0%',
          left: '42.87%'
        }
      },
      {
        id: 5,
        timePeriod: '11:00 - 12:00',
        date: 'Wed',
        serviceName: 'Massage',
        staffName: 'Thanh Nga',
        styles: {
          top: '40%',
          left: '42.87%'
        }
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
          height: '40%'
        }
      },
      {
        id: 7,
        timePeriod: '7:00 - 8:00',
        date: 'Thu',
        serviceName: 'Hair Cut',
        staffName: 'Hong Phuc',
        styles: {
          top: '0',
          left: '57.16%'        
        }
      },
      {
        id: 8,
        timePeriod: '12:00 - 13:00',
        date: 'Thu',
        serviceName: 'Hair Cut',
        staffName: 'Hong Phuc',
        styles: {
          top: '50%',
          left: '57.16%'        
        }
      }
    ];
  }
  addTicket(userData: any, selectedDOW: string) {
    const temp = this.mapUserData(userData, selectedDOW);
    temp.id = this.ticketData.length;
    this.translateService.get(selectedDOW).subscribe((res: string) => {
      this.selectDate = res + ', ' + userData.date;
    });
    this.ticketData = [...this.ticketData, temp];
  }
  mapUserData(data: any, dow?: string) {
    const newDow = dow.slice(7, 10);
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
        left: newLeft
      }
    } as any;
  }
}
