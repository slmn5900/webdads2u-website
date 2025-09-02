<<<<<<< HEAD

=======
>>>>>>> a0d19cc (Initial commit)
// import React from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import "../style/home//project.css"; // Make sure this path is correct
// import Image from "next/image";
// import image1 from "../public/webdads/images/home/projectimage/mockup_21318e73bc.avif";
// import Link from "next/link";
// // import Digital from "../Digital/page";

// export default function Project() {
//   return (
//     <>
//       <section >

//         <div   style={{
//           background: "linear-gradient(90deg, #871752 1%, #262250 44%)",
//           // maxHeight: "750px",
//         }}
//         className="project-layout">

//         <div className="container">
//           <div className="text-white text-center fadeInUp pt-5">
//             <h2 className="fw-bold p-3">
//               Web Designing and Web Development Company in Chennai
//             </h2>

//             <p className="paragraph-web m-auto">
//               <span className="fw-bold">Webdads2u Pvt. Ltd.</span> is the
//               leading web designing and web development company in Chennai,
//               India. We provide custom is the leading{" "}
//               <span className="fw-bold">Web Design and Web Development</span>
//               services that help you make a positive and lasting impression on
//               your customers. Our experienced web developers ensure that your
//               website stands the test of time and is secure, user friendly and
//               visually appealing. With our web design and development services,
//               you can take your business to new heights.
//             </p>
//           </div>
//           <div className="mt-4">
//             <Row>
//               <Col sm={12} lg={4} md={4 }>
//                 <div className="text-white paragraph-webs fadeInUp">
//                   <h5>PHP Website Development</h5>
//                   <p>
//                     Webdads2u Pvt. Ltd., a leading web designing and web
//                     development company in Chennai, specializes in bespoke web
//                     development services, notably excelling in PHP website
//                     development. Our adept team ensures the creation of
//                     high-performance, tailored websites, delivering seamless
//                     integration and reliable maintenance. With a commitment to
//                     excellence, we prioritize client satisfaction, offering
//                     innovative solutions that elevate online presence and
//                     business success.
//                   </p>
//                 </div>
//               </Col>
//               <Col sm={12} lg={4} md={4}>
//                 <div className="text-white paragraph-webs fadeInUp">
//                   <h5>React js Website Development</h5>
//                   <p>
//                     Webdads2u Pvt. Ltd. stands as a seasoned web designing and
//                     web development company in Chennai, India, specializing in
//                     top-tier React JS website development services. We excel in
//                     crafting high-caliber, cost-efficient React JS web solutions
//                     tailored for both businesses and individuals. Our commitment
//                     revolves around delivering cutting-edge, user-centric
//                     websites finely tuned to meet your precise requirements.
//                     With a proficient team of React JS developers, we ensure a
//                     seamless and hassle-free development journey.
//                   </p>
//                 </div>
//               </Col>
//               <Col sm={12} md={4} lg={4}>
//                 <div className="text-white paragraph-webs fadeInUp">
//                   <h5>WordPress Website</h5>
//                   <p>
//                     Webdads2u Pvt. Ltd. stands as a premier web designing and
//                     web development company in Chennai, India, recognized for
//                     its prowess in crafting bespoke, secure, and high-performing
//                     custom WordPress websites. Our adept team of WordPress
//                     developers boasts extensive experience in tailoring
//                     WordPress themes, excelling in plugin development, and
//                     executing various custom development tasks. We take pride in
//                     offering comprehensive WordPress development services,
//                     meticulously designed to cater to the unique requirements of
//                     our esteemed clients.
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <Container className="mt-3">
//                   <div className="text-center image-project-layout fadeInUp">
//                     <Image src={image1} width={848} height={414} alt="Project Image"/>
//                   </div>
//                 </Container>
//               </Col>
//             </Row>
//           </div>
//         </div>
//         </div>
//         <div className="text-center" style={{marginTop:"20px"}}>
//           <Link href="/website-development">
//             <Button
//               className="border rounded-5 fadeInUp"
//               style={{
//                 background: "linear-gradient(90deg, #871752 0%, #262250 50%)",
//                 padding: "18px 50px",
//               }}
//             >
//               Read More
//             </Button>
//           </Link>
//         </div>

//         <div>
//           {/* <Container> */}
//             {/* <Digital /> */}
//           {/* </Container> */}
//         </div>
//       </section>
//     </>
//   );
// }

// 'use client';

