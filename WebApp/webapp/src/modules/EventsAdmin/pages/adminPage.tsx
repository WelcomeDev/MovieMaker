import { NavigationItems } from './components/navigation/navigationItems';
import { MailsProvider } from '../hooks/context/mailsProvider';
import { MailsList } from './mails/mailsList';
import './adminPage.scss';
import { AdminEventsProvider } from '../hooks/context/adminEventsProvider';
import { EventsList } from './events/eventsList';
import { useState } from 'react';
import { ADMIN_NAV } from './components/ADMIN_NAV';

export const AdminPage = () => {

    const [location, setLocation] = useState(ADMIN_NAV.EVENTS)
    console.log('admin page rendered')
    return (
        <MailsProvider>
            <AdminEventsProvider>
                <section
                    className={'admin-page-wrapper'}
                >
                    <NavigationItems update={setLocation}/>
                    {
                       location === ADMIN_NAV.EMAIL
                            ? <MailsList/>
                            : <EventsList/>
                    }
                </section>
            </AdminEventsProvider>
        </MailsProvider>
    );
};
