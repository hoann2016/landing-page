import { TemplateRef, Type } from "@angular/core"

export type SelectBoxCloseEvent<T> = {
    type: 'backdropClick' | 'close',
    data?: T
}

export type SelectBoxContent = TemplateRef<any> | Type<any> | string;