// import React from 'react';
// import { Grid2, Container, Typography, Button, Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import image1 from '../public/webdads/images/home/projectimage/mockup_21318e73bc.avif';

// // Animation Variant
// const fadeInUp = {
//   hidden: { opacity: 0, y: 10 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// };

// export default function Project() {
//   return (
//     <Box component="section" sx={{ background: 'linear-gradient(90deg, #871752 1%, #262250 44%)', height: "175vh", pb: 5 }}>
//       <Container className="project-layout">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <Box textAlign="center" color="white" pt={5}>
//             <Typography variant="h4" fontWeight="bold" p={3}>
//               Web Designing and Web Development Company in Chennai
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{ maxWidth: '900px', mx: 'auto', fontSize: '18px', lineHeight: 1.8 }}
//             >
//               <span style={{ fontWeight: 'bold' }}>Webdads2u Pvt. Ltd.</span> is the
//               leading web designing and web development company in Chennai, India. We
//               provide custom <span style={{ fontWeight: 'bold' }}>Web Design and Web Development</span>{' '}
//               services that help you make a positive and lasting impression on your
//               customers. Our experienced web developers ensure that your website stands
//               the test of time and is secure, user-friendly, and visually appealing. With
//               our web design and development services, you can take your business to new
//               heights.
//             </Typography>
//           </Box>
//         </motion.div>

//         <Box mt={6}>
//           <Grid2 container spacing={4}>
//             {[
//               {
//                 title: 'PHP Website Development',
//                 description:
//                   'Webdads2u Pvt. Ltd., a leading web designing and web development company in Chennai, specializes in bespoke web development services, notably excelling in PHP website development. Our adept team ensures the creation of high-performance, tailored websites, delivering seamless integration and reliable maintenance.',
//               },
//               {
//                 title: 'React js Website Development',
//                 description:
//                   'Webdads2u Pvt. Ltd. stands as a seasoned web designing and web development company in Chennai, India, specializing in top-tier React JS website development services. We excel in crafting high-caliber, cost-efficient React JS web solutions tailored for both businesses and individuals.',
//               },
//               {
//                 title: 'WordPress Website',
//                 description:
//                   'Webdads2u Pvt. Ltd. stands as a premier web designing and web development company in Chennai, India, recognized for its prowess in crafting bespoke, secure, and high-performing custom WordPress websites. Our adept team boasts extensive experience in tailoring WordPress themes, plugin development, and more.',
//               },
//             ].map((item, index) => (
//               <Grid2 size={{ xs: 12, md: 4 }}  key={index}>
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                   custom={index}
//                 >
//                   <Box color="white" sx={{ px: 2 }}>
//                     <Typography variant="h6" fontWeight="bold" gutterBottom>
//                       {item.title}
//                     </Typography>
//                     <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
//                       {item.description}
//                     </Typography>
//                   </Box>
//                 </motion.div>
//               </Grid2>
//             ))}
//           </Grid2>
//         </Box>

//         <motion.div
//           className="text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//           custom={4}
//         >
//           <Box mt={8} textAlign="center" >
//             <Image src={image1} width={848} height={414} alt="Project Image" style={{ objectFit: "contain" }} />
//           </Box>
//         </motion.div>
//       </Container>

//       <Box textAlign="center"  >
//         <Link href="/website-development" passHref>
//           <Button
//             variant="contained"
//             sx={{
//               borderRadius: 5,
//               px: 5,
//               py: 1.8,
//               mt: 2,
//               background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
//               '&:hover': {
//                 background: 'linear-gradient(90deg, #871752 10%, #262250 90%)',
//               },
//             }}
//           >
//             Read More
//           </Button>
//         </Link>
//       </Box>
//     </Box>
//   );
// }
'use client';

