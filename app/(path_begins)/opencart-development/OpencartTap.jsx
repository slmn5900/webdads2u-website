// // import React, { useState } from 'react';
// // import { Container, Row, Col } from 'react-bootstrap';
// // import Tab from 'react-bootstrap/Tab';
// // import Tabs from 'react-bootstrap/Tabs';
// // import '../seo-company-in-chennai/Seoservice.scss'
// // function OpencartTap() {
// //         // Set the initial activeKey to match the first tab's eventKey
// //         const [activeKey, setActiveKey] = useState("OpenCart eCommerce Development");
// //     return (
// //         <>
// //           <section className="seotabsec opancarttabsec">
// //             <Container>
// //              <Row className="seovar-tab">
// //                     <Tabs
// //                         activeKey={activeKey}
// //                         onSelect={(k) => setActiveKey(k)}
// //                         transition={false}
// //                         id="noanim-tab-example"
// //                         className="mb-3"
// //                     >
// //                         <Tab
// //                             eventKey="OpenCart eCommerce Development"
// //                             title={
// //                                 <div style={{ textAlign: 'center' }}>
// //                                     <img src="/webdads/images/seo-development/Coppy-writting.svg" alt="SEO Copywriting" />
// //                                     <br />
// //                                     <h6>OpenCart eCommerce<br></br> Development</h6>
// //                                 </div>
// //                             }
// //                         >
// //                             <div  className="seo-contentbox">
// //                                <div className="cont">
// //                                <h2>OpenCart eCommerce Development</h2>
// //                                <p>At the forefront of OpenCart eCommerce solutions, Webdads2u excels in designing, developing, and outsourcing highly interactive solutions. Renowned for cost efficiency and premium quality, we specialize in crafting unique eCommerce shopping carts leveraging OpenCart technology to meet your business needs impeccably. </p>

// //                                </div>
// //                                <div className="cont">
// //                                 <img alt="" src="/webdads/images/opencart/woo-commerce.png"></img>
// //                                </div>
// //                             </div>
// //                         </Tab>

// //                         <Tab
// //                             eventKey="OpenCart Mobile App Development"
// //                             title={
// //                                 <div style={{ textAlign: 'center' }}>
// //                                     <img  src="/webdads/images/seo-development/Call.svg" alt="Call Tracking" />
// //                                     <br />
// //                                     <h6>OpenCart Mobile App <br></br>Development</h6>
// //                                 </div>
// //                             }
// //                         >
// //                             <div  className="seo-contentbox">
// //                                <div className="cont">
// //                                <h2>OpenCart Mobile App Development</h2>
// //                                <p>As a leading OpenCart development firm, we specialize in crafting mobile apps that strike the perfect balance between cutting-edge design, advanced technology, and a deep understanding of your brand identity. Our solutions feature intuitive navigation and are impeccably optimized for both iOS and Android platforms.</p>
// //                               <a href="#">Readmore</a>
// //                                </div>
// //                                <div className="cont">
// //                                 <img alt="" src="/webdads/images/opencart/mobile-app.png"></img>
// //                                </div>
// //                             </div>
// //                         </Tab>

// //                         <Tab
// //                             eventKey="OpenCart Tech Consulting Services"
// //                             title={
// //                                 <div style={{ textAlign: 'center' }}>
// //                                     <img src="/webdads/images/seo-development/Speed.svg" alt="SEO Reporting" />
// //                                     <br />
// //                                     <h6>OpenCart Tech Consulting Services</h6>
// //                                 </div>
// //                             }
// //                         >
// //                             <div  className="seo-contentbox">
// //                                <div className="cont">
// //                                <h2>OpenCart Tech Consulting Services</h2>
// //                                <p>Unlock your business’s potential with OpenCart development. As a premier provider of top-notch OpenCart tech consulting services, we specialize in crafting captivating eCommerce websites. Our expertise spans OpenCart development consulting, theme customization, seamless migrations, and integrations, ensuring global audience reach and market competitiveness.
// //                                </p>

