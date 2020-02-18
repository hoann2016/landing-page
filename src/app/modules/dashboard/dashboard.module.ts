import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CoreModule,
        // DashboardRoutingModule.forRoot()
    ]
})
export class DashboardModule { }