import React from 'react';
import { Grid2, Container, Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '../public/webdads/images/home/projectimage/mockup_21318e73bc.avif';
<<<<<<< HEAD
import "./styles.scss"

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Project() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const projects = [
    {
      title: 'PHP Website Development',
      description:
        'Webdads2u Pvt. Ltd., a leading web designing and web development company in Chennai, specializes in bespoke web development services, notably excelling in PHP website development. Our adept team ensures the creation of high-performance, tailored websites, delivering seamless integration and reliable maintenance. With a commitment to excellence, we prioritize client satisfaction, offering innovative solutions that elevate online presence and business success.',
    },
    {
      title: 'React js Website Development',
      description:
        'Webdads2u Pvt. Ltd.stands as a seasoned web designing and web development company in Chennai, India, specializing in top-tier React JS website development services. We excel in crafting high-caliber, cost-efficient React JS web solutions tailored for both businesses and individuals. Our commitment revolves around delivering cutting-edge, user-centric websites finely tuned to meet your precise requirements. With a proficient team of React JS developers, we ensure a seamless and hassle-free development journey.',
    },
    {
      title: 'WordPress Website',
      description:
        'Webdads2u Pvt. Ltd. stands as a premier web designing and web development company in Chennai, India, recognized for its prowess in crafting bespoke, secure, and high-performing custom WordPress websites. Our adept team of WordPress developers boasts extensive experience in tailoring WordPress themes, excelling in plugin development, and executing various custom development tasks. We take pride in offering comprehensive WordPress development services, meticulously designed to cater to the unique requirements of our esteemed clients.',
    },
  ];

  return (
    <Box
      component="section"
      className='Web-Designing-images'
      sx={{
        background: 'linear-gradient(90deg, #871752 1%, #262250 44%)',
        pt: { xs: 6, sm: 8, md: 8 },
        pb: { xs: 6, sm: 8, md: 1 },
        color: 'white',
        height: "auto",
        // maxHeight: {
        //   xs: '100%',
        //   sm: '100%',
        //   md: 'calc(80vh - -400px)',   // or adjust as needed
        //   lg: 'calc(51vh - -160px)',
        //   xl: 'calc(51vh - -190px)'
        // }

      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box sx={{ textAlign: { sx: "left", md: "center" } }} mx="auto" px={1}>
            <Typography
              variant={isSmDown ? 'h6' : 'h4'}
              fontWeight="bold"
              gutterBottom

              sx={{ pb: 1, fontSize: { md: "25px" }, fontFamily: "Poppins" }}
            >
              Web Designing and Web Development Company in Chennai
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: isSmDown ? '1rem' : '0.75rem', lineHeight: 1.8, fontFamily: "Poppins" }}
            >
              <span style={{ fontWeight: 'bold' }}>Webdads2u Pvt. Ltd.</span> is the
              leading web designing and web development company in Chennai, India. We
              provide custom <span style={{ fontWeight: 'bold' }}>Web Design and Web Development</span>{' '}
              services that help you make a positive and lasting impression on your
              customers. Our experienced web developers ensure that your website stands
              the test of time and is secure, user-friendly, and visually appealing. With
              our web design and development services, you can take your business to new
              heights.
            </Typography>
          </Box>
        </motion.div>

        <Box mt={{ xs: 5, md: 8 }}>
          <Grid2 container spacing={{ xs: 3, md: 4 }}>
            {projects.map((item, index) => (
              <Grid2 size={{
                xs: 12, sm: 4,
              }} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Box sx={{ px: { xs: 1, sm: 2, md: 0 } }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: "Poppins" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.7, fontFamily: "Poppins", fontSize: "12px", textAlign: "start" }}>
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={4}
        >
          <Box
            mt={{ xs: 6, md: 0 }}
            textAlign="center"
            px={{ xs: 2, sm: 6 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Image
              src={image1}
              alt="Project Image"
              style={{ width: 848, height: 414, objectFit: 'cover', borderRadius: 8 }}
              priority={true}
            />
          </Box>
        </motion.div>
      </Container>

      <Box textAlign="center" mt={{ xs: 4, md: 1 }}>
        <Link href="/website-development" passHref legacyBehavior>
          <Button
            variant="contained"
            sx={{
              borderRadius: 15,
              px: { xs: 4, sm: 5 },
              py: 1.8,
              fontWeight: "500",
              background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(90deg, #871752 10%, #262250 90%)',
              },
              fontFamily: "Poppins"
            }}
          >
            Read More
          </Button>
        </Link>
      </Box>
    </Box>
  );
=======
import './styles.scss';

// Animation Variant
const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};

export default function Project() {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

    const projects = [
        {
            title: 'PHP Website Development',
            description:
                'Webdads2u Pvt. Ltd., a leading web designing and web development company in Chennai, specializes in bespoke web development services, notably excelling in PHP website development. Our adept team ensures the creation of high-performance, tailored websites, delivering seamless integration and reliable maintenance. With a commitment to excellence, we prioritize client satisfaction, offering innovative solutions that elevate online presence and business success.'
        },
        {
            title: 'React js Website Development',
            description:
                'Webdads2u Pvt. Ltd.stands as a seasoned web designing and web development company in Chennai, India, specializing in top-tier React JS website development services. We excel in crafting high-caliber, cost-efficient React JS web solutions tailored for both businesses and individuals. Our commitment revolves around delivering cutting-edge, user-centric websites finely tuned to meet your precise requirements. With a proficient team of React JS developers, we ensure a seamless and hassle-free development journey.'
        },
        {
            title: 'WordPress Website',
            description:
                'Webdads2u Pvt. Ltd. stands as a premier web designing and web development company in Chennai, India, recognized for its prowess in crafting bespoke, secure, and high-performing custom WordPress websites. Our adept team of WordPress developers boasts extensive experience in tailoring WordPress themes, excelling in plugin development, and executing various custom development tasks. We take pride in offering comprehensive WordPress development services, meticulously designed to cater to the unique requirements of our esteemed clients.'
        }
    ];

    return (
        <Box
            component="section"
            className="Web-Designing-images"
            sx={{
                background: 'linear-gradient(90deg, #871752 1%, #262250 44%)',
                pt: { xs: 6, sm: 4, md: 8 },
                pb: { xs: 6, sm: 4, md: 1 },
                color: 'white',
                height: 'auto',
                maxHeight: {
                    xs: '100%',
                    sm: '100%',
                    md: 'calc(80vh - -400px)', // or adjust as needed
                    lg: 'calc(51vh - -550px)',
                    xl: 'calc(51vh - -450px)'
                }
            }}
        >
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <Box sx={{ textAlign: { sx: 'left', md: 'center' } }} mx="auto" px={1}>
                        <Typography variant={isSmDown ? 'h6' : 'h4'} fontWeight="bold" gutterBottom sx={{ pb: 1, fontSize: { md: '25px' }, fontFamily: 'Poppins' }}>
                            Web Designing and Web Development Company in Chennai
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: isSmDown ? '1rem' : '0.75rem', lineHeight: 1.5, fontFamily: 'Poppins', textAlign: { xs: 'left', md: 'center' } }}>
                            <span style={{ fontWeight: 'bold' }}>Webdads2u Pvt. Ltd.</span> is the leading web designing and web development company in Chennai, India. We provide custom{' '}
                            <span style={{ fontWeight: 'bold' }}>Web Design and Web Development</span> services that help you make a positive and lasting impression on your customers. Our experienced web developers ensure that your website stands the
                            test of time and is secure, user-friendly, and visually appealing. With our web design and development services, you can take your business to new heights.
                        </Typography>
                    </Box>
                </motion.div>

                <Box mt={{ xs: 5, md: 8 }}>
                    <Grid2 container spacing={{ xs: 3, md: 4 }}>
                        {projects.map((item, index) => (
                            <Grid2
                                size={{
                                    xs: 12,
                                    sm: 4
                                }}
                                key={index}
                            >
                                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={index}>
                                    <Box sx={{ px: { xs: 1, sm: 2, md: 0 } }}>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Poppins' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ lineHeight: 1.5, fontFamily: 'Poppins', textAlign: { xs: 'left', sm: 'left', md: 'justify' }, fontSize: isSmDown ? '1rem' : '0.75rem' }}>
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={4}>
                    <Box
                        mt={{ xs: 6, md: 0 }}
                        textAlign="center"
                        px={{ xs: 2, sm: 6 }}
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '@media (min-width: 1245px)': {
                                position: 'relative',
                                top: 60
                            }
                        }}
                    >
                        <Image src={image1} alt="Project Image" style={{ width: 848, height: 414, objectFit: 'cover', borderRadius: 8 }} priority={true} />
                    </Box>
                </motion.div>
            </Container>

            <Box textAlign="center" mt={{ xs: 4, md: 1 }}>
                <Link href="/website-development" passHref legacyBehavior>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 15,
                            px: { xs: 4, sm: 5 },
                            py: 1.8,
                            fontWeight: '500',
                            background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            textTransform: 'none',

                            '&:hover': {
                                background: 'linear-gradient(90deg, #871752 10%, #262250 90%)'
                            },
                            fontFamily: 'Poppins',
                            '@media (min-width: 1245px)': {
                                position: 'relative',
                                top: 40
                            },
                            '@media (max-width: 425px)': {
                                backgroundColor: 'white',
                                color: 'white',
                                border:'2px solid white'
                            }
                        }}
                    >
                        Read More
                    </Button>
                </Link>
            </Box>
        </Box>
    );
>>>>>>> a0d19cc (Initial commit)
}
