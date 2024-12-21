import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#66bb6a',
      dark: '#4caf50',
    },
    background: {
      default: '#f5f5f5',
    },
    grey: {
      500: '#e0e0e0',
    },
    text: {
      primary: '#333',
    },
    error: {
      main: '#f44336',
      dark: '#d41406',
    },
    downloadPdfButton: {
      main: '#ff4537',
      dark: '#e10000',
    },
    downloadExcelButton: {
      main: '#197141',
      dark: '#145c33',
    },
    loadingBg: {
      main: 'rgba(0, 0, 0, 0.1)',
    },
  },
});

export default theme;
