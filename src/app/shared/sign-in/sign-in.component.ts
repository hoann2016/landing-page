import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { NgbModal, ModalDismissReasons, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BehaviorSubject, throwError } from "rxjs";
import { LandingPageService } from "src/app/shared/services/landing-page.service";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { tap, catchError } from "rxjs/operators";
import { UserLogedInModel } from "../models/user-models/user-logedin.model";
import * as jwt_decode from "jwt-decode";
@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
  // variable
  show: boolean;
  isSubmitted: boolean = false;
  signInForm: FormGroup;
  sendPasswordForm: FormGroup;
  validFormRecovery = new BehaviorSubject(false);
  IsHidden = false;
  errorMessage: string;
  @Output('closeChildModal') closeEvt = new EventEmitter<string>();
  get f() {
    return this.signInForm.controls;
  }
  get f_recover() {
    return this.sendPasswordForm.controls;
  }
  constructor(
    public fb: FormBuilder,
    private translate: TranslateService,
    private modalService: NgbModal,
    private landingPageService: LandingPageService,
    private router: Router,
    private appService: AppService,
    public activeModal: NgbActiveModal
  ) {
    this.show = false;
  }
  password() {
    this.show = !this.show;
  }
  public buildForm() {
    this.sendPasswordForm = this.fb.group({
      Email: ["", [Validators.required, Validators.email]]
    });
    this.signInForm = this.fb.group({
      Email: ["", [Validators.required, Validators.email]],
      Password: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]
      ]
    });
  }
  ngOnInit() {
    this.buildForm();
    this.validFormRecovery.next(false);
    this.sendPasswordForm.controls.Email.valueChanges.subscribe(val => {
      this.validFormRecovery.next(this.sendPasswordForm.controls.Email.valid);
    });
    this.landingPageService.getLangSelected().subscribe(lang => {
      this.translate.use(lang);
    });
  }
  forgotPassword(content) {
    this.IsHidden = true;
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {         
          if (!this.sendPasswordForm.valid) {
            alert("form not ok");
            return;
          } else alert("form ok");
        },
        reason => {
          console.log("result from modal,reason: ", reason);
          this.modalService.dismissAll();
        }
      );
  }
  onSubmit() {
    this.isSubmitted = true;
    this.errorMessage = "";   
    if (this.signInForm.valid) {
      this.appService.logIn({ email: this.signInForm.controls.Email.value, password: this.signInForm.controls.Password.value }).subscribe((res: any) => {
          if (res.success) {
            console.log("res.data.token", jwt_decode(res.data.token));
            var userLogedIn: UserLogedInModel = jwt_decode(res.data.token) as UserLogedInModel;
            sessionStorage.setItem('landingPageToken', res.data.token)
            console.log("stating redirect....");
            window.location.href= this.appService.merchangePath;
          } else {          
            if(res.message.length>0){
              this.errorMessage =   this.appService.renderError(res.message,this.translate);
            }
          }
      },
        error => {
          console.log(error);
          this.errorMessage =   this.translate.instant('Shared.CommunicationMessage.'+ error.error.message);
          if(error.error.message.length>0){
            this.errorMessage =   this.appService.renderError(error.error.message,this.translate);
          }
        }
      );
    } else alert("login not oke");
  }
  RedirectToRegister() {
    this.modalService.dismissAll();
    this.router.navigate(['/pages/sign-up']);
  }
  showBackLogin(){
    this.closeEvt.emit("from chield")    
    this.modalService.dismissAll();
    this.IsHidden = false;
  }
}
