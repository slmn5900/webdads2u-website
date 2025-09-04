'use client';
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Carousel } from 'react-bootstrap';
import '../style/home/landing_page.scss';

const testimonials = [
    {
        name: 'Yaser',
        role: 'Founder',
        content: 'Great work by Webdads, prompt and efficient service. I am overall satisfied with their performance for the design of our company brochure.',
        imgSrc: '/webdads/images/home/testimonial/client-review-1.avif'
    },
    {
        name: 'Suresh',
        role: 'Founder',
        content: 'Excellent work with reasonable cost. You can blindly approach them, sure you will get excellent output which is beyond your expectation.',
        imgSrc: '/webdads/images/home/testimonial/client-review-2.avif'
    },
    {
        name: 'Lakshmanan Annamalai',
        role: 'Founder',
        content: 'Best people to work with. 100% hard worker, gave a neat finish and great look towards my website. Solomon is flexible and keeps up the works up to date.',
        imgSrc: '/webdads/images/home/testimonial/client-review-3.avif'
    },
    {
        name: 'Smilee',
        role: 'Founder',
        content: 'Very responsive & professional workers. I am so happy & satisfied with their work.',
        imgSrc: '/webdads/images/home/testimonial/client-review-4.avif'
    }
];

const faqData = [
    {
        headerContent: 'What does having Managed your services provider?',
        boadyContent: 'Our purpose is to build solutions that remove the barriers preventing people from doing their best work, and this is at the heart of how we approach our.'
    },
    {
        headerContent: 'What you about say your Business planning?',
        boadyContent: 'We encourage every team member to be a whole person. We have a flexible, high trust environment that is focused on doing great work.'
    },
    {
        headerContent: 'You have a unique way of the working in IT?',
        boadyContent: 'Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.'
    },
    {
        headerContent: 'What types of systems do you support?',
        boadyContent: 'Increase social reach and productivity with our App Directory, a collection of famous applications like Instagram other web design.'
    },
    {
        headerContent: 'Can you provide of all IT Managenment services?',
        boadyContent: 'Design studio founded in London and expanded our services, and become a multinational firm, offering services and solutions.'
    }
];

