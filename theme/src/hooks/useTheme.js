import { useEffect, useState } from 'react';

export default function useTheme(defaultTheme = 'light') {
    
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
