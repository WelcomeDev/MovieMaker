import './mainPage.scss';
import { EventStoreProvider } from '../../EventsPubic/pages/hooks/context/eventStoreProvider';
import { BrowserRouter, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { memo, Suspense, useEffect, useMemo } from 'react';
import { AuthProvider, useAuth } from '../../Auth/hooks/context/authProvider';
import { LoadingFallback } from './components/fallback/loadingFallback';
import { routes } from './routes';
import { EventsNavigation } from '../../General/model/navigation';

const MainRoutes = memo(() => {
    const location = useLocation();
    const navigator = useNavigate();
    const { user } = useAuth();
    const isAuthorized = useMemo(() => !!user, [user]);
    const appRoutes = useRoutes(routes(isAuthorized));
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
});

export const MainPage = memo(() => {
    return (
        <div className={'wrapper'}>
            <BrowserRouter>
                <EventStoreProvider>
                    <AuthProvider>
                        <MainRoutes/>
                    </AuthProvider>
                </EventStoreProvider>
            </BrowserRouter>
        </div>
    );
});