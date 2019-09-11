import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../services/landing-page.service';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 
  guessMessageForm :FormGroup;
  isSubmitted:boolean=false;
  today: number = Date.now();
  constructor(public fb: FormBuilder,
    private translate: TranslateService,
    private appService:AppService,
    private toastr: ToastrService,
    private landingPageService: LandingPageService){

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
      Email: ["", [Validators.required, Validators.email]],      
      Content:["",[Validators.required,Validators.maxLength(255)]]

      }
    );
    this.landingPageService.getLangSelected().subscribe(lang=>
      {        
        this.translate.use(lang);
      })
      
        
   
  }
  onSubmit(){
    this.isSubmitted=true;
    if(this.guessMessageForm.valid)
    {
      this.appService.sendNewLetter({email:this.guessMessageForm.controls.Email.value,content:this.guessMessageForm.controls.Content.value,name:this.guessMessageForm.controls.CustomerName.value}).
      subscribe(response=>{
        console.log(response);
        this.guessMessageForm.reset();
        this.toastr.success(this.translate.instant('Home.Footer.Form.MessageSendSuccess'));        
      },
      error=>{
        if(error.message&&error.message.length>0)
        {
           this.toastr.error(this.appService.renderError(error.error.message,this.translate));
        }
       
      })
    }else{
      
      this.toastr.error(this.translate.instant('Home.Footer.Form.MessageSendFailed'));
    }
    console.log(this.guessMessageForm.value);
  }

}
