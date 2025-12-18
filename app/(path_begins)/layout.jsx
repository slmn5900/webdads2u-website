'use client'
import { ThemeProvider } from '@mui/material';
import { Fragment } from 'react';
import theme from './theme.js';

export default function RootLayout({ children }) {
    return (
        <Fragment>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Fragment>
    );
}
