// import React from 'react'

// function OurStreams() {
//   return (
//     <section className='ourStreams-main'>
//         <div className="container">
//             <div className="row ourstreams">
//                 <div className="col-sm-12 col-lg-6 text-center align-self-center">
//                     <h3>Our Streams</h3>
//                 </div>
//                 <div className="col-sm-12 col-lg-6">
//                     <p>Unlock limitless possibilities with Webdads2u’s App Development. Dive into seamless experiences tailored for your audience, whether on iOS or Android. Our apps are meticulously crafted to redefine user engagement.</p>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default OurStreams

import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
export default function OurStreams() {
    const { ourstreams } = useContext(MenuContext);
    const title = ourstreams?.title;
    const description = ourstreams?.description;
    return (
        <Box
            component="section"
            sx={{
                py: { xs: '40px', md: '60px' },
                pb: { xs: '10px', md: '10px' } // matching bottom padding
            }}
        >
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Title */}
                    <Grid2 size={{ xs: 12, md: 6 }} textAlign={{ xs: 'center', lg: 'center' }}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: '#1e1666',
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: { xs: '28px', md: '40px' },
                                fontWeight: 600
                            }}
                        >
                            {title}
                        </Typography>
                    </Grid2>

                    {/* Description */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            sx={{
                                color: '#000',
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: { xs: '15px', md: '16px' },
                                fontWeight: 400,
                                textAlign: { xs: 'center', lg: 'left' }
                            }}
                        >
                            {' '}
                            {description}
                        </Typography>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
