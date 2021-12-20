import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { User } from '../../model/user';
import { logIn, whoAmI } from '../../actions/authActions';

export interface AuthService {
    isLoading: boolean;
    user: User | null;
    logIn: (username: string, password: string) => void;
    whoAmI: () => void;
}

const authContext = createContext<AuthService | null>(null);

export function useAuth() {
    const context = useContext(authContext);
    if (!context) throw new Error('useAuth can be used only inside AuthProvider');
    return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(
        () => {
            onWhoAmI();
        }
        , []);

    function onLogIn(username: string, password: string) {
        setIsLoading(true);
        logIn(username, password)
            .then(user => setUser(user))
            .finally(() => setIsLoading(false));
    }

    function onWhoAmI() {
        setIsLoading(true);
        whoAmI()
            .then()
            .finally(() => setIsLoading(false));
    }

    const memorizedValue = useMemo(
        () => ({
            user,
            isLoading,
            whoAmI: onWhoAmI,
            logIn: onLogIn,
        }),
        [user, isLoading]);

    return (
        <authContext.Provider
            value={memorizedValue}
        >
            {children}
        </authContext.Provider>
    );
}
