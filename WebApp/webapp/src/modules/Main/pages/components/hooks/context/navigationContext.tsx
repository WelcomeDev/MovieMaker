import { createContext, memo, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { Navigation } from '../../../main/navigation';
import { Action } from '../../../../../../lib/interfaces/action';

export interface NavigationContext {
    current: Navigation;
    setNavigation: (destination: Navigation) => void;
    moveUp: Action;
    moveDown: Action;
}

const navigationContext = createContext<NavigationContext | null>(null);

export function useNavigation() {
    const context = useContext(navigationContext);
    if (!context) throw new Error('useNavigation must be only inside NavigationProvider');

    return context;
}

const { HELLO, CONTACTS, ABOUT_AUTHOR, WORKS } = Navigation;

export const NavigationProvider = memo(({ children }: { children: ReactNode }) => {
    const [navigation, setNavigation] = useState(HELLO);
    const navigationList = useMemo(() => [HELLO, ABOUT_AUTHOR, WORKS, CONTACTS], []);

    console.log('NavigationProvider rerendered')

    useEffect(() => {
        // console.log(`Navigation changed to ${navigation}`);
    }, [navigation]);

    function moveUp() {
        const ind = navigationList.indexOf(navigation);
        // console.log(`was ${navigation}`);
        if (ind + 1 < navigationList.length) {
            setNavigation(navigationList[ind + 1]);
            // console.log(`set to ${navigationList[ind + 1]}`);
        }
    }

    function moveDown() {
        const ind = navigationList.indexOf(navigation);
        // console.log(`was ${navigation}`);
        if (ind - 1 > 0) {
            const down = navigationList[ind - 1];
            setNavigation(down);
            // console.log(`set to ${down}`);
        }
    }

    return (
        <navigationContext.Provider
            value={{
                current: navigation,
                moveUp, moveDown,
                setNavigation,
            }}>
            {children}
        </navigationContext.Provider>
    );
});
