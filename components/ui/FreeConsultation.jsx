import React, { useContext } from 'react';
import { Container, Grid2, Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { MenuContext } from '../../layout/context/menucontext';

const FreeConsultation = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { consultation_section } = useContext(MenuContext);
    const bg = consultation_section?.bgimg;
    const title = consultation_section.title;
    const description = consultation_section.description;
    const btn = consultation_section.button;
    const image = bg?.startsWith('linear-gradient') ? bg : `url(${bg})`;
    return (
        <Box sx={{ py: { xs: 0, md: 5 }, mx: { xs: 0, sm: 12 } }}>
            <Container
                maxWidth="lg"
                sx={{
                    backgroundImage: image,
                    backgroundSize: 'cover',
                    height: '400px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 3,
                    // boxShadow: '23px 23px 87px 0 rgba(254, 76.0000000000001, 28.000000000000036, .42)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { xs: '300px', sm: '100%', md: '100%' },
                    mx: 'auto'
                }}
            >
                <Grid2 container justifyContent="center" alignItems={'center'}>
                    <Grid2 size={{ xs: 12 }} textAlign="center" color={'white'}>
                        <Typography variant={isMobile ? 'h4' : 'h4'} gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1rem', md: '2.5rem' } }}>
                            {title ? title : ' Looking for Brochure Design Services?'}
                        </Typography>

                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                mb: 3,
                                fontSize: isMobile ? '1rem' : '1.1rem'
                            }}
                            color={'white'}
                        >
                            {description ? description : ' Then you are at the right place!! Send us your requirements. We will get back to you with a free quote.'}
                        </Typography>
                        <Box
                            component={'a'}
                            href="/contact-us/"
                            sx={{
                                textDecoration: 'none',
                                color: 'black',

                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: 'white'
                                }
                            }}
                        >
                            <Button
                                size={isMobile ? 'medium' : 'large'}
                                sx={{
                                    background: 'white',
                                    letterSpacing: 0,
                                    px: 4,
                                    py: 1.5,
                                    color: 'black',
                                    fontWeight: 500,
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        border: '1px solid white'
                                    }
                                }}
                            >
                                {btn ? btn : 'Connect For Free Consultation'}
                            </Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default FreeConsultation;
