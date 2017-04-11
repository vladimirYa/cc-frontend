import { Component } from '@angular/core';
import { individualMenuLinks } from './shared/data';
declare var require: any;

@Component({
    selector: 'individual-menu',
    templateUrl: './individual-menu.component.html',
    styleUrls: ['./individual-menu.component.less', '../../common/styles/cabinet-menu.less']
})

export class IndividualMenuComponent {
    menuItems = individualMenuLinks;

    loadImg(image){
        return require(`../../common/images/business-menu/${image}.png`);
    }
    menuIcon = '../../common/images/business-menu/home-icon.png';
}
