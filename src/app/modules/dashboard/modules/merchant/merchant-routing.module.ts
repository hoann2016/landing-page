import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantPageComponent } from './pages/merchant-page/merchant-page.component';
import { DashboardSharedModule } from '../../dashboard-shared/dashboard-shared.module';

const routes: Routes = [
    {
        path: '',
        component: MerchantPageComponent
    }
];

@NgModule({
    declarations: [MerchantPageComponent],
    imports: [RouterModule.forChild(routes), DashboardSharedModule],
    exports: [RouterModule]
})
export class MerchantRoutingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MerchantRoutingModule,
            providers: []
        }
    }
}
