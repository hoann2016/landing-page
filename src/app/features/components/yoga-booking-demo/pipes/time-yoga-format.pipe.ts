import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({ name: 'yogaTimeFormat' })
export class YogaTimeFormatPipe implements PipeTransform {
    transform(value: { timeFrom: Date, timeTo: Date }): string {
        return `${ format(value.timeFrom, 'HH:mm') } - ${ format(value.timeTo, 'HH:mm') }`;
    }
}
