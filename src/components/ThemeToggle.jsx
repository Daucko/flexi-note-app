import React from 'react';
import { useTheme } from 'styled-components';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: ease;
`;

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useTheme();
  return <Button onClick={toggleTheme}>{theme.icons.themeToggle}</Button>;
};

export default ThemeToggle;
