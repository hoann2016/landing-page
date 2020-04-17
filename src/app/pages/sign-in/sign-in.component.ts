import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../../shared/services/landing-page.service';
import { AppService } from '../../app.service';
import { UserLogin } from '../../shared/models/user-models/user-login.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UniversalStorage } from '../../shared/storage/universal.storage';
import { HttpErrorResponse } from '@angular/common/http';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TimeConstant } from '@shared/constants/time.constant';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('notActive', { static: true }) notActive: TemplateRef<any>;

    signInForm: FormGroup;
    iconTimes: any = faTimes;
    shopDomain: string;
    isSubmitted: boolean = false;
    selectedPackage: string;
    currentYear: number = TimeConstant.Year;
    contentLoading: string;
    showLoading: boolean = false;

    ngAfterViewInit(): void {
    }

    get f() {
        return this.signInForm.controls;
    }

    constructor(
        public fb: FormBuilder,
        private translate: TranslateService,
        private modalService: NgbModal,
        private landingPageService: LandingPageService,
        private appService: AppService,
        private toastr: ToastrService,
        private router: Router,
        private cookieStorage: UniversalStorage,
    ) { }
    public buildForm() {
        this.signInForm = this.fb.group(
            {
                Email: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+(?:\.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)]],
                Password: [
                    '',
                    [
                        Validators.required, Validators.minLength(5),
                        Validators.maxLength(20)
                    ]
                ]
            });
    }

    ngOnInit() {
        this.buildForm();
    }

    onSubmit() {
        this.isSubmitted = true;
        if (this.signInForm.valid) {
            const formImport: UserLogin = {
                password: this.signInForm.controls.Password.value,
                email: this.signInForm.controls.Email.value
            };
            this.showLoading = true;
            this.contentLoading = this.translate.instant('Home.SignIn.SendingStatus');
            this.appService.logIn(formImport).subscribe(
                response => {
                    this.showLoading = false;
                    const { success, data } = response;
                    if (success === true) {
                        if (data.sessionId && data.domain) {
                            window.location.href = `${environment.rootproto}${data.domain}/pages/sign-in?session=${data.sessionId}`;
                        } else {
                            this.cookieStorage.setItem('access-token', data.token);
                            this.redirectToDashboard();
                        }
                    }
                },
                (err: HttpErrorResponse) => {
                    if (err && err.error && err.error.message && err.error.message[0]) {
                        if (err.error.message[0].code == 1026) {
                            this.modalService.open(this.notActive);
                        } else {
                            this.toastr.error(this.translate.instant(`Shared.CommunicationMessage.${err.error.message[0].code}`));
                        }
                    }
                    this.showLoading = false;

                }
            );
        }
    }
    convertViToEn(str: string): string {
        str = str.replace(
            /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(
            /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(
            /À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
        str = str.replace(
            /Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
        str = str.replace(/Đ/g, 'D');
        // Combining Diacritical Marks
        str = str.replace(
            /\u0300|\u0301|\u0303|\u0309|\u0323/g,
            '');  // huyền, sắc, hỏi, ngã, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, '');  // mũ â (ê), mũ ă, mũ ơ (ư)
        return str;
    }
    RedirectToRegister() {
        this.modalService.dismissAll();
        this.router.navigate(['/pages/sign-up']);
    }
    RedirectToHome() {
        this.modalService.dismissAll();
        this.router.navigate(['/']);
    }

    private redirectToDashboard(): void {
        this.router.navigateByUrl('/dashboard');
    }

    closeModal(): void {
        this.modalService.dismissAll();
    }

    forgotPassword(content): void {
        this.modalService.open(content, { centered: true });
    }

    closeDialog(event: boolean) {
        if (event) { this.closeModal(); }
    }

    ngOnDestroy() {
        this.closeModal();
    }
}
