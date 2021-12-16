import { createContext, memo, ReactNode, useCallback, useContext, useEffect, useMemo } from 'react';
import { EventsNavigation } from '../../../../../EventsPubic/pages/navigation';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import { useDebounce } from '../../../../../General/hooks/useDebounce';

export interface EventsNavigationContext {
    navigateTo: (nav: EventsNavigation) => void;
    location: Location;
    transformShift: number;
}

const eventsNavigationContext = createContext<EventsNavigationContext | null>(null);

export function useEventsNavigation() {
    const context = useContext(eventsNavigationContext);
    if (!context) throw new Error('useNavigation must be only inside NavigationProvider');

    return context;
}

const SCROLL_DELAY = 250;
const { HELLO, CONTACTS, WORKS } = EventsNavigation;

export const EventsNavigationProvider = memo(({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigationList = useMemo(() => [HELLO, WORKS, CONTACTS], []);
    const currentInd = useMemo(() => navigationList.indexOf(location.pathname as EventsNavigation), [location.pathname]);
    const transformShift = useCallback(() => -window.innerHeight * currentInd, [currentInd]);
    const scrollPage = useDebounce<WheelEvent>(e => scroll(e), SCROLL_DELAY);

    // useEffect(
    //     () => {
    //         document.addEventListener('wheel', scrollPage);
    //     },
    //     []);

    // useEffect(
    //     () => {
    //         console.log(`currentInd ${currentInd}`);
    //         console.log(`navigation is ${location.pathname}, as events: ${location.pathname as EventsNavigation}`);
    //         console.log(`it's index: ${navigationList.indexOf(location.pathname as EventsNavigation)}`);
    //     },
    //     [currentInd, location.pathname],
    // );

    function moveUp() {
        // console.log(`was ${navigation}`);
        if (currentInd + 1 < navigationList.length) {
            navigate(navigationList[currentInd + 1]);
            // console.log(`set to ${navigationList[ind + 1]}`);
        }
    }

    function moveDown() {
        // console.log(`was ${navigation}`);
        if (currentInd - 1 > 0) {
            const down = navigationList[currentInd - 1];
            navigate(down);
            // console.log(`set to ${down}`);
        }
    }

    function navigateTo(nav: EventsNavigation) {
        navigate(nav);
    }

    function scroll(e: WheelEvent) {
        console.log('invoked!');
        e.deltaY < 0 ? moveDown() : moveUp();
    }

    return (
        <eventsNavigationContext.Provider
            value={{
                location,
                navigateTo,
                transformShift: transformShift(),
            }}>
            {children}
        </eventsNavigationContext.Provider>
    );
});
