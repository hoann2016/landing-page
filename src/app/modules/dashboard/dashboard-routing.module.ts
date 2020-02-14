import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePageComponent } from './core/pages/private-page/private-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dasboard/home'
    },
    {
        path: 'home',
        component: PrivatePageComponent,
        children: [
            {
                path: '',
                loadChildren: './modules/home/home.module#HomeModule'
            }
        ]
    },
    {
        path: 'merchant',
        component: PrivatePageComponent,
        children: [
            {
                path: '',
                loadChildren: './modules/merchant/merchant.module#MerchantModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DashboardRoutingModule,
            providers: []
        }
    }
}
