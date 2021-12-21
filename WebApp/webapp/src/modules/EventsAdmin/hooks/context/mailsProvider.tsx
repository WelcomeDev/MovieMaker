import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react';
import { MailsStore } from '../../store/mailsStore';
import { observer } from 'mobx-react';

const mailsContext = createContext<MailsStore | null>(null);

export function useMailsStore() {
    const context = useContext(mailsContext);
    if (!context) throw new Error('mailsContext is null');

    return context;
}

export const MailsProvider = observer(({ children }: { children: ReactNode }) => {
    const mailsStore = useMemo(() => new MailsStore(), []);

    useEffect(
        () => {
            mailsStore.loadMails();
        }, []);

    return (
        <mailsContext.Provider value={mailsStore}>
            {children}
        </mailsContext.Provider>
    );
});

