import { TemplateRef, Type } from '@angular/core';

export type SelectBoxContent = TemplateRef<any> | Type<any> | string;


export type SelectBoxParams<TParams = any> = {
    origin: HTMLElement;
    content: SelectBoxContent;
    data?: TParams,
    width?: string | number;
    height?: string | number;
}

