export default function ThemeToggle({ theme, onToggle }) {
    return (
        <button
            id="theme-toggle"
            className="theme-toggle"
            onClick={onToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <div className={`toggle-track ${theme}`}>
                <span className="toggle-icon sun">☀️</span>
                <span className="toggle-icon moon">🌙</span>
                <div className="toggle-thumb" />
            </div>
        </button>
    );
}
