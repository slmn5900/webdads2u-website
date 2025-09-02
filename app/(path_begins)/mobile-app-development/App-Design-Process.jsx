import React, { useState } from 'react';
<<<<<<< HEAD
import { Tab, Tabs } from 'react-bootstrap';

const ResponsiveTabs = () => {
    const [key, setKey] = useState('tab1');

    return (
        <section className="ResponsiveTabs-main">
            <div className="container pt-2 pb-2">
                <div className="row justify-content-center text-center ResponsiveTabs">
                    <div className="col-sm-12 col-lg-12">
                        <h2 className="appdev-head">Mobile App Design Process</h2>
                        <p className="appdev-para">
                            IOS and Android platforms have their own unique characteristics, which must be taken into account when creating mobile apps. Furthermore, the design requirements are constantly evolving. Applications that have an outdated,
                            old-fashioned interface, with extremely inconvenient controls and poor graphics are doomed to fail.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container Responsive-Tabs">
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 justify-content-between w-100">
                    <Tab eventKey="tab1" title="Initial Analysis">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <h2>Initial Analysis</h2>
                                <p>It starts with understanding and analyzing your requirements. Our priority is to offer viable solutions through the technical expertise of our developers.</p>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img src="webdads/images/mobile-app-development/Initial-Analysis.png" alt="Initial-Analysis" className="img-fluid" />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="tab2" title="Designing">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <img src="webdads/images/mobile-app-development/Design-l.png" alt="Design-l" className="img-fluid" />
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <h2>Designing</h2>
                                <p>Our qualified team of experts creates wireframes and blueprints to give a slight idea of the overall appearance of the application in the first place.</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="tab3" title="Development">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <h2>Development</h2>
                                <p>After the design is complete, we begin end-to-end development using elements of various technologies & tools.</p>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img src="webdads/images/mobile-app-development/Development.png" alt="Development" className="img-fluid" />
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="tab4" title="Testing and Deployment">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <img src="webdads/images/mobile-app-development/Testing-and-Deployment.png" alt="Testing-and-Deployment" className="img-fluid" />
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <h2>Testing and Deployment</h2>
                                <p>
                                    To ensure reliable operation, security, and bug-free functionality, we carry out rigorous testing. Additionally, perform user acceptance testing (UAT) to guarantee flawless performance, and we prepare the mobile
                                    app for use by deploying it on the relevant app store or your server.
                                </p>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="tab5" title="Post Deployment Maintenance">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <h2>Post Deployment Maintenance</h2>
                                <p>We provide end-to-end support post-deployment of your application. It is to ensure hassle-free app functionality as per the requirement.</p>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img src="webdads/images/mobile-app-development/Post-Deployment-Maintenance.png" alt="Post-Deployment-Maintenance" className="img-fluid" />
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>
=======
import { Box, Container, Grid2, Typography, Tabs, Tab } from '@mui/material';
import Description from '../../../components/ui/banner/Description';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

const ResponsiveTabs = () => {
    const { pagedata } = useContext(MenuContext);
    const title = pagedata?.mobile_design_section?.title;
    const description = pagedata?.mobile_design_section?.description;
    const tabData = pagedata?.mobile_design_section?.tabData || [];
    console.log(tabData, 'tabData');

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                bgcolor: 'rgb(244, 252, 254)',
                py: { xs: 4, md: 8 }
            }}
        >
            <Container>
                {/* Heading */}
                <Box textAlign="center" mb={4}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#262250',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 600,
                            fontSize: { xs: '24px', md: '30px' },
                            mb: 2
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: '#000',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: { xs: '14px', md: '16px' },
                            fontWeight: 400,
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        {description}
                    </Typography>
                </Box>

                {/* Tabs */}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable" // ✅ allows scroll
                    scrollButtons="auto" // ✅ shows buttons only when needed
                    allowScrollButtonsMobile
                    // 🔹 makes all tabs equal width
                    sx={{
                        mb: 4,
                        '& .MuiTab-root': {
                            // flex: 1, // 🔹 force equal width
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            fontWeight: 500,
                            textTransform: 'none',
                            borderRadius: '10px',
                            backgroundColor: '#e5ecfe',
                            color: '#000',
                            mx: 0.5,
                            transition: '0.3s',
                            minHeight: '48px'
                        },
                        '& .MuiTab-root:hover': {
                            backgroundImage: 'linear-gradient(90deg, #59016e 0%, #c30002 100%)',
                            color: '#fff'
                        },
                        '& .Mui-selected': {
                            backgroundImage: 'linear-gradient(90deg, #59016e 0%, #c30002 100%)',
                            color: '#fff !important'
                        },
                        '& .MuiTabs-flexContainer': {
                            gap: 1 // 🔹 equal spacing between tabs
                        },
                        '& .MuiTabs-indicator': {
                            display: 'none' // 🔹 hide underline since you're using gradient bg
                        }
                    }}
                >
                    {tabData.map((tab, index) => (
                        <Tab key={index} label={tab.label} />
                    ))}
                </Tabs>

                {/* Tab Content */}
                {tabData.map((tab, index) =>
                    value === index ? (
                        <Box
                            key={index}
                            sx={{
                                boxShadow: '7px 5px 30px 0px rgba(0,0,0,0.12)',
                                p: 3,
                                borderRadius: '10px',
                                transition: 'all 0.3s'
                            }}
                        >
                            <Grid2 container spacing={4} alignItems="center" direction={tab.reverse ? 'row-reverse' : 'row'}>
                                <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                                    <Box
                                        component="img"
                                        src={tab.img}
                                        alt={tab.title}
                                        sx={{
                                            display: 'block',
                                            mx: 'auto',
                                            borderRadius: 2,
                                            animation: 'mover 1s infinite alternate',
                                            '@keyframes mover': {
                                                '0%': { transform: 'translateY(0)' },
                                                '100%': { transform: 'translateY(-10px)' }
                                            }
                                        }}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontSize: '35px',
                                            color: '#0a1f5f',
                                            fontWeight: 700,
                                            fontFamily: 'Poppins, sans-serif',
                                            mb: 2
                                        }}
                                    >
                                        {tab.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            color: '#000',
                                            fontWeight: 400,
                                            fontFamily: 'Poppins, sans-serif'
                                        }}
                                    >
                                        {tab.desc}
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </Box>
                    ) : null
                )}
            </Container>
        </Box>
>>>>>>> a0d19cc (Initial commit)
    );
};

export default ResponsiveTabs;
