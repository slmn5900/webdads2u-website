'use client';
import React, { useContext, useEffect } from 'react';
import { Box, Grid2, Button, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
// import WebpotralTab from './WebpotralTab';
// import WebportalFaq from './WebportalFaq';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import { MenuContext } from '../../../layout/context/menucontext';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import WebportalTab from './WebpotralTab';
import Lookingwebsitemaintenance from '../website-maintenance/Looking-Website-Maintenance';
import NeedProposal from './NeedProposal';

function WebportalHero() {
    const { setPagedata, setHeader_section, setSlider_section, setCompany_section, setDesign_section, setList_section, setAmazing_section, setAmazingcard_section, setWork_section, setChoose_section, setConsultation_section, setQna_section } =
        useContext(MenuContext);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/web-portal-development.json');
                const data = await response.json();
                setPagedata(data);
                setHeader_section(data.header_section);
                setSlider_section(data.slider_section);
                setCompany_section(data.company_section);
                setDesign_section(data.design_section);
                setList_section(data.list_section);
                setAmazing_section(data.amazing_section);
                setAmazingcard_section(data.amazingcard_section);
                setWork_section(data.work_section);
                setChoose_section(data.choose_section);
                setConsultation_section(data.consultation_section);
                setQna_section(data.qna_section);
            } catch (error) {
                console.log(error, 'error');
            }
        };
        getdata();
    }, []);

    const features = [
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329972/webdads2u/web-portal-development/icons/web-portal-designing.png',
            title: 'Web Portal Designing',
            desc: 'Each portal is crafted after brainstorming. Our UX/UI designers provide modern and responsive web portal designs that are compatible with all browsers and devices.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329967/webdads2u/web-portal-development/icons/web-portal-migration.png',
            title: 'Web Portal Migration',
            desc: 'Do you have plans to move your web portal from an old technology to a new one? Get top-quality web portal migration services when you hire web portal developers from Fexle.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329963/webdads2u/web-portal-development/icons/portal-maintenance.png',
            title: 'Portal Maintenance',
            desc: 'Our team of dedicated support and maintenance professionals are always prepared to deploy their expertise. Calling, emailing, or pinging us on Skype is all it takes to connect with us instantly.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329959/webdads2u/web-portal-development/icons/payment-gateway.png',
            title: 'Payment Gateway',
            desc: 'Our highly secure payment technologies can be easily integrated into your web portal by our talented and skilled developers, resulting in a more seamless payment process.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329954/webdads2u/web-portal-development/icons/seo-friendly.png',
            title: 'SEO Friendly',
            desc: 'Our solutions are designed to enhance web portals by digitizing content, encrypting metadata, improving search capabilities, indexing quickly, and more.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329950/webdads2u/web-portal-development/icons/easy-collaboration.png',
            title: 'Easy Collaboration',
            desc: 'Integrating forums, blogs, and messaging platforms into your web portal is a way to make your web portal more interactive and interesting for your customers.'
        }
    ];

    const portalDevelopments = [
        { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329945/webdads2u/web-portal-development/icons/portal-development-expertise.png', title: 'Portal Development' },
        { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329941/webdads2u/web-portal-development/icons/wide-range-of-services.png', title: 'Wide-Range of Services' },
        { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329937/webdads2u/web-portal-development/icons/technology-expertise.png', title: 'Technology Expertise' },
        { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329932/webdads2u/web-portal-development/icons/affordable-packages.png', title: 'Affordable Packages' },
        { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329928/webdads2u/web-portal-development/icons/customer-satisfaction.png', title: 'Customer Satisfaction' },
        { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329924/webdads2u/web-portal-development/icons/web-portal-round-the-clock.png', title: 'Round The Clock Support' },
        { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329921/webdads2u/web-portal-development/icons/tailor-made-solutions.png', title: 'Reliable Solutions' },
        { img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757329921/webdads2u/web-portal-development/icons/reliable-solutions.png', title: 'Tailor-Made Solutions' }
    ];

    // Motion Variants
    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <>
            <Banner />
            <ClientLogoSlider />
            {/* Hero Section */}
            <Box sx={{ py: { xs: 0, md: 5 }, px: { xs: 2, md: 0 } }}>
                <Container maxWidth="lg">
                    <motion.div initial="hidden" animate="visible" variants={container}>
                        <motion.div variants={item}>
                            <Box textAlign="center" mb={5}>
                                <Typography variant="h2" sx={{ fontWeight: 600, color: '#0A1F5F', fontSize: { xs: 20, md: 25 } }}>
                                    Web Portal Development Solutions Company in Chennai
                                </Typography>
                                <Typography sx={{ mt: 2, fontSize: 16, color: '#5A5A5A', lineHeight: '28px' }}>
                                    Looking for a premier Web Portal Development solutions company in Chennai? Look no further! We specialize in crafting tailored web portals to elevate your online presence...
                                </Typography>
                            </Box>
                        </motion.div>

                        <motion.div variants={item}>
                            <Box textAlign="center" mb={5}>
                                <Typography variant="h2" sx={{ fontSize: { xs: 20, md: 25 } }}>
                                    Online Portal Development Solutions
                                </Typography>
                            </Box>
                        </motion.div>

                        <Grid2 container spacing={4} alignItems="center">
                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <motion.img
                                    src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757328858/webdads2u/web-portal-development/online-portal-development-solutions.png"
                                    alt="Online Portal"
                                    style={{ width: '100%' }}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <motion.div variants={item}>
                                    <Typography sx={{ mb: 2 }}>Welcome to our Web Portal Development Solutions page! At Webdads2u, we specialize in crafting custom web portals...</Typography>
                                    <Typography sx={{ mb: 3 }}>Our comprehensive approach to Web Portal Development ensures that your portal is not only aesthetically pleasing...</Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#6243A4',
                                            color: '#fff',
                                            px: 4,
                                            py: 1.5,
                                            fontWeight: 600,
                                            '&:hover': {
                                                background: 'linear-gradient(90deg, #262250 0%, #871752 100%)'
                                            }
                                        }}
                                    >
                                        Connect With Experts Now!
                                    </Button>
                                </motion.div>
                            </Grid2>
                        </Grid2>
                    </motion.div>
                </Container>
            </Box>

            <Lookingwebsitemaintenance Title={'Web Portal Development'} bg={'#96004E'} />

            <WebportalTab />
            {/* Features Section */}
            {/* <Box>
                <Container maxWidth="lg">
                    <Box textAlign="center" mt={5} mb={5}>
                        <Typography variant="h2" sx={{ fontSize: { xs: 20, md: 25 } }}>
                            Significant Features Of Web Portals Development
                        </Typography>
                    </Box>

                    <motion.div variants={container} initial="hidden" animate="visible">
                        <Grid2 container spacing={2}>
                            {features.map((feature, idx) => (
                                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                                    <motion.div variants={item}>
                                        <Box sx={{ textAlign: 'center', mb: 3, position: 'relative' }}>
                                            <Box
                                                sx={{
                                                    width: 90,
                                                    height: 90,
                                                    borderRadius: '50%',
                                                    border: '2px solid #96004E',
                                                    backgroundColor: '#fff',
                                                    mx: 'auto',
                                                    mb: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <img src={feature.img} alt={feature.title} style={{ width: '60%', height: '60%' }} />
                                            </Box>
                                            <Box
                                                sx={{
                                                    border: '2px solid #96004E',
                                                    borderRadius: 2,
                                                    p: 3,
                                                    pt: 6,
                                                    height: '300px',
                                                    transition: 'all 0.3s',
                                                    '&:hover': {
                                                        backgroundColor: '#96004E',
                                                        borderRadius: '10px 50px 10px 50px',
                                                        '& h3, & p': { color: '#fff' },
                                                        '& img': { filter: 'brightness(0) invert(1)' }
                                                    }
                                                }}
                                            >
                                                <Typography variant="h3" sx={{ mb: 1, color: '#0A1F5F', fontSize: { xs: 20, md: 20 } }}>
                                                    {feature.title}
                                                </Typography>
                                                <Typography sx={{ color: '#5A5A5A' }}>{feature.desc}</Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                </Grid2>
                            ))}
                        </Grid2>
                    </motion.div>
                </Container>
            </Box> */}

            {/* Portal Development Boxes */}
            <Box sx={{ py: 4 }}>
                <Container maxWidth="lg">
                    <Box textAlign="center" mb={5}>
                        <Typography variant="h2" sx={{ fontSize: { xs: 20, md: 25 } }}>
                            Why Choose Webdads2u For Web Portal Development?
                        </Typography>
                    </Box>

                    <motion.div variants={container} initial="hidden" animate="visible">
                        <Grid2 container spacing={2}>
                            {portalDevelopments.map((item, idx) => (
                                <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                                    <motion.div variants={item} whileHover={{ scale: 1.05 }}>
                                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                                            <Box
                                                sx={{
                                                    border: '1px dashed #96004E',
                                                    borderRadius: 2,
                                                    p: 3,
                                                    transition: '0.75s',
                                                    boxShadow: '0 2px 0 rgba(0,0,0,0.3)',
                                                    '&:hover': {
                                                        backgroundColor: '#96004E',
                                                        borderRadius: '0 50px 0 50px',
                                                        boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
                                                        '& img': { filter: 'brightness(0) invert(1)' }
                                                    }
                                                }}
                                            >
                                                <img src={item.img} alt={item.title} style={{ width: 90, maxHeight: 90 }} />
                                            </Box>
                                            <Typography variant="h3" sx={{ mt: 2, fontSize: { xs: 20, md: 25 } }}>
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                </Grid2>
                            ))}
                        </Grid2>
                    </motion.div>
                </Container>
            </Box>
            <NeedProposal />
            {/* FAQ Section */}
            {/* <WebportalFaq /> */}
            <BrochureFaq />
        </>
    );
}

export default WebportalHero;
