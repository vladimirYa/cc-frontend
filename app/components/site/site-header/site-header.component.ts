import { Component } from '@angular/core';
import { siteLinks } from './shared/data';

@Component({
    selector: 'site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.less']
})

export class SiteHeaderComponent {
    siteLinks = siteLinks;
}
