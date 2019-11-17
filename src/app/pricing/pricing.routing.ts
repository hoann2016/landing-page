  
import { PricingComponent } from './pricing.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PricingComponent,
    // data: {
    //   meta: {
    //     title: 'home.title',
    //     description: 'home.text',
    //     override: true,
    //   },
    // },
  },
];

export const PricingRoutes = RouterModule.forChild(routes);