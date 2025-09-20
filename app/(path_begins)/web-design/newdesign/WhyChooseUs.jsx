import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';

const WhyChooseUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            component="section"
            sx={{
                [theme.breakpoints.down('sm')]: {
                    py: 3
                },
                py:4

            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        textAlign: 'center',
                        maxWidth: '100%',
                        mx: 'auto',
                        px: isMobile ? 2 : 0,
                        display:'flex',
                        flexDirection:'column',
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                            color: '#6ec1e4',
                            fontWeight: 600,
                            mb: 3,
                            textTransform: 'uppercase',
                            letterSpacing: 1.5
                        }}
                    >
                        WHY TO CHOOSE
                    </Typography>

                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                            fontSize: isMobile ? '1.75rem' : '2rem',
                            color: '#002060',
                            lineHeight: 1.2
                        }}
                    >
                        Top reasons to choose the webdads2u IT Solution-web designing services
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: '#5a5a5a',
                            fontSize: isMobile ? '.78rem' : '1rem',
                            lineHeight: 1.6
                        }}
                    >
                        At Webdads2u, our edge lies in delivering exemplary website designing services. Our seasoned experts tailor innovative approaches to match your unique needs, ensuring future-proof solutions. Customization is our forte,
                        crafting precise strategies for diverse business goals. Reliability defines us, offering seamless operations and dependable support. Our commitment to affordability guarantees top-tier web designing services without straining
                        budgets. Choose Webdads2u for unmatched excellence in website design, ensuring a tailored approach for your success.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default WhyChooseUs;
