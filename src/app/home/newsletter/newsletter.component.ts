import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  subscribeForm: FormGroup;
  
  constructor(private sf: FormBuilder,private translate: TranslateService,
    private landingPageService: LandingPageService) { }

  // Email Validator
  ngOnInit() {
  	this.subscribeForm = this.sf.group({
      email: ['', Validators.email],
    })
    this.landingPageService.getLangSelected().subscribe(lang=>
      {        
        this.translate.use(lang);
      })
  }

  onSubmit(name) {
    if(!name) return false
    const form = document.createElement('form');
    const element1 = document.createElement('input');

    form.method = 'POST';
    form.target = '_blank';
    form.action = 'https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda';

    element1.value = name;
    element1.name = 'EMAIL';
    element1.id = 'mce-EMAIL';
    form.appendChild(element1);

    document.body.appendChild(form);

    form.submit();
  }

}
