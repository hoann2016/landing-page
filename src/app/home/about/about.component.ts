import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LandingPageService} from '../../shared/services/landing-page.service';

// declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    // $('#lud_videos').on('show.bs.modal', function(e) {
    //   var idVideo = $(e.relatedTarget).data('id');
    //   $('#lud_videos .modal-body')
    //       .html(
    //           '<iframe  width="100%" height="400" src = "https://www.youtube.com/embed/3aglqJ9Syrw" frameborder = "0" allow ="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>');
    // });
    // $('#lud_videos').on('hidden.bs.modal', function() {
    //   $('#lud_videos .modal-body').empty();
    // });
  }

  constructor(
      private translate: TranslateService,
      private landingPageService: LandingPageService) {}

  ngOnInit() {
    this.landingPageService.getLangSelected().subscribe(x => {
      this.translate.use(x);
    })
  }
}
