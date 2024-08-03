import React from 'react';
import { useTheme } from 'styled-components';

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{
        fontSize: '1.5rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        transitionProperty: 'background-color',
        transitionDuration: '1s',
        transitionTimingFunction: 'ease',

        position: 'absolute',
        right: '5.2rem',
        top: '3.4rem',
      }}
    >
      {theme.icons.themeToggle}
    </button>
  );
};

export default ThemeToggle;
