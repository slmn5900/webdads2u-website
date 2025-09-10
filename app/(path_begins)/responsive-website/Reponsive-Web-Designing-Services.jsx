// import React from 'react'

// function Reponsivewebdesigningservices() {
//   return (
//     <section className='reponsivewebdesigningservices-main'>
//         <div className="container">
//             <div className="row text-center justify-content-center reponsivewebdesigningservices">
//                 <div className="col-sm-12 col-md-12 col-lg-10">
//                     <h2>Reponsive Web Designing Services</h2>
//                     <p>Our responsive web designing services prioritize user experience across all devices, ensuring seamless functionality and optimal viewing on desktops, tablets, and smartphones. With our expertise in responsive web Page design, we craft visually appealing websites that adapt fluidly to different screen sizes and resolutions. From concept to implementation, we tailor our approach to meet your unique needs, delivering engaging and accessible digital experiences that drive results. Trust us for cutting-edge responsive web design solutions.</p>
//                 </div>
//             </div>
//             <div className="row reponsivewe-card">
//                 <div className="col-sm-12 col-md-6 col-lg-4 text-center">
//                     <div className="card">
//                         <div >
//                             <img src="webdads/images/responsive-website/Web-Dev.png" alt="Web-Dev" loading='lazy' className='img-fluid'/>
//                         </div>
//                         <div className="text-area">
//                             <h3>Web developemnt</h3>
//                             <p>We deliver on our promises by going above and beyond to produce results that are justifiable and evaluate able.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-6 col-lg-4 text-center">
//                     <div className="card">
//                         <div >
//                             <img src="webdads/images/responsive-website/Web-Design.png" alt="Web-Design" loading='lazy' className='img-fluid'/>
//                         </div>
//                         <div className="text-area">
//                             <h3>Web Design</h3>
//                             <p>Enhancing your online presence on various search engines and designing websites that are accessible on all smart devices.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-6 col-lg-4 text-center">
//                     <div className="card">
//                         <div >
//                             <img src="webdads/images/responsive-website/Search-ingine.png" alt="Search-ingine" loading='lazy' className='img-fluid'/>
//                         </div>
//                         <div className="text-area">
//                             <h3>Search engine system</h3>
//                             <p>SEO is a technique for optimizing a website and displaying it on different search engines, such as Google, Bing, and Yahoo.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Reponsivewebdesigningservices;

'use client';
import React from 'react';
import { Grid2, Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
    {
        img: 'webdads/images/responsive-website/Web-Dev.png',
        title: 'Web Development',
        desc: 'We deliver on our promises by going above and beyond to produce results that are justifiable and evaluable.'
    },
    {
        img: 'webdads/images/responsive-website/Web-Design.png',
        title: 'Web Design',
        desc: 'Enhancing your online presence on various search engines and designing websites that are accessible on all smart devices.'
    },
    {
        img: 'webdads/images/responsive-website/Search-ingine.png',
        title: 'Search Engine System',
        desc: 'SEO is a technique for optimizing a website and displaying it on different search engines, such as Google, Bing, and Yahoo.'
    }
];

function Reponsivewebdesigningservices() {
    return (
        <Box component="section" sx={{ py: { xs: 6, md: 10 }, px: 2 }}>
            <Grid2 container justifyContent="center" textAlign="center" spacing={3}>
                <Grid2 size={{ xs: 12, md: 10 }} >
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Typography variant="h2" fontSize={{ xs: '1.8rem', sm: '2.2rem', md: '2.8rem' }} fontWeight={700} gutterBottom>
                            Responsive Web Designing Services
                        </Typography>
                        <Typography variant="body1" fontSize={{ xs: '0.95rem', sm: '1rem', md: '1.1rem' }} color="text.secondary">
                            Our responsive web designing services prioritize user experience across all devices, ensuring seamless functionality and optimal viewing on desktops, tablets, and smartphones. With our expertise in responsive web page
                            design, we craft visually appealing websites that adapt fluidly to different screen sizes and resolutions. From concept to implementation, we tailor our approach to meet your unique needs, delivering engaging and
                            accessible digital experiences that drive results. Trust us for cutting-edge responsive web design solutions.
                        </Typography>
                    </motion.div>
                </Grid2>
            </Grid2>

            <Grid2 container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                {services.map((service, index) => (
                    <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
                            <Card
                                sx={{
                                    textAlign: 'center',
                                    height: '100%',
                                    borderRadius: 3,
                                    p: 2,
                                    boxShadow: 3,
                                    transition: '0.3s',
                                    '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 }
                                }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    <img src={service.img} alt={service.title} loading="lazy" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                </Box>
                                <CardContent>
                                    <Typography variant="h5" fontSize={{ xs: '1.2rem', sm: '1.4rem', md: '1.6rem' }} fontWeight={600} gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" fontSize={{ xs: '0.9rem', sm: '1rem' }} color="text.secondary">
                                        {service.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

export default Reponsivewebdesigningservices;
