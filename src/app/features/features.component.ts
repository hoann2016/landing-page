import { Component, OnInit} from '@angular/core';
import { LandingPageService } from '../shared/services/landing-page.service';
import {Router} from '@angular/router';
import {NgbDateStruct, NgbCalendar, NgbDate, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {TranslateService } from '@ngx-translate/core';
interface BookingUser {
  date: string;
  time: string;
  staffName: string;
  serviceName: string;
  priceService: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  weekDays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  };
  timeBlocks = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 pM', '2:00 PM', '3:00 PM'];

  currentDemoStep: number;
  selectDate: NgbDate;
  selectedDOW: string;
  date: {year: number, month: number};
  demoUser: BookingUser;
  constructor(private modalService: NgbModal,
              private calendar: NgbCalendar,
              private landingPageSrv: LandingPageService,
              private toastrService: ToastrService,
              private translateService: TranslateService,
              private router: Router) {
    this.selectedDOW = '';
    this.demoUser = {} as BookingUser;
  }

  ngOnInit(): void {
    this.landingPageSrv.setActivePage('features');
    this.currentDemoStep = 1;
    this.selectToday();
  }

  openDemoPopup(content) {
    this.currentDemoStep = 1;
    this.modalService.open(content, { centered: true, windowClass: 'demo-booking-popup' });
  }
  selectToday() {
    this.selectDate = this.calendar.getToday();
    console.log(this.selectDate);
    this.selectedDOW = 'Common.' + this.weekDays[this.calendar.getWeekday(this.selectDate)];
  }
  goPrevDay() {
    this.selectDate = this.calendar.getPrev(this.selectDate);
    this.selectedDOW = 'Common.' + this.weekDays[this.calendar.getWeekday(this.selectDate)];
  }
  goNextDay() {
    this.selectDate = this.calendar.getNext(this.selectDate);
    this.selectedDOW = 'Common.' + this.weekDays[this.calendar.getWeekday(this.selectDate)];
  }
  selectStaff(staff: string) {
    this.demoUser.staffName = staff;
  }
  goToStep(step: number, bookingData?: any) {
    if (bookingData && step === 2) {
      this.demoUser.serviceName = bookingData.name;
      this.demoUser.priceService = bookingData.price;
    }
    if (bookingData && step === 3) {
      if (!this.demoUser.staffName) {
        return;
      }
      this.demoUser.date = ', ' + `${this.selectDate.day}` + '/' + `${this.selectDate.month}` + '/' + `${this.selectDate.year}`;
      this.demoUser.time = bookingData;
    }
    this.currentDemoStep = step;
  }
  confirmBooking(): void {
    this.translateService.get('Common.BookingSuccess').subscribe((res: string) => {
      this.toastrService.success(res);
      this.demoUser = {} as BookingUser;
    });
  }
  redirectToRegister(packageSelected: string): void {
    this.landingPageSrv.selectPackage(packageSelected);
    this.router.navigate(['/pages/sign-up']);
  }
}
