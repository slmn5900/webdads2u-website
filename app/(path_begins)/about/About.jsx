'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid2, Typography, Card, CardContent, CardMedia, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import { PlayCircleOutline, EmojiEvents } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Counter from '../../../components/Counter';
import MissionVisionGoals from './MissionVisionGoals';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
const values = [
    {
        title: 'Integrity',
        description: "At our core, integrity guides every action; it's the steadfast commitment to unwavering honesty and ethical conduct that defines us.",
        imgSrc: '/webdads/images/about-page/integrity.avif'
    },
    {
        title: 'Innovation',
        description: 'Innovation fuels our progress, sparking inventive ideas that redefine norms. Embracing creativity, we push boundaries, sculpting new pathways to evolution.',
        imgSrc: '/webdads/images/about-page/innovation.avif'
    },
    {
        title: 'Teamwork',
        description: 'Unified by a shared vision, teamwork weaves a tapestry of diverse skills, achieving collective brilliance. In synergy, each contribution harmonizes, fortifying a foundation of mutual support and achievement.',
        imgSrc: '/webdads/images/about-page/team-work.avif'
    },
    {
        title: 'Respect',
        description: 'Respect forms the bedrock of our interactions, nurturing an environment where diversity thrives. Valuing perspectives, we cultivate a culture of inclusivity, fostering understanding and appreciation.',
        imgSrc: '/webdads/images/about-page/respect.avif'
    },
    {
        title: 'Transparency',
        description: 'Transparency breeds trust, weaving a fabric of honesty that binds our relationships and operations. Openness paves the way for clarity, fostering accountability and strengthening connections.',
        imgSrc: '/webdads/images/about-page/transparency.avif'
    },
    {
        title: 'Excellence',
        description: 'Pursuing excellence, we strive for the zenith, sculpting outcomes that reflect our commitment to mastery. Every endeavor is a canvas for excellence, driving us to surpass standards and craft remarkable outcomes.',
        imgSrc: '/webdads/images/about-page/excellence.avif'
    }
];

const testimonials = [
    {
        name: 'Yaser',
        role: 'Founder',
        content: 'Great work by Webdads, prompt and efficient service. I am overall satisfied with their performance for the design of our company brochure.',
        imgSrc: '/webdads/images/home/testimonial/client-review-1.avif'
    },
    {
        name: 'Suresh',
        role: 'Founder',
        content: 'Excellent work with reasonable cost. You can blindly approach them, sure you will get excellent output which is beyond your expectation.',
        imgSrc: '/webdads/images/home/testimonial/client-review-2.avif'
    },
    {
        name: 'Lakshmanan Annamalai',
        role: 'Founder',
        content: 'Best people to work with. 100% hard worker, gave a neat finish and great look towards my website. Solomon is flexible and keeps up the works up to date.',
        imgSrc: '/webdads/images/home/testimonial/client-review-3.avif'
    },
    {
        name: 'Smilee',
        role: 'Founder',
        content: 'Very responsive & professional workers. I am so happy & satisfied with their work.',
        imgSrc: '/webdads/images/home/testimonial/client-review-4.avif'
    }
];

const AboutPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ mt: 3 }}>
            {/* About Us Section */}
            <Container sx={{ p: { xs: 3.8, md: 6 }, pt: { xs: 0, md: 0 }, overflowX: 'hidden' }}>
                <Grid2 container spacing={10} sx={{ mt: 5 }}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                            <Typography variant="h4" sx={{ color: '#262250', fontWeight: 700, mb: 2, fontSize: { xs: '1.235rem', sm: '1.235rem', md: '2.125rem' } }}>
                                About us
                            </Typography>
                            <Typography variant="h4" sx={{ color: '#000001', fontWeight: 700, mb: 2, fontSize: { xs: '1.rem', sm: '1.235rem', md: '2.125rem' } }}>
                                Choose The Best IT Service Company
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#474646', lineHeight: 1.8, mb: 2 }}>
                                <a href="/" style={{ color: '#474646', textDecoration: 'none', fontWeight: 600 }}>
                                    Webdads2u Pvt Ltd,
                                </a>
                                &nbsp;Best web design company in Chennai, India, is a leading agency specializing in web design, app development, SEO, and digital marketing services. Our team comprises highly skilled and experienced professionals
                                considered the best in Chennai’s IT service landscape. Passionate and dedicated, we excel in website and app development, SEO strategies, and crafting impactful digital marketing campaigns. As the best IT service
                                company in Chennai, our commitment to excellence drives us to deliver cutting-edge solutions that surpass client expectations, propelling businesses toward online success.
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#474646', lineHeight: 1.8, mb: 2, fontSize: { xs: 16, md: 19 } }}>
                                At Webdads2u Pvt Ltd, our ethos revolves around client-centricity and innovation. We pride ourselves on not just offering services but fostering enduring partnerships. With a focus on trust, transparency, and achieving
                                business objectives, we aim to empower businesses in navigating and thriving within the digital realm.
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                                    color: '#fff',
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 0,
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #262250 0%, #871752 100%)'
                                    }
                                }}
                                href="https://www.youtube.com/watch?v=tPaXI08Gcaw"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Typography sx={{ textAlign: 'center', mr: 1 }}>Check details about our company</Typography>
                                <PlayCircleOutline sx={{ fontSize: 20 }} />
                            </Button>
                        </motion.div>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box sx={{ position: 'relative', height: { xs: '400px', sm: '400px', md: '600px' } }}>
                            <motion.img
                                src="webdads/images/about-page/circle1.webp"
                                alt="Web Design Company In Chennai | Best Website Designers In Chennai"
                                animate={{ y: [0, 25, 0, -25, 0] }}
                                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                                style={{ position: 'absolute', zIndex: 1, width: '80%', margin: isMobile ? 'auto' : 'none' }}
                            />
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ position: 'relative', zIndex: 2, top: '60px', left: '20px', right: '20px' }}>
                                <CardMedia
                                    component="img"
                                    image="webdads/images/about-page/about-us.webp"
                                    alt="image not found"
                                    sx={{ borderRadius: 2, mb: 2, width: { xs: '200px', sm: '350px', md: '400px' }, m: { xs: 'auto', sm: 'auto', md: '0px' } }}
                                />
                                <Card
                                    sx={{
                                        display: 'flex',
                                        background: '#fff',
                                        p: 2,
                                        borderRadius: 5,
                                        boxShadow: 3,
                                        position: { xs: 'realtive', sm: 'relative', md: 'absolute' },
                                        bottom: { xs: 0, sm: 0, md: -70 },
                                        left: { xs: 0, sm: 0, md: 10 },
                                        zIndex: 3,
                                        width: { xs: '250px', sm: '350px', md: '400px' }
                                    }}
                                >
                                    <EmojiEvents sx={{ fontSize: 40, mr: 2 }} />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1rem', md: '1rem' } }}>
                                            Best Friendly Approach
                                        </Typography>
                                        <Typography variant="body2">We adapt our delivery to the way you work, whether as an external provider.</Typography>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#474646', lineHeight: 1.8, mt: 2, fontSize: { xs: 16, md: 19 } }}>
                            As the best IT service company in Chennai, Webdads2u Pvt Ltd is committed to being a catalyst for businesses seeking digital growth. Our expertise extends beyond conventional service provision; we serve as strategic
                            partners, guiding clients through the intricacies of the digital landscape.
                        </Typography>
                    </Grid2>
                </Grid2>
            </Container>

            <Box sx={{ py: 1 }}>
                <Counter />
            </Box>

            <Box sx={{ p: { xs: 3, md: 6 }, pt: { xs: 0 } }}>
                <MissionVisionGoals />
            </Box>

            {/* Company Values */}
            <Box sx={{ background: 'linear-gradient(90deg, #871752 1%, #262250 44%)', py: 6, color: '#fff', p: { xs: 3, md: 6 } }}>
                <Container>
                    {/* <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
                        Our Company Values
                    </Typography> */}
                    <Box sx={{ textAlign: { xs: 'start', md: 'center' } }}>
                        <Title color={'white'} title=" Our Company Values" />
                        {/* <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.857, mb: 4 }}>
                        Webdads2u Private Limited stands as the epitome of integrity, innovation, and collaboration. As the best IT service company, we lead the way in excellence within web design and development, upholding values of transparency and
                        client-centricity. Our dedication to quality craftsmanship and ensuring client satisfaction defines our ethos, fostering trust and reliability in every digital endeavor we undertake.
                    </Typography> */}
                        <Description
                            color={'white'}
                            Des="Webdads2u Private Limited stands as the epitome of integrity, innovation, and collaboration. As the best IT service company, we lead the way in excellence within web design and development, upholding values of transparency and
                        client-centricity. Our dedication to quality craftsmanship and ensuring client satisfaction defines our ethos, fostering trust and reliability in every digital endeavor we undertake."
                        />
                    </Box>
                    <Grid2 container spacing={4}>
                        {values.map((value, index) => (
                            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                                    <Card sx={{ height: { xs: '350px', md: 370 }, background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                                            <CardMedia component="img" image={value.imgSrc} alt={`${value.title} image`} sx={{ width: 100, height: 100, objectFit: 'contain' }} />
                                        </Box>
                                        <CardContent>
                                            <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
                                                {value.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ textAlign: 'center', lineHeight: 1.6, fontSize: { xs: 12, md: 15 } }}>
                                                {value.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
            </Box>

            <Box
                sx={{
                    backgroundImage: `url(https://res.cloudinary.com/dbpv95wd8/image/upload/v1746193416/bg-testimonial1_edba8a.jpg)`,
                    backgroundSize: 'cover',
                    py: 6,
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <Container sx={{ p: { xs: 3.8, md: 6 }, pt: { xs: 0, md: 0 } }}>
                    <Grid2 container>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Typography variant="h6" sx={{ color: '#262250', fontWeight: 700, mb: 1 }}>
                                Testimonial
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
                                Few of Our Client’s feedback of users!
                            </Typography>

                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                pagination={{ clickable: true }}
                                style={{ paddingBottom: '40px' }} // extra space for dots
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                '& .swiper-pagination-bullet': {
                                                    background: '#800080', // purple dots
                                                    opacity: 0.4,
                                                    width: 12,
                                                    height: 12
                                                },
                                                '& .swiper-pagination-bullet-active': {
                                                    background: '#800080', // active purple dot
                                                    opacity: 1,
                                                    width: 14,
                                                    height: 14
                                                },
                                                '& .swiper-pagination': {
                                                    bottom: '0px !important', // push to bottom
                                                    textAlign: 'center'
                                                }
                                            }}
                                        >
                                            <motion.img
                                                src={testimonial.imgSrc}
                                                alt={testimonial.name}
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                    borderRadius: '50%',
                                                    marginBottom: 16
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                            />
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    textAlign: 'center',
                                                    color: '#162541',
                                                    fontStyle: 'italic',
                                                    lineHeight: 1.6,
                                                    mb: 2,
                                                    maxWidth: '80%',
                                                    mx: 'auto'
                                                }}
                                            >
                                                {testimonial.content}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    textAlign: 'center',
                                                    color: '#0c0022',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    textAlign: 'center',
                                                    color: '#262250',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {testimonial.role}
                                            </Typography>
                                        </Box>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutPage;
