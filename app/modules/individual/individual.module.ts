import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IndividualComponent } from '../../components/individual/individual.component';
import { IndividualMenuComponent } from '../../components/individual/individual-menu/individual-menu.component';
import { IndividualHeaderComponent } from '../../components/individual/individual-header/individual-header.component';
import { IndividualContentComponent } from '../../components/individual/individual-content/individual-content.component';
import { IndividualUserService } from '../../services/individual/individual-user.service';
import { routerConfig } from './shared/routes'

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(routerConfig) ],
    declarations: [
        IndividualComponent,
        IndividualMenuComponent,
        IndividualHeaderComponent,
        IndividualContentComponent
    ],
    exports: [
        IndividualComponent,
        IndividualMenuComponent,
        IndividualHeaderComponent,
        IndividualContentComponent
    ],
    providers: [IndividualUserService]
})

export class IndividualModule{ }
