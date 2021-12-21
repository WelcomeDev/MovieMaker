import { NavigationItems } from './components/navigation/navigationItems';
import { memo } from 'react';
import { MailsProvider } from '../hooks/context/mailsProvider';
import { MailsList } from './mails/mailsList';
import './adminPage.scss';
import { AdminEventsProvider } from '../hooks/context/adminEventsProvider';
import { useLocation } from 'react-router-dom';
import { AdminNavigation } from '../../General/model/navigation';
import { EventsList } from './events/eventsList';

export const AdminPage = memo(() => {
    const location = useLocation();
    return (
        <MailsProvider>
            <AdminEventsProvider>
                <section
                    className={'admin-page-wrapper'}
                >
                    <NavigationItems/>
                    {
                        location.pathname === AdminNavigation.MAILS &&
                        <MailsList/>
                    }
                    {
                        location.pathname === AdminNavigation.EVENTS &&
                        <EventsList/>
                    }
                </section>
            </AdminEventsProvider>
        </MailsProvider>
    );
});
