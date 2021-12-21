import { NavigationItem } from '../../General/model/navigationItem';
import { AdminNavigation } from '../../General/model/navigation';
import { Authorities } from '../../Auth/model/user';

const { EVENTS, MAILS } = AdminNavigation;

export function getAdminNavigation(authorities?: Authorities) {
    const navigation: NavigationItem[] = [
        {
            title: 'Почта',
            icon: 'mdi:email',
            navigation: MAILS,
        },
    ];

    if (authorities && authorities === Authorities.ADMIN)
        navigation.push({
            title: 'Архив',
            icon: 'mdi:calendar-star',
            navigation: EVENTS,
        });

    return navigation;
}
