import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserPayment } from 'src/app/shared/models/user-models/user-payment.model';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private landingPageService: LandingPageService,
    private toastrService: ToastrService,
    private appService:AppService
   
      ) { }

  state$: Observable<object>;
  public userPayment: UserPayment;

  endDate: string;
  getDate(n: number): string {
    var date = new Date();
    var mm: Date = new Date(date.setMonth(date.getMonth() + n));
    var currentDate: string = mm.getDate() < 10 ? '0' + mm.getDate() : mm.getDate() + '';
    var currentMonth: string = (mm.getMonth() + 1) < 10 ? '0' + (mm.getMonth() + 1) : (mm.getMonth() + 1) + '';
    var strDate: string = currentDate + '/' + currentMonth + '/' + mm.getFullYear()
    return strDate;
  }
  getPackageName(id: number) {
    switch (id) {
      case 1:
        return 'Free';
      case 2: return 'Newbie';
      case 3: return 'Biggie';
      case 4: return 'Hulk';
    }
  }
  ngOnInit() {
    this.landingPageService.getLangSelected().subscribe(lang => {
      this.translate.use(lang);
    });

    this.state$ = this.route.paramMap
      .pipe(     
        map(() =>
          window.history.state
        )
      )
    this.state$.subscribe((p: any) => {    
      if (p != null && p != undefined && p.CustomerName) {
        this.userPayment = {
          CustomerName: p.CustomerName,
          PackageName: this.getPackageName(+p.PackageSelectedName),
          RegisterRange: 6,
          ContactPhone: p.Phone,
          StartDate: this.getDate(0),
          EndDate: this.getDate(6),
          PaymentMethod: '',
        }
        sessionStorage.setItem('userPayment', JSON.stringify(this.userPayment));
      } else {
        if (sessionStorage.getItem('userPayment')) {
          p = JSON.parse(sessionStorage.getItem('userPayment'));       
          if (p != null && p != undefined) {
            this.userPayment = {
              CustomerName: p.CustomerName,
              PackageName: p.PackageName,
              RegisterRange: p.RegisterRange,
              ContactPhone: p.ContactPhone,
              StartDate: p.StartDate,
              EndDate: p.EndDate,
              PaymentMethod: p.PaymentMethod,
            }
          }
        } else {
          this.router.navigate(['/pages/sign-up'])
        }
      }

    });
  }

  SelectDate(evt) {
    this.userPayment.EndDate = this.getDate(evt.target.value);
  }
  ChangePayment(evt) {
    this.userPayment.PaymentMethod = evt.target.value;
  }
  RedirectPaymentGate() {
    if(this.userPayment.PaymentMethod){
      sessionStorage.removeItem('userPayment');
      window.location.href = this.appService.merchangePath;
    }else{
      var content:string= this.translate.instant('Payment.RequireSelectPayment');
      var error:string= this.translate.instant('Shared.AppError.2');
      this.toastrService.error(content, error)
    }
    
  }

}
