import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageRoutingModule } from './package-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PackageRoutingModule.forRoot()
    ]
})
export class PackageModule { }
