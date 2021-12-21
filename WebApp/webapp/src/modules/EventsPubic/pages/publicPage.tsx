import { EventsNavigationProvider } from './hooks/context/eventsNavigationContext';
import { Header } from './components/header/header';
import { SideNavigator } from './components/navigation/sideNavigator';
import { EventSinglePageWrapper } from './eventSinglePageWrapper';

export function PublicPage() {
    return (
        <EventsNavigationProvider>
            <Header/>
            <SideNavigator/>
            <EventSinglePageWrapper/>
        </EventsNavigationProvider>
    );
}