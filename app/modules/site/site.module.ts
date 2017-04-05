import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SiteComponent } from '../../components/site/site.component';
import { SiteMainComponent } from '../../components/site/site-main/site-main.component';
import { SiteHeaderComponent } from '../../components/site/site-header/site-header.component';
import { SiteFooterComponent } from '../../components/site/site-footer/site-footer.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        SiteComponent,
        SiteMainComponent,
        SiteHeaderComponent,
        SiteFooterComponent
    ],
    exports: [
        SiteComponent,
        SiteMainComponent,
        SiteHeaderComponent,
        SiteFooterComponent
    ],
})

export class SiteModule{ }
