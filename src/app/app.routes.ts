import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    }
    ,
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        canActivate: [authGuard]
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: []
    }

];
