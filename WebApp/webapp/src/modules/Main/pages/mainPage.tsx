import { EventsNavigationProvider } from './components/hooks/context/eventsNavigationContext';
import { Header } from './components/header/header';
import { EventsNavigation, Navigation } from '../../EventsPubic/pages/navigation';
import { SideNavigator } from './components/navigation/sideNavigator';
import './mainPage.scss';
import { EventStoreProvider } from '../../EventsPubic/pages/works/hooks/eventStoreProvider';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { NotFound } from './notFound/notFound';
import { AuthPage } from '../../Auth/pages/authPage';
import { EventSinglePageWrapper } from 'src/modules/EventsPubic/pages/eventSinglePageWrapper';
import { useEffect } from 'react';

const { EVENTS, AUTH } = Navigation;

const PublicPage = () => {
    return (
        <EventsNavigationProvider>
            <div className={'wrapper'}>
                <Header/>
                <SideNavigator/>
                <EventSinglePageWrapper/>
            </div>
        </EventsNavigationProvider>
    );
};

const MainRoutes = () => {
    const location = useLocation();
    const navigator = useNavigate();
    useEffect(() => {
            if (location.pathname === '/')
                navigator(EventsNavigation.HELLO, { replace: true });
        },
        []);

    return (
        <Routes>
            <Route
                path={`${EVENTS}/*`}
                element={<PublicPage/>}
            >
            </Route>
            <Route
                path={AUTH}
                element={<AuthPage/>}
            />
            <Route
                path={'*'}
                element={<NotFound/>}
            />
        </Routes>
    );
};

export function MainPage() {
    console.log('Main page rerendered');
    return (
        <BrowserRouter>
            <EventStoreProvider>
                <MainRoutes/>
            </EventStoreProvider>
        </BrowserRouter>
    );
}