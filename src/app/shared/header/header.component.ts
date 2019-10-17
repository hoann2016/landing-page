import {Component, HostListener, Inject, OnInit, ViewChild, ElementRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {LandingPageService} from '../services/landing-page.service';
import {WINDOW} from '../services/windows.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public darkHeader: boolean = false;
  public menuItems: any[];
  public langSelected = new BehaviorSubject('');
  @ViewChild('content',{static:true}) signinModalRef: ElementRef;

  // Inject Document object
  constructor(
      @Inject(DOCUMENT) private document: Document,
      @Inject(WINDOW) private window, private modalService: NgbModal,
      private landingPageService: LandingPageService,
      private translate: TranslateService,
      private router: Router
      ) {}

  ngOnInit() {
    $.getScript('./assets/js/script.js');
    $.getScript('./assets/js/tilt.jquery.js');
    this.landingPageService.getLangSelected().subscribe(lang => {
      this.translate.use(lang);
      this.langSelected.next(lang);
    })
  }
  changeLang(lang) {
    if (lang == 'vi')
      this.landingPageService.changeLanguage('vi');
    else
      this.landingPageService.changeLanguage('en');
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
  // ShowBackModalLogin(evt){
  //   console.log("event from signin   ",evt);
  //   setTimeout(() => {
  //     this.showLoginModal(this.signinModalRef) ;
  //   }, 200);
   
    
  // }

  // @HostListener Decorator
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = this.window.pageYOffset ||
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
