import { useCallback, useRef } from 'react';
import { Action } from '../../../lib/interfaces/actionTyped';

const defaultDelay = 250;

export function useDebounce<T>(callback: Action<T>, delay: number = defaultDelay) {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const debounceCallback = useCallback((arg: T) => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => callback(arg), delay);
    }, [callback, delay]);

    return debounceCallback;
}