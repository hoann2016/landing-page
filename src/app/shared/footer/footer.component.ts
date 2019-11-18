import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../services/landing-page.service';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { GlobalErrorHandlerService } from '../error-handler/global-error-handler.service';
import { throwError, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  guessMessageForm :FormGroup;
  isSubmitted:boolean=false;
  today: number = Date.now();
  contentLoading:string="";
  showLoading:boolean=false;
  constructor(public fb: FormBuilder,
    private translate: TranslateService,
    private appService:AppService,
    private toastr: ToastrService,
    private landingPageService: LandingPageService,
    private modalService: NgbModal,
    private router: Router,
    ){
  }
  get f() {
    return this.guessMessageForm.controls;
  }
  public buildForm() {
  }
  ngOnInit(): void {
    this.guessMessageForm=this.fb.group(
      {
        CustomerName:["",
        [
          Validators.required,         
          Validators.minLength(3),
          Validators.maxLength(100),         
        ]
      ],
      Email: ["", [Validators.required, Validators.pattern(/^[a-z0-9]+(?:\.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)]],      
      Content:["",[Validators.required,Validators.minLength(10),Validators.required,Validators.maxLength(255)]]
      }
    );
  }
  onSubmit(){
    this.isSubmitted=true;
    if(this.guessMessageForm.valid)
    {
      this.showLoading=true;
      this.contentLoading=this.translate.instant('Home.Footer.Form.SendingStatus')
      this.appService.sendNewLetter({email:this.guessMessageForm.controls.Email.value,content:this.guessMessageForm.controls.Content.value,name:this.guessMessageForm.controls.CustomerName.value}).
      subscribe(response=>{
        setTimeout(()=>{
          this.showLoading=false;
        },1000);        
        this.guessMessageForm.reset();
        this.isSubmitted=false;
        this.toastr.success(this.translate.instant('Home.Footer.Form.MessageSendSuccess'));        
      },
      (error:Error)=>{
        setTimeout(() => {
          this.showLoading=false;
        }, 2000);
        throw error;    
      })
    }else{
       setTimeout(() => {
        this.showLoading=false;
      }, 2000);
     //this.handlingFormValidatorService.showErrorForm(this.guessMessageForm,'Footer');
    }
  }
  redirectToPrivacyPolicy() {
    this.modalService.dismissAll();
    this.router.navigate(['/pages/privacy-policy']);
  }
  redirectToTermOfService() {
    this.modalService.dismissAll();
    this.router.navigate(['/pages/term-of-service']);
  }
}
