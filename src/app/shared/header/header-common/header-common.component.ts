import { Component, HostListener, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { LandingPageService } from '../../services/landing-page.service';
import { WINDOW } from '../../services/windows.service';
import { Router } from '@angular/router';
import { TranslatesService, ILang } from '@shared/translates';
// component
import { HeaderComponent } from '../header.component';
import { ExchangeRateService } from '@shared/services/exchange-rate.service';
import { faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-header-common',
    templateUrl: './header-common.component.html',
    styleUrls: ['./header-common.component.scss'],
    animations: [
        trigger('smoothCollapse', [
            state('initial', style({
                height: '0',
                overflow: 'hidden',
                opacity: '0'
            })),
            state('final', style({
                overflow: 'hidden',
                opacity: '1'
            })),
            transition('initial=>final', animate('200ms')),
            transition('final=>initial', animate('200ms'))
        ]),
    ]
})
export class HeaderCommonComponent extends HeaderComponent implements OnInit {
    $pageActive: Observable<string>;
    isMenuCollapsed: boolean;
    public homeIcon = faHome;
    constructor(
        @Inject(DOCUMENT) protected document: Document,
        @Inject(WINDOW) protected window,
        protected modalService: NgbModal,
        protected landingPageService: LandingPageService,
        protected _translatesService: TranslatesService,
        protected router: Router,
        protected exchangeService: ExchangeRateService
    ) {
        super(document, window, modalService, landingPageService, _translatesService, router, exchangeService);
        this.$pageActive = this.landingPageService.activePage;
        this.isMenuCollapsed = true;
    }

    ngOnInit() {
        this.langList$ = this._translatesService.getLangList();
        this.currentLang = this._translatesService.getCurrentLang();
    }
    public changeLang(code: string): void {
        this._translatesService.changeLang(code);
        this.currentLang = code;
        this.exchangeService.applyExchangeRate(code);
    }
    RedirectToLogin() {
        this.modalService.dismissAll();
        this.router.navigate(['/pages/sign-in']);
    }
    setActiveNav(page: string): void {
        this.landingPageService.setActivePage(page);
    }
}
