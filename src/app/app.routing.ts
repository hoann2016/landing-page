import { Routes, RouterModule } from '@angular/router';
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
    path: '**', 
    redirectTo: 'home'
  }
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { 
  initialNavigation: 'enabled',
  useHash: false, 
  anchorScrolling: 'enabled', 
  scrollPositionRestoration: 'enabled' });
