import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
import {LandingPageService} from 'src/app/shared/services/landing-page.service';

import {MustMatch} from './must-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  shopDomain: string;
  isSubmitted: boolean = false;
  public formErrors = {
    CustomerName: '',
    PackageSelectedName: '',
    ShopName: '',
    ServiceName: '',
    Phone: '',
    Password: '',
    RetypePassword: '',
    IsComfirmed: ''
  };
  signUpForm: FormGroup;
  // variable
  selectedPackage: string;


  get f() {
    return this.signUpForm.controls;
  }
  constructor(
      public fb: FormBuilder, private translate: TranslateService,
      private modalService: NgbModal,
      private landingPageService: LandingPageService) {}


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
              Validators.maxLength(100)
            ]
          ],
          ServiceName: ['', Validators.required],
          Phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
          Email: ['', [Validators.required, Validators.email]],
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
              Validators.required, Validators.minLength(5),
              Validators.maxLength(20)
            ]
          ],
          IsComfirmed: [false, Validators.required]
        },
        {validator: MustMatch('Password', 'RetypePassword')});
    this.signUpForm.controls.ShopName.valueChanges.subscribe((val: string) => {
      this.shopDomain = this.convertViToEn(val.toLowerCase().replace(/ /g, ''));

      this.shopDomain = this.shopDomain + '.ludiino.com';
      this.shopDomain = this.shopDomain.toLowerCase();
    });
  }
  ngOnInit() {
    this.buildForm();
    this.landingPageService.getLangSelected().subscribe(lang => {
      this.translate.use(lang);
    });
    this.landingPageService.getSelectedPackage().subscribe(packageName => {
      if (packageName) {
        this.signUpForm.patchValue({PackageSelectedName: packageName})
      } else {
        this.signUpForm.patchValue({PackageSelectedName: ''})
      }
    })
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
  onSubmit() {
    this.isSubmitted = true;
    if (this.signUpForm.valid) {
      alert('form oke');
    } else {
      alert('form invalid');
    }
    console.log(this.signUpForm);
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
}
