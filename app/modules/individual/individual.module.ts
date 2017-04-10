import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IndividualComponent } from '../../components/individual/individual.component';
import { routerConfig } from './shared/routes'

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(routerConfig) ],
    declarations: [
        IndividualComponent
    ],
    exports: [
        IndividualComponent 
    ],
})

export class IndividualModule{ }
