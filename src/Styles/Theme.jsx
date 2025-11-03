import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    coffeePalette: {
      dark: {
        main: 'var(--dark-coffee)',
      },
      light: {
        main: 'var(--light-coffee)',
      },
      coffee: {
        main: 'var(--coffee)',
      },
      latte: {
        main: 'var(--latte)',
      },
      goldenBeige: {
        main: 'var(--golden-beige)',
      },
    },
  },
  typography: {
    fontFamily: 'var(--paragraph-font)', 
    button: {
      textTransform: 'none', 
    },
  },
});

export default theme;