// //                                </div>
// //                                <div className="cont">
// //                                 <img alt="" src="/webdads/images/opencart/tech-consulting.png"></img>
// //                                </div>
// //                             </div>
// //                         </Tab>

// //                         <Tab
// //                             eventKey="OpenCart eCommerce Theme Development"
// //                             title={
// //                                 <div style={{ textAlign: 'center' }}>
// //                                     <img src="/webdads/images/seo-development/Speed.svg" alt="Web Content" />
// //                                     <br />
// //                                     <h6>OpenCart eCommerce Theme Development</h6>
// //                                 </div>
// //                             }
// //                         >
// //                             <div  className="seo-contentbox">
// //                                <div className="cont">
// //                                <h2>OpenCart eCommerce Theme Development</h2>
// //                                <p>Selecting the right OpenCart eCommerce theme is crucial as it influences user attraction and engagement. OpenCart, a top-notch eCommerce platform, excels in delivering efficient and fully functional websites. Our opencart development team assists in theme modification, UI design selection, and crafting SEO-optimized themes, ensuring enhanced online presence and customer satisfaction.
// //                                </p>

// //                                </div>
// //                                <div className="cont">
// //                                 <img alt="" src="/webdads/images/opencart/theme-developmen.png"></img>
// //                                </div>
// //                             </div>
// //                         </Tab>

// //                     </Tabs>
// //                 </Row>
// //             </Container>
// //         </section>
// //         </>
// //     );
// // }

// // export default OpencartTap
// import React, { useState } from 'react';
// import { Container, Grid22, Tabs, Tab, Box, Typography } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// const tabData = [
//     {
//         key: 'OpenCart eCommerce Development',
//         title: (
//             <Box textAlign="center">
//                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1758103046/webdads2u/opencart-development/icons/opencart-e-commerce-development.png" alt="SEO Copywriting" style={{ width: 40, height: 40 }} />
//                 <Typography variant="subtitle2" mt={1}>
//                     OpenCart eCommerce <br /> Development
//                 </Typography>
//             </Box>
//         ),
//         heading: 'OpenCart eCommerce Development',
//         content:
//             'At the forefront of OpenCart eCommerce solutions, Webdads2u excels in designing, developing, and outsourcing highly interactive solutions. Renowned for cost efficiency and premium quality, we specialize in crafting unique eCommerce shopping carts leveraging OpenCart technology to meet your business needs impeccably.',
//         image: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757582142/webdads2u/opencart-development/openccart-ecommerce-developer.png'
//     },
//     {
//         key: 'OpenCart Mobile App Development',
//         title: (
//             <Box textAlign="center">
//                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1758103132/webdads2u/opencart-development/icons/mobile-app-development.png" alt="Call Tracking" style={{ width: 40, height: 40 }} />
//                 <Typography variant="subtitle2" mt={1}>
//                     OpenCart Mobile App <br /> Development
//                 </Typography>
//             </Box>
//         ),
//         heading: 'OpenCart Mobile App Development',
//         content:
//             'As a leading OpenCart development firm, we specialize in crafting mobile apps that strike the perfect balance between cutting-edge design, advanced technology, and a deep understanding of your brand identity. Our solutions feature intuitive navigation and are impeccably optimized for both iOS and Android platforms.',
//         image: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758104958/webdads2u/opencart-development/mobile-app.png'
//     },
//     {
//         key: 'OpenCart Tech Consulting Services',
//         title: (
//             <Box textAlign="center">
//                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1758103269/webdads2u/opencart-development/icons/tech-consulting-services.png" alt="SEO Reporting" style={{ width: 40, height: 40 }} />
//                 <Typography variant="subtitle2" mt={1}>
//                     OpenCart Tech Consulting Services
//                 </Typography>
//             </Box>
//         ),
//         heading: 'OpenCart Tech Consulting Services',
//         content:
//             'Unlock your business’s potential with OpenCart development. As a premier provider of top-notch OpenCart tech consulting services, we specialize in crafting captivating eCommerce websites. Our expertise spans OpenCart development consulting, theme customization, seamless migrations, and integrations, ensuring global audience reach and market competitiveness.',
//         image: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758104972/webdads2u/opencart-development/tech-consulting.png'
//     },
//     {
//         key: 'OpenCart eCommerce Theme Development',
//         title: (
//             <Box textAlign="center">
//                 <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1758103312/webdads2u/opencart-development/icons/e-commerce-theme-development.png" alt="Web Content" style={{ width: 40, height: 40 }} />
//                 <Typography variant="subtitle2" mt={1}>
//                     OpenCart eCommerce Theme Development
//                 </Typography>
//             </Box>
//         ),
//         heading: 'OpenCart eCommerce Theme Development',
//         content:
//             'Selecting the right OpenCart eCommerce theme is crucial as it influences user attraction and engagement. OpenCart, a top-notch eCommerce platform, excels in delivering efficient and fully functional websites. Our opencart development team assists in theme modification, UI design selection, and crafting SEO-optimized themes, ensuring enhanced online presence and customer satisfaction.',
//         image: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758104974/webdads2u/opencart-development/theme-development.png'
//     }
// ];

