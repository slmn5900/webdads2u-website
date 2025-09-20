// import React from 'react'

// function Lookingwebsitemaintenance() {
//   return (
//     <section className='lookingwebsitemaintenance-main'>
//         <div className="container">
//             <div className="row lookingwebsitemaintenance">
//                 <div className="col-sm-12 col-md-6 col-lg-4">
//                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757486171/webdads2u/website-maintenance/website-maintenance.png" alt="website maintenance" loading='lazy' className='img-fluid' />
//                 </div>
//                 <div className="col-sm-12 col-md-6 col-lg-8">
//                     <h2>
//                     Looking for Website Maintenance Services? We Can Help!</h2>
//                     <a href="/contact-us"><button>Talk to Experts</button></a>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Lookingwebsitemaintenance

'use client';
import React from 'react';
import { Box, Container, Grid2, Typography, Button } from '@mui/material';

function LookingWebsiteMaintenance({ Title, bg }) {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 5, md: 8 },
                bgcolor: bg || '#34187f',
                textAlign: { xs: 'center', md: 'left' },
                display: { xs: 'none', md: 'block' }
            }}
        >
            <Container>
                <Grid2 container spacing={4} alignItems="center" className="lookingwebsitemaintenance">
                    {/* Image */}
                    <Grid2 size={{ xs: 12, md: 5, lg: 4 }}>
                        <Box
                            component="img"
                            src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757486171/webdads2u/website-maintenance/website-maintenance.png"
                            alt="Website Maintenance"
                            loading="lazy"
                            sx={{
                                width: { xs: '80%', sm: '60%', md: '100%' },
                                maxWidth: 425,
                                display: 'block',
                                mx: { xs: 'auto', md: 0 },
                                mt: { xs: 0, md: -10 }
                            }}
                        />
                    </Grid2>

                    {/* Text + CTA */}
                    <Grid2 size={{ xs: 12, md: 7, lg: 8 }}>
                        <Box width={600} sx={{ pl: 6 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#fff',
                                    fontFamily: 'Roboto, sans-serif',
                                    fontWeight: 700,
                                    fontSize: { xs: '25px', sm: '30px', md: '45px' },
                                    mb: 3
                                }}
                            >
                                Looking for {Title || 'Website Maintenance'} Services? We Can Help!
                            </Typography>
                            <Button
                                href="/contact-us"
                                variant="outlined"
                                sx={{
                                    color: '#96004e',
                                    borderColor: '#96004e',
                                    bgcolor: '#fff',
                                    borderRadius: '5px',
                                    px: 5,
                                    py: 2,
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    fontFamily: 'Roboto, sans-serif',
                                    '&:hover': {
                                        bgcolor: 'transparent',
                                        color: '#fff',
                                        borderColor: '#fff'
                                    }
                                }}
                            >
                                Talk to Experts
                            </Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default LookingWebsiteMaintenance;
