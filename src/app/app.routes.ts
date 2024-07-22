import { Routes } from '@angular/router';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './components/layout/register-login/default-layout.component'
      ).then((c) => c.DefaultLayoutComponent),
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      { 
        path: 'login',
      component: LoginComponent,
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/layout/dashboard/layout.component'),
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

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
