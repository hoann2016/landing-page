import { Component, HostListener, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "../services/windows.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LandingPageService } from "../services/landing-page.service";
import { TranslateService } from "@ngx-translate/core";
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  public darkHeader: boolean = false;  
  public menuItems: any[];
  ß
  // Inject Document object
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    private modalService: NgbModal,
    private landingPageService: LandingPageService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
     $.getScript('./assets/js/script.js');
     $.getScript('./assets/js/tilt.jquery.js');
     this.landingPageService.getLangSelected().subscribe(lang=>
      {        
        this.translate.use(lang);
      })
   }
   changeLang(lang){
       
    if(lang=="vi")
      this.landingPageService.changeLanguage("vi");
    else
      this.landingPageService.changeLanguage("en");
   }
  showLoginModal(content)
  {
   
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {      
     console.log(result);
    }, (reason) => {
      console.log("result from modal,reason: ",reason);
    });
  }

  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number >= 60) { 
      this.darkHeader = true;
    } else {
      this.darkHeader = false;
    }
  }

}
