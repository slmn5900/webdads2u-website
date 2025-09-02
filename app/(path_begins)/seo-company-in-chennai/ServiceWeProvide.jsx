<<<<<<< HEAD
// components/OurServices.tsx
import { useState } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { FaBullhorn, FaMousePointer, FaShoppingCart, FaMapMarkerAlt, FaExternalLinkAlt, FaLink, FaPen } from 'react-icons/fa';
=======
import React, { useState } from 'react';
import { Box, Container, Grid2, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Link, useTheme, useMediaQuery, styled } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';
import { useContext } from 'react';
>>>>>>> a0d19cc (Initial commit)

const serviceData = [
    {
        title: 'Digital Marketing',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/v1704783495/Digital-Marketing_714119184/Digital-Marketing_714119184.svg?_i=AA',
<<<<<<< HEAD
        content: `In the vibrant landscape of digital marketing, our passion at Webdads2u transcends conventional strategies. We infuse each campaign with soul, crafting experiences that resonate deeply. Our SEO Company In Chennai epitomize this approach, fueling your brand’s journey to stand out amidst the digital noise. It’s not just marketing; it’s a symphony of connections, emotions, and dedication to your success.`,
=======
        content: `In the vibrant landscape of digital marketing, our passion at Webdads2u transcends conventional strategies. We infuse each campaign with soul, crafting experiences that resonate deeply. Our SEO Company In Chennai epitomize this approach, fueling your brand's journey to stand out amidst the digital noise. It's not just marketing; it's a symphony of connections, emotions, and dedication to your success.`,
>>>>>>> a0d19cc (Initial commit)
        links: [
            { content: 'Facebook Marketing', url: 'https://www.facebook.com/Webdads2u' },
            { content: 'Instagram Marketing', url: 'https://www.instagram.com/webdads2u/' },
            { content: 'Twitter Marketing', url: 'https://www.instagram.com/webdads2u/' }
        ],
        navigateTo: '/seo-company-in-chennai',
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/v1704786418/degital-marketing/degital-marketing.png?_i=AA'
    },
    {
        title: 'PPC Service',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/v1704783449/PPC_7145ead2b/PPC_7145ead2b.svg?_i=AA',
        content: `Experience the transformative impact of our PPC services. Watch your brand soar as we craft targeted campaigns that speak directly to your audience. With precision and expertise, we channel your message to the right people at the right time, ensuring maximum impact and unparalleled results. Elevate your online presence and witness the power of strategic PPC in action.`,
        links: [],
        navigateTo: 'ppc-service',
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/v1704882728/ppc_7523056b4/ppc_7523056b4.png?_i=AA'
    },
    {
        title: 'E-commerce SEO Service',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/v1704783478/E-C_71426ebd1/E-C_71426ebd1.svg?_i=AA',
        content:
            'Discover the magic of our E-commerce SEO service. Watch your online store thrive as we meticulously optimize every facet, from keywords to user experience. We’re not just boosting rankings; we’re igniting your sales potential. With our expertise, your products will shine brightly in search results, captivating customers and transforming clicks into conversions. Elevate your E-commerce game and write a success story worth sharing.',
        links: [],
        navigateTo: '/ecommerce-seo-service',
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/v1704883054/E-commerce/E-commerce.png?_i=AA'
    },
    {
        title: 'Local SEO Service',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/v1704783472/Local-SEO_7143d9e75/Local-SEO_7143d9e75.svg?_i=AA',
        content:
            'Experience the transformative force of our Local SEO service. We craft personalized strategies that speak directly to your community, igniting connections and driving growth. From optimizing listings to boosting visibility, our expertise ensures your business stands out locally, creating lasting impressions that resonate with your audience, paving the way for unparalleled success.',
        links: [],
        navigateTo: '/local-seo-service',
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/v1704887256/local-seo_75316710a/local-seo_75316710a.png?_i=AA'
    },
    {
        title: 'Off Page SEO',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/v1704783460/Off-Page-SEO_714473345/Off-Page-SEO_714473345.svg?_i=AA',
        content:
            'Discover the transformative power of Off-Page SEO with WebDads2U. Beyond mere websites, we craft strategies that elevate your brand’s digital presence. Through authentic connections and quality backlinks, we amplify your online authority, ensuring your brand resonates powerfully, captivating audiences far and wide, paving the path for lasting success.',
        links: [],
        navigateTo: '/off-page-seo',
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/v1704887262/Off-Page-SEO_75326245b/Off-Page-SEO_75326245b.png?_i=AA'
    },
    {
        title: 'Link Building Service',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/v1704783660/Service/Service.svg?_i=AA',
        content:
            'Experience the game-changing prowess of our Link Building Service coupled with top-notch SEO Company In Chennai. We don’t just build links; we craft pathways to elevate your brand’s digital authority. With strategic precision, we forge connections that amplify your online presence, ensuring your brand captivates audiences and secures enduring success.',
        links: [],
        navigateTo: '/link-building-service',
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/v1704887249/link-bulding/link-bulding.png?_i=AA'
    },
    {
        title: 'Content Writing Service',
        icon: 'https://res.cloudinary.com/dbpv95wd8/images/v1704783501/Content-Writting/Content-Writting.svg?_i=AA',
        content:
            'Experience the magic of storytelling with our Content Writing Service. We don’t just craft words; we weave narratives that resonate deeply. From compelling copy to engaging articles, we breathe life into your brand’s voice. Let your story ignite emotions, captivate audiences, and forge lasting connections in the hearts of your readers.',
        links: [],
        navigateTo: '/content-writing-service',
        imgUrl: 'https://res.cloudinary.com/dbpv95wd8/images/v1704887249/link-bulding/link-bulding.png?_i=AA'
    }
];

