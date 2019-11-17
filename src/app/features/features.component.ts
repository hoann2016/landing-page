import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../shared/services/landing-page.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {}

}
