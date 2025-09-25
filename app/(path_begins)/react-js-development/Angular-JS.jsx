// // 'use client';
// // import React from 'react';
// // import { Container, Grid222, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
// // import { motion } from 'framer-motion';

// // const cardData = [
// //     {
// //         img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/react-ui.png',
// //         title: 'Reactjs Portal Development',
// //         desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.',
// //         alt: 'react web development'
// //     },
// //     {
// //         img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/react-ui.png',
// //         title: 'Reactjs UI Development',
// //         desc: "Webdads2u Technologies excels in React js development, focusing on UI enhancement. Elevate your app's interactivity and attract more clients with our React.js UI Development expertise.",
// //         alt: 'react-ui'
// //     },
// //     {
// //         img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/reactjs.png',
// //         title: 'Reactjs Migration Services',
// //         desc: 'As the premier React js development service provider, precision and security define our approach to application migration. Trust us for the best React.js Migration Services.',
// //         alt: 'reactjs'
// //     },
// //     {
// //         img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393329/webdads2u/react-js-development/icons/front-end.png',
// //         title: 'Enterprise Reactjs Development',
// //         desc: 'Empower your Enterprise with cutting-edge React js development in Chennai. Elevate performance and scalability seamlessly. Unleash the potential of your business.',
// //         alt: 'react-js-portable-development-co'
// //     },
// //     {
// //         img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393330/webdads2u/react-js-development/icons/react-js-portable-development.png',
// //         title: 'Reactjs Front-end Development',
// //         desc: 'Leading the way in React js front-end development in Chennai. Transform your web interfaces with our expertise. Delivering responsiveness, innovation, and seamless user experiences.',
// //         alt: 'front-end'
// //     },
// //     {
// //         img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/custom-reactjs.png',
// //         title: 'Custom Reactjs Development',
// //         desc: 'Tailored solutions with Custom React js Development in Chennai, India. Enhance your digital presence with responsive and innovative web applications. Your vision, our expertise.',
// //         alt: 'custome-reactjs'
// //     }
// // ];

// // function AngularJS() {
// //     return (
// //         <Box
// //             component="section"
// //             sx={{
// //                 py: { xs: 6, md: 10 },
// //                 backgroundColor: '#f9fafb'
// //             }}
// //         >
// //             <Container maxWidth="lg">
// //                 {/* Header */}
// //                 <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }}>
// //                     <Typography variant="h3" align="center" fontWeight="bold" gutterBottom sx={{ color: '#264176', fontSize: { xs: '1rem', md: '2rem' } }}>
// //                         Angular JS React JS Development
// //                     </Typography>
// //                     <Typography variant="subtitle1" align="center" sx={{ mb: 6, color: '#424242' }}>
// //                         Delivering end-to-end services in an affluent way
// //                     </Typography>
// //                 </motion.div>

// //                 {/* Cards */}
// //                 <Grid222 container spacing={4}>
// //                     {cardData.map((card, index) => (
// //                         <Grid222 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
// //                             <motion.div
// //                                 initial={{ opacity: 0, y: 40 }}
// //                                 whileInView={{ opacity: 1, y: 0 }}
// //                                 transition={{
// //                                     duration: 0.6,
// //                                     delay: index * 0.15,
// //                                     ease: 'easeOut'
// //                                 }}
// //                                 viewport={{ once: true }}
// //                             >
// //                                 <Card
// //                                     sx={{
// //                                         height: 300,
// //                                         borderRadius: 3,

// //                                         boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
// //                                         transition: 'transform 0.3s ease',
// //                                         '&:hover': {
// //                                             transform: 'translateY(-8px)'
// //                                         }
// //                                     }}
// //                                 >
// //                                     <CardMedia component="img" image={card.img} alt={card.alt} loading="lazy" sx={{ height: 90, objectFit: 'contain', p: 2 }} />
// //                                     <CardContent>
// //                                         <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#0d47a1' }}>
// //                                             {card.title}
// //                                         </Typography>
// //                                         <Typography variant="body2" sx={{ color: '#424242' }}>
// //                                             {card.desc}
// //                                         </Typography>
// //                                     </CardContent>
// //                                 </Card>
// //                             </motion.div>
// //                         </Grid222>
// //                     ))}
// //                 </Grid222>
// //             </Container>
// //         </Box>
// //     );
// // }

// // export default AngularJS;
// 'use client';
// import React from 'react';
// import { Container, Grid22, Card, CardContent, Typography, Box } from '@mui/material';
// import { motion } from 'framer-motion';

// const cardVariants = {
//     initial: { y: 30, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     hover: { scale: 1.05, rotate: 0 }
// };

// const AngularJS = () => {
//     const cards = [
//         {
//             img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393330/webdads2u/react-js-development/icons/react-js-portable-development.png',
//             title: 'Reactjs Portal Development',
//             desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.'
//         },
//         {
//             img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/react-ui.png',
//             title: 'Reactjs UI Development',
//             desc: "Webdads2u Technologies excels in React js development, focusing on UI enhancement. Elevate your app's interactivity and attract more clients with our React.js UI Development expertise."
//         },
//         {
//             img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/web-portal-designing.png',
//             title: 'Reactjs Portal Development',
//             desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.'
//         },
//         {
//             img: '/webdads/images/react-js-development/react-js-portable-development-co.png',
//             title: 'Reactjs Portal Development',
//             desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.'
//         },
//         {
//             img: '/webdads/images/react-js-development/front-end.png',
//             title: 'Reactjs Portal Development',
//             desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.'
//         },
//         {
//             img: '/webdads/images/react-js-development/custome-reactjs.png',
//             title: 'Reactjs Portal Development',
//             desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.'
//         }
//     ];

//     return (
//         <Box
//             sx={{
//                 backgroundColor: '#f5f5f5',
//                 py: { xs: 6, md: 10 }
//             }}
//         >
//             <Container>
//                 {/* Section Heading */}
//                 <Box textAlign="center" mb={6}>
//                     <Typography variant="h3" fontWeight={600} sx={{ color: '#0A1F5F', mb: 2 }}>
//                         Angular JS React JS Development
//                     </Typography>
//                     <Typography variant="h6" fontWeight={500} sx={{ color: '#000' }}>
//                         Delivering end-to-end services in an affluent way
//                     </Typography>
//                 </Box>

//                 {/* Cards */}
//                 <Grid22 container spacing={4}>
//                     {cards.map((card, i) => (
//                         <Grid22 size={{ xs: 12, sm: 6, md: 4 }} key={i}>
//                             <motion.div variants={cardVariants} initial="initial" whileInView="animate" whileHover="hover" transition={{ duration: 0.6, delay: i * 0.1 }}>
//                                 <Card
//                                     elevation={3}
//                                     sx={{
//                                         borderRadius: '24px',
//                                         p: 3,
//                                         textAlign: 'center',
//                                         position: 'relative',
//                                         overflow: 'hidden',
//                                         transition: 'all 0.3s ease',
//                                         '&:hover': {
//                                             boxShadow: '0 14px 40px rgba(0,0,0,0.1)',
//                                             bgcolor: '#fff'
//                                         }
//                                     }}
//                                 >
//                                     <Box
//                                         component="img"
//                                         src={card.img}
//                                         alt={card.title}
//                                         sx={{
//                                             width: 70,
//                                             height: 70,
//                                             mx: 'auto',
//                                             mb: 2,
//                                             transition: 'transform 0.5s',
//                                             '&:hover': { transform: 'rotate(360deg)' }
//                                         }}
//                                     />
//                                     <CardContent>
//                                         <Typography variant="h6" fontWeight={600} sx={{ color: '#002060', mb: 1 }}>
//                                             {card.title}
//                                         </Typography>
//                                         <Typography variant="body2" sx={{ color: '#000', fontSize: 15 }}>
//                                             {card.desc}
//                                         </Typography>
//                                     </CardContent>
//                                 </Card>
//                             </motion.div>
//                         </Grid22>
//                     ))}
//                 </Grid22>
//             </Container>
//         </Box>
//     );
// };

// export default AngularJS;

'use client';
import React from 'react';
import { Container, Grid2, Box, Typography, Card } from '@mui/material';
import { motion } from 'framer-motion';

const cardData = [
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393330/webdads2u/react-js-development/icons/react-js-portable-development.png',
        alt: 'react web development',
        title: 'Reactjs Portal Development',
        desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.'
    },
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/react-ui.png',
        alt: 'react-ui',
        title: 'Reactjs UI Development',
        desc: 'Webdads2u Technologies excels in React js development, focusing on UI enhancement. Elevate your app’s interactivity and attract more clients with our React.js UI Development expertise.'
    },
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/web-portal-designing.png',
        alt: 'reactjs',
        title: 'Reactjs Portal Development',
        desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.'
    },
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393330/webdads2u/react-js-development/icons/react-js-portable-development.png',
        alt: 'react-js-portable-development-co',
        title: 'Reactjs Portal Development',
        desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.'
    },
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393329/webdads2u/react-js-development/icons/front-end.png',
        alt: 'front-end',
        title: 'Reactjs Portal Development',
        desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.'
    },
    {
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757393328/webdads2u/react-js-development/icons/custom-reactjs.png',
        alt: 'custome-reactjs',
        title: 'Reactjs Portal Development',
        desc: 'Delivering top-tier React js development in Chennai, India. Specializing in efficient React.js Portal Development for dynamic and efficient web portals to meet your business needs.'
    }
];

export default function AngularJS() {
    return (
        <Box
            component="section"
            sx={{
                background: '#f5f5f5',
                py: { xs: 6, md: 8 }
            }}
        >
            <Container>
                {/* Section Title */}
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: '#0A1F5F',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 600,
                            fontSize: { xs: '25px', md: '40px' }
                        }}
                    >
                        Angular JS React JS Development
                    </Typography>
                    <Typography
                        sx={{
                            color: '#000',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 600,
                            fontSize: { xs: '16px', md: '20px' }
                        }}
                    >
                        Delivering end-to-end services in an affluent way
                    </Typography>
                </Box>

                {/* Cards */}
                <Grid2 container spacing={3}>
                    {cardData.map((card, i) => (
                        <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={i}>
                            <motion.div whileHover={{ y: -10, rotate: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} style={{ position: 'relative' }}>
                                {/* Background Accent */}
                                <Box
                                    sx={{
                                        transition: '0.9s',
                                        background: i % 2 === 0 ? '#681b39' : '#19356f',
                                        width: '75%',
                                        height: '109px',
                                        position: 'absolute',
                                        bottom: 11,
                                        left: 44,
                                        borderRadius: '38px',
                                        transform: 'rotate(9deg)',
                                        zIndex: 1
                                    }}
                                />

                                {/* Card */}
                                <Card
                                    sx={{
                                        p: 4,
                                        backgroundColor: '#F9F9FD',
                                        borderRadius: '30px',
                                        zIndex: 2,
                                        position: 'relative',
                                        transition: '0.3s',
                                        '&:hover': {
                                            boxShadow: '0 14px 40px hsla(0, 0%, 20%, 0.1)',
                                            backgroundColor: '#fff'
                                        }
                                    }}
                                >
                                    <Box textAlign="center">
                                        <Box mb={2}>
                                            <motion.img src={card.img} alt={card.alt} loading="lazy" style={{ width: 60 }} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} />
                                        </Box>
                                        <Typography
                                            sx={{
                                                color: '#002060',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 600,
                                                fontSize: '20px',
                                                mb: 1
                                            }}
                                        >
                                            {card.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#000',
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '16px'
                                            }}
                                        >
                                            {card.desc}
                                        </Typography>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
