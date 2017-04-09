import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';

import { AppComponent } from '../components/app.component';
import { SiteModule } from './site/site.module';
import { CabinetModule } from './cabinet/cabinet.module';

export const routeConfig = [
     {
         path: '',
         children: [
             { path: 'site', loadChildren: './site/site.module#SiteModule' },
             { path: 'cabinet', loadChildren: './cabinet/cabinet.module#CabinetModule' },
         ]
     }
];
@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(routeConfig),
        SiteModule,
        CabinetModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})



export class AppModule { }
