// import React, { useEffect } from 'react';

// function Logotimeline() {

//   useEffect(() => {
//     const timelineBlocks = document.querySelectorAll('.cd-timeline-block');

//     const checkVisibility = () => {
//       timelineBlocks.forEach(block => {
//         const rect = block.getBoundingClientRect();
//         if (rect.top <= window.innerHeight * 0.75) {
//           block.classList.add('is-visible');
//         }
//       });
//     };

//     window.addEventListener('scroll', checkVisibility);
//     checkVisibility(); // Initial check for blocks already in view

//     return () => window.removeEventListener('scroll', checkVisibility);
//   }, []);

//   return (
//     <section className='logotimeline-main'>
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12 col-md-12 col-lg-6 logotimeline">
//             <img src="webdads/images/logo-design/logo-design.jpg" alt="logo-design" loading='lazy' className='img-fluid' />
//           </div>

//           <div className="col-sm-12 col-md-12 col-lg-6 mt-4 align-self-center">
//             <section id="cd-timeline" className="cd-container">
//               <div className="cd-timeline-block">
//                 <div className="cd-timeline-img cd-picture">
//                   <img src="webdads/images/logo-design/one.png" alt="one" loading='lazy' className='img-fluid' />
//                 </div>

//                 <div className="cd-timeline-content">

//                   <p>Analyzing the brand and its complete guidelines is the first step in logo designing, so we start with thorough research.</p>

//                 </div>
//               </div>

//               <div className="cd-timeline-block">
//                 <div className="cd-timeline-img cd-movie">
//                   <img src="webdads/images/logo-design/two.png" alt="two" loading='lazy' className='img-fluid' />
//                 </div>

//                 <div className="cd-timeline-content">

//                   <p>Sketching is our next step! Brand names will be used to inspire visual representations.</p>

//                 </div>
//               </div>

//               <div className="cd-timeline-block">
//                 <div className="cd-timeline-img cd-location">
//                   <img src="webdads/images/logo-design/three.png" alt="three" loading='lazy' className='img-fluid' />
//                 </div>

//                 <div className="cd-timeline-content">

//                   <p>The page will begin to take form visual symbols and shapes once ideas start flowing into it in text form.</p>

//                 </div>
//               </div>

//               <div className="cd-timeline-block">
//                 <div className="cd-timeline-img cd-location">
//                   <img src="webdads/images/logo-design/four.png" alt="four" loading='lazy' className='img-fluid' />
//                 </div>

//                 <div className="cd-timeline-content">

//                   <p>All angles and directions are considered while conceptualizing the established themes and text earlier.</p>

//                 </div>
//               </div>

//               <div className="cd-timeline-block">
//                 <div className="cd-timeline-img cd-movie">
//                   <img src="webdads/images/logo-design/five.png" alt="five" loading='lazy' className='img-fluid' />
//                 </div>

//                 <div className="cd-timeline-content">

//                   <p>Finally, the digital execution is implemented and refined in different stages.</p>

//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Logotimeline;

'use client';
import React, { useEffect, useState } from 'react';
import { Grid2, Typography, Box, Container, useTheme, useMediaQuery, styled } from '@mui/material';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
const TimelineContent = styled(Box)(({ theme }) => ({
    position: 'relative',
    marginLeft: '60px',
    backgroundColor: '#003073',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    zIndex: 1, // Lower than image
    '&:before': {
        content: '""',
        position: 'absolute',
        top: '10px',
        left: '-30px',
        width: '30px',
        height: '30px',
        // transform: 'rotate(45deg)',

        backgroundColor: '#003073',
        boxShadow: '-2px 2px 2px rgba(0,0,0,0.1)',
        zIndex: -1,
        clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
        '&:hover': {
            backgroundColor: '#0D8FEF',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'
        }
    }
}));
function LogoTimeline() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const controls = useAnimation();
    const [visibleItems, setVisibleItems] = useState([]);

    const timelineItems = [
        {
            number: '01',
            title: 'Brand Analysis',
            text: 'Analyzing the brand and its complete guidelines is the first step in logo designing so we start with thorough research.',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756890634/webdads2u/logo-design/icons/1.png'
        },
        {
            number: '02',
            title: 'Concept Sketching',
            text: 'Sketching is our next step! Brand names will be used to inspire visual representations.',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756890636/webdads2u/logo-design/icons/2.png'
        },
        {
            number: '03',
            title: 'Visual Development',
            text: 'The page will begin to take form visual symbols and shapes once ideas start flowing into it in text form.',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756890639/webdads2u/logo-design/icons/3.png'
        },
        {
            number: '04',
            title: 'Concept Refinement',
            text: 'All angles and directions are considered while conceptualizing the established themes and text earlier.',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756890641/webdads2u/logo-design/icons/4.png'
        },
        {
            number: '05',
            title: 'Digital Execution',
            text: 'Finally, the digital execution is implemented and refined in different stages.',
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756890632/webdads2u/logo-design/icons/5.png'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = window.innerHeight * 0.8;

            timelineItems.forEach((_, index) => {
                const element = document.getElementById(`timeline-item-${index}`);
                if (element) {
                    const elementTop = element.getBoundingClientRect().top;
                    if (elementTop < triggerBottom) {
                        setVisibleItems((prev) => [...new Set([...prev, index])]);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <Box
            sx={{
                py: { xs: 4, md: 8 },
                px: 2,
                backgroundColor: '#ffffff'
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container spacing={4} alignItems="center">
                    {/* Image Column */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="/webdads/images/logo-design/logo-design.jpg"
                            alt="logo-design"
                            loading="lazy"
                            sx={{
                                width: { xs: '100%', md: '550px' },
                                maxWidth: '100%',
                                height: 'auto',
                                display: 'block',
                                marginLeft: { xs: 'auto', md: 'auto' },
                                marginRight: { xs: 'auto', md: 'auto' }
                            }}
                        />
                    </Grid2>

                    {/* Timeline Column */}
                    <Grid2 size={{ xs: 12, md: 6 }} container>
                        <Box
                            sx={{
                                position: 'relative',
                                pl: { xs: 2, sm: 4 }
                            }}
                        >
                            {timelineItems.map((item, index) => (
                                <Box
                                    key={index}
                                    id={`timeline-item-${index}`}
                                    sx={{
                                        position: 'relative',
                                        mb: { xs: 4, md: 6 },
                                        pl: { xs: 6, sm: 8 },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <AnimatePresence>
                                        {visibleItems.includes(index) && (
                                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }}>
                                                <Box
                                                    sx={{
                                                        p: '1px',
                                                        position: 'absolute',
                                                        left: { xs: 0 },
                                                        top: 0,
                                                        transform: 'translateX(-50%)',
                                                        width: { xs: 48, sm: 100 },
                                                        height: { xs: 48, sm: 100 },
                                                        borderRadius: '50%',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        boxShadow: 3,
                                                        zIndex: 100,
                                                        '&:hover': {
                                                            backgroundColor: 'black'
                                                        }
                                                    }}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={item.icon}
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            width: '100%',
                                                            height: 'auto'
                                                        }}
                                                    />{' '}
                                                </Box>
                                                <TimelineContent>
                                                    <Box
                                                        sx={{
                                                            backgroundColor: '#003073',
                                                            borderRadius: '8px',
                                                            p: 2,
                                                            boxShadow: 2,
                                                            color: 'white',
                                                            transition: 'all 0.3s ease', // Add smooth transition
                                                            '&:hover': {
                                                                backgroundColor: '#0D8FEF',
                                                                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'
                                                            }
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                color: 'white',
                                                                fontSize: '0.95rem',
                                                                lineHeight: 1.7,
                                                                width: '100%'
                                                            }}
                                                        >
                                                            {item.text}
                                                        </Typography>
                                                    </Box>
                                                </TimelineContent>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Box>
                            ))}
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default LogoTimeline;
