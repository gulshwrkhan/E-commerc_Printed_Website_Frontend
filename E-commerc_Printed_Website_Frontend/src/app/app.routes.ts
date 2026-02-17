import { Routes } from '@angular/router';
import { Home } from './features/dashboard/home/home';
import { PageNotFound } from './features/page-not-found/page-not-found';
import { MainLayout } from './features/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children:[
            {
                path: '',
                component: Home
            }
        ]
    },
    {
        path: '404',
        component: PageNotFound
    },
    {
        path: '**',
        redirectTo: '404',
    }
];
