import { Injectable } from "@angular/core";
import { ApiBaseService } from "./api-base.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { ExchangeRateConstant, ExchangeRateKey } from "@shared/constants/exchange-rate.constant";
import { ToastrService } from "ngx-toastr";
import { TranslateService } from "@ngx-translate/core";
import { UniversalStorage } from "@shared/storage/universal.storage";

@Injectable({
    providedIn: 'root'
})
export class ExchangeRateService extends ApiBaseService {
    private exchangeRateValueSubject: BehaviorSubject<number> = new BehaviorSubject(1);
    public exchangeRateValue: Observable<number> = this.exchangeRateValueSubject.asObservable();
    constructor(
        protected http: HttpClient,
        private messageService: ToastrService,
        private translateService: TranslateService,
        private cookieStorage: UniversalStorage
    ) {
        super(http);
    }

    getCurrentExchangeRate(currencyCode: string): Observable<any> {
        const url: string = `https://api.exchangerate-api.com/v4/latest/${ currencyCode }`;
        return super.getOutsideLudiinoServer(url).pipe(
            map((result: any) => {
                if (result && result.rates && result.rates['VND']) {
                    return result.rates['VND'];
                }
                return 1;
            })
        )
    }

    applyExchangeRate(code: string): void {
        if (code !== 'vi' && ExchangeRateConstant[code]) {
            this.getCurrentExchangeRate(ExchangeRateConstant[code]).subscribe(
                (currentExchange: number) => {
                    this.cookieStorage.setItem(ExchangeRateKey, currentExchange.toString());
                    this.exchangeRateValueSubject.next(currentExchange);
                },
                (error: HttpErrorResponse) => {
                    this.cookieStorage.setItem(ExchangeRateKey, "1");
                    this.exchangeRateValueSubject.next(1);
                    this.messageService.error(this.translateService.instant('ExchangeRate.ErrorLoad'));
                }
            )
        } else {
            this.exchangeRateValueSubject.next(1);
            this.cookieStorage.removeItem(ExchangeRateKey);
        }
    }

    setExchangeRateValue(value: number): void {
        this.exchangeRateValueSubject.next(value);
    }
}