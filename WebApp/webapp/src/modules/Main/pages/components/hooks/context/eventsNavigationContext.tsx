import { createContext, memo, ReactNode, useContext, useMemo } from 'react';
import { EventsNavigation} from '../../../../../EventsPubic/pages/navigation';
import { Action } from '../../../../../../lib/interfaces/action';
import { useLocation, useNavigate, Location } from 'react-router-dom';

export interface EventsNavigationContext {
    moveUp: Action;
    moveDown: Action;
    navigateTo: (nav: EventsNavigation) => void;
    location: Location;
}

const eventsNavigationContext = createContext<EventsNavigationContext | null>(null);

export function useEventsNavigation() {
    const context = useContext(eventsNavigationContext);
    if (!context) throw new Error('useNavigation must be only inside NavigationProvider');

    return context;
}

const { HELLO, CONTACTS, ABOUT_AUTHOR, WORKS } = EventsNavigation;

export const EventsNavigationProvider = memo(({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigationList = useMemo(() => [HELLO, ABOUT_AUTHOR, WORKS, CONTACTS], []);

    function moveUp() {
        const ind = navigationList.indexOf(location.pathname as EventsNavigation);
        // console.log(`was ${navigation}`);
        if (ind + 1 < navigationList.length) {
            navigate(navigationList[ind + 1]);
            // console.log(`set to ${navigationList[ind + 1]}`);
        }
    }

    function moveDown() {
        const ind = navigationList.indexOf(location.pathname as EventsNavigation);
        // console.log(`was ${navigation}`);
        if (ind - 1 > 0) {
            const down = navigationList[ind - 1];
            navigate(down);
            // console.log(`set to ${down}`);
        }
    }

    function navigateTo(nav: EventsNavigation) {
        navigate(nav);
    }

    return (
        <eventsNavigationContext.Provider
            value={{
                moveUp, moveDown,
                location,
                navigateTo,
            }}>
            {children}
        </eventsNavigationContext.Provider>
    );
});
