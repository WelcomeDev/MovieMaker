import { NavigationItems } from './components/navigation/navigationItems';
import { memo } from 'react';
import { MailsProvider } from '../hooks/context/mailsProvider';
import { MailsList } from './mails/mailsList';
import './adminPage.scss';

export const AdminPage = memo(() => {
    return (
        <MailsProvider>
            <section
                className={'admin-page-wrapper'}
            >
                <NavigationItems/>
                <MailsList/>
            </section>
        </MailsProvider>
    );
});
