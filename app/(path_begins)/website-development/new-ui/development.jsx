import { Box, Container, Grid2, Typography } from '@mui/material';
import React from 'react';
import APIDev from './APIDev';
import ImageBox from '../../../../components/ui/ImageBox';
import LookButton from './LookButton';

export default function Development({ data }) {
    return (
        <Box sx={{ py: 4 }}>
            <Container>
                <Grid2 container>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Box>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 3,
                                    fontSize: { xs: '1.2rem', md: '1.8rem' } // Responsive font size
                                }}
                            >
                                {data?.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.6,
                                    fontSize: { xs: '1rem', md: '1.1rem' } // Responsive font size
                                }}
                            >
                                {data?.description}
                            </Typography>
                        </Box>
                        <APIDev />
                    </Grid2>{' '}
                    <ImageBox image={data?.img} alt={data?.alt} mds={4} />
                </Grid2>

                <Grid2 container>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Box>
                            <LookButton />
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
