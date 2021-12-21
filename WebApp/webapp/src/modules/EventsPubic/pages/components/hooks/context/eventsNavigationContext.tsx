import { createContext, memo, ReactNode, useCallback, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import { useDebounce } from '../../../../../General/hooks/useDebounce';
import { EventsNavigation } from '../../../../../General/model/navigation';

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

const { HELLO, CONTACTS, WORKS } = EventsNavigation;

export const EventsNavigationProvider = memo(({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigationList = useMemo(() => [HELLO, WORKS, CONTACTS], []);
    const scrollPage = useDebounce((e: WheelEvent) => scroll(e), 750);

    const currentInd = useMemo(() => navigationList.indexOf(location.pathname as EventsNavigation), [location.pathname]);
    const transformShift = useCallback(() => -window.innerHeight * currentInd, [currentInd]);

    useEffect(
        () => {
            document.addEventListener('wheel', scrollPage);
        },
        []);

    const scroll = useCallback(
        (e: WheelEvent) => {
            console.log(e);
            if (e.deltaY < 0) moveUp();
            else moveDown();
        }, []);

    const moveUp = useCallback(
        () => {
            if (currentInd - 1 >= 0) {
                navigate(navigationList[currentInd - 1], { replace: true });
            }
        }, [currentInd]);

    const moveDown = useCallback(
        () => {
            if (currentInd + 1 < navigationList.length) {
                navigate(navigationList[currentInd + 1], { replace: true });
            }
        }, [currentInd]);

    function navigateTo(nav: EventsNavigation) {
        navigate(nav);
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
