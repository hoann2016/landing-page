import { FeaturesComponent } from './features.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    // data: {
    //   meta: {
    //     title: 'home.title',
    //     description: 'home.text',
    //     override: true,
    //   },
    // },
  },
];

export const FeaturesRoutes = RouterModule.forChild(routes);
