import { Box } from '@mui/material';
import React from 'react';

export default function Description({ Des, color }) {
    return (
        <Box variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, color: color || 'text.secondary', mb: 2 }}>
            {Des}
        </Box>
    );
}