const FAQ = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="container ">
            <div className="row d-flex align-items-start  " style={{ marginTop: '15px' }}>
                <section className="col-md-6 ">
                    <div className="landing-page-faq-span-div">
                        <span>FAQs</span>
                        <h2 style={{ paddingBottom: '20px', lineHeight: 1.2 }}>Frequently Asked Questions</h2>
                    </div>
                    {faqData.map((data, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                            className="landing-page-faq-accordionItem"
                            // sx={{ boxShadow: "none" }}
                        >
                            <AccordionSummary
                                sx={{
                                    backgroundColor: expanded === `panel${index}` ? '#262250' : '#f8f9fa',
                                    borderRadius: expanded === `panel${index}` ? '4px 4px 0 0' : '4px',
                                    color: expanded === `panel${index}` ? '#fff' : '#aaa',
                                    transition: 'all 0.3s ease'
                                    // boxShadow: "none",
                                }}
                                expandIcon={
                                    expanded === `panel${index}` ? (
                                        <RemoveIcon style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 'bold' }} />
                                    ) : (
                                        <AddIcon style={{ color: '#000', fontSize: '1.25rem', fontWeight: 'bold', stroke: '#000', strokeWidth: 2 }} />
                                    )
                                }
                                className=""
                            >
                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: '600' }}>{data.headerContent}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accordion-body" sx={{ fontFamily: 'Poppins', color: 'black' }}>
                                {data.boadyContent}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </section>

                <section className="col-md-6  ">
                    <div className="landing-page-testimonial " style={{ fontFamily: 'Poppins' }}>
                        Testimonial
                        {/* <div className="container mt-5"> */}
                        <h3>
                            We have many good <span style={{ color: '#871752', marginTop: 10 }}>client’s</span> review
                        </h3>
                    </div>
                    <Carousel className="carousel-parent-container-home ">
                        {testimonials.map((testimonial, index) => (
                            <Carousel.Item key={index} className="carousel-item-container">
                                <div className="d-flex justify-content-center">
                                    <img className="d-block rounded-circle" src={testimonial.imgSrc} alt={testimonial.name} style={{ width: '100px', height: '100px' }} />
                                </div>
                                <Carousel.Caption className="landing-page-testimonial-carousel-caption" style={{ position: 'unset' }}>
                                    <p className="landing-page-testimonial-carousel-caption-p" style={{ textAlign: 'left', paddingLeft: '10px' }}>
                                        {testimonial.content}
                                    </p>
                                    <h3 className="text-center">{testimonial.name}</h3>
                                    <h4 className="text-center">{testimonial.role}</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </section>
            </div>
        </div>
    );
};

export default FAQ;

// 'use client';
// import React, { useState } from 'react';
// import {
//     Container,
//     Grid2,
//     Typography,
//     Accordion,
//     AccordionSummary,
//     AccordionDetails,
//     Avatar,
//     Box,
//     Paper,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import { motion } from 'framer-motion';

// // Testimonials
// const testimonials = [
//     {
//         name: 'Yaser',
//         role: 'Founder',
//         content:
//             'Great work by Webdads, prompt and efficient service. I am overall satisfied with their performance for the design of our company brochure.',
//         imgSrc: '/webdads/images/home/testimonial/client-review-1.avif',
//     },
//     {
//         name: 'Suresh',
//         role: 'Founder',
//         content:
//             'Excellent work with reasonable cost. You can blindly approach them, sure you will get excellent output which is beyond your expectation.',
//         imgSrc: '/webdads/images/home/testimonial/client-review-2.avif',
//     },
//     {
//         name: 'Lakshmanan Annamalai',
//         role: 'Founder',
//         content:
//             'Best people to work with. 100% hard worker, gave a neat finish and great look towards my website. Solomon is flexible and keeps up the works up to date.',
//         imgSrc: '/webdads/images/home/testimonial/client-review-3.avif',
//     },
//     {
//         name: 'Smilee',
//         role: 'Founder',
//         content:
//             'Very responsive & professional workers. I am so happy & satisfied with their work.',
//         imgSrc: '/webdads/images/home/testimonial/client-review-4.avif',
//     },
// ];

// // FAQs
// const faqData = [
//     {
//         headerContent: 'What does having Managed your services provider?',
//         boadyContent:
//             'Our purpose is to build solutions that remove the barriers preventing people from doing their best work, and this is at the heart of how we approach our.',
//     },
//     {
//         headerContent: 'What you about say your Business planning?',
//         boadyContent:
//             'We encourage every team member to be a whole person. We have a flexible, high trust environment that is focused on doing great work.',
//     },
//     {
//         headerContent: 'You have a unique way of the working in IT?',
//         boadyContent:
//             'Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.',
//     },
//     {
//         headerContent: 'What types of systems do you support?',
//         boadyContent:
//             'Increase social reach and productivity with our App Directory, a collection of famous applications like Instagram other web design.',
//     },
//     {
//         headerContent: 'Can you provide of all IT Management services?',
//         boadyContent:
//             'Design studio founded in London and expanded our services, and become a multinational firm, offering services and solutions.',
//     },
// ];

// const FAQ = () => {
//     const [expanded, setExpanded] = useState(false);

//     const handleChange = (panel) => (_, isExpanded) =>
//         setExpanded(isExpanded ? panel : false);

//     return (
//         <Container sx={{ mt: 6 }}>
//             <Grid2 container spacing={4} alignItems="flex-start">
//                 {/* FAQ Section */}
//                 <Grid2 size={{ xs: 12, md: 6 }} >
//                     <Box mb={3}>
//                         <Typography variant="subtitle1" color="primary">
//                             FAQs
//                         </Typography>
//                         <Typography variant="h4" fontWeight={700}>
//                             Frequently Asked Questions
//                         </Typography>
//                     </Box>

//                     {faqData.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.4, delay: index * 0.1 }}
//                         >
//                             <Accordion
//                                 expanded={expanded === index}
//                                 onChange={handleChange(index)}
//                                 sx={{ mb: 1 }}
//                             >
//                                 <AccordionSummary
//                                     expandIcon={
//                                         expanded === index ? (
//                                             <RemoveIcon color="black" sx={{ fontWeight: "800" }} />
//                                         ) : (
//                                             <AddIcon color="black" sx={{ fontWeight: "800" }} />
//                                         )
//                                     }
//                                 >
//                                     <Typography fontWeight={600}>{item.headerContent}</Typography>
//                                 </AccordionSummary>
//                                 <AccordionDetails>
//                                     <Typography>{item.boadyContent}</Typography>
//                                 </AccordionDetails>
//                             </Accordion>
//                         </motion.div>
//                     ))}
//                 </Grid2>

//                 {/* Testimonial Section */}
//                 <Grid2 size={{ xs: 12, md: 6 }} >
//                     <Box mb={3}>
//                         <Typography variant="subtitle1">Testimonial</Typography>
//                         <Typography variant="h4" fontWeight={700}>
//                             We have many good{' '}
//                             <Box component="span" sx={{ color: '#871752' }}>
//                                 client’s
//                             </Box>{' '}
//                             review
//                         </Typography>
//                     </Box>

//                     <Grid2 container spacing={2}>
//                         {testimonials.map((testimonial, index) => (
//                             <Grid2 size={{ xs: 12 }} key={index}>
//                                 <motion.div
//                                     initial={{ opacity: 0, x: 50 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                 >
//                                     <Paper
//                                         elevation={2}
//                                         sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}
//                                     >
//                                         <Avatar
//                                             src={testimonial.imgSrc}
//                                             alt={testimonial.name}
//                                             sx={{ width: 64, height: 64 }}
//                                         />
//                                         <Box>
//                                             <Typography variant="body1" fontStyle="italic">
//                                                 {testimonial.content}
//                                             </Typography>
//                                             <Typography variant="h6" fontWeight={600} mt={1}>
//                                                 {testimonial.name}
//                                             </Typography>
//                                             <Typography variant="subtitle2" color="text.secondary">
//                                                 {testimonial.role}
//                                             </Typography>
//                                         </Box>
//                                     </Paper>
//                                 </motion.div>
//                             </Grid2>
//                         ))}
//                     </Grid2>
//                 </Grid2>
//             </Grid2>
//         </Container>
//     );
// };

// export default FAQ;
