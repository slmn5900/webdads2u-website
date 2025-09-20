// /* eslint-disable react/no-unescaped-entities */
// import React from 'react'

// function Domainname() {
//   return (
//     <section className='domainname-amin'>
//         <div className="container">
//             <div className="row text-center domainname-header ">
//                 <div className="col-sm-12 col-md-12 col-lg-12">
//                     <h3>Choose the Perfect Domain Name for Your Business</h3>
//                 </div>
//             </div>
//             <div className="row text-center domainname-card justify-content-start">
//                 <div className="col-sm-12 col-md-4 col-lg-3">
//                     <div className="card">
//                         <div className="card-img">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417489/webdads2u/domain-registration/icons/in-icon.png" alt="in" loading='lazy' className='img-fluid'/>
//                         </div>
//                         <div className="card-title">
//                             <h4>.IN Domain</h4>
//                             <p>Represents India, ideal for Indian businesses, organizations, or individuals looking for a local online presence.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-4 col-lg-3">
//                     <div className="card">
//                         <div className="card-img">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417481/webdads2u/domain-registration/icons/io-icon.png" alt="in" loading='lazy' className='img-fluid'/>
//                         </div>
//                         <div className="card-title">
//                             <h4>.IO Domain</h4>
//                             <p>Trendy choice for tech startups, represents input/output, and provides a global appeal.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-4 col-lg-3">
//                     <div className="card">
//                         <div className="card-img">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417474/webdads2u/domain-registration/icons/com-icon.png" alt="in" loading='lazy' className='img-fluid'/>
//                         </div>
//                         <div className="card-title">
//                             <h4>.COM Domain</h4>
//                             <p>Universal choice, recognized worldwide, perfect for any business or personal website.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-4 col-lg-3">
//                     <div className="card">
//                         <div className="card-img">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417467/webdads2u/domain-registration/icons/net-icon.png" alt="in" loading='lazy' className='img-fluid'/>
//                         </div>
//                         <div className="card-title">
//                             <h4>.NET Domain</h4>
//                             <p>Preferred for networking, internet-related services, offers credibility and professionalism for online ventures.

// </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-4 col-lg-3">
//                     <div className="card">
//                         <div className="card-img">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417460/webdads2u/domain-registration/icons/ai-icon.png" alt="in" loading='lazy' className='img-fluid'/>
//                         </div>
//                         <div className="card-title">
//                             <h4>.AI domain</h4>
//                             <p>Embraces artificial intelligence, suitable for tech companies, startups, or projects exploring AI innovations.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-4 col-lg-3">
//                     <div className="card">
//                         <div className="card-img">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417453/webdads2u/domain-registration/icons/org-icon.png" alt="in" loading='lazy' className='img-fluid'/>
//                         </div>
//                         <div className="card-title">
//                             <h4>.ORG Domain</h4>
//                             <p>Symbolizes non-profit organizations, charities, or community initiatives, fostering trust and credibility.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-4 col-lg-3">
//                     <div className="card">
//                         <div className="card-img">
//                             <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417446/webdads2u/domain-registration/icons/co-in-icon.png" alt="in" loading='lazy' className='img-fluid'/>
//                         </div>
//                         <div className="card-title">
//                             <h4>.CO.IN Domain</h4>
//                             <p>Tailored for Indian businesses, combines the popularity of .CO with India's online presence.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Domainname;

'use client';
import React from 'react';
import { Container, Grid2, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const domains = [
    {
        title: '.IN Domain',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417489/webdads2u/domain-registration/icons/in-icon.png',
        desc: 'Represents India, ideal for Indian businesses, organizations, or individuals looking for a local online presence.'
    },
    {
        title: '.IO Domain',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417481/webdads2u/domain-registration/icons/io-icon.png',
        desc: 'Trendy choice for tech startups, represents input/output, and provides a global appeal.'
    },
    {
        title: '.COM Domain',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417474/webdads2u/domain-registration/icons/com-icon.png',
        desc: 'Universal choice, recognized worldwide, perfect for any business or personal website.'
    },
    {
        title: '.NET Domain',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417467/webdads2u/domain-registration/icons/net-icon.png',
        desc: 'Preferred for networking, internet-related services, offers credibility and professionalism for online ventures.'
    },
    {
        title: '.AI Domain',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417460/webdads2u/domain-registration/icons/ai-icon.png',
        desc: 'Embraces artificial intelligence, suitable for tech companies, startups, or projects exploring AI innovations.'
    },
    {
        title: '.ORG Domain',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417453/webdads2u/domain-registration/icons/org-icon.png',
        desc: 'Symbolizes non-profit organizations, charities, or community initiatives, fostering trust and credibility.'
    },
    {
        title: '.CO.IN Domain',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757417446/webdads2u/domain-registration/icons/co-in-icon.png',
        desc: "Tailored for Indian businesses, combines the popularity of .CO with India's online presence."
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

export default function Domainname() {
    return (
        <Box sx={{ background: '#EEFCFA', py: 8 }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Grid2 container justifyContent="center" textAlign="center" mb={5}>
                    <Grid2 size={{ xs: 12 }}>
                        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} viewport={{ once: true }}>
                            <Typography
                                variant="h2"
                                fontWeight="bold"
                                color="primary"
                                sx={{
                                    fontSize: {
                                        xs: '1.5rem', // ~h5
                                        sm: '2rem', // ~h4
                                        md: '2.5rem' // ~h2
                                    },
                                    textAlign: 'center'
                                }}
                            >
                                Choose the Perfect Domain Name for Your Business
                            </Typography>
                        </motion.div>
                    </Grid2>
                </Grid2>

                {/* Domain Cards */}
                <Grid2 container spacing={4} justifyContent="start">
                    {domains.map((domain, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={domain.title}>
                            <motion.div custom={index} initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                                        height: '300px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        p: 2
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={domain.img}
                                        alt={domain.title}
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            objectFit: 'contain',
                                            mb: 2
                                        }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" fontWeight="600" gutterBottom>
                                            {domain.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {domain.desc}
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
