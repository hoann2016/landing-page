import {Component, HostListener, Inject, OnInit, ViewChild, ElementRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {LandingPageService} from '../../services/landing-page.service';
import {WINDOW} from '../../services/windows.service';
import { Router } from '@angular/router';
import { TranslatesService, ILang } from '@shared/translates';
// component
import {HeaderComponent} from '../header.component';

@Component({
  selector: 'app-header-common',
  templateUrl: './header-common.component.html',
  styleUrls: ['./header-common.component.scss']
})
export class HeaderCommonComponent extends HeaderComponent implements OnInit {
  constructor(
      @Inject(DOCUMENT) protected document: Document,
      @Inject(WINDOW) protected window, 
      protected modalService: NgbModal,
      protected landingPageService: LandingPageService,
      protected _translatesService: TranslatesService,
      protected router: Router
      ) {
      super(document, window, modalService, landingPageService, _translatesService, router);
  }

  ngOnInit() {
  }

}
