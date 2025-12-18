'use client';
import { ThemeProvider } from '@mui/material';
import { MenuProvider } from '../../layout/context/menucontext.jsx';
import { LayoutProvider } from '../../layout/context/layoutcontext.jsx';
import theme from "../../Theme/theme.jsx";
export default function ClientProviders({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <MenuProvider>
                <LayoutProvider>
                    {children}
                </LayoutProvider>
            </MenuProvider>
        </ThemeProvider>
    );
}
