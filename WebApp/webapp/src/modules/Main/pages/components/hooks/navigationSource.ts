import { EventsNavigation, NavigationType } from '../../../../EventsPubic/pages/navigation';

export interface NavigationItem {
    title: string;
    icon: string;
    navigation: NavigationType;
}

const { CONTACTS, HELLO, WORKS } = EventsNavigation;

export const navigationSource: NavigationItem[] = [
    {
        title: 'главная',
        icon: '',
        navigation: HELLO,
    },
    // {
    //     title: 'об авторе',
    //     icon:'',
    //     navigation: ABOUT_AUTHOR,
    // },
    {
        title: 'работы',
        icon: '',
        navigation: WORKS,
    },
    {
        title: 'контакты',
        icon: '',
        navigation: CONTACTS,
    },
];
