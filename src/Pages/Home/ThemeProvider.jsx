import { useEffect, useState } from "react";


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`theme-${theme}`}>
      <button
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700"
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h5.5a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5H11m2-6h.01M7 15H3a2 2 0 01-2-2V6a2 2 0 012-2h4a2 2 0 012 2v7a2 2 0 01-2 2z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 13h.01M7 21h.01M7 13h.01m0 8H7m0-8h10a2 2 0 012 2v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3a2 2 0 012-2z"
            />
          </svg>
        )}
      </button>
      {children}
    </div>
  );
};

export default ThemeProvider;