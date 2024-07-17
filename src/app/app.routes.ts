import { Routes } from '@angular/router';

export const routes: Routes = [
  {
     
    path: '',
    loadComponent: () => import('./components/layout/layout.component'),
    children: [
      
      {
        path: 'admindashboard',
        loadComponent: () =>
          import('./view/admin-dashboard/admin-dashboard.component'),
      },
      {
        path: 'profile',
        loadComponent: () => import('./components/profile/profile.component'),
      },
      {
        path: 'charts',
        loadComponent: () => import('./components/charts/charts.component'),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
