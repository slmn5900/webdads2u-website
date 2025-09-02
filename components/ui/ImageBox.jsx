import React from 'react';
import { Box, Grid2 } from '@mui/material';

export default function ImageBox({ image }) {
    return (
        <>
            <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center', mr: 'auto' }}>
                <Box
                    component="img"
                    src={image}
                    alt="image"
                    sx={{
                        width: { xs: '300px', sm: '300px', md: '419px' },

                        height: { xs: '350px', sm: '290px', md: '396px' },
                        display: 'block',
                        borderRadius: 1, // Optional: adds slight rounded corners
                        objectFit: { xs: 'contain', md: 'cover' }
                    }}
                />
            </Grid2>
        </>
    );
}
