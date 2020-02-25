import { Component, OnInit } from '@angular/core';
import { UniversalStorage } from '@shared/storage/universal.storage';
import { ExchangeRateService } from '@shared/services/exchange-rate.service';
import { ExchangeRateKey } from '@shared/constants/exchange-rate.constant';
import { TranslatesService } from '@shared/translates';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
    constructor(
        private cookieStorage: UniversalStorage,
        private exchangeRateService: ExchangeRateService,
        private _translateService: TranslatesService
    ) {
    }

    ngOnInit() {
        const currentLanguage = this._translateService.getCurrentLang();
        const currentExchangeRate = this.cookieStorage.getItem(ExchangeRateKey);
        if (currentExchangeRate && parseFloat(currentExchangeRate) !== 1) {
            this.exchangeRateService.setExchangeRateValue(parseFloat(currentExchangeRate));
        } else {
            this.exchangeRateService.applyExchangeRate(currentLanguage);
        }
    }
}
