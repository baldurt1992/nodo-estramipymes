import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { WelcomeQuestionnaireComponent } from './components/welcome-questionnaire/welcome-questionnaire.component';
import { RecoveredPasswordComponent } from './view/recovered-password/recovered-password.component';
import { roles } from './models/roles';
import { RoleGuard } from './role.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
      {
        path: 'recovered-pw',
        component: RecoveredPasswordComponent,
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import(
        './components/layout/bussiness-form/bussiness-form.component'
      ).then((c) => c.BussinessFormComponent),
    children: [
      { path: 'questionnaire', component: QuestionnaireComponent },
      {
        path: 'welcome-questionnaire',
        component: WelcomeQuestionnaireComponent,
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
        canActivate: [RoleGuard],
        data: { expectedRoles: [roles.ADMIN, roles.STUDENT, roles.CLIENT] },
      },
      {
        path: 'profile',
        loadComponent: () => import('./components/profile/profile.component'),
        canActivate: [RoleGuard],
        data: { expectedRoles: [roles.ADMIN, roles.STUDENT] },
      },
      {
        path: 'charts',
        loadComponent: () => import('./components/charts/charts.component'),
        canActivate: [RoleGuard],
        data: { expectedRoles: [roles.ADMIN, roles.STUDENT, roles.CLIENT] },
      },
      {
        path: 'sumary',
        loadComponent: () =>
          import('./components/form-sumary/form-sumary.component').then(
            (c) => c.FormSummaryComponent
          ),
        canActivate: [RoleGuard],
        data: { expectedRoles: [roles.ADMIN, roles.STUDENT] },
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
