import { Routes, RouterModule } from '@angular/router';

export const rootRouterConfig: Routes = [
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

