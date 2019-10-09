import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserPayment } from 'src/app/shared/models/user-models/user-payment.model';
import { UserOrder } from 'src/app/shared/models/user-models/user-order.model';
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
    private appService:AppService,
    private toastr: ToastrService,
      ) { }

  state$: Observable<object>;
  userPayment: UserPayment;
  userOrder: UserOrder;
  packages;
  endDate: string;
  tax: number;
  channel_id: number;
  currency_id: number;
  showLoading: boolean = false;
  getDate(n: number): string {
    console.log("month:", n);
    var date = new Date();
    var mm: Date = new Date(date.setMonth(date.getMonth() + n));
    var currentDate: string = mm.getDate() < 10 ? '0' + mm.getDate() : mm.getDate() + '';
    var currentMonth: string = (mm.getMonth() + 1) < 10 ? '0' + (mm.getMonth() + 1) : (mm.getMonth() + 1) + '';
    var strDate: string = currentDate + '/' + currentMonth + '/' + mm.getFullYear()
    return strDate;
  }
  getSimplePackage(packageId: string) {
    return new Promise((resolve, reject) => {
      this.appService.getActiveSimplePackageById(packageId).subscribe((response) =>{
        if (response.success == true) {
          resolve(response.data.packages);
        }
      },err => {
        reject(err); 
      });
    });
  }
  ngOnInit() {
    this.tax = 0;
    this.channel_id = 1;
    this.currency_id = 1;
    this.landingPageService.getLangSelected().subscribe(lang => {
      this.translate.use(lang);
    });
    this.state$ = this.route.paramMap
      .pipe(     
        map(() =>
          window.history.state
        )
      )
    this.state$.subscribe( async(p: any) => {
      if (p != null && p != undefined && p.id) {
        this.packages = await this.getSimplePackage(p.selectedConfigPackage);
        sessionStorage.setItem('packages', JSON.stringify(this.packages));
        this.userPayment = {
          customer: p.name,
          selectedPackage: this.packages[0],
          phone: p.phone,
          startDate: this.getDate(0),
          endDate: this.getDate(this.packages[0].duration),
          paymentMethod: 'tt',//set default payment
        }
        this.userOrder = {
          merchant_id: p.id,
          currency_id: 1,
          package_id: this.packages[0].id,
          channel_id: 1,
          sub_totals: this.packages[0].price,
          tax: this.tax,
          grand_totals: this.packages[0].price - (this.packages[0].price * this.tax /100)
        }
        sessionStorage.setItem('userPayment', JSON.stringify(this.userPayment));
        sessionStorage.setItem('userOrder', JSON.stringify(this.userOrder));
      } else {
        const userPayment = sessionStorage.getItem('userPayment');
        const userOrder = sessionStorage.getItem('userOrder');
        const packages = sessionStorage.getItem('packages');
        if(!userPayment || !packages || !userOrder) {
          this.router.navigate(['/pages/sign-up'])
        }
        this.userPayment = JSON.parse(userPayment);
        this.packages = JSON.parse(packages);
        this.userOrder = JSON.parse(userOrder);
      }
    });
  }

  SelectDate(evt) {
    this.userPayment.endDate = this.getDate(evt.target.value);
  }
  changePackage(evt) {
    this.userPayment.selectedPackage = this.packages[evt.target.value];
    this.userPayment.endDate = this.getDate(this.userPayment.selectedPackage.duration);
    this.userOrder.package_id =  this.userPayment.selectedPackage.id;
    this.userOrder.sub_totals = this.userPayment.selectedPackage.price;
    this.userOrder.grand_totals = this.userPayment.selectedPackage.price - (this.userPayment.selectedPackage.price * this.tax /100);

    console.log(this.userOrder);
  }
  ChangePayment(evt) {
    this.userPayment.paymentMethod = evt.target.value;
  }
  RedirectPaymentGate() {
    if(this.userPayment.paymentMethod){
      sessionStorage.removeItem('userPayment');
      window.location.href = this.appService.merchangePath;
    }else{
      var content:string= this.translate.instant('Payment.RequireSelectPayment');
      var error:string= this.translate.instant('Shared.AppError.2');
      this.toastrService.error(content, error)
    }
    
  }
  submitOrder() {
    this.showLoading = true;
    this.appService.submitOrder(this.userOrder).subscribe((response) =>{
      if (response.success == true) {
        this.showLoading = false;
        this.toastr.success("Redirect to dashboard ...")
        window.location.href = this.appService.merchangePath;
      }
    },err => {
      this.showLoading = false;
      throw err;
    });
  }

}
