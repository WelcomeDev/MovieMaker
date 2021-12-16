import { EventsNavigationProvider } from './components/hooks/context/eventsNavigationContext';
import { Header } from './components/header/header';
import { Navigation } from '../../EventsPubic/pages/navigation';
import { SideNavigator } from './components/navigation/sideNavigator';
import './mainPage.scss';
import { EventStoreProvider } from '../../EventsPubic/pages/works/hooks/eventStoreProvider';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { NotFound } from './notFound/notFound';
import { AuthPage } from '../../Auth/pages/authPage';
import { EventSinglePageWrapper } from 'src/modules/EventsPubic/pages/eventSinglePageWrapper';
import { useEffect } from 'react';

const { EVENTS, AUTH } = Navigation;

const MainRoutes = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(
        () => {
            if (location.pathname === '/')
                navigate(EVENTS);
        },
        []);

    useEffect(
        () => {
            console.log(location.pathname);
        },
        [location.pathname]);
    return (
        <Routes>
            <Route
                // @ts-ignore
                index
                path={`${EVENTS}/*`}
                element={<EventSinglePageWrapper/>}
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
            <EventsNavigationProvider>
                <div className={'wrapper'}>
                    <Header/>
                    <SideNavigator/>
                    <EventStoreProvider>
                        <MainRoutes/>
                    </EventStoreProvider>
                </div>
            </EventsNavigationProvider>
        </BrowserRouter>
    );
}