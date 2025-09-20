// 'use client';

// import React, { useState } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Grid2 } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const testimonials = [
//     {
//         name: 'Yaser',
//         role: 'Founder',
//         content: 'Great work by Webdads, prompt and efficient service. I am overall satisfied with their performance for the design of our company brochure.',
//         imgSrc: '/webdads/images/home/testimonial/client-review-1.avif'
//     },
//     {
//         name: 'Suresh',
//         role: 'Founder',
//         content: 'Excellent work with reasonable cost. You can blindly approach them, sure you will get excellent output which is beyond your expectation.',
//         imgSrc: '/webdads/images/home/testimonial/client-review-2.avif'
//     },
//     {
//         name: 'Lakshmanan Annamalai',
//         role: 'Founder',
//         content: 'Best people to work with. 100% hard worker, gave a neat finish and great look towards my website. Solomon is flexible and keeps up the works up to date.',
//         imgSrc: '/webdads/images/home/testimonial/client-review-3.avif'
//     },
//     {
//         name: 'Smilee',
//         role: 'Founder',
//         content: 'Very responsive & professional workers. I am so happy & satisfied with their work.',
//         imgSrc: '/webdads/images/home/testimonial/client-review-4.avif'
//     }
// ];

// const faqData = [
//     {
//         headerContent: 'What does having Managed your services provider?',
//         boadyContent: 'Our purpose is to build solutions that remove the barriers preventing people from doing their best work, and this is at the heart of how we approach our.'
//     },
//     {
//         headerContent: 'What you about say your Business planning?',
//         boadyContent: 'We encourage every team member to be a whole person. We have a flexible, high trust environment that is focused on doing great work.'
//     },
//     {
//         headerContent: 'You have a unique way of the working in IT?',
//         boadyContent: 'Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.'
//     },
//     {
//         headerContent: 'What types of systems do you support?',
//         boadyContent: 'Increase social reach and productivity with our App Directory, a collection of famous applications like Instagram other web design.'
//     },
//     {
//         headerContent: 'Can you provide of all IT Managenment services?',
//         boadyContent: 'Design studio founded in London and expanded our services, and become a multinational firm, offering services and solutions.'
//     }
// ];

// const FAQTestimonial = () => {
//     const [expanded, setExpanded] = useState(false);

//     const handleChange = (panel) => (event, isExpanded) => {
//         setExpanded(isExpanded ? panel : false);
//     };

//     return (
//         <Box sx={{ py: 8, px: { xs: 2, md: 8 }, overflowX: 'hidden' }}>
//             <Grid2 container spacing={6} alignItems="flex-start">
//                 {/* FAQ Section */}
//                 <Grid2 size={{ xs: 12, md: 6 }}>
//                     <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//                         <Typography
//                             variant="h6"
//                             sx={{
//                                 color: '#871752',
//                                 fontWeight: 600,
//                                 fontFamily: 'Roboto, sans-serif'
//                             }}
//                         >
//                             FAQs
//                         </Typography>
//                         <Typography
//                             variant="h4"
//                             sx={{
//                                 fontWeight: 700,
//                                 fontFamily: 'Poppins, sans-serif',
//                                 mb: 3,
//                                 mt: 1
//                             }}
//                         >
//                             Frequently Asked Questions
//                         </Typography>

//                         {faqData.map((data, index) => (
//                             <Accordion
//                                 key={index}
//                                 expanded={expanded === `panel${index}`}
//                                 onChange={handleChange(`panel${index}`)}
//                                 sx={{
//                                     mb: 2,
//                                     border: '2px solid #d5d8dc',
//                                     borderRadius: '8px',
//                                     '&:before': { display: 'none' }
//                                 }}
//                             >
//                                 <AccordionSummary
//                                     expandIcon={expanded === `panel${index}` ? <RemoveIcon sx={{ color: '#fff' }} /> : <AddIcon sx={{ color: '#262250' }} />}
//                                     sx={{
//                                         backgroundColor: expanded === `panel${index}` ? '#262250' : '#f8f9fa',
//                                         color: expanded === `panel${index}` ? '#fff' : '#333',
//                                         fontWeight: 600,
//                                         fontFamily: 'Poppins, sans-serif',
//                                         borderRadius: expanded === `panel${index}` ? '8px 8px 0 0' : '8px',
//                                         transition: 'all 0.3s ease'
//                                     }}
//                                 >
//                                     {data.headerContent}
//                                 </AccordionSummary>
//                                 <AccordionDetails
//                                     sx={{
//                                         fontFamily: 'Poppins, sans-serif',
//                                         color: '#555',
//                                         fontSize: 16,
//                                         lineHeight: 1.6
//                                     }}
//                                 >
//                                     {data.boadyContent}
//                                 </AccordionDetails>
//                             </Accordion>
//                         ))}
//                     </motion.div>
//                 </Grid2>

//                 {/* Testimonial Section */}
//                 <Grid2 size={{ xs: 12, md: 6 }}>
//                     <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//                         <Typography>Testimonials</Typography>
//                         <Typography
//                             variant="h6"
//                             sx={{
//                                 fontFamily: 'Poppins, sans-serif',
//                                 fontWeight: 700,
//                                 fontSize: { xs: '1.5rem', md: '2.5rem' },
//                                 mb: 2
//                             }}
//                         >
//                             We have many good <span style={{ color: '#871752' }}>client’s</span> review
//                         </Typography>

