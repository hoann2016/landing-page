import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faAngleDoubleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';

interface SocialLink {
    facebook: string;
    google: string;
    youtube: string;
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    formContact: FormGroup;
    iconCaretLink: IconDefinition = faAngleDoubleRight;
    isSubmitted: boolean = false;
    isLoading: boolean = false;
    socialLink: SocialLink = {
        facebook: 'https://www.facebook.com/ludiinobooking',
        google: null,
        youtube: null
    };

    constructor(
        private modalService: NgbModal,
        private translateService: TranslateService,
        private fb: FormBuilder,
        private appService: AppService,
        private messageService: ToastrService,
    ) {
    }

    ngOnInit(): void {
        this.initFormContact();
    }

    redirectToPrivacyPolicy() {
        this.modalService.dismissAll();
        window.open(`http://blog.ludiino.com/2019/11/18/privacy-policy/?lang=${this.translateService.currentLang}`, '_blank');
    }

    redirectToTermOfService() {
        this.modalService.dismissAll();
        window.open(`http://blog.ludiino.com/2019/11/18/terms-of-use-terms-and-conditions/?lang=${this.translateService.currentLang}`, '_blank');
    }

    redirectToBlog() {
        this.modalService.dismissAll();
        window.open(`https://blog.ludiino.com/category/tin-tuc/?lang=${this.translateService.currentLang}`, '_blank');
    }

    requestContact(): void {
        this.isSubmitted = true;
        if (this.formContact.valid && !this.isLoading) {
            this.isLoading = true;
            this.appService.sendNewLetter(this.formContact.value).subscribe(response => {
                    this.messageService.success(this.translateService.instant('Home.Footer.Form.MessageSendSuccess'));
                    this.isLoading = false;
                    this.isSubmitted = false;
                    this.formContact.reset();
                },
                (error: Error) => {
                    this.messageService.success(this.translateService.instant('Home.Footer.Form.MessageSendFailed'));
                    this.isLoading = false;
                    this.isSubmitted = false;
                });
        } else {
            this.isLoading = false;
        }
    }

    openSocialLink(socialType: keyof SocialLink): void {
        window.open(this.socialLink[socialType]);
    }

    private initFormContact(): void {
        this.formContact = this.fb.group({
            email: [null, Validators.compose([Validators.required, Validators.email])]
        });
    }
}
