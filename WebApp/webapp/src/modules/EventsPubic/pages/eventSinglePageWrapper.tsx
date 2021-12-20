import { lazy, Suspense } from 'react';
import { useEventsNavigation } from '../../Main/pages/components/hooks/context/eventsNavigationContext';
import './singlePage.scss';

const WorksPage = lazy(() => import('../../EventsPubic/pages/works/worksPage')
    .then(({ WorksPage }) => ({ default: WorksPage })));
const HelloPage = lazy(() => import('../../EventsPubic/pages/hello/helloPage')
    .then(({ HelloPage }) => ({ default: HelloPage })));
const ContactsPage = lazy(() => import('../../EventsPubic/pages/contacts/contactsPage')
    .then(({ ContactsPage }) => ({ default: ContactsPage })));

export function EventSinglePageWrapper() {

    const { transformShift } = useEventsNavigation();

    return (
        <div
            className={'container'}
        >
            <Suspense
                fallback={'Loading'}
            >
                <div
                    className={'single-page'}
                    style={{ transform: `translateY(${transformShift}px)` }}
                >
                    <HelloPage/>
                    <WorksPage/>
                    <ContactsPage/>
                </div>
            </Suspense>
        </div>
    );
}