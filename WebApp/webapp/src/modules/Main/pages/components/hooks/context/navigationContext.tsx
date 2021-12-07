import { createContext, ReactNode, useContext, useState } from 'react';
import { Navigation } from '../../../main/navigation';

export interface NavigationContext {
    current: Navigation;
    setNavigation: (destination: Navigation) => void;
}

const navigationContext = createContext<NavigationContext | null>(null);

export function useNavigation() {
    const context = useContext(navigationContext);
    if (!context) throw new Error('useNavigation must be only inside NavigationProvider');

    return context;
}

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [navigation, setNavigation] = useState(Navigation.HELLO);

    return (
        <navigationContext.Provider
            value={{
                current: navigation,
                setNavigation,
            }}>
            {children}
        </navigationContext.Provider>
    );
}
