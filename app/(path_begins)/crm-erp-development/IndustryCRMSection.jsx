import React, { useContext } from 'react';
import { Box, Typography, Grid2, Container } from '@mui/material';
import Slider2 from '../../../components/common/Slider2';
import { MenuContext } from '../../../layout/context/menucontext';

export default function IndustryCRMSection() {
    const { slider_section2 } = useContext(MenuContext);

    console.log(slider_section2, 'slider_section2');
    const title = slider_section2?.title;
    const image = slider_section2?.img;
    return (
        <Box
            component="section"
            sx={{
                mb: 5
            }}
        >
            <Container>
                <Grid2 container>
                    <Grid2 item xs={12}>
                        <Box
                            sx={{
                                textAlign: 'center',
                                mt: 5
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: 'unset',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: { xs: '20px', sm: '26px', md: '32px' },
                                    fontWeight: 600
                                }}
                            >
                                {title}
                            </Typography>
                        </Box>

                        {/* Slider Section */}
                        <Box
                            sx={{
                                mt: 3,
                                px: { xs: 2, md: 4 } // responsive padding
                            }}
                        >
                            <Slider2 image={image} />
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
