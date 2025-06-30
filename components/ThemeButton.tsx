

'use client'; 

import { useTheme } from '@/context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className='cursor-pointer hover:text-pink-500'>
      {theme === 'light' ? <FaMoon /> :  <FaSun /> }
    </button>
  );
}
