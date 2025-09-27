import { Box } from '@mui/material';
import React from 'react';

export default function Description({ Des, color, mdalign, smalign }) {
    return (
        <Box variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, color: color || 'text.secondary', mb: 2, textAlign: { xs: smalign || 'left', md: mdalign || 'start' } }}>
            {Des}
        </Box>
    );
}
