import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { 
    path: '', 
    loadChildren: './home/home.module#HomeModule',
    pathMatch: 'full'
  },
  { 
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'  
  },
  { 
    path: '**', 
    redirectTo: 'home/one'
  }
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { 
  initialNavigation: 'enabled',
  useHash: false, 
  anchorScrolling: 'enabled', 
  scrollPositionRestoration: 'enabled' });
