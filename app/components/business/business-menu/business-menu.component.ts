import { Component } from '@angular/core';
import { businessMenuLinks } from './shared/data';
declare var require: any;

@Component({
    selector: 'business-menu',
    templateUrl: './business-menu.component.html',
    styleUrls: ['./business-menu.component.less', '../../common/styles/cabinet-menu.less']
})

export class BusinessMenuComponent {
    menuItems = businessMenuLinks;

    loadImg(image){
        return require(`../../common/images/cabinet-menu/${image}.png`);
    }
}
