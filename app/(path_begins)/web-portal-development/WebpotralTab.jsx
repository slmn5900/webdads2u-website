// import React, { useState } from 'react';
// import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
// import '../seo-company-in-chennai/Seoservice.scss';

// function WebpotralTab() {
//     const [activeKey, setActiveKey] = useState('B2B Portal Development');

//     const renderContent = (title, description, imgSrc) => (
//         <div className="seo-contentbox">
//             <Row className="align-items-center">
//                 <Col md={6} sm={12} xs={12}>
//                     <h2>{title}</h2>
//                     <p>{description}</p>
//                 </Col>
//                 <Col md={6} sm={12} xs={12} className="text-center">
//                     <img alt={title} src={imgSrc} className="img-fluid" />
//                 </Col>
//             </Row>
//         </div>
//     );

//     return (
//         <section className="seotabsec webporttab">
//             <Container>
//                 <div className="text-center mb-4">
//                     <h2>Powerful Web Portal Services For Your Business</h2>
//                 </div>
//                 <Row className="seovar-tab webpotvar">
//                     <Tabs activeKey={activeKey} onSelect={(k) => setActiveKey(k || '')} transition={false} id="webportal-tabs" className="mb-3">
//                         <Tab
//                             eventKey="B2B Portal Development"
//                             title={
//                                 <div style={{ textAlign: 'center' }}>
//                                     <img src="/webdads/images/webportal/b2b-portal-development.webp" alt="B2B Portal Development" />
//                                     <br />
//                                     <h6>
//                                         B2B Portal
//                                         <br />
//                                         Development
//                                     </h6>
//                                 </div>
//                             }
//                         >
//                             {renderContent(
//                                 'B2B Portal Development',
//                                 'Looking for B2B Portal Development services? Look no further! Our expert team specializes in Web Portal Development for B2B purposes. We design and build customized portals to facilitate seamless communication and transactions between businesses. With a focus on user experience and functionality, we ensure that your B2B portal meets the unique needs of your organization. Contact us today to get started!',
//                                 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757328850/webdads2u/web-portal-development/b2b-portal-development.png'
//                             )}
//                         </Tab>

//                         <Tab
//                             eventKey="B2C Portal Development"
//                             title={
//                                 <div style={{ textAlign: 'center' }}>
//                                     <img src="/webdads/images/webportal/b2c-portal-development.png" alt="B2C Portal Development" />
//                                     <br />
//                                     <h6>
//                                         B2C Portal
//                                         <br />
//                                         Development
//                                     </h6>
//                                 </div>
//                             }
//                         >
//                             {renderContent(
//                                 'B2C Portal Development',
//                                 'Need a B2C Web Portal Development solution? We’ve got you covered! Our experienced team specializes in Web Portal Development for B2C purposes. We create custom portals that provide a user-friendly interface for customers to interact with your products or services. From e-commerce platforms to service marketplaces, we ensure your B2C portal is optimized for performance and user satisfaction. Contact us now to discuss your project!',
//                                 '/webdads/images/webportal/b2c.webp'
//                             )}
//                         </Tab>

//                         <Tab
//                             eventKey="Vendor Portal Development"
//                             title={
//                                 <div style={{ textAlign: 'center' }}>
//                                     <img src="/webdads/images/webportal/vendor-portal-development.png" alt="Vendor Portal Development" />
//                                     <br />
//                                     <h6>
//                                         Vendor Portal
//                                         <br />
//                                         Development
//                                     </h6>
//                                 </div>
//                             }
//                         >
//                             {renderContent(
//                                 'Vendor Portal Development',
//                                 'Seeking Vendor Web Portal Development? We’re your solution! Our team excels in Web Portal Development customized for vendors. We create intuitive portals that streamline communication and transactions between your business and its vendors. With our expertise, your vendor portal will enhance efficiency and collaboration. Contact us today to start building your vendor portal!',
//                                 '/webdads/images/webportal/vendor-portal-development.webp'
//                             )}
//                         </Tab>

