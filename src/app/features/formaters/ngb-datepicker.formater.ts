import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { isNumber } from 'lodash';
import { getDay } from 'date-fns';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {

    constructor(
        private translate: TranslateService
    ) {
        super();
    }

    parse(value: string): NgbDateStruct {
        if (value) {
            const dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { day: +dateParts[0], month: null, year: null };
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { day: +dateParts[0], month: +dateParts[1], year: null };
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { day: +dateParts[0], month: +dateParts[1], year: +dateParts[2] };
            }
        }
        return null;
    }

    format(date: NgbDateStruct): string {
        if (date) {
            const day: number = getDay(new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0));
            return date ?
                `${ this.translate.instant('Common.DayOfWeek.' + day) } ${
                        isNumber(date.day)
                        ? (date.day > 9 ? date.day : '0' + date.day) : ''
                    }/${isNumber(date.month) ? (date.month > 9 ? date.month : '0' + date.month ) : ''}/${date.year}` :
                '';
        }
    }
}