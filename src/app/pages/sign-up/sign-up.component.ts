import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { MustMatch } from './must-match.validator';
import { AppService } from 'src/app/app.service';
import { UserRegister } from 'src/app/shared/models/user-models/user-register.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HandlingFormValidatorService } from 'src/app/shared/services/handling-form-validator.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  shopDomain: string;
  isSubmitted: boolean = false;

  signUpForm: FormGroup;
  // variable
  selectedPackage: string;
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
    private router: Router,
    private handlingFormValidatorService: HandlingFormValidatorService
  ) { }
  public allPackage;
  public allBusinessType;
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
      this.shopDomain = `${this.convertViToEn(val.toLowerCase().replace(/ /g, '')).toLowerCase()}.ludiino.com`;
    });
  }
  ngOnInit() {
    this.buildForm();
    this.appService.getActiveConfigPackage().subscribe(pk => {
      if (pk.success == true) {
        this.allPackage = pk.data.packages;
      }
    },
      err => {
        throw err;
      });
    this.appService.getAllBusiness().subscribe(bs => {
      this.allBusinessType = [];
      if (bs.success == true) {
        this.allBusinessType = bs.data.businessTypes;
      }
    },
      err => {
        throw err;
      });
    this.landingPageService.getLangSelected().subscribe(lang => {
      this.translate.use(lang);
    });
    this.landingPageService.getSelectedPackage().subscribe(packageName => {
      if (packageName) {
        this.signUpForm.patchValue({ PackageSelectedName: packageName })
      } else {
        this.signUpForm.patchValue({ PackageSelectedName: '' })
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
  onSubmit() {
    this.isSubmitted = true;
    if (this.signUpForm.valid) {
      const formImport: UserRegister = {
        package_id: +this.signUpForm.controls.PackageSelectedName.value,
        industry_id: +this.signUpForm.controls.ServiceName.value,
        country_id: 1,
        name: this.signUpForm.controls.CustomerName.value,
        store_name: this.signUpForm.controls.ShopName.value,
        shop_domain: this.shopDomain,
        password: this.signUpForm.controls.Password.value,
        confirm_password: this.signUpForm.controls.RetypePassword.value,
        email: this.signUpForm.controls.Email.value,
        phone: this.signUpForm.controls.Phone.value,
        status: 'disabled'
      };
      this.showLoading = true;
      this.contentLoading = this.translate.instant('Register.SendingStatus')
      this.appService.register(formImport).subscribe(
        response => {
          setTimeout(() => {
            this.showLoading = false;
          }, 3000);
          
          if (response.success == true) {
            const packageId = Number(this.signUpForm.controls.PackageSelectedName.value);
            if (packageId === 2) {
              this.toastr.success("Redirect to dashboard ...")
              window.location.href = this.appService.merchangePath;
            } else {
              const redirectValues = {...response.data};
              redirectValues.selectedConfigPackage = packageId;
              this.toastr.success("Redirect to payment page");
              this.router.navigateByUrl('/pages/payment',
                { state: redirectValues }
              );
            }
          } else {
            return;
          }
        },
        err => {
          setTimeout(() => {
            this.showLoading = false;
          }, 1000);
          throw err;
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
}
