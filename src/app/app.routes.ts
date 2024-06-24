import { Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { AccountLoginComponent } from './layout/login/account-login/account-login.component';
import { AccountVerificationComponent } from './layout/login/account-verification/account-verification.component';
import { EmailLoginComponent } from './layout/login/email-login/email-login.component';
import { AppComponent  } from "./AppComponent";

export const routes: Routes = [
  {
    path: '',
    component:AppComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'email',
        component: EmailLoginComponent,
      },
      {
        path: '',
        component: AccountLoginComponent,
      },
      {
        path: 'verification',
        component: AccountVerificationComponent,
      },
      {
        path: '**',
        component: AccountLoginComponent,
      },
    ],
  },
];
