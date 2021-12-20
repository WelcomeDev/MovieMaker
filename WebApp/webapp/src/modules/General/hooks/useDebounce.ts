import { useCallback, useRef } from 'react';

const defaultDelay = 250;

export function useDebounce(callback: (e: any) => void, delay = defaultDelay) {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const debounceCallback = useCallback((...args) => {
        if (timer.current) clearTimeout(timer.current);

        // @ts-ignore
        timer.current = setTimeout(() => callback(...args), delay);
    }, [callback, delay]);

    return debounceCallback;
}