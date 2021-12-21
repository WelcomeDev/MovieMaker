import { NavigationItem } from '../../../../General/model/navigationItem';
import { AdminNavigation } from '../../../../General/model/navigation';

const { EVENTS, MAILS } = AdminNavigation;

export const adminNavigation: NavigationItem[] = [
    {
        title: 'Почта',
        icon: 'mdi:email',
        navigation: MAILS,
    },
    {
        title: 'Архив',
        icon: 'mdi:calendar-star',
        navigation: EVENTS,
    },
];
