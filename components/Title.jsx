import { Typography } from '@mui/material';
import React from 'react';

export default function Title({ title, color, fontxs }) {
    return (
        <Typography component={'h1'} sx={{ mb: 2, color: color || 'black', fontSize: { xs: fontxs || 20, md: 25 }, fontWeight: 'bold' }}>
            {title}
        </Typography>
    );
}