//                         <Tab
//                             eventKey="eCommerce Portal Development"
//                             title={
//                                 <div style={{ textAlign: 'center' }}>
//                                     <img src="/webdads/images/webportal/ecommerce-portal-development.png" alt="eCommerce Portal Development" />
//                                     <br />
//                                     <h6 style={{ fontSize: '12px' }}>
//                                         eCommerce Portal
//                                         <br />
//                                         Development
//                                     </h6>
//                                 </div>
//                             }
//                         >
//                             {renderContent(
//                                 'eCommerce Portal Development',
//                                 'Our eCommerce web portal development solutions are designed to empower businesses with a wide range of features, including multi-vendor marketplaces, trade portals, auction and bidding platforms, and custom solutions. Leveraging the latest technologies such as AR/VR and AI, we ensure that your portal is equipped with cutting-edge capabilities to drive growth and enhance user experiences. Explore the endless possibilities for your eCommerce venture!',
//                                 '/webdads/images/webportal/eCommerce-Portal.webp'
//                             )}
//                         </Tab>

//                         <Tab
//                             eventKey="Travel Portal Development"
//                             title={
//                                 <div style={{ textAlign: 'center' }}>
//                                     <img src="/webdads/images/webportal/travel-portal-development.png" alt="Travel Portal Development" />
//                                     <br />
//                                     <h6>
//                                         Travel Portal
//                                         <br />
//                                         Development
//                                     </h6>
//                                 </div>
//                             }
//                         >
//                             {renderContent(
//                                 'Travel Portal Development',
//                                 'Embark on a journey with our Travel Web Portal Development services! Our team specializes in Web Portal Development tailored for the travel industry. We create intuitive portals that provide seamless booking experiences for travelers. From flight and hotel reservations to tour packages, our travel portals are designed to enhance efficiency and customer satisfaction. Contact us today to get started!',
//                                 '/webdads/images/webportal/travelportal-development.png'
//                             )}
//                         </Tab>
//                     </Tabs>
//                 </Row>
//             </Container>
//         </section>
//     );
// }

// export default WebpotralTab;

