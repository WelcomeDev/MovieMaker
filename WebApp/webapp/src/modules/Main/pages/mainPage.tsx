import { EventsNavigationProvider } from './components/hooks/context/eventsNavigationContext';
import { Header } from './components/header/header';
import { Navigation } from '../../EventsPubic/pages/navigation';
import { SideNavigator } from './components/navigation/sideNavigator';
import './mainPage.scss';
import { EventStoreProvider } from '../../EventsPubic/pages/works/hooks/eventStoreProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './notFound/notFound';
import { AuthPage } from '../../Auth/pages/authPage';
import { EventSinglePageWrapper } from 'src/modules/EventsPubic/pages/eventSinglePageWrapper';

const { EVENTS, AUTH } = Navigation;

export function MainPage() {
    console.log('Main page rerendered');
    return (
        <BrowserRouter>
            <EventsNavigationProvider>
                <div className={'wrapper'}>
                    <Header/>
                    <SideNavigator/>
                    <EventStoreProvider>
                        <Routes>
                            <Route
                                // @ts-ignore
                                index
                                path={EVENTS}
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
                    </EventStoreProvider>
                </div>
            </EventsNavigationProvider>
        </BrowserRouter>
    );
}