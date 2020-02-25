import { Pipe, PipeTransform } from "@angular/core";
import { ExchangeRateService } from "@shared/services/exchange-rate.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Pipe({ name: 'priceExchangeRate' })
export class PriceExchangeRatePipe implements PipeTransform {
    constructor(
        private exchangeRateService: ExchangeRateService
    ) { }

    transform(value: string): Observable<string> {
        return this.exchangeRateService.exchangeRateValue.pipe(
            map((currentExchange: number) => {
                const floatTypeValue: number = parseFloat(value);
                const currentPrice: number = (floatTypeValue / currentExchange);
                if (!this.checkIsInt(currentPrice)) {
                    return parseFloat(currentPrice.toString()).toFixed(2);
                }
                return (parseFloat(value) / currentExchange).toString()
            })
        )
    }

    checkIsInt(checkNumber: number): boolean {
        return checkNumber % 1 === 0;
    }
}