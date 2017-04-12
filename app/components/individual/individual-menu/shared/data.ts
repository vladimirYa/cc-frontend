import { IMenuItem } from '../../../shared/menu-items.interface';

export let individualMenuLinks: IMenuItem[] = [
    {
        text: 'Dashboard',
        routerLink: 'dashboard',
        imageName: 'home-icon'
    },
    {
        text: 'My ChargaCards',
        routerLink: 'card-managment',
        imageName: 'card'
    },
    {
        text: 'Settings',
        routerLink: 'settings',
        imageName: 'settings'
    }

];
