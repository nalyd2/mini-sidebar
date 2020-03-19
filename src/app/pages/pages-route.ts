import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DemoPagesComponent } from './demo-pages/demo-pages.component';



const PagesRoutes: Routes = [
    { path: '', component: PagesComponent,
    children: [
        {path: 'demo', component: DemoPagesComponent}
    ]
 },
    { path: '**', component: DemoPagesComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes)