'use client';
import React, { useState } from 'react';
import { Box, Grid2, Typography, Tabs, Tab, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

const tabData = [
    {
        key: 'B2B Portal Development',
        title: 'B2B Portal\nDevelopment',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329990/webdads2u/web-portal-development/icons/b2b-portal-development.png',
        contentTitle: 'B2B Portal Development',
        contentDesc:
            'Looking for B2B Portal Development services? Look no further! Our expert team specializes in Web Portal Development for B2B purposes. We design and build customized portals to facilitate seamless communication and transactions between businesses. With a focus on user experience and functionality, we ensure that your B2B portal meets the unique needs of your organization. Contact us today to get started!',
        contentImg: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757328850/webdads2u/web-portal-development/b2b-portal-development.png'
    },
    {
        key: 'B2C Portal Development',
        title: 'B2C Portal\nDevelopment',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329985/webdads2u/web-portal-development/icons/b2c-portal-development.png',
        contentTitle: 'B2C Portal Development',
        contentDesc:
            'Need a B2C Web Portal Development solution? We’ve got you covered! Our experienced team specializes in Web Portal Development for B2C purposes. We create custom portals that provide a user-friendly interface for customers to interact with your products or services. From e-commerce platforms to service marketplaces, we ensure your B2C portal is optimized for performance and user satisfaction. Contact us now to discuss your project!',
        contentImg: '/webdads/images/webportal/b2c.webp'
    },
    {
        key: 'Vendor Portal Development',
        title: 'Vendor Portal\nDevelopment',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329994/webdads2u/web-portal-development/icons/vendor-portal-development.png',
        contentTitle: 'Vendor Portal Development',
        contentDesc:
            'Seeking Vendor Web Portal Development? We’re your solution! Our team excels in Web Portal Development customized for vendors. We create intuitive portals that streamline communication and transactions between your business and its vendors. With our expertise, your vendor portal will enhance efficiency and collaboration. Contact us today to start building your vendor portal!',
        contentImg: '/webdads/images/webportal/vendor-portal-development.webp'
    },
    {
        key: 'eCommerce Portal Development',
        title: 'eCommerce Portal\nDevelopment',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329981/webdads2u/web-portal-development/icons/ecommerce-portal-development.png',
        contentTitle: 'eCommerce Portal Development',
        contentDesc:
            'Our eCommerce web portal development solutions are designed to empower businesses with a wide range of features, including multi-vendor marketplaces, trade portals, auction and bidding platforms, and custom solutions. Leveraging the latest technologies such as AR/VR and AI, we ensure that your portal is equipped with cutting-edge capabilities to drive growth and enhance user experiences. Explore the endless possibilities for your eCommerce venture!',
        contentImg: '/webdads/images/webportal/eCommerce-Portal.webp'
    },
    {
        key: 'Travel Portal Development',
        title: 'Travel Portal\nDevelopment',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329976/webdads2u/web-portal-development/icons/travel-portal-development.png',
        contentTitle: 'Travel Portal Development',
        contentDesc:
            'Embark on a journey with our Travel Web Portal Development services! Our team specializes in Web Portal Development tailored for the travel industry. We create intuitive portals that provide seamless booking experiences for travelers. From flight and hotel reservations to tour packages, our travel portals are designed to enhance efficiency and customer satisfaction. Contact us today to get started!',
        contentImg: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758520721/webdads2u/web-portal-development/travelportal-development.png'
    }
];

export default function WebportalTab() {
    const [activeTab, setActiveTab] = useState('B2B Portal Development');

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const activeTabContent = tabData.find((tab) => tab.key === activeTab);

    return (
        <Box sx={{ p: { xs: 3.8, md: 6 }, pt: { xs: 0, md: 6 } }}>
            <Container maxWidth="lg">
                {/* <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        color: '#0a1f5f',
                        textAlign: 'center',
                        mb: 6
                    }}
                >
                    Powerful Web Portal Services For Your Business
                </Typography> */}
                <Box textAlign={'center'}>
                    <Title fontxs={'16px'} color={'#0a1f5f'} title={' Powerful Web Portal Services For Your Business'} />
                </Box>

                {/* Tabs */}
                <Tabs value={activeTab} onChange={handleChange} variant="scrollable" scrollButtons="auto" sx={{ mb: 6, justifyContent: 'center', display: 'flex' }}>
                    {tabData.map((tab) => {
                        const isActive = activeTab === tab.key;

                        return (
                            <Tab
                                key={tab.key}
                                value={tab.key}
                                sx={{
                                    minWidth: 120,
                                    textAlign: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    px: 2,
                                    py: 2,
                                    borderRadius: 2,
                                    m: 0.5,
                                    width: { xs: '100%', md: '19%' },
                                    background: isActive ? 'linear-gradient(90deg, #864ad1 0%, #c47be8 61%)' : '#e5ecfe',
                                    color: isActive ? '#060606ff' : '#ffffffff',
                                    '& .MuiTab-wrapper': { flexDirection: 'column' },
                                    transition: 'all 0.3s'
                                }}
                                label={
                                    <>
                                        <Box
                                            component="img"
                                            src={tab.img}
                                            alt={tab.key}
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                mb: 1,
                                                filter: isActive ? 'brightness(0) invert(1)' : 'none',
                                                transition: 'all 0.3s'
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 600,
                                                fontSize: '18px',
                                                lineHeight: 1.6,
                                                whiteSpace: 'pre-line',
                                                color: isActive ? '#fff' : '#000', // 👈 active vs inactive
                                                transition: 'color 0.3s ease'
                                            }}
                                        >
                                            {tab.title}
                                        </Typography>
                                    </>
                                }
                            />
                        );
                    })}
                </Tabs>

                {/* Content */}
                {activeTabContent && (
                    <motion.div key={activeTabContent.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <Grid2 container spacing={4} alignItems={{ xs: 'justifiy', md: 'center' }}>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Box sx={{ textAlign: { xs: 'left', md: 'left' } }}>
                                    {/* <Typography
                                        variant="h5"
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 700,
                                            color: '#0a1f5f',
                                            mb: 3
                                        }}
                                    >
                                        {activeTabContent.contentTitle}
                                    </Typography> */}

                                    <Title color="#0a1f5f" title={activeTabContent.contentTitle} />
                                    {/* <Typography
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: 1.8,
                                            color: '#333'
                                        }}
                                    >
                                        {activeTabContent.contentDesc}
                                    </Typography> */}
                                    <Description Des={activeTabContent.contentDesc} />
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <motion.img
                                        src={activeTabContent.contentImg}
                                        alt={activeTabContent.contentTitle}
                                        initial={{ y: -10 }}
                                        animate={{ y: 10 }}
                                        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
                                        style={{ width: '100%', maxWidth: 500, borderRadius: 8 }}
                                    />
                                </Box>
                            </Grid2>
                        </Grid2>
                    </motion.div>
                )}
            </Container>
        </Box>
    );
}
