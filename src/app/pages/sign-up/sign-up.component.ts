import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { LandingPageService } from '../../shared/services/landing-page.service';
import { MustMatch } from './must-match.validator';
import { AppService } from '../../app.service';
import { UserRegister } from '../../shared/models/user-models/user-register.model';
import { UserOrder } from '../../shared/models/user-models/user-order.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PackageDataModel } from '@shared/models/package-models/package-data.model';
import { BusinessType } from '@shared/models/business-types-models/business-type.model';
import { StatusCodeConstant } from '@shared/constants/status-code.constant';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TimeConstant } from '@shared/constants/time.constant';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit, OnDestroy {
    ngAfterViewInit(): void {
    }
    shopDomain: string;
    isSubmitted: boolean = false;

    signUpForm: FormGroup;
    // variable
    selectedPackage: string;
    userOrder: UserOrder;
    freePackage;
    orderResponse;
    iconTimes: any = faTimes;
    @ViewChild('emailExist', { static: true }) emailExistTemplate: TemplateRef<any>;
    currentYear: number = TimeConstant.Year;
    get f() {
        return this.signUpForm.controls;
    }
    constructor(
        public fb: FormBuilder,
        private translate: TranslateService,
        private modalService: NgbModal,
        private landingPageService: LandingPageService,
        private appService: AppService,
        private toastr: ToastrService,
        private router: Router
    ) { }
    public allPackage: Array<PackageDataModel> = [];
    public allBusinessType: Array<BusinessType> = [];
    contentLoading: string;
    showLoading: boolean = false;
    public buildForm() {
        this.signUpForm = this.fb.group(
            {
                CustomerName: [
                    '',
                    [
                        Validators.required, Validators.minLength(3),
                        Validators.maxLength(100),
                        Validators.pattern(
                            /[a-zA-Z|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ|đ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ\d\s]+$/)
                    ]
                ],
                PackageSelectedName: [this.selectedPackage, Validators.required],
                ShopName: [
                    '',
                    [
                        Validators.required, Validators.minLength(3),
                        Validators.maxLength(100),
                        Validators.pattern(
                            /[a-zA-Z|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ|đ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ\d\s]+$/)
                    ]
                ],
                ServiceName: ['', Validators.required],
                Phone: ['', [Validators.required, Validators.pattern(/(([+(84)]{3})+(9|3|7|8|5)+([0-9]{8})\b|(09|03|07|08|05)+([0-9]{8})\b)/i)]],
                Email: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+(?:\.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)]],
                Password: [
                    '',
                    [
                        Validators.required, Validators.minLength(5),
                        Validators.maxLength(20)
                    ]
                ],
                RetypePassword: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(5),
                        Validators.maxLength(20)
                    ]
                ]
            },
            { validator: MustMatch('Password', 'RetypePassword') });
        this.signUpForm.controls.ShopName.valueChanges.subscribe((val: string) => {
            this.shopDomain = `${this.convertViToEn(val.toLowerCase().replace(/ /g, '')).toLowerCase()}.${environment.rootip}`;
        });
    }
    ngOnInit() {
        this.buildForm();
        this.appService.getActiveConfigPackage().subscribe(pk => {
            if (pk.success == true) {
                this.allPackage = pk.data.packages;
                if (!this.signUpForm.get('PackageSelectedName').value && this.allPackage && this.allPackage.length > 0) {
                    this.signUpForm.get('PackageSelectedName').setValue(this.allPackage[0].id)
                }
            }
        },
            err => {
                throw err;
            });
        this.appService.getAllBusiness().subscribe(bs => {
            this.allBusinessType = [];
            if (bs.success == true) {
                this.allBusinessType = bs.data.business_types;
                if (this.allBusinessType && this.allBusinessType.length > 0) {
                    this.signUpForm.get('ServiceName').setValue(this.allBusinessType[0].id);
                }
            }
        },
            err => {
                throw err;
            });

        this.landingPageService.getSelectedPackage().subscribe(packageName => {
            if (packageName) {
                this.signUpForm.patchValue({ PackageSelectedName: packageName })
            } else {
                if (this.allPackage && this.allPackage.length > 0) {
                    this.signUpForm.get('PackageSelectedName').setValue(this.allPackage[0].id)
                }
            }
        })
    }
    showModalLogin(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then(
                (result) => {
                    console.log(result);
                },
                (reason) => {
                    console.log('result from modal,reason: ', reason);
                });
    }
    getSimplePackage(packageId: string) {
        return new Promise((resolve, reject) => {
            this.appService.getActiveSimplePackageById(packageId).subscribe((response) => {
                if (response.success === true) {
                    resolve(response.data.packages);
                }
            }, err => {
                reject(err);
            });
        });
    }
    submitOrder(userOrder: UserOrder) {
        return new Promise((resolve, reject) => {
            this.appService.submitOrder(userOrder).subscribe((response) => {
                if (response.success === true) {
                    resolve(response.data);
                }
            }, err => {
                reject(err);
            });
        })
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.signUpForm.valid) {
            const formValues = this.signUpForm.controls;
            const industryId = this.allBusinessType.find(item => item.id === +formValues.ServiceName.value).industry_id;
            const formImport: UserRegister = {
                package_id: +formValues.PackageSelectedName.value,
                business_type_id: +formValues.ServiceName.value,
                industry_id: industryId,
                country_id: 1,
                name: formValues.CustomerName.value,
                store_name: formValues.ShopName.value,
                shop_domain: this.shopDomain,
                password: formValues.Password.value,
                confirm_password: formValues.RetypePassword.value,
                email: formValues.Email.value,
                phone: formValues.Phone.value,
                status: 'disabled',
                is_admin: false,
                is_first: true
            };
            this.showLoading = true;
            this.contentLoading = this.translate.instant('Register.SendingStatus');
            this.appService.register(formImport).pipe(
                catchError(error => {
                    const errCode = error.error.message[0].code;
                    this.showLoading = false;
                    if (errCode !== StatusCodeConstant.EMAIL_PASSWORD_INCORRECT) {
                        this.translate.get('Shared.CommunicationMessage.' + `${errCode}`).subscribe((res: string) => {
                            this.toastr.error(res);
                        });
                    } else {
                        this.modalService.open(this.emailExistTemplate, { centered: true });
                    }
                    return of(error);
                })
            ).subscribe(
                async response => {
                    if (response.success === true) {
                        const packageId = Number(this.signUpForm.controls.PackageSelectedName.value);
                        try {
                            if (packageId === 2) {
                                const packages = await this.getSimplePackage(String(packageId));
                                this.freePackage = packages[0];
                                const userOrder = {
                                    merchant_id: response.data.id,
                                    currency_id: 1,
                                    package_id: this.freePackage.id,
                                    channel_id: 1,
                                    sub_totals: this.freePackage.price,
                                    tax: 0,
                                    grand_totals: this.freePackage.price - (this.freePackage.price * 0 / 100)
                                }
                                this.orderResponse = await this.submitOrder(userOrder);
                                if (this.orderResponse) {
                                    this.showLoading = false;
                                    this.toastr.success("Start to clone you website ...")
                                    this.router.navigateByUrl('/pages/clone-site', { state: { merchantId: response.data.id } });
                                }
                            } else {
                                const redirectValues = { ...response.data };
                                redirectValues.selectedConfigPackage = packageId;
                                this.toastr.success(this.translate.instant("SignUp.RedirectToPayment"));
                                this.router.navigateByUrl('/pages/payment',
                                    { state: redirectValues }
                                );
                            }
                        } catch (error) {
                            this.showLoading = false;
                            throw error;
                        }
                    } else {
                        return;
                    }
                }
            );
        } else {
            // this.handlingFormValidatorService.showErrorForm(this.signUpForm, 'SignUp');
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
    RedirectToLogin() {
        this.modalService.dismissAll();
        this.router.navigate(['/pages/sign-in']);
    }
    RedirectToHome() {
        this.modalService.dismissAll();
        this.router.navigate(['/']);
    }
    redirectToPrivacyPolicy() {
        this.modalService.dismissAll();
        window.open(`http://blog.ludiino.com/2019/11/18/privacy-policy/?lang=${this.translate.currentLang}`, '_blank');
    }

    closeModal(): void {
        this.modalService.dismissAll();
    }

    ngOnDestroy(): void {
        this.closeModal();
    }
}
