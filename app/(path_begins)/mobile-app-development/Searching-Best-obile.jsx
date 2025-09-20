import React, { useContext } from 'react';
import { Box, Grid2, Typography, Button, keyframes, Container } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';

// Animation keyframes
const mover = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
`;

export default function SearchingBestobile() {
    const { best_mobile_section } = useContext(MenuContext);

    // Section data from JSON
    const images = best_mobile_section?.img || [];
    const title = best_mobile_section?.title || '';
    const description = best_mobile_section?.description || '';
    const description2 = best_mobile_section?.['description-2'] || '';
    const buttonText = best_mobile_section?.button || 'Contact us';

    return (
        <Box
            sx={{
                py: { xs: 4, md: 8 },
                backgroundColor: '#f4fcfe'
            }}
        >
            <Container>
                {/* Main Row */}
                <Grid2 container spacing={4} alignItems="center" sx={{ px: { xs: 2, md: 4 } }}>
                    {/* Left Side - Images */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box display="flex" flexDirection="row" justifyContent="center">
                            {images.map((src, idx) => (
                                <Box
                                    key={idx}
                                    component="img"
                                    src={src?.url || src}
                                    alt={src?.alt || `mobile-${idx}`}
                                    sx={{
                                        width: '30%',
                                        height: 'auto',
                                        mt: idx === 0 ? 3 : idx === 2 ? 2 : 0,
                                        mx: idx === 1 ? 1 : 0,
                                        animation: `${mover} 1s infinite alternate`
                                    }}
                                />
                            ))}
                        </Box>
                    </Grid2>

                    {/* Right Side - Text */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                color: '#262250',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                mb: 1
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'justify',
                                color: '#000',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '16px',
                                fontWeight: 400,
                                mb: 2
                            }}
                        >
                            {description}
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'justify',
                                color: '#000',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                fontWeight: 700
                            }}
                        >
                            {description2}
                        </Typography>
                        <Button
                            href="/contact-us"
                            sx={{
                                color: '#fff',
                                backgroundImage: 'linear-gradient(90deg, #59016e 0%, #c30002 50%)',
                                borderRadius: '30px',
                                border: '1px solid transparent',
                                py: '19px',
                                px: '70px',
                                mt: 3,
                                '&:hover': {
                                    backgroundImage: 'linear-gradient(90deg, #59016e 0%, #c30002 100%)'
                                }
                            }}
                        >
                            {buttonText}
                        </Button>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
