import { Routes } from '@angular/router';
import { AppSideLoginComponent } from './authentication/login/login.component';


export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppSideLoginComponent,
    data: {
      title: 'Starter Page',
    },
  },
];
