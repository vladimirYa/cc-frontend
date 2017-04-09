import { SiteComponent } from '../../../components/site/site.component';
import { AboutComponent } from '../../../components/site/about/about.component';
import { ContactUsComponent } from '../../../components/site/contact-us/contact-us.component';

export const routerConfig = [{
    path: '',
    component: SiteComponent,
    children:[
        { path: 'about',  component: AboutComponent},
        { path: 'contact-us',  component: ContactUsComponent}
    ]
}];
