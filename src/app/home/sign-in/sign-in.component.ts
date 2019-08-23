import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {  BehaviorSubject } from 'rxjs';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
  
  // variable
  show: boolean;
  isSubmitted:boolean=false;
  signInForm :FormGroup;
  sendPasswordForm :FormGroup;
  validFormRecovery=new BehaviorSubject(false);
  get f() {
    return this.signInForm.controls;
  }
  
  get f_recover() {
    return this.sendPasswordForm.controls;
  }

  constructor(public fb: FormBuilder,private translate: TranslateService,
    private modalService: NgbModal,private landingPageService: LandingPageService) {
   
   this.show = false;
  }
  password() {
   this.show = !this.show;
  }
  public buildForm() {
    this.sendPasswordForm = this.fb.group(
      {
        Email: 
        ["", 
          [
            Validators.required,         
            Validators.email
          ]
        ]
      }
    );
    this.signInForm = this.fb.group(
    {
      Email: 
      ["", 
        [
          Validators.required,         
          Validators.email
        ]
      ],
      Password: 
      ["", 
        [
          Validators.required,         
          Validators.minLength(3),
          Validators.maxLength(100)
        ]
      ],
      RememberLogin:[false]
    }
    );

     }
  ngOnInit() {
    this.buildForm();
    this.validFormRecovery.next(false);
    this.sendPasswordForm.controls.Email.valueChanges.subscribe(val=>
      {
        this.validFormRecovery.next(this.sendPasswordForm.controls.Email.valid);
      });
      this.landingPageService.getLangSelected().subscribe(lang=>
        {        
          this.translate.use(lang);
        })
  }
  forgotPassword(content){    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {      
      console.log(this.sendPasswordForm);
      console.log(this.sendPasswordForm.value);
      if(!this.sendPasswordForm.valid)
      {
        alert("form not ok");
        return;
      }        
      else
      alert("form ok")
    }, (reason) => {
      console.log("result from modal,reason: ",reason);
    });
  }
  onSubmit(){
    console.log("value form submited ! ",this.signInForm.value);
    if(this.signInForm.valid){
      alert("login information is oke")
    }else
    alert("login not oke")
  }

}
