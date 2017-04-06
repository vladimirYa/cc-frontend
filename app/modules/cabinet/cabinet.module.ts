import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CabinetComponent } from '../../components/cabinet/cabinet.component';
import { CabinetMenuComponent } from '../../components/cabinet/cabinet-menu/cabinet-menu.component';
import { CabinetContentComponent } from '../../components/cabinet/cabinet-content/cabinet-content.component';
import { CabinetHeaderComponent } from '../../components/cabinet/cabinet-header/cabinet-header.component';
import { CabinetFooterComponent } from '../../components/cabinet/cabinet-footer/cabinet-footer.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './shared/routes';

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(routerConfig) ],
    declarations: [
        CabinetComponent,
        CabinetMenuComponent,
        CabinetContentComponent,
        CabinetHeaderComponent,
        CabinetFooterComponent
    ],
    exports: [
        CabinetComponent,
        CabinetMenuComponent,
        CabinetContentComponent,
        CabinetHeaderComponent,
        CabinetFooterComponent
    ],
})

export class CabinetModule{ }
