import { useCallback, useRef } from 'react';
import { Action } from '../../../lib/interfaces/action';
import Timeout = NodeJS.Timeout;

const defaultDelay = 250;

export function useDebounce(callback: Action, delay: number = defaultDelay) {
    const timer = useRef<Timeout | null>(null);
    const debounceCallback = useCallback(() => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => callback(), delay);
    }, [callback, delay]);

    return debounceCallback;
}