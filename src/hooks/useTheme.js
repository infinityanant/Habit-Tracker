import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'habit-tracker-theme';

export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem(STORAGE_KEY) || 'dark';
        } catch {
            return 'dark';
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    return { theme, toggleTheme };
}