<<<<<<< HEAD
const ServiceWeProvide = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-5" style={{ backgroundColor: '#f5f5f5' }}>
            <Container className="service-we-provide">
                <Row>
                    <Col>
                        <h5 className="text-danger fw-semibold">Our services</h5>
                        <h2 className="fw-bold mb-4 service-we-provide-title">Services We Provide Special For You</h2>
                        <p className="text-muted mb-5">
                            In the digital realm, diverse businesses harbor unique needs, yet all crave visibility. While many acknowledge its importance, some hesitate to allocate more marketing budget to SEO. These individuals ought to shift their
                            perspective about SEO. It’s not an expense; it’s an impactful investment. Webdads2u echoes this sentiment, illuminating the truth that search engine optimization isn’t merely a cost but a potent catalyst for growth. It’s
                            about nurturing your digital presence into a thriving, magnetic force that attracts success.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            {serviceData.map((service, idx) => (
                                // <ListGroup.Item key={idx} action active={idx === activeIndex} onClick={() => setActiveIndex(idx)} className="d-flex align-items-center gap-2">
                                //     <img src={service.icon} />
                                //     <strong className="service-we-provide-title service-we-provide-title-tab ">{service.title}</strong>
                                // </ListGroup.Item>
                                <ListGroup.Item key={idx} action onClick={() => setActiveIndex(idx)} className={`d-flex align-items-center gap-2 custom-list-item ${idx === activeIndex ? 'active-item' : 'inactive-item'}`}>
                                    <img src={service.icon} alt="" />
                                    <strong className="service-we-provide-title service-we-provide-title-tab">{service.title}</strong>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col md={8} style={{ height: '100%' }} className="d-flex align-items-center justify-content-start">
                        <div className="rounded bg-light p-4 h-100 service-we-provide-description-parent">
                            <div className="d-flex flex-column flex-lg-row ">
                                <div className="m-2 w-100 w-md-50">
                                    <img src={serviceData[activeIndex].imgUrl} alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                                </div>

                                <div className="m-2 w-100 w-md-50">
                                    <h4 className="fw-bold service-we-provide-title service-we-provide-title-description">{serviceData[activeIndex].title}</h4>
                                    <p className="mt-3" style={{ fontSize: '15px' }}>
                                        {serviceData[activeIndex].content}
                                    </p>

                                    {/* {serviceData[activeIndex].links.length > 0 && (
                                        <ul className="ps-3">
                                            {serviceData[activeIndex].links.map((link, i) => (
                                                <li key={i} className="text-primary">
                                                    <a href={link.url}>{link.content}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )} */}
                                    {serviceData[activeIndex].links.length > 0 && (
                                        <ul className="ps-3 service-we-provide-link-list">
                                            {serviceData[activeIndex].links.map((link, i) => (
                                                <li key={i}>
                                                    <a href={link.url}>{link.content}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="mt-3">
                                        <a href={serviceData[activeIndex].navigateTo} style={{ textDecoration: 'none' }}>
                                            <button className="seo-company-contact-btn">Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
=======
const ServiceSection = styled(Box)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    paddingTop: theme.spacing(7.5),
    paddingBottom: theme.spacing(7.5),
    '& h5': {
        color: '#e30e26',
        fontFamily: "'Poppins', Sans-serif",
        fontSize: '20px',
        fontWeight: 500
    },
    '& h2': {
        color: '#0a1f5f',
        fontFamily: "'Poppins', Sans-serif",
        fontSize: '36px',
        fontWeight: 700,
        textTransform: 'capitalize',
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px'
        }
    },
    '& p': {
        color: '#333',
        fontFamily: "'Poppins', Sans-serif",
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '28px',
        marginBottom: theme.spacing(4)
    }
}));

const ServiceDescription = styled(Box)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '7px 5px 30px 0px rgba(0, 0, 0, 0.12)',
    padding: theme.spacing(4),
    minHeight: '700px',
    height: '100%',
    transition: 'all 0.3s ease'
}));

const ServiceButton = styled(Button)(({ theme }) => ({
    color: '#ffffff',
    background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
    borderRadius: '30px',
    padding: '13px 40px',
    border: '0px',
    transition: 'all 0.3s',
    '&:hover': {
        background: 'linear-gradient(90deg, #262250 0%, #871752 100%)'
    }
}));

const ServiceListItem = styled(ListItem)(({ theme, selected }) => ({
    padding: theme.spacing(1.5, 2),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    backgroundColor: selected ? theme.palette.action.selected : 'transparent',
    borderLeft: '2px solid', // Add left border
    borderColor: selected ? theme.palette.primary.main : theme.palette.grey[400], // Blue when selected, gray otherwise
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        borderColor: selected ? theme.palette.primary.main : theme.palette.grey[600] // Darker gray on hover
    },
    '& .MuiListItemIcon-root': {
        minWidth: '40px'
    },
    '& .MuiTypography-root': {
        fontFamily: "'Poppins', Sans-serif",
        fontWeight: selected ? 600 : 400
    }
}));
const ServiceLink = styled(Link)(({ theme }) => ({
    color: '#060097',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'color 0.3s ease',
    paddingTop: '2px',
    '&:hover': {
        color: '#c10fff'
    }
}));

const ServiceWeProvide = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    const { pagedata } = useContext(MenuContext);
    const titles1 = pagedata?.our_service?.title1;
    const titles2 = pagedata?.our_service?.title2;
    const descriptions = pagedata?.our_service?.description;

    return (
        <ServiceSection>
            <Container>
                <Grid2 container spacing={4}>
                    <Grid2 size={{ xs: 12 }}>
                        <Typography variant="h5">{titles1}</Typography>
                        <Typography variant="h2" sx={{ mb: 2 }}>
                            {titles2}
                        </Typography>
                        <Typography>{descriptions}</Typography>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 3 }}>
                        <List component="nav">
                            {serviceData.map((service, idx) => (
                                <ServiceListItem key={idx} selected={idx === activeIndex} onClick={() => setActiveIndex(idx)}>
                                    <ListItemIcon>
                                        <img src={service.icon} alt="" width="70px" height="70px" />
                                    </ListItemIcon>
                                    <ListItemText primary={service.title} />
                                </ServiceListItem>
                            ))}
                        </List>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 9 }}>
                        <ServiceDescription>
                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <Box
                                        component="img"
                                        src={serviceData[activeIndex].imgUrl}
                                        alt=""
                                        sx={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            borderRadius: 1
                                        }}
                                    />
                                </Grid2>

                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                        {serviceData[activeIndex].title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                        {serviceData[activeIndex].content}
                                    </Typography>

                                    {serviceData[activeIndex].links.length > 0 && (
                                        <Box >
                                            {serviceData[activeIndex].links.map((link, i) => (
                                                <Box key={i} sx={{ py: 0.5 }}>
                                                    <ServiceLink href={link.url} target="_blank" rel="noopener" textAlign={'start'} fontFamily={"Poppins"}>
                                                        {link.content}
                                                    </ServiceLink>
                                                </Box>
                                            ))}
                                        </Box>
                                    )}

                                    <Box sx={{ mt: 3 }}>
                                        <ServiceButton href={serviceData[activeIndex].navigateTo} component={Link}>
                                            Read More
                                        </ServiceButton>
                                    </Box>
                                </Grid2>
                            </Grid2>
                        </ServiceDescription>
                    </Grid2>
                </Grid2>
            </Container>
        </ServiceSection>
>>>>>>> a0d19cc (Initial commit)
    );
};

export default ServiceWeProvide;