//                         <Swiper modules={[Pagination, Autoplay]} spaceBetween={30} slidesPerView={1} autoplay={{ delay: 4000 }} pagination={{ clickable: true }} style={{ paddingBottom: '40px' }}>
//                             {testimonials.map((testimonial, index) => (
//                                 <SwiperSlide key={index}>
//                                     <Box
//                                         sx={{
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             alignItems: 'center',
//                                             textAlign: 'center',
//                                             px: { xs: 2, md: 4 }
//                                         }}
//                                     >
//                                         <motion.img
//                                             src={testimonial.imgSrc}
//                                             alt={testimonial.name}
//                                             style={{
//                                                 width: 100,
//                                                 height: 100,
//                                                 borderRadius: '50%',
//                                                 marginBottom: 16,
//                                                 objectFit: 'cover'
//                                             }}
//                                             initial={{ scale: 0.8, opacity: 0 }}
//                                             whileInView={{ scale: 1, opacity: 1 }}
//                                             transition={{ duration: 0.5 }}
//                                         />
//                                         <Typography
//                                             variant="body1"
//                                             sx={{
//                                                 fontFamily: 'Poppins, sans-serif',
//                                                 fontSize: { xs: 16, md: 18 },
//                                                 fontWeight: 400,
//                                                 color: '#162541',
//                                                 mb: 2,
//                                                 lineHeight: 1.6
//                                             }}
//                                         >
//                                             “{testimonial.content}”
//                                         </Typography>
//                                         <Typography
//                                             variant="h6"
//                                             sx={{
//                                                 fontFamily: 'Poppins, sans-serif',
//                                                 fontWeight: 700,
//                                                 color: '#0c0022'
//                                             }}
//                                         >
//                                             {testimonial.name}
//                                         </Typography>
//                                         <Typography
//                                             variant="subtitle2"
//                                             sx={{
//                                                 fontFamily: 'Poppins, sans-serif',
//                                                 fontWeight: 600,
//                                                 color: '#262250'
//                                             }}
//                                         >
//                                             {testimonial.role}
//                                         </Typography>
//                                     </Box>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </motion.div>
//                 </Grid2>
//             </Grid2>
//         </Box>
//     );
// };

// export default FAQTestimonial;

'use client';

import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Grid2 } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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

const FAQTestimonial = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ py: 8, px: { xs: 2, md: 8 }, overflowX: 'hidden' }}>
            <Grid2 container spacing={6} alignItems="flex-start">
                {/* FAQ Section */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#871752',
                                fontWeight: 600,
                                fontFamily: 'Roboto, sans-serif'
                            }}
                        >
                            FAQs
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                fontFamily: 'Poppins, sans-serif',
                                mb: 3,
                                mt: 1
                            }}
                        >
                            Frequently Asked Questions
                        </Typography>

                        {faqData.map((data, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                TransitionProps={{
                                    timeout: 500,
                                    easing: {
                                        enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
                                        exit: 'cubic-bezier(0.4, 0, 0.2, 1)'
                                    }
                                }}
                                sx={{
                                    mb: 2,
                                    border: '2px solid #d5d8dc',
                                    borderRadius: '8px',
                                    '&:before': { display: 'none' }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        <motion.div
                                            animate={{
                                                rotate: expanded === `panel${index}` ? 180 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {expanded === `panel${index}` ? <RemoveIcon sx={{ color: '#fff' }} /> : <AddIcon sx={{ color: '#262250' }} />}
                                        </motion.div>
                                    }
                                    sx={{
                                        backgroundColor: expanded === `panel${index}` ? '#262250' : '#f8f9fa',
                                        color: expanded === `panel${index}` ? '#fff' : '#333',
                                        fontWeight: 600,
                                        fontFamily: 'Poppins, sans-serif',
                                        borderRadius: expanded === `panel${index}` ? '8px 8px 0 0' : '8px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {data.headerContent}
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        color: '#555',
                                        fontSize: 16,
                                        lineHeight: 1.6
                                    }}
                                >
                                    {data.boadyContent}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </motion.div>
                </Grid2>

                {/* Testimonial Section */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <Typography>Testimonials</Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                fontSize: { xs: '1.5rem', md: '2.5rem' },
                                mb: 2
                            }}
                        >
                            We have many good <span style={{ color: '#871752' }}>client’s</span> review
                        </Typography>

                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{ delay: 4000 }}
                            pagination={{
                                clickable: true,
                                bulletActiveClass: 'swiper-pagination-bullet-active',
                                bulletClass: 'swiper-pagination-bullet'
                            }}
                            style={{
                                paddingBottom: '40px',
                                '--swiper-pagination-color': '#262250', // 👈 active dot color
                                '--swiper-pagination-bullet-inactive-color': '#d8bfd8', // 👈 inactive dots
                                '--swiper-pagination-bullet-inactive-opacity': '1',
                                '--swiper-pagination-bullet-size': '10px',
                                '--swiper-pagination-bullet-horizontal-gap': '6px'
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            px: { xs: 2, md: 4 }
                                        }}
                                    >
                                        <motion.img
                                            src={testimonial.imgSrc}
                                            alt={testimonial.name}
                                            style={{
                                                width: 100,
                                                height: 100,
                                                borderRadius: '50%',
                                                marginBottom: 16,
                                                objectFit: 'cover'
                                            }}
                                            initial={{
                                                scale: 0.8,
                                                opacity: 0
                                            }}
                                            whileInView={{
                                                scale: 1,
                                                opacity: 1
                                            }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: { xs: 16, md: 18 },
                                                fontWeight: 400,
                                                color: '#162541',
                                                mb: 2,
                                                lineHeight: 1.6
                                            }}
                                        >
                                            “{testimonial.content}”
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 700,
                                                color: '#0c0022'
                                            }}
                                        >
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 600,
                                                color: '#262250'
                                            }}
                                        >
                                            {testimonial.role}
                                        </Typography>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default FAQTestimonial;
