import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react';
import { EventStore } from '../../store/eventStore';
import { observer } from 'mobx-react';

const eventStoreContext = createContext<EventStore | null>(null);

export function useEventStore() {
    const context = useContext(eventStoreContext);
    if (!context) throw new Error('useEventStore может использоваться только внутри EventStoreProvider');
    return context;
}

export const EventStoreProvider = observer(({ children }: { children: ReactNode }) => {

    const store = useMemo(() => new EventStore(), []);

    useEffect(
        () => {
            store.load();
        },
        [store]);

    return (
        <eventStoreContext.Provider
            value={store}
        >
            {children}
        </eventStoreContext.Provider>
    );
});