import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import { AdminEventStore } from '../../store/adminEventStore';
import { useAuth } from '../../../Auth/hooks/context/authProvider';
import { Authorities } from '../../../Auth/model/user';

const adminEventsContext = createContext<AdminEventStore | null>(null);

export function useAdminEventsStore() {
    const context = useContext(adminEventsContext);
    if (!context) throw new Error('mailsContext is null');

    return context;
}

export const AdminEventsProvider = observer(({ children }: { children: ReactNode }) => {
    const adminEventStore = useMemo(() => new AdminEventStore(), []);
    const { user } = useAuth();
    useEffect(
        () => {
            adminEventStore.load();
        },
        []);

    return (
        // user?.authority === Authorities.ADMIN
        <adminEventsContext.Provider value={adminEventStore}>
            {children}
        </adminEventsContext.Provider>
        // : <>{children}</>
    );
});

