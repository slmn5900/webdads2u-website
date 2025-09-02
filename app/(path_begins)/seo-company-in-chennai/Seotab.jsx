<<<<<<< HEAD
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Seotab() {
    // Set the initial activeKey to match the first tab's eventKey
    const [activeKey, setActiveKey] = useState('Website SEO Copywriting');

    return (
        <section className="seotabsec">
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <h5>Why Every Business Needs SEO</h5>
                            <h2>Our Web Solutions Help Your Business Grow Online</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="unlock-seo">
                            <p>
                                Unlock the potential of your business with our impactful SEO Company in Chennai. In today’s digital landscape, visibility is key. Our tailored solutions ensure your online presence thrives, reaching your audience
                                effectively. Elevate your brand, connect with customers, and witness unparalleled growth with our dedicated SEO expertise in Chennai.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="seovar-tab">
                    <Tabs activeKey={activeKey} onSelect={(k) => setActiveKey(k)} transition={false} id="noanim-tab-example" className="mb-3">
                        <Tab
                            eventKey="Website SEO Copywriting"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Coppy-writting.svg" alt="SEO Copywriting" />
                                    <br />
                                    <h6>
                                        Website SEO
                                        <br /> Copywriting
                                    </h6>
                                </div>
                            }
                        >
                            <div className="seo-contentbox">
                                <div className="cont">
                                    <h2>Website SEO Copywriting </h2>
                                    <p>
                                        Discover the transformative power of our SEO Company In Chennai. Elevate your online presence with expertly crafted strategies tailored to your business. We specialize in driving traffic, enhancing visibility,
                                        and ensuring your brand stands out amidst competition. With our dedicated team, witness your website soar to the top ranks, captivating audiences and fostering meaningful connections. Maximize your potential
                                        and embrace success with our unparalleled SEO services in Chennai.
                                    </p>
                                    <a href="#">Readmore</a>
                                </div>
                                <div className="cont">
                                    <img alt="" src="/webdads/images/seo-development/copyright-seo.webp"></img>
                                </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="Website Call Tracking"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Call.svg" alt="Call Tracking" />
                                    <br />
                                    <h6>
                                        Website Call
                                        <br /> Tracking
                                    </h6>
                                </div>
                            }
                        >
                            <div className="seo-contentbox">
                                <div className="cont">
                                    <h2>Website Call Tracking</h2>
                                    <p>
                                        Experience the transformative impact of our SEO Company In Chennai with our innovative website call tracking. Beyond just optimizing your online presence, we provide insights into every click that drives your
                                        success. Hear the resonance of growth as our tailored strategies amplify your visibility in Chennai. With precise call tracking, witness firsthand the connections forged, the leads captured, and the triumphant
                                        rise of your business, fueled by our passionate dedication to SEO excellence in Chennai.
                                    </p>
                                    <a href="#">Readmore</a>
                                </div>
                                <div className="cont">
                                    <img alt="" src="/webdads/images/seo-development/call_tracking.webp"></img>
                                </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="Custom SEO Reporting"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Speed.svg" alt="SEO Reporting" />
                                    <br />
                                    <h6>
                                        Custom SEO
                                        <br /> Reporting
                                    </h6>
                                </div>
                            }
                        >
                            <div className="seo-contentbox">
                                <div className="cont">
                                    <h2>Custom SEO Reporting</h2>
                                    <p>
                                        Embrace the journey of success with our SEO Company In Chennai, enhanced by custom reporting. Beyond raw numbers, our reports paint vibrant portraits of your digital evolution. Each data point is a triumph,
                                        each analysis is a testament to your brand’s ascent in Chennai. Experience the thrill as our tailored reports narrate the story of your growth, reflecting our unwavering commitment to fueling your success
                                        through unparalleled SEO services in Chennai.
                                    </p>
                                    <a href="#">Readmore</a>
                                </div>
                                <div className="cont">
                                    <img alt="" src="/webdads/images/seo-development/custome_reporting.webp"></img>
                                </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="Personalized Web Content"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Speed.svg" alt="Web Content" />
                                    <br />
                                    <h6>
                                        Personalized
                                        <br /> Web Content
                                    </h6>
                                </div>
                            }
                        >
                            <div className="seo-contentbox">
                                <div className="cont">
                                    <h2>Personalized Web Content </h2>
                                    <p>Uncover the transformative power of personalized web content with Webdads2u. We don’t just craft words and visuals; we sculpt a digital symphony that resonates deeply with your audience.</p>
                                    <p>
                                        Every element meticulously designed to evoke emotions, forge connections, and inspire action. Witness the alchemy of tailored content as visitors become ardent advocates, propelling your brand to unparalleled
                                        heights of resonance and connection, all guided by the passionate expertise of Webdads2u.
                                    </p>
                                    <a href="#">Readmore</a>
                                </div>
                                <div className="cont">
                                    <img alt="" src="/webdads/images/seo-development/Personalised-Web-Content.webp"></img>
                                </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="Page Speed Optimization"
                            title={
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/webdads/images/seo-development/Speed.svg" alt="Page Speed Optimization" />
                                    <br />
                                    <h6>
                                        Page Speed
                                        <br /> Optimization
                                    </h6>
                                </div>
                            }
                        >
                            <div className="seo-contentbox">
                                <div className="cont">
                                    <h2>Page Speed Optimization </h2>
                                    <p>
                                        Experience the lightning-fast evolution of your website’s performance with Webdads2u’s page speed optimization. Every millisecond counts in capturing attention and fostering engagement. Our meticulous approach
                                        ensures your site loads swiftly, captivating visitors and keeping them immersed in your digital world.
                                    </p>
                                    <p>
                                        Feel the exhilaration as your pages load seamlessly, forging an unbreakable connection with your audience. Embrace the power of a swift, responsive website, propelling your brand to new heights of online
                                        success.
                                    </p>
                                    <a href="#">Readmore</a>
                                </div>
                                <div className="cont">
                                    <img alt="" src="/webdads/images/seo-development/page-speed-optimization.webp"></img>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </section>
=======


import React, { useState } from 'react';
import { Box, Container, Grid2, Typography, Tabs, Tab, useTheme, useMediaQuery, styled, Link } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';
import { useContext } from 'react';
const SectionWrapper = styled(Box)(({ theme }) => ({
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
        lineHeight: '28px'
    }
}));

const UnlockSeo = styled(Box)(({ theme }) => ({
    color: '#333',
    fontFamily: "'Poppins', Sans-serif",
    fontSize: '18px',
    fontWeight: 400,
    borderLeft: '5px solid',
    paddingLeft: theme.spacing(1.25)
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-indicator': {
        display: 'none'
    },
    '& .MuiTabs-flexContainer': {
        gap: 10,
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap'
        }
    }
}));

const StyledTab = styled(Tab)(({ theme }) => ({
    width: '220px',
    border: 'none',
    backgroundColor: '#e5ecfe',
    borderRadius: '10px',
    padding: theme.spacing(3.125),
    textTransform: 'none',
    '&.Mui-selected': {
        background: 'linear-gradient(90deg, #864ad1 0%, #c47be8 61%)',
        '& h6': {
            color: '#fff'
        },
        '& img': {
            filter: 'brightness(0) invert(1)'
        }
    },
    [theme.breakpoints.down('md')]: {
        width: 'calc(50% - 8px)',
        padding: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
}));

const TabContentBox = styled(Box)(({ theme }) => ({
    boxShadow: '7px 5px 30px 0px rgba(0, 0, 0, 0.12)',
    padding: theme.spacing(3.5),
    borderRadius: '10px',
    marginTop: theme.spacing(2)
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
    },
    '& .cont': {
        width: '50%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
        '& img': {
            width: '100% !important',
            height: 'auto !important',
            animation: 'image_upDown2 2s infinite alternate'
        }
    }
}));

const TabLabel = ({ icon, text }) => (
    <Box sx={{ textAlign: 'center' }}>
        <img src={icon} alt={text} style={{ width: '60px', height: '60px' }} />
        <br />
        <Typography
            variant="h6"
            sx={{
                fontFamily: "'Poppins', Sans-serif",
                fontSize: '18px',
                fontWeight: 600,
                color: 'inherit',
                lineHeight: '30px'
            }}
        >
            {text}
        </Typography>
    </Box>
);

function Seotab() {
    const [value, setValue] = useState('Website SEO Copywriting');
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const { pagedata } = useContext(MenuContext);
    const titles1 = pagedata?.seo_help_section?.title1
    const titles2 = pagedata?.seo_help_section?.title2
    const descriptions = pagedata?.seo_help_section?.description
    const items = pagedata?.seo_help_section?.tab || []
    const cards = pagedata?.seo_help_section?.tab?.content_1 || []

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <SectionWrapper>
            <Container>
                <Grid2 container spacing={4} sx={{ mb: 4 }}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography variant="h5">{titles1}</Typography>
                            <Typography variant="h2">{titles2}</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <UnlockSeo>
                            <Typography>
                                {descriptions}
                            </Typography>
                        </UnlockSeo>
                    </Grid2>
                </Grid2>

                <Box>
                    <StyledTabs value={value} onChange={handleChange} variant={isMd ? 'standard' : 'scrollable'} scrollButtons="auto" allowScrollButtonsMobile>
                        {items.map((tabs, index) => (
                            <StyledTab key={index} value={tabs.value} label={<TabLabel icon={tabs.icon} text={tabs.label.replace('<br />', '\n')} />} />
                        ))}
                    </StyledTabs>

                    <TabContentBox>
                        {cards.map((item, index) => (
                            <div key={index} role="tabpanel" hidden={value !== item.value}>
                                {value === item.value && (
                                    <ContentBox>
                                        <Box className="cont " sx={{textAlign:"start"}}>
                                            <Typography variant="h2" sx={{ mb: 2,textAlign:"start" }}>
                                                {item.title}
                                            </Typography>
                                            <Typography sx={{ mb: 2 }}>{item.text}</Typography>
                                            <Link href="#" color="primary">
                                                Read more
                                            </Link>
                                        </Box>
                                        <Box className="cont">
                                            <img alt="" src={item.image} />
                                        </Box>
                                    </ContentBox>
                                )}
                            </div>
                        ))}
                    </TabContentBox>
                </Box>
            </Container>
        </SectionWrapper>
>>>>>>> a0d19cc (Initial commit)
    );
}

export default Seotab;
