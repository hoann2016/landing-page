import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../..//shared/services/landing-page.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  
  constructor(private fb: FormBuilder,private translate: TranslateService,
    private landingPageService: LandingPageService) { }

  // Form Validator
  ngOnInit() {
  	this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required]
    });

    this.landingPageService.getLangSelected().subscribe(lang=>
      {        
        this.translate.use(lang);
      })
  }

}