// const OpencartTap = () => {
//     const [activeKey, setActiveKey] = useState(tabData[0].key);

//     const activeTab = tabData.find((tab) => tab.key === activeKey);

//     return (
//         <Box component="section" sx={{ py: 6, backgroundColor: '#fafafa' }}>
//             <Container>
//                 <Tabs value={activeKey} onChange={(e, newValue) => setActiveKey(newValue)}  variant="scrollable" scrollButtons="auto" sx={{ mb: 4 }}>
//                     {tabData.map((tab) => (
//                         <Tab key={tab.key} value={tab.key} label={tab.title} />
//                     ))}
//                 </Tabs>

//                 <AnimatePresence mode="wait">
//                     <motion.div key={activeKey} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
//                         <Grid22 container spacing={4} alignItems="center">
//                             <Grid22 size={{ xs: 12, md: 6 }}>
//                                 <Typography variant="h4" gutterBottom>
//                                     {activeTab?.heading}
//                                 </Typography>
//                                 <Typography variant="body1" sx={{ color: 'text.secondary' }}>
//                                     {activeTab?.content}
//                                 </Typography>
//                             </Grid22>
//                             <Grid22 size={{ xs: 12, md: 6 }} >
//                                 <motion.img
//                                     src={activeTab?.image}
//                                     alt={activeTab?.heading}
//                                     style={{ width: '100%', maxWidth: 400 }}
//                                     initial={{ scale: 0.9, opacity: 0 }}
//                                     animate={{ scale: 1, opacity: 1 }}
//                                     transition={{ duration: 0.6, ease: 'easeOut' }}
//                                 />
//                             </Grid22>
//                         </Grid22>
//                     </motion.div>
//                 </AnimatePresence>
//             </Container>
//         </Box>
//     );
// };

