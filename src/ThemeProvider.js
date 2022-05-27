import { grey } from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

const theme = createTheme({

  palette: {
    primary: {
      light: '#68b36b',
      main: '#43a047',
      dark: '#2e7031',
      contrastText: grey[200],
    },
    secondary: {
      light: '#155fa0',
      main: '#1e88e5',
      dark: '#4b9fea',
      contrastText: grey[200],
    },
    background: {
      default: '#eee',
      paper: '#fff',
    },
    divider: grey[300],
  },
  spacing: 8,
  typography: {
    fontFamily: [
      '"Hiragino Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {},
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },
  overrides: {
    MuiTouchRipple: {
      root: {
        color: 'red',
      },
      colorSecondary: {
        '&$checked': {
          color: 'red',
        },
      },
    },
  },
})

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
