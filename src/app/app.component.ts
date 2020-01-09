import { Component, OnInit } from '@angular/core';
import { UniversalStorage } from '@shared/storage/universal.storage';
import { ExchangeRateService } from '@shared/services/exchange-rate.service';
import { ExchangeRateKey } from '@shared/constants/exchange-rate.constant';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
    constructor(
        private cookieStorage: UniversalStorage,
        private exchangeRateService: ExchangeRateService
    ) {
    }

    ngOnInit() {
        const currentExchangeRate = this.cookieStorage.getItem(ExchangeRateKey);
        if (currentExchangeRate && parseFloat(currentExchangeRate) !== 1) {
            this.exchangeRateService.setExchangeRateValue(parseFloat(currentExchangeRate));
        }
    }
}