// export default OpencartTap;
'use client';
import React, { useState } from 'react';
import { Container, Tabs, Tab, Box, Typography, Grid2 } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const tabData = [
    {
        key: 'OpenCart eCommerce Development',
        title: (
            <Box textAlign="center">
                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1758103046/webdads2u/opencart-development/icons/opencart-e-commerce-development.png" alt="OpenCart eCommerce Development" style={{ width: 40, height: 40 }} />
                <Typography variant="subtitle2" mt={1}>
                    OpenCart eCommerce <br /> Development
                </Typography>
            </Box>
        ),
        heading: 'OpenCart eCommerce Development',
        content:
            'At the forefront of OpenCart eCommerce solutions, Webdads2u excels in designing, developing, and outsourcing highly interactive solutions. Renowned for cost efficiency and premium quality, we specialize in crafting unique eCommerce shopping carts leveraging OpenCart technology to meet your business needs impeccably.',
        image: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757582142/webdads2u/opencart-development/openccart-ecommerce-developer.png'
    },
    {
        key: 'OpenCart Mobile App Development',
        title: (
            <Box textAlign="center">
                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1758103132/webdads2u/opencart-development/icons/mobile-app-development.png" alt="OpenCart Mobile App Development" style={{ width: 40, height: 40 }} />
                <Typography variant="subtitle2" mt={1}>
                    OpenCart Mobile App <br /> Development
                </Typography>
            </Box>
        ),
        heading: 'OpenCart Mobile App Development',
        content:
            'As a leading OpenCart development firm, we specialize in crafting mobile apps that strike the perfect balance between cutting-edge design, advanced technology, and a deep understanding of your brand identity. Our solutions feature intuitive navigation and are impeccably optimized for both iOS and Android platforms.',
        image: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758104958/webdads2u/opencart-development/mobile-app.png'
    },
    {
        key: 'OpenCart Tech Consulting Services',
        title: (
            <Box textAlign="center">
                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1758103269/webdads2u/opencart-development/icons/tech-consulting-services.png" alt="OpenCart Tech Consulting Services" style={{ width: 40, height: 40 }} />
                <Typography variant="subtitle2" mt={1}>
                    OpenCart Tech Consulting Services
                </Typography>
            </Box>
        ),
        heading: 'OpenCart Tech Consulting Services',
        content:
            'Unlock your business’s potential with OpenCart development. As a premier provider of top-notch OpenCart tech consulting services, we specialize in crafting captivating eCommerce websites. Our expertise spans OpenCart development consulting, theme customization, seamless migrations, and integrations, ensuring global audience reach and market competitiveness.',
        image: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758104972/webdads2u/opencart-development/tech-consulting.png'
    },
    {
        key: 'OpenCart eCommerce Theme Development',
        title: (
            <Box textAlign="center">
                <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1758103312/webdads2u/opencart-development/icons/e-commerce-theme-development.png" alt="OpenCart Theme Development" style={{ width: 40, height: 40 }} />
                <Typography variant="subtitle2" mt={1}>
                    OpenCart eCommerce Theme Development
                </Typography>
            </Box>
        ),
        heading: 'OpenCart eCommerce Theme Development',
        content:
            'Selecting the right OpenCart eCommerce theme is crucial as it influences user attraction and engagement. OpenCart, a top-notch eCommerce platform, excels in delivering efficient and fully functional websites. Our opencart development team assists in theme modification, UI design selection, and crafting SEO-optimized themes, ensuring enhanced online presence and customer satisfaction.',
        image: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758104974/webdads2u/opencart-development/theme-development.png'
    }
];

const OpencartTap = () => {
    const [activeKey, setActiveKey] = useState(tabData[0].key);
    const activeTab = tabData.find((tab) => tab.key === activeKey);

    return (
        <Box component="section" sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#fafafa' }} className="opancarttabsec">
            <Container>
                <Tabs
                    value={activeKey}
                    onChange={(e, newValue) => setActiveKey(newValue)}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        mb: 4,
                        '& .MuiTab-root': {
                            minWidth: { xs: '100%', sm: 'auto' },
                            flex: { xs: '1 0 100%', sm: '1 0 24%' },
                            textTransform: 'none',
                            borderRadius: 2,
                            mx: { sm: 0.5 },
                            backgroundColor: '#fff',
                            transition: '0.3s'
                        },
                        '& .Mui-selected': {
                            color: '#fff !important',
                            backgroundImage: 'linear-gradient(60deg, #e81613 0%, #ffc976 100%)'
                        }
                    }}
                >
                    {tabData.map((tab) => (
                        <Tab key={tab.key} value={tab.key} label={tab.title} />
                    ))}
                </Tabs>

                <AnimatePresence mode="wait">
                    <motion.div key={activeKey} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                        <Grid2 container spacing={4} alignItems="center">
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Typography variant="h4" gutterBottom color="#0A1F5F">
                                    {activeTab?.heading}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    {activeTab?.content}
                                </Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }} textAlign="center">
                                <motion.img
                                    src={activeTab?.image}
                                    alt={activeTab?.heading}
                                    style={{ width: '100%', maxWidth: 400 }}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                />
                            </Grid2>
                        </Grid2>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </Box>
    );
};

export default OpencartTap;
