import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md focus:outline-none"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeSwitcher;