import { NavigationItem } from '../../../General/model/navigationItem';
import { EventsNavigation } from '../../../General/model/navigation';

const { CONTACTS, HELLO, WORKS } = EventsNavigation;

export const publicNavigationSource: NavigationItem[] = [
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
