import { NavigationProvider, useNavigation } from './components/hooks/context/navigationContext';
import { Header } from './components/header/header';
import { Navigation } from './main/navigation';
import { SideNavigator } from './components/navigation/sideNavigator';
import './mainPage.scss';
import { EventStoreProvider } from './main/works/hooks/eventStoreProvider';
import { lazy, Suspense, useCallback, useEffect } from 'react';
import { useDebounce } from '../../General/hooks/useDebounce';

const { HELLO, CONTACTS, WORKS } = Navigation;

const SCROLL_DELAY = 250;
const WorksPage = lazy(() => import('./main/works/worksPage')
    .then(({ WorksPage }) => ({ default: WorksPage })));
const HelloPage = lazy(() => import('./main/hello/helloPage')
    .then(({ HelloPage }) => ({ default: HelloPage })));
const ContactsPage = lazy(() => import('./main/contacts/contactsPage')
    .then(({ ContactsPage }) => ({ default: ContactsPage })));

function Content() {
    const { current, moveDown, moveUp } = useNavigation();
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

    switch (current) {
    case HELLO:
        return <HelloPage/>;
    case WORKS:
        return <WorksPage/>;
    case CONTACTS:
        return <ContactsPage/>;
    default:
        throw new Error('');
    }
}

export function MainPage() {
    console.log('Main page rerendered');
    return (
        <NavigationProvider>
            <EventStoreProvider>
                <div className={'wrapper'}>
                    <Header/>
                    <SideNavigator/>
                    <Suspense fallback={'Loading'}>
                        <Content/>
                    </Suspense>
                </div>
            </EventStoreProvider>
        </NavigationProvider>
    );
}