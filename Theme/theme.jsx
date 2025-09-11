// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#262250' // solid fallback color
        },
        secondary: {
            main: '#E40724' // red accent
        },
        custom: {
            gradient: 'linear-gradient(to left, #262250 30%, #E40724)'
        } // 👈 extend palette with custom gradient
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightBold: 700,
        h1: {
            fontWeight: 700,
            fontFamily: `"Poppins"`
        }
    }
});

export default theme;
