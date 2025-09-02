// 'use client';
// import React from 'react';
// import { div } from 'react-transition-group';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/home/application.css';
// // import BrandingServices from "../BrandingServices/page";
// export default function Application() {
//     return (
//         <div>
//             <div
//                 style={{
//                     background: 'linear-gradient(90deg, #871752 1%, #262250 44%)'
//                     // maxHeight: "750px",
//                 }}
//             >
//                 <div className="container ">
//                     <div className=" p-4 rounded text-white">
//                         <h2 className=" text-center mb-3">Application Development</h2>
//                         <p >
//                             Application development empowers businesses with tailored solutions, optimizing user experiences while curbing hardware expenses in favor of efficient software solutions. Rapid deployment of user-friendly applications
//                             ensures heightened customer satisfaction and market visibility. Additionally, it enables businesses to glean valuable insights from user engagement data, facilitating informed decision-making processes and paving the way
//                             for continuous growth. <br />
//                             <br />
//                             At Webdads2u Pvt. Ltd., a leading web design and web development company in Chennai, we champion the transformative potential of application development, fostering enhanced efficiency and customer engagement for businesses
//                             seeking innovative solutions. As a leading web designing and web development company in Chennai, Webdads2u Pvt. Ltd. recognizes the pivotal role of application development in optimizing business efficiency and customer
//                             engagement.
//                         </p>
//                     </div>

//                     <div className="container ">
//                         <div className="row">
//                             <div className="col-md-6 col-xs-12">
//                                 <div className="ct-effect2">
//                                     <div className=" text-center mb-4">
//                                         <img
//                                             width="575"
//                                             height="513"
//                                             loading="lazy"
//                                             decoding="async"
//                                             src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_575,h_513/f_auto,q_auto/v1718112664/App-development_1574f2496_213236535d/App-development_1574f2496_213236535d.webp?_i=AA"
//                                             alt="Application Development"
//                                             className="img-fluid"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Image Boxes Section */}
//                             <div className="col-md-6 col-xs-12">
//                                 <div className="row">
//                                     {/* Image Box */}
//                                     <div className="col-md-6 mb-4 col-xs-6">
//                                         <div in={true} timeout={500}>
//                                             <div className="d-flex align-items-center">
//                                                 <img
//                                                     width="40"
//                                                     height="40"
//                                                     src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1701069719/android-app-development_543c2e9c/android-app-development_543c2e9c.png?_i=AA"
//                                                     alt="Android App Development"
//                                                     className="me-3"
//                                                 />
//                                                 <p className="mb-0 text-white">Android App Development</p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-6 mb-4 col-xs-6">
//                                         <div in={true} timeout={500}>
//                                             <div className="d-flex align-items-center">
//                                                 <img
//                                                     width="40"
//                                                     height="40"
//                                                     src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1701069715/ios-mobile-app-development_550d8fd0/ios-mobile-app-development_550d8fd0.png?_i=AA"
//                                                     alt="iOS Mobile App Development"
//                                                     className="me-3"
//                                                 />
//                                                 <p className="mb-0 text-white">iOS Mobile App Development</p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-6 mb-4 col-xs-6">
//                                         <div in={true} timeout={500}>
//                                             <div className="d-flex align-items-center">
//                                                 <img
//                                                     width="40"
//                                                     height="40"
//                                                     src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1701069711/Flutter-mobile-app-development_55418442/Flutter-mobile-app-development_55418442.png?_i=AA"
//                                                     alt="Flutter Mobile App Development"
//                                                     className="me-3"
//                                                 />
//                                                 <p className="mb-0 text-white">Flutter Mobile App Development</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* </div> */}

//                                     {/* <div className="row"> */}
//                                     <div className="col-md-6 mb-4 col-xs-6">
//                                         <div in={true} timeout={500}>
//                                             <div
//                                                 className="d-flex align-items-center 
//                "
//                                             >
//                                                 <img
//                                                     width="40"
//                                                     height="40"
//                                                     src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1701069707/react-native-app-development_5587635c/react-native-app-development_5587635c.png?_i=AA"
//                                                     alt="React Native App Development"
//                                                     className="me-3"
//                                                 />
//                                                 <p className="mb-0 text-white">React Native App Development</p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-6 mb-4 col-xs-6">
//                                         <div in={true} timeout={500}>
//                                             <div
//                                                 className="d-flex align-items-center 
//                "
//                                             >
//                                                 <img
//                                                     width="30"
//                                                     height="30"
//                                                     src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40,dpr_1.5/f_auto,q_auto/v1701069702/wearable-app-development_55924a31/wearable-app-development_55924a31.png?_i=AA"
//                                                     alt="Web Portals"
//                                                     className="me-3"
//                                                 />
//                                                 <p className="mb-0 text-white">Wearable App Development</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="row">
//                                     <div className="col-12 text-center mb-4">
//                                         <h2 className="fw-bold text-white">Web 3.0</h2>
//                                     </div>

//                                     <div className="col-md-6 mb-4 col-xs-6">
//                                         <div in={true} timeout={500}>
//                                             <div
//                                                 className="d-flex align-items-center 
//                "
//                                             >
//                                                 <img
//                                                     width="30"
//                                                     height="30"
//                                                     src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1704344536/metaverse_6558dcb47/metaverse_6558dcb47.png?_i=AA"
//                                                     alt="Metaverse"
//                                                     className="me-3"
//                                                 />
//                                                 <p className="mb-0 text-white">Metaverse</p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-6 mb-4 col-xs-6">
//                                         <div in={true} timeout={500}>
//                                             <div
//                                                 className="d-flex align-items-center 
//                "
//                                             >
//                                                 <img
//                                                     width="30"
//                                                     height="30"
//                                                     src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_30,h_30/f_auto,q_auto/v1701069697/web-portal-3_5610e5e0/web-portal-3_5610e5e0.png?_i=AA"
//                                                     alt="Web Portals"
//                                                     className="me-3"
//                                                 />
//                                                 <p className="mb-0 text-white">Web Portals</p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-6 mb-4 col-xs-6">
//                                         <div in={true} timeout={500}>
//                                             <div
//                                                 className="d-flex align-items-center 
//                "
//                                             >
//                                                 <img
//                                                     width="30"
//                                                     height="30"
//                                                     src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_30,h_30/f_auto,q_auto/v1701069693/dev-ops-png_56611d55/dev-ops-png_56611d55.png?_i=AA"
//                                                     alt="DevOps"
//                                                     className="me-3"
//                                                 />
//                                                 <p className="mb-0 text-white">DevOps</p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-6 mb-4 col-xs-6">
//                                         <div in={true} timeout={500}>
//                                             <div
//                                                 className="d-flex align-items-center 
//                "
//                                             >
//                                                 <img
//                                                     width="30"
//                                                     height="30"
//                                                     src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1701069689/iot-application-development-1/iot-application-development-1.png?_i=AA"
//                                                     alt="IoT Application Development"
//                                                     className="me-3"
//                                                 />
//                                                 <p className="mb-0 text-white">IoT Application Development</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>{' '}
//             {/* <BrandingServices /> */}
//         </div>
//     );
// }

'use client';

