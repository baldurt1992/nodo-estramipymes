import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { WelcomeQuestionnaireComponent } from './components/welcome-questionnaire/welcome-questionnaire.component';
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
        path: 'welcome-questionaire',
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
      },
      {
        path: 'profile',
        loadComponent: () => import('./components/profile/profile.component'),
      },
      {
        path: 'charts',
        loadComponent: () => import('./components/charts/charts.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
