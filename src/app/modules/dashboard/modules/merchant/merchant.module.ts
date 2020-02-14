import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MerchantRoutingModule.forRoot()
    ]
})
export class MerchantModule { }
