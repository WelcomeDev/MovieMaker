import { Navigate, RouteObject } from 'react-router-dom';
import { Navigation, ProtectedNavigation } from '../../EventsPubic/pages/navigation';
import { NotFound } from './notFound/notFound';
import { lazy } from 'react';
import { EventsNavigationProvider } from './components/hooks/context/eventsNavigationContext';
import { Header } from './components/header/header';
import { SideNavigator } from './components/navigation/sideNavigator';
import { EventSinglePageWrapper } from '../../EventsPubic/pages/eventSinglePageWrapper';

const { EVENTS, AUTH } = Navigation;

const AuthPage = lazy(() => import('../../Auth/pages/authPage')
    .then(({ AuthPage }) => ({ default: AuthPage })));
const AdminPage = lazy(() => import('../../EventsAdmin/pages/adminPage')
    .then(({ AdminPage }) => ({ default: AdminPage })));

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

export const routes = (isLoggedIn: boolean): RouteObject[] => [
    {
        path: `${EVENTS}/*`,
        element: <PublicPage/>,
    },
    {
        path: AUTH,
        element: <AuthPage/>,
    },
    {
        path: ProtectedNavigation.EVENTS,
        element: isLoggedIn
            ? <AdminPage/>
            : <Navigate to={AUTH}/>,
    },
    {
        path: '*',
        element: <NotFound/>,
    },
];
