// import React from 'react'

// function AngularJS() {
//   return (
//     <section className='angularjs-main'>
//         <div className="container">
//             <div className="row text-center angularjs">
//                 <div className="col-sm-12 col-md-12 col-lg-12">
//                     <h1>Angular JS react JS development</h1>
//                     <p>Delivering end-to-end services in an affluent way</p>
//                 </div>
//             </div>
//             <div className="row angularjs-card">
//                 <div className="col-sm-12 col-md-6 col-lg-4 angularjs-card-card">
//                     <div className="card">
//                         <div className="img-body">
//                             <img src="webdads/images/react-js-development/react-ui.png" alt="react web development" loading='lazy' className='img-fluid' />
//                         </div>
//                         <h1>Reactjs Portal Development</h1>
//                         <p>Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.</p>
//                     </div>
//                 </div>

//                 <div className="col-sm-12 col-md-6 col-lg-4 angularjs-card-card angularjs-card-card-card">
//                     <div className="card">
//                         <div className="img-body">
//                             <img src="webdads/images/react-js-development/react-ui.png" alt="react-ui" loading='lazy' className='img-fluid' />
//                         </div>
//                         <h1>Reactjs UI Development</h1>
//                         <p>Webdads2u Technologies excels in React js development, focusing on UI enhancement. Elevate your app&apos;s interactivity and attract more clients with our React.js UI Development expertise.</p>
//                     </div>
//                 </div>

//                 <div className="col-sm-12 col-md-6 col-lg-4 angularjs-card-card angularjs-card-card">
//                     <div className="card">
//                         <div className="img-body">
//                             <img src="webdads/images/react-js-development/reactjs.png" alt="reactjs" loading='lazy' className='img-fluid' />
//                         </div>
//                         <h1>Reactjs Portal Development</h1>
//                         <p>Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.</p>
//                     </div>
//                 </div>

//                 <div className="col-sm-12 col-md-6 col-lg-4 angularjs-card-card angularjs-card-card-card">
//                     <div className="card">
//                         <div className="img-body">
//                             <img src="webdads/images/react-js-development/react-js-portable-development-co.png" alt="react-js-portable-development-co" loading='lazy' className='img-fluid' />
//                         </div>
//                         <h1>Reactjs Portal Development</h1>
//                         <p>Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.</p>
//                     </div>
//                 </div>

//                 <div className="col-sm-12 col-md-6 col-lg-4 angularjs-card-card">
//                     <div className="card">
//                         <div className="img-body">
//                             <img src="webdads/images/react-js-development/front-end.png" alt="front-end" loading='lazy' className='img-fluid' />
//                         </div>
//                         <h1>Reactjs Portal Development</h1>
//                         <p>Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.</p>
//                     </div>
//                 </div>

//                 <div className="col-sm-12 col-md-6 col-lg-4 angularjs-card-card angularjs-card-card-card">
//                     <div className="card">
//                         <div className="img-body">
//                             <img src="webdads/images/react-js-development/custome-reactjs.png" alt="custome-reactjs" loading='lazy' className='img-fluid' />
//                         </div>
//                         <h1>Reactjs Portal Development</h1>
//                         <p>Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </section>
//   )
// }

// export default AngularJS

'use client';
import React from 'react';
import { Container, Grid2, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const cardData = [
    {
        img: 'webdads/images/react-js-development/react-ui.png',
        title: 'Reactjs Portal Development',
        desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.',
        alt: 'react web development'
    },
    {
        img: 'webdads/images/react-js-development/react-ui.png',
        title: 'Reactjs UI Development',
        desc: "Webdads2u Technologies excels in React js development, focusing on UI enhancement. Elevate your app's interactivity and attract more clients with our React.js UI Development expertise.",
        alt: 'react-ui'
    },
    {
        img: 'webdads/images/react-js-development/reactjs.png',
        title: 'Reactjs Portal Development',
        desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.',
        alt: 'reactjs'
    },
    {
        img: 'webdads/images/react-js-development/react-js-portable-development-co.png',
        title: 'Reactjs Portal Development',
        desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.',
        alt: 'react-js-portable-development-co'
    },
    {
        img: 'webdads/images/react-js-development/front-end.png',
        title: 'Reactjs Portal Development',
        desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.',
        alt: 'front-end'
    },
    {
        img: 'webdads/images/react-js-development/custome-reactjs.png',
        title: 'Reactjs Portal Development',
        desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.',
        alt: 'custome-reactjs'
    }
];

function AngularJS() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: '#f9fafb'
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }}>
                    <Typography variant="h3" align="center" fontWeight="bold" gutterBottom sx={{ color: '#264176', fontSize: { xs: '1rem', md: '2rem' } }}>
                        Angular JS React JS Development
                    </Typography>
                    <Typography variant="subtitle1" align="center" sx={{ mb: 6, color: '#424242' }}>
                        Delivering end-to-end services in an affluent way
                    </Typography>
                </motion.div>

                {/* Cards */}
                <Grid2 container spacing={4}>
                    {cardData.map((card, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: 'easeOut'
                                }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 3,
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)'
                                        }
                                    }}
                                >
                                    <CardMedia component="img" image={card.img} alt={card.alt} loading="lazy" sx={{ height: 220, objectFit: 'contain', p: 2 }} />
                                    <CardContent>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#0d47a1' }}>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#424242' }}>
                                            {card.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}

export default AngularJS;