import React from 'react';
import {
    Box,
    Container,
    Grid2,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { keyframes } from '@mui/system';
import Image from 'next/image';

// NewsletterAnimated2 Keyframes
const NewsletterAnimated2 = keyframes`
  0% { transform: translateX(0px); }
  25% { transform: translateX(40px); }
  50% { transform: translateX(0px); }
  75% { transform: translateX(-40px); }
  100% { transform: translateX(0px); }
`;

// Framer Motion Animation
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const services1 = [
    {
        title: 'Android App Development',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1701069719/android-app-development_543c2e9c/android-app-development_543c2e9c.png',
    },
    {
        title: 'iOS Mobile App Development',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1701069715/ios-mobile-app-development_550d8fd0/ios-mobile-app-development_550d8fd0.png',
    },
    {
        title: 'Flutter Mobile App Development',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1701069711/Flutter-mobile-app-development_55418442/Flutter-mobile-app-development_55418442.png',
    },
    {
        title: 'React Native App Development',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1701069707/react-native-app-development_5587635c/react-native-app-development_5587635c.png',
    },
    {
        title: 'Wearable App Development',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40,dpr_1.5/f_auto,q_auto/v1701069702/wearable-app-development_55924a31/wearable-app-development_55924a31.png',
    },
];

const services2 = [
    {
        title: 'Metaverse',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1704344536/metaverse_6558dcb47/metaverse_6558dcb47.png',
    },
    {
        title: 'Web Portals',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_30,h_30/f_auto,q_auto/v1701069697/web-portal-3_5610e5e0/web-portal-3_5610e5e0.png',
    },
    {
        title: 'DevOps',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_30,h_30/f_auto,q_auto/v1701069693/dev-ops-png_56611d55/dev-ops-png_56611d55.png',
    },
    {
        title: 'IoT Application Development',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_40,h_40/f_auto,q_auto/v1701069689/iot-application-development-1/iot-application-development-1.png',
    },
];

export default function Application() {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                background: 'linear-gradient(90deg, #871752 1%, #262250 44%)',
                color: 'white',
                py: { xs: 6, md: 5 },
                fontFamily: 'Poppins',
            }}
        >
            <Container>
                {/* Title + Description */}
                <Box sx={{ textAlign: { sx: "left", md: "center" } }} mb={4}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Poppins', fontSize: { xs: "1.25rem", md: "25px", } }}>
                        Application Development
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ maxWidth: 900, mx: 'auto', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Poppins', }}
                    >
                        Application development empowers businesses with tailored solutions, optimizing user experiences while curbing hardware expenses in favor of efficient software solutions. Rapid deployment of user-friendly applications ensures heightened customer satisfaction and market visibility.
                        <br />
                        <br />
                        At <strong>Webdads2u Pvt. Ltd.</strong>, a leading web design and web development company in Chennai, we champion the transformative potential of application development, fostering enhanced efficiency and customer engagement for businesses seeking innovative solutions.
                    </Typography>
                </Box>

                {/* Main Grid */}
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Image (Animated) */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                animation: `${NewsletterAnimated2} 12s infinite linear alternate`,
                            }}
                            textAlign="center"
                        >
                            <Image
                                src="https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_575,h_513/f_auto,q_auto/v1718112664/App-development_1574f2496_213236535d/App-development_1574f2496_213236535d.webp"
                                alt="Application Development"
                                width={575}
                                height={513}
                                style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid2>

                    {/* Right Icon Services */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Grid2 container spacing={2}>
                            {services1.map((service, index) => (
                                <Grid2 size={{ xs: 12, md: 6 }} key={index}>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInUp}
                                        custom={index}
                                    >
                                        <Box display="flex" alignItems="center">
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={40}
                                                height={40}
                                                style={{ marginRight: 10 }}
                                            />
                                            <Typography variant="body1" fontSize="0.95rem" sx={{ fontFamily: 'Poppins', }}>
                                                {service.title}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                </Grid2>
                            ))}
                        </Grid2>

                        {/* Web 3.0 Title */}
                        <Box textAlign="center" mt={4} mb={2}>
                            <Typography variant="h5" fontWeight={600} sx={{ fontFamily: 'Poppins', }}>
                                Web 3.0
                            </Typography>
                        </Box>

                        {/* Web 3.0 Features */}
                        <Grid2 container spacing={2}>
                            {services2.map((service, index) => (
                                <Grid2 size={{ xs: 12, md: 6 }} key={index}>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInUp}
                                        custom={index + 5}
                                    >
                                        <Box display="flex" alignItems="center">
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={30}
                                                height={30}
                                                style={{ marginRight: 10 }}
                                            />
                                            <Typography variant="body1" fontSize="0.95rem" sx={{ fontFamily: 'Poppins', }}>
                                                {service.title}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box >
    );
}
