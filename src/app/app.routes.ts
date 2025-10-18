import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Activities } from './pages/activities/activities';
import { Login } from './pages/login/login';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'activities', component: Activities },
    { path: 'login', component: Login },

];
