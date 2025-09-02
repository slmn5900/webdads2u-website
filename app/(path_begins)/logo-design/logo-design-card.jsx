<<<<<<< HEAD
import React from 'react'

function Logodesigncard() {
  return (
    <section className='logodesigncard-main'>
        <div className="container">
            <div className="row logodesigncard">
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                    <p className='mb-sm-3 mb-md-4 mb-lg-5'>Our highly experienced, talented and professional graphic designers & logo designers in India assist in illuminating your brand and enhancing your company recognition. Our logo & graphic designers put a lot of effort into converting visual language into functional language and are constantly looking for new ways to define brand experiences through various forms of engagement.</p>
                    <p className='mb-sm-3 mb-md-4 mb-lg-5'>At Webdads2u, we want to help you create a beautiful and memorable logo design for your brand. Our logo design creator can generate thousands of professional logo design options, and we can also develop a matching website to fully establish your online brand. </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="div">
                    <div className="card-one text-center">
                      <div className="tex">
                        <h3>Customized Logo <br /> Design</h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-column flex-md-row flex-lg-row text-center justify-content-around element-card">
                    <div className="card-two-1 ">
                      <div className="tex">
                        <h3>On Time <br /> Delivery</h3>
                      </div>
                    </div>
            
                    <div className="card-two-2">
                      <div className="tex">
                        <h3>High Quality <br /> Logo</h3>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Logodesigncard;
=======
// import React from 'react'

// function Logodesigncard() {
//   return (
//     <section className='logodesigncard-main'>
//         <div className="container">
//             <div className="row logodesigncard">
//                 <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
//                     <p className='mb-sm-3 mb-md-4 mb-lg-5'>Our highly experienced, talented and professional graphic designers & logo designers in India assist in illuminating your brand and enhancing your company recognition. Our logo & graphic designers put a lot of effort into converting visual language into functional language and are constantly looking for new ways to define brand experiences through various forms of engagement.</p>
//                     <p className='mb-sm-3 mb-md-4 mb-lg-5'>At Webdads2u, we want to help you create a beautiful and memorable logo design for your brand. Our logo design creator can generate thousands of professional logo design options, and we can also develop a matching website to fully establish your online brand. </p>
//                 </div>
//                 <div className="col-sm-12 col-md-6 col-lg-6">
//                   <div className="div">
//                     <div className="card-one text-center">
//                       <div className="tex">
//                         <h3>Customized Logo <br /> Design</h3>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="d-flex flex-column flex-md-row flex-lg-row text-center justify-content-around element-card">
//                     <div className="card-two-1 ">
//                       <div className="tex">
//                         <h3>On Time <br /> Delivery</h3>
//                       </div>
//                     </div>

//                     <div className="card-two-2">
//                       <div className="tex">
//                         <h3>High Quality <br /> Logo</h3>
//                       </div>
//                     </div>
//                     </div>
//                   </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Logodesigncard;

'use client';
import React from 'react';
import { Box, Typography, Container, Grid2, Card, useTheme, useMediaQuery } from '@mui/material';

const LogoDesignCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box
            sx={{
                py: { xs: 4, md: 8 },
                px: 2,
                backgroundColor: '#f9f9f9',

            }}
        >
            <Container maxWidth="lg">
                <Grid2 container spacing={4} alignItems="center">
                    {/* Text Content Column */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                mb: { xs: 3, md: 4, lg: 5 },
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                lineHeight: 1.7
                            }}
                        >
                            Our highly experienced, talented and professional graphic designers & logo designers in India assist in illuminating your brand and enhancing your company recognition. Our logo & graphic designers put a lot of effort into
                            converting visual language into functional language and are constantly looking for new ways to define brand experiences through various forms of engagement.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                mb: { xs: 3, md: 4, lg: 5 },
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                lineHeight: 1.7
                            }}
                        >
                            At Webdads2u, we want to help you create a beautiful and memorable logo design for your brand. Our logo design creator can generate thousands of professional logo design options, and we can also develop a matching website
                            to fully establish your online brand.
                        </Typography>
                    </Grid2>

                    {/* Cards Column */}
                    <Grid2 size={{ xs: 12, md: 6 }} container textAlign={'center'}>
                        <Grid2 container spacing={0} textAlign={'center'}>
                            {/* Large Card */}
                            <Grid2 size={{ xs: 12, md: 6 }} sx={{ position: 'relative', left: { xs: "0%", sm: "20px", md: '35%' }, bottom: { xs: "0px", sm: "20px", md: "-160px" } }}>
                                <Card
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        color: 'white',
                                        p: 4,
                                        textAlign: 'center',
                                        borderRadius: '8px',
                                        boxShadow: 3,
                                        minHeight: '220px',
                                        width: { xs: "auto", sm: 'auto', md: "220px" },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontWeight: { xs: 700, sm: 700, md: 700 },
                                                lineHeight: 1.3,
                                                whiteSpace: 'pre-line'
                                            }}
                                        >
                                            Customized{'\n'}Logo Design
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid2>

                            {/* Small Cards Row */}
                            <Grid2 size={{ xs: 12 }}>
                                <Grid2 container spacing={2}>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 12 }} sx={{ position: 'relative', left: { xs: "0%", sm: "20px", md: '20px' }, bottom: { xs: "-10px", sm: "0px", md: '-120px' } }}>
                                        <Card
                                            sx={{
                                                backgroundColor: theme.palette.secondary.main,
                                                color: 'white',
                                                p: 3,
                                                textAlign: 'center',
                                                borderRadius: '8px',
                                                boxShadow: 3,
                                                minHeight: '220px',
                                                width: { xs: "auto", sm: 'auto', md: "220px" },
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    component="h3"
                                                    sx={{
                                                        fontWeight: 700,
                                                        lineHeight: 1.3,
                                                        whiteSpace: 'pre-line'
                                                    }}
                                                >
                                                    On Time{'\n'}Delivery
                                                </Typography>
                                            </Box>
                                        </Card>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 12 }} sx={{ position: 'relative', bottom: { xs: "-5px", sm: "0px", md: "110px" }, left: { xs: "0%", sm: "20px", md: "330px" } }}>
                                        <Card
                                            sx={{
                                                backgroundColor: theme.palette.success.main,
                                                color: 'white',
                                                p: 3,
                                                textAlign: 'center',
                                                borderRadius: '8px',
                                                boxShadow: 3,
                                                minHeight: '220px',
                                                width: { xs: "auto", sm: 'auto', md: "220px" },
                                                // minHeight: '250px',
                                                // width: '250px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    component="h3"
                                                    sx={{
                                                        fontWeight: 700,
                                                        lineHeight: 1.3,
                                                        whiteSpace: 'pre-line'
                                                    }}
                                                >
                                                    High Quality{'\n'}Logo
                                                </Typography>
                                            </Box>
                                        </Card>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default LogoDesignCard;
>>>>>>> a0d19cc (Initial commit)
