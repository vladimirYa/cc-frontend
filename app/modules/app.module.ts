import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';

import { AppComponent } from '../components/app.component';

export const routeConfig = [
     { path:'', pathMatch: 'full', redirectTo: 'site'},
     { path: 'site', loadChildren: './site/site.module#SiteModule' },
     { path: 'business', loadChildren: './business/business.module#BusinessModule' },
     { path: 'individual', loadChildren: './individual/individual.module#IndividualModule' }
];
@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(routeConfig)
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})



export class AppModule { }
