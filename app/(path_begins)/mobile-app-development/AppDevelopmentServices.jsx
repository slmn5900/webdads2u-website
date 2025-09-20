// import React from 'react';

// function AppDevelopmentServices() {
//     return (
//         <section className="appdevelopmentservices-main">
//             <div className="container">
//                 <div className="row appdevelopmentservices-header">
//                     <div className="col-sm-12 col-lg-12 text-center">
//                         <h1>Benefits of Using Mobile App Development Services</h1>
//                     </div>
//                 </div>
//                 <div className="row text-center appdevelopmentservices-card">
//                     <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
//                         <div className="card">
//                             <div className="card-image">
//                                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808588/webdads2u/mobile-app-development/icons/enhanced-user-engagement.png" alt="enhanced user engagement" className="img-fluid" />
//                             </div>
//                             <div className="card-title">
//                                 <h2>Enhanced User Engagement</h2>
//                             </div>
//                             <div className="card-body">
//                                 <p>Elevate user experiences with our Mobile App Development. Meticulously crafted interfaces ensure maximum interaction, captivating users at every touch point.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
//                         <div className="card">
//                             <div className="card-image">
//                                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808548/webdads2u/mobile-app-development/icons/increased-brand-visibility.png" alt="increased brand visibility" className="img-fluid" />
//                             </div>
//                             <div className="card-title">
//                                 <h2>Increased Brand Visibility</h2>
//                             </div>
//                             <div className="card-body">
//                                 <p>Amplify your brands reach across platforms with our Mobile App Development Services. Tailored solutions enhance visibility, establishing a robust digital presence.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
//                         <div className="card">
//                             <div className="card-image">
//                                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808569/webdads2u/mobile-app-development/icons/scalability.png" alt="scalability" className="img-fluid" />
//                             </div>
//                             <div className="card-title">
//                                 <h2>Scalability</h2>
//                             </div>
//                             <div className="card-body">
//                                 <p>Seamlessly grow your business with our Mobile App Development. Our scalable solutions evolve alongside your business needs, ensuring adaptability and continuous success.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
//                         <div className="card">
//                             <div className="card-image">
//                                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808573/webdads2u/mobile-app-development/icons/competitive-edge.png" alt="competitive edge" className="img-fluid" />
//                             </div>
//                             <div className="card-title">
//                                 <h2>Competitive Edge</h2>
//                             </div>
//                             <div className="card-body">
//                                 <p>Stay ahead in the dynamic digital landscape with our Mobile App Development Services. Gain a competitive edge by deploying cutting-edge applications that outshine the competition.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
//                         <div className="card">
//                             <div className="card-image">
//                                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808577/webdads2u/mobile-app-development/icons/customer-loyalty.png" alt="customer loyalty" className="img-fluid" />
//                             </div>
//                             <div className="card-title">
//                                 <h2>Customer Loyalty</h2>
//                             </div>
//                             <div className="card-body">
//                                 <p>Foster enduring connections through personalized experiences with our Mobile App Development. Our focus on user-centric design and functionality builds trust, enhancing customer loyalty.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
//                         <div className="card">
//                             <div className="card-image">
//                                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808580/webdads2u/mobile-app-development/icons/data-security.png" alt="data security" className="img-fluid" />
//                             </div>
//                             <div className="card-title">
//                                 <h2>Data Security</h2>
//                             </div>
//                             <div className="card-body">
//                                 <p>Prioritize user trust with our Mobile App Development Services. Robust measures are embedded to safeguard user information, ensuring data security at every level.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div className="row appdevelopmentservices-card text-center">

//             </div> */}
//             </div>
//         </section>
//     );
// }

// export default AppDevelopmentServices;
'use client';
import React from 'react';
import { Box, Container, Grid2, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Enhanced User Engagement',
        desc: 'Elevate user experiences with our Mobile App Development. Meticulously crafted interfaces ensure maximum interaction, captivating users at every touch point.',
        icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808588/webdads2u/mobile-app-development/icons/enhanced-user-engagement.png'
    },
    {
        title: 'Increased Brand Visibility',
        desc: 'Amplify your brands reach across platforms with our Mobile App Development Services. Tailored solutions enhance visibility, establishing a robust digital presence.',
        icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808548/webdads2u/mobile-app-development/icons/increased-brand-visibility.png'
    },
    {
        title: 'Scalability',
        desc: 'Seamlessly grow your business with our Mobile App Development. Our scalable solutions evolve alongside your business needs, ensuring adaptability and continuous success.',
        icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808569/webdads2u/mobile-app-development/icons/scalability.png'
    },
    {
        title: 'Competitive Edge',
        desc: 'Stay ahead in the dynamic digital landscape with our Mobile App Development Services. Gain a competitive edge by deploying cutting-edge applications that outshine the competition.',
        icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808573/webdads2u/mobile-app-development/icons/competitive-edge.png'
    },
    {
        title: 'Customer Loyalty',
        desc: 'Foster enduring connections through personalized experiences with our Mobile App Development. Our focus on user-centric design and functionality builds trust, enhancing customer loyalty.',
        icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808577/webdads2u/mobile-app-development/icons/customer-loyalty.png'
    },
    {
        title: 'Data Security',
        desc: 'Prioritize user trust with our Mobile App Development Services. Robust measures are embedded to safeguard user information, ensuring data security at every level.',
        icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756808580/webdads2u/mobile-app-development/icons/data-security.png'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
};

function AppDevelopmentServices() {
    return (
        <Box component="section" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fafafa' }}>
            <Container>
                <Typography variant="h4" component="h1" align="center" fontWeight={700} mb={6}>
                    Benefits of Using Mobile App Development Services
                </Typography>

                <Grid2 container spacing={4}>
                    {services.map((item, i) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        textAlign: 'center',
                                        p: 3,
                                        borderRadius: 3,
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height:"330px"
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.icon}
                                        alt={item.title}
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            mx: 'auto',
                                            mb: 2,
                                            objectFit: 'contain'
                                        }}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" fontWeight={600} gutterBottom>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.desc}
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

export default AppDevelopmentServices;
