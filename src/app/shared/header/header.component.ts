import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "../services/windows.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public darkHeader: boolean = false;  
  public menuItems: any[];
  
  // Inject Document object
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
     $.getScript('./assets/js/script.js');
     $.getScript('./assets/js/tilt.jquery.js');
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
