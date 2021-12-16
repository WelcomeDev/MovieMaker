import { lazy, Suspense, useCallback, useEffect } from 'react';
import { useEventsNavigation } from '../../Main/pages/components/hooks/context/eventsNavigationContext';
import { useDebounce } from '../../General/hooks/useDebounce';

const SCROLL_DELAY = 250;
const WorksPage = lazy(() => import('../../EventsPubic/pages/works/worksPage')
    .then(({ WorksPage }) => ({ default: WorksPage })));
const HelloPage = lazy(() => import('../../EventsPubic/pages/hello/helloPage')
    .then(({ HelloPage }) => ({ default: HelloPage })));
const ContactsPage = lazy(() => import('../../EventsPubic/pages/contacts/contactsPage')
    .then(({ ContactsPage }) => ({ default: ContactsPage })));

export function EventSinglePageWrapper() {

    const { moveDown, moveUp } = useEventsNavigation();
    const scrollPage = useDebounce<WheelEvent>(e => scroll(e), SCROLL_DELAY);

    const scroll = useCallback(
        (e: WheelEvent) => {
            console.log('invoked!');
            // e.deltaY < 0 ? moveDown() : moveUp();
        },
        []);

    useEffect(
        () => {
            document.addEventListener('wheel', scrollPage);
        },
        []);

    return (
        <Suspense fallback={'Loading'}>
            <div
                className={'single-page'}
            >
                <HelloPage/>
                <WorksPage/>
                <ContactsPage/>
            </div>
        </Suspense>
    );
}