import useTheme from './hooks/useTheme';
import './App.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Current Theme: {theme}</h1>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
