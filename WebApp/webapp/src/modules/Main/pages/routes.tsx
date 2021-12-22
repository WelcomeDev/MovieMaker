import { Navigate, RouteObject } from 'react-router-dom';
import { NotFound } from './notFound/notFound';
import { lazy } from 'react';
import { Navigation } from '../../General/model/navigation';
import { PublicPage } from '../../EventsPubic/pages/publicPage';

const { EVENTS, AUTH, MANAGE } = Navigation;

const AuthPage = lazy(() => import('../../Auth/pages/authPage')
    .then(({ AuthPage }) => ({ default: AuthPage })));
const AdminPage = lazy(() => import('../../EventsAdmin/pages/adminPage')
    .then(({ AdminPage }) => ({ default: AdminPage })));

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
        path: MANAGE,
        element: isLoggedIn
            ? <AdminPage/>
            : <Navigate to={AUTH}/>,
    },
    {
        path: '*',
        element: <NotFound/>,
    },
];
