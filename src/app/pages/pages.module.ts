import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DemoPagesComponent } from './demo-pages/demo-pages.component';
import { PAGES_ROUTES } from './pages-route';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
    declarations: 
    [
        PagesComponent,
        DemoPagesComponent,
        SidebarComponent,
        HeaderComponent,
    ],
    imports: [ 
        CommonModule,
        PAGES_ROUTES,
    ],
    exports: [],
    providers: [],
})
export class PagesModule {}