import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import { PublicEventStore } from '../../../store/publicEventStore';

const eventStoreContext = createContext<PublicEventStore | null>(null);

export function useEventStore() {
    const context = useContext(eventStoreContext);
    if (!context) throw new Error('useEventStore может использоваться только внутри EventStoreProvider');
    return context;
}

export const EventStoreProvider = observer(({ children }: { children: ReactNode }) => {

    const store = useMemo(() => new PublicEventStore(), []);

    useEffect(
        () => {
            store.load();
        },
        []);

    return (
        <eventStoreContext.Provider
            value={store}
        >
            {children}
        </eventStoreContext.Provider>
    );
});