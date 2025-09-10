// theme.js
'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 500 },
        h5: { fontWeight: 500 },
        h6: { fontWeight: 500 },
        body1: { fontWeight: 400 },
        body2: { fontWeight: 400 },
        button: { textTransform: 'none', fontWeight: 500 }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Poppins, sans-serif',
                    borderRadius: 8
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    fontFamily: 'Poppins, sans-serif'
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: 'Poppins, sans-serif'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'Poppins, sans-serif'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    fontFamily: 'Poppins, sans-serif'
                }
            }
        }
    }
});

export default theme;
