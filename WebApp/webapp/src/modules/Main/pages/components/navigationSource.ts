import { Navigation } from '../main/navigation';

export interface NavigationItem {
    title: string;
    icon: string;
    navigation: Navigation;
}

const {CONTACTS, HELLO, WORKS, ABOUT_AUTHOR} = Navigation;

export const navigationSource: NavigationItem[] = [
    {
        title: 'главная',
        icon:'',
        navigation: HELLO,
    },
    // {
    //     title: 'об авторе',
    //     icon:'',
    //     navigation: ABOUT_AUTHOR,
    // },
    {
        title: 'работы',
        icon:'',
        navigation: WORKS,
    },
    {
        title: 'контакты',
        icon:'',
        navigation: CONTACTS,
    },
];
