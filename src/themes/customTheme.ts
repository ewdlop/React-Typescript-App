import { red } from '@mui/material/colors';
import { Theme, createTheme } from '@mui/material/styles';

// A custom theme for this app
const MedFuseTheme : Theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default MedFuseTheme;