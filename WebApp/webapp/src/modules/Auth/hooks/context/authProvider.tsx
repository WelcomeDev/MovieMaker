import { createContext, memo, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Authorities, User } from '../../model/user';
import { logIn } from '../../actions/authActions';

export interface AuthService {
    isLoading: boolean;
    user: User | null;
    logIn: (username: string, password: string) => Promise<void>;
}

const authContext = createContext<AuthService | null>(null);

export function useAuth() {
    const context = useContext(authContext);
    if (!context) throw new Error('useAuth can be used only inside AuthProvider');
    return context;
}

export const AuthProvider = memo(({ children }: { children: ReactNode }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const onLogIn = useCallback((username: string, password: string) => {
        setIsLoading(true);
        return logIn(username, password)
            .then(user => setUser(user))
            .finally(() => setIsLoading(false));
    }, []);

    const memorizedValue = useMemo(
        () => ({
            user,
            isLoading,
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
});
