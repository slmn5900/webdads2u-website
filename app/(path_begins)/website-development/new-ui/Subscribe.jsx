import React from 'react';
import { Container, Box, Typography, Button, Grid2, useTheme, useMediaQuery, styled } from '@mui/material';

const CtaSection = styled('section')(({ theme }) => ({
    backgroundImage: "url('/webdads/images/website-development/website-development.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    color: '#fff',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(6, 0)
    }
}));

const Subscribe = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <CtaSection>
            <Container sx={{ py: { xs: 0, md: 6 } }}>
                <Grid2 container spacing={3} direction={isMobile ? 'column' : 'row'} alignItems={isMobile ? 'flex-start' : 'center'}>
                    <Grid2 size={{ xs: 12, sm: 9 }}>
                        <Typography
                            variant={isMobile ? 'body1' : 'h6'}
                            sx={{
                                opacity: 0.9,
                                fontSize: '18px',
                                textAlign: 'start'
                            }}
                        >
                            Come check out our web development services and discover how we can elevate your online presence! Follow us for exciting content and stay connected with our team of experts.
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Button
                                variant="contained"
                                href="/services"
                                sx={{
                                    backgroundColor: '#6243a4',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#4d3485'
                                    },
                                    fontSize: '18px',
                                    px: 8,
                                    py: 1
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </CtaSection>
    );
};

export default Subscribe;
