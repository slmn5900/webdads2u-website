import React from 'react';
import { Box, Grid2 } from '@mui/material';

export default function ImageBox({ image, alt, mds }) {
    return (
        <>
            <Grid2 size={{ xs: 12, md: mds || 6 }} sx={{ alignItems: 'center' }}>
                <Box
                    component="img"
                    src={image}
                    alt={alt}
                    sx={{
                        width: { xs: '300px', sm: '300px', md: '100%' },

                        height: { xs: '350px', sm: '290px', md: '100%' },
                        display: 'block',
                        borderRadius: 1, // Optional: adds slight rounded corners
                        objectFit: { xs: 'contain', md: 'cotain' },
                        m: 'auto'
                    }}
                />
            </Grid2>
        </>
    );
}
