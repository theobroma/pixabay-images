import { PropsWithChildren } from 'react';

import { PaletteMode } from '@mui/material';
import { red } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { useAppSelector } from '@/store/configureStore';
// import { themeSelector } from '@/store/ui/selectors';
import { ThemeEnum } from '@/enums/theme.enum';

const FRONT_COLORS = {
  error: {
    main: red.A400,
  },
};

const LIGHT_THEME = {
  palette: {
    mode: 'light' as PaletteMode,
    background: {
      paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
      default: '#FFFFFF',
    },
    primary: {
      main: '#556cd6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#81c784',
      contrastText: '#000',
    },
    ...FRONT_COLORS,
  },
};

const DARK_THEME = {
  palette: {
    mode: 'dark' as PaletteMode,
    background: {
      paper: '#424242', // Gray 800 - Background of "Paper" based component
      default: '#303030',
    },
    primary: {
      main: '#81c784', // Green 300
      contrastText: '#000000',
    },
    secondary: {
      main: '#ffb74d', // Orange 300
      contrastText: '#000',
    },
    ...FRONT_COLORS,
  },
};

const DEEP_PURPLE_AMBER_THEME = {
  palette: {
    mode: 'light' as PaletteMode,
    background: {
      paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
      default: '#FFFFFF',
    },
    primary: {
      main: '#673ab7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffd740',
      contrastText: '#000',
    },
    ...FRONT_COLORS,
  },
};

const PINK_BLUE_GREY_THEME = {
  palette: {
    mode: 'dark' as PaletteMode,
    background: {
      paper: '#424242', // Gray 800 - Background of "Paper" based component
      default: '#303030',
    },
    primary: {
      main: '#e91e63', // Green 300
      contrastText: '#000000',
    },
    secondary: {
      main: '#607d8b', // Orange 300
      contrastText: '#000',
    },
    ...FRONT_COLORS,
  },
};

const themeMap = {
  [ThemeEnum.LIGHT]: LIGHT_THEME,
  [ThemeEnum.DARK]: DARK_THEME,
  [ThemeEnum.DEEP_PURPLE_AMBER]: DEEP_PURPLE_AMBER_THEME,
  [ThemeEnum.PINK_BLUE_GREY_THEME]: PINK_BLUE_GREY_THEME,
};

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  // const currentTheme = useAppSelector(themeSelector);
  // const theme = createTheme(themeMap[currentTheme]);
  const theme = createTheme(themeMap[ThemeEnum.LIGHT]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
