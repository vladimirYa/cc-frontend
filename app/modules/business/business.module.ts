import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BusinessComponent } from '../../components/business/business.component';
import { BusinessHeaderComponent } from '../../components/business/business-header/business-header.component';
import { BusinessMenuComponent } from '../../components/business/business-menu/business-menu.component';
import { BusinessContentComponent } from '../../components/business/business-content/business-content.component';

import { routerConfig } from './shared/routes'

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(routerConfig) ],
    declarations: [
        BusinessComponent,
        BusinessMenuComponent,
        BusinessHeaderComponent,
        BusinessContentComponent
    ],
    exports: [
        BusinessComponent,
        BusinessMenuComponent,
        BusinessHeaderComponent,
        BusinessContentComponent
    ],
})

export class BusinessModule{ }
