import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BusinessComponent } from '../../components/business/business.component';
import { routerConfig } from './shared/routes'

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(routerConfig) ],
    declarations: [
        BusinessComponent
    ],
    exports: [
        BusinessComponent
    ],
})

export class BusinessModule{ }
