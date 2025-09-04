import React from 'react';
import { Box } from '@mui/material';

const GridLines = () => (
    <>
        {/* Horizontal Lines */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', display: { xs: 'none', md: 'block' }, pointerEvents: 'none', zIndex: 0 }}>
            {[...Array(10)].map((_, i) => (
                <Box key={`h-${i}`} sx={{ position: 'absolute', left: 0, right: 0, height: '1px', top: `${i * 60}px`, bgcolor: 'rgba(0, 0, 0, 0.05)' }} />
            ))}
        </Box>

        {/* Vertical Lines */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '100%', display: { xs: 'none', md: 'block' }, pointerEvents: 'none', zIndex: 0 }}>
            {[...Array(20)].map((_, i) => (
                <Box key={`v-${i}`} sx={{ position: 'absolute', top: 0, bottom: 0, width: '1px', left: `${i * 60}px`, bgcolor: 'rgba(0,0,0,0.05)' }} />
            ))}
        </Box>
    </>
);

export default GridLines;
