import {Component, HostListener, Inject, OnInit, ViewChild, ElementRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {LandingPageService} from '../services/landing-page.service';
import {WINDOW} from '../services/windows.service';
import { Router } from '@angular/router';
import { TranslatesService, ILang } from '@shared/translates';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public darkHeader: boolean = false;
  public menuItems: any[];
  public langList$: Observable<ILang[]>;
  public currentLang: string;
  @ViewChild('content', {static: true}) signinModalRef: ElementRef;

  // Inject Document object
  constructor(
      @Inject(DOCUMENT) protected document: Document,
      @Inject(WINDOW) protected window, 
      protected modalService: NgbModal,
      protected landingPageService: LandingPageService,
      protected _translatesService: TranslatesService,
      protected router: Router
      ) {}

  ngOnInit() {
    this.langList$ = this._translatesService.getLangList();
    this.currentLang = this._translatesService.getCurrentLang();
  }

  showLoginModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
        .result.then(
            (result) => {
              console.log(result);
            },
            (reason) => {
              console.log('result from modal,reason: ', reason);
            });
  }
  
  public changeLang(code: string): void {
    this._translatesService.changeLang(code);
    this.currentLang = code;
  }

  // @HostListener Decorator
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.window.pageYOffset ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop || 0;
    if (number >= 60) {
      this.darkHeader = true;
    } else {
      this.darkHeader = false;
    }
  }
  RedirectToLogin() {
    this.modalService.dismissAll();
    this.router.navigate(['/pages/sign-in']);
  }
}
