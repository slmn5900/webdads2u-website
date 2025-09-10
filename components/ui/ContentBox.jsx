import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';

export default function ContentBox({ content }) {
    if (!content) return null; // prevents error

    const { title, description, contentSize } = content;

    return (
        <>
            <Grid2 size={{ xs: 12, md: contentSize || 6 }} item>
                <Box>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 'bold',
                            textAlign: { xs: 'center', md: 'start' },
                            mb: 3,
                            fontSize: { xs: '1.2rem', md: '1.8rem' } // Responsive font size
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            lineHeight: 1.6,
                            textAlign: { xs: 'center', md: 'justify' },
                            fontSize: { xs: '1rem', md: '1.1rem' } // Responsive font size
                        }}
                    >
                        {description}
                    </Typography>
                </Box>
            </Grid2>
        </>
    );
}
