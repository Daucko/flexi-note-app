import { IoMoonSharp } from 'react-icons/io5';
import { IoSunny } from 'react-icons/io5';

export const nightTheme = {
  colors: {
    background: '#121212',
    primary: '#fdf0d5',
    text: '#FFFFFF',
    secondaryText: '#A9A9A9',
    icon: '#A9A9A9',
    editorText: 'black',
  },
  icons: {
    themeToggle: (
      <IoMoonSharp
        color="gray"
        size="30"
        style={{
          transform: 'rotateY(180deg)',
          transitionProperty: 'height',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease',
        }}
      />
    ),
  },
};

export const dayTheme = {
  colors: {
    background: '#FFFFFF',
    primary: '#FFFFFF',
    text: '#003049',
    secondaryText: '#757575',
    icon: '#003049',
    editorText: 'black',
  },
  icons: {
    themeToggle: (
      <IoSunny
        size="30"
        style={{
          transitionProperty: 'height',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease',
        }}
      />
    ),
  },
};
