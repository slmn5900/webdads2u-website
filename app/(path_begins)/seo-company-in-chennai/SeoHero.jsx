<<<<<<< HEAD
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from '../../../components/common/Slider-image';
function SeoHero() {
    return (
        <>
            <section className="seo-develoment">
                <Container>
                    <Row>
                        <Col md={12} className="mt-5">
                            <div className="seo-herocont">
                                <h2>Leading Business in the Right Direction</h2>
                                <p>Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience </p>
                                <img
                                    alt="SEO Company In Chennai | SEO Agency Chennai
"
                                    src="/webdads/images/seo-development/seo-hero-image.webp"
                                ></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Slider />
=======
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Slider from '../../../components/common/Slider-image';
// function SeoHero() {
//     return (
//         <>
//             <section className="seo-develoment">
//                 <Container>
//                     <Row>
//                         <Col md={12} className="mt-5">
//                             <div className="seo-herocont">
//                                 <h2>Leading Business in the Right Direction</h2>
//                                 <p>Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience </p>
//                                 <img
//                                     alt="SEO Company In Chennai | SEO Agency Chennai
// "
//                                     src="/webdads/images/seo-development/seo-hero-image.webp"
//                                 ></img>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             <Slider />
//         </>
//     );
// }

// export default SeoHero;

import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import Slider from '../../../components/common/Slider-image';
import { MenuContext } from '../../../layout/context/menucontext';
import { useContext } from 'react';

const SeoDevelopmentSection = styled(Box)(({ theme }) => ({
    backgroundImage: 'url(/webdads/images/seo-development/seo-slider.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: theme.spacing(7.5),
    paddingBottom: theme.spacing(6.25)
}));

const HeroContent = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    '& img': {
        width: '75%',
        paddingTop: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            width: '90%'
        }
    }
}));

function SeoHero() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    const { pagedata } = useContext(MenuContext);
    const titles = pagedata?.header_section?.title
    const descriptions = pagedata?.header_section?.description


    return (
        <>
            <SeoDevelopmentSection>
                <Container>
                    <HeroContent>
                        <Typography
                            variant={isMd ? 'h2' : isSm ? 'h3' : 'h4'}
                            sx={{
                                color: '#b5dcff',
                                fontWeight: 700,
                                maxWidth: '60%',
                                margin: 'auto',
                                [theme.breakpoints.down('sm')]: {
                                    maxWidth: '90%'
                                }
                            }}
                        >{titles}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#fff',
                                maxWidth: '60%',
                                margin: 'auto',
                                paddingTop: theme.spacing(2.5),
                                lineHeight: '30px',
                                fontSize: '20px',
                                [theme.breakpoints.down('sm')]: {
                                    maxWidth: '90%',
                                    fontSize: '16px',
                                    lineHeight: '24px'
                                }
                            }}
                        >
                            {descriptions}
                        </Typography>
                        <Box component="img" alt="SEO Company In Chennai | SEO Agency Chennai" src="/webdads/images/seo-development/seo-hero-image.webp" />
                    </HeroContent>
                </Container>
            </SeoDevelopmentSection>
>>>>>>> a0d19cc (Initial commit)
        </>
    );
}

export default SeoHero;
