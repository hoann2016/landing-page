import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LandingPageService } from '../shared/services/landing-page.service';
import {Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class FeaturesComponent implements OnInit {
  currentDemoStep: number;
  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.currentDemoStep = 3;
  }

  openDemoPopup(content) {
    this.modalService.open(content, { centered: true, windowClass: 'demo-booking-popup' });
  }
}
