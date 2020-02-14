import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from '.../../app/shared/layouts/wrapper-common/wrapper-common.component';
import { DashboardWraperComponent } from '@shared/layouts/dashboard-wraper/dashboard-wraper.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule',
    },
    {
        path: 'pages',
        loadChildren: 'app/pages/pages.module#PagesModule'
    },
    {
        path: 'pricing',
        component: WrapperComponent,
        loadChildren: 'app/pricing/pricing.module#PricingModule'
    },
    {
        path: 'features',
        component: WrapperComponent,
        loadChildren: 'app/features/features.module#FeaturesModule'
    },
    {
        path: 'dashboard',
        component: DashboardWraperComponent,
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
});
