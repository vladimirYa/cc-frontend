import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SiteComponent } from '../../components/site/site.component';
import { SiteMainComponent } from '../../components/site/site-main/site-main.component';
import { SiteHeaderComponent } from '../../components/site/site-header/site-header.component';
import { SiteFooterComponent } from '../../components/site/site-footer/site-footer.component';
import { AboutComponent } from '../../components/site/about/about.component';   
import { ContactUsComponent } from '../../components/site/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './shared/routes'

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(routerConfig) ],
    declarations: [
        SiteComponent,
        SiteMainComponent,
        SiteHeaderComponent,
        SiteFooterComponent,
        AboutComponent,
        ContactUsComponent
    ],
    exports: [
        SiteComponent,
        SiteMainComponent,
        SiteHeaderComponent,
        SiteFooterComponent,
        AboutComponent,
        ContactUsComponent
    ],
})

export class SiteModule{ }
