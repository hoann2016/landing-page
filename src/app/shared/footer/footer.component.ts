import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../services/landing-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 
  guessMessageForm :FormGroup;
  isSubmitted:boolean=false;
  today: number = Date.now();
  constructor(public fb: FormBuilder,private translate: TranslateService,
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
      Content:["",Validators.required]

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
      alert("Form infor is oke")
    }else{
      alert("Not oke");
    }
    console.log(this.guessMessageForm.value);
  }

}
