import { EventsNavigation } from '../../EventsPubic/pages/navigation';
import './mainPage.scss';
import { EventStoreProvider } from '../../EventsPubic/pages/works/hooks/eventStoreProvider';
import { BrowserRouter, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { memo, Suspense, useEffect } from 'react';
import { AuthProvider, useAuth } from '../../Auth/hooks/context/authProvider';
import { LoadingFallback } from './components/fallback/loadingFallback';
import { routes } from './routes';

const MainRoutes = () => {
    const location = useLocation();
    const navigator = useNavigate();
    const { user } = useAuth();
    const appRoutes = useRoutes(routes(!!user));
    useEffect(() => {
            if (location.pathname === '/')
                navigator(EventsNavigation.HELLO, { replace: true });
        },
        []);

    return (
        <Suspense
            fallback={<LoadingFallback/>}
        >
            {appRoutes}
        </Suspense>
    );
};

export const MainPage = memo(() => {
    return (
        <BrowserRouter>
            <EventStoreProvider>
                <AuthProvider>
                    <MainRoutes/>
                </AuthProvider>
            </EventStoreProvider>
        </BrowserRouter>
    );
});