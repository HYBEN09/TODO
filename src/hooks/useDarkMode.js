import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(
    () => localStorage.theme === 'dark'
  );

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkModeOn(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkModeOn(true);
    }
  };

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark');
    }

    setIsDarkModeOn(localStorage.theme === 'dark');
  }, []);

  return { toggleDarkMode, isDarkModeOn };
}
