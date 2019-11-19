import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LandingPageService } from '../shared/services/landing-page.service';
import {Router} from '@angular/router';
import {NgbDateStruct, NgbCalendar, NgbDate, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  encapsulation: ViewEncapsulation.None

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
  constructor(private modalService: NgbModal,
              private calendar: NgbCalendar,
              private landingPageSrv: LandingPageService,
              private router: Router) {
    this.selectedDOW = '';
  }

  ngOnInit(): void {
    this.currentDemoStep = 2;
    this.selectToday();
  }

  openDemoPopup(content) {
    this.modalService.open(content, { centered: true, windowClass: 'demo-booking-popup' });
  }
  selectToday() {
    this.selectDate = this.calendar.getToday();
    console.log(this.selectDate);
    this.selectedDOW = this.weekDays[this.calendar.getWeekday(this.selectDate)];
  }
  goPrevDay() {
    this.selectDate = this.calendar.getPrev(this.selectDate);
  }
  goNextDay() {
    this.selectDate = this.calendar.getNext(this.selectDate);
  }
  goToStep(step: number) {
    this.currentDemoStep = step;
  }
  redirectToRegister(packageSelected: string): void {
    this.landingPageSrv.selectPackage(packageSelected);
    this.router.navigate(['/pages/sign-up']);
  }
}
