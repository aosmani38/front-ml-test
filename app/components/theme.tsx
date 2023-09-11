import { createTheme } from '@mui/material/';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1280,
            xl: 1920,
        }
    },
    palette: {
        primary: {
            main: blueGrey[700],
            light: blueGrey[300],
            dark: blueGrey[900],
        },
    },
});