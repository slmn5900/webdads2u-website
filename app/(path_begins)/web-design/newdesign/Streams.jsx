import React from 'react';
import { Box, Container, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material';

const Streams = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const services = [
        { title: 'Domain Registration', icon: '/webdads/images/webdesign/domain-registretion.png' },
        { title: 'Custom web design', icon: '/InnerPageImages/WebDesign/Streams/customize-web-design.png' },
        { title: 'HTML website design', icon: '/InnerPageImages/WebDesign/Streams/html-5.png' },
        { title: 'Website Redesign', icon: '/InnerPageImages/WebDesign/Streams/website-redesign_660593518.png' },
        { title: 'Hosting', icon: '/InnerPageImages/WebDesign/Streams/hosting.png' },
        { title: 'Responsive website', icon: '/InnerPageImages/WebDesign/Streams/responsive-web-design_661192b87.png' },
        { title: 'UI&UX Design', icon: '/InnerPageImages/WebDesign/Streams/responsive-web-design_661192b87.png' },
        { title: 'Website Maintenance', icon: '/InnerPageImages/WebDesign/Streams/website-miantanence.png' }
    ];

    return (
        <Box
            component="section"
            sx={{
                py: 8,
                [theme.breakpoints.down('sm')]: {
                    py: 5
                }
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container spacing={4} alignItems="center">
                    {/* Image Column */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="/webdads/images/webdesign/mac-design.webp"
                            alt="Website Design Company In Chennai"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 1,
                                boxShadow: 3,
                                animation: 'pulse 2s infinite ease-in-out',
                                '@keyframes pulse': {
                                    '0%': { transform: 'scale(1)' },
                                    '50%': { transform: 'scale(1.03)' },
                                    '100%': { transform: 'scale(1)' }
                                }
                            }}
                        />
                    </Grid2>

                    {/* Content Column */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    fontSize: isMobile ? '1.75rem' : '2.125rem',
                                    color: 'text.primary'
                                }}
                            >
                                Our Website Designing Streams
                            </Typography>

                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    mb: 4,
                                    color: 'text.secondary',
                                    fontSize: isMobile ? '1rem' : '1.1rem'
                                }}
                            >
                                Our Website Designing Streams encompass comprehensive web designing services. We specialize in crafting visually appealing, user-centric websites tailored to your brand. With a focus on aesthetics and functionality,
                                our expertise ensures standout online experiences. Trust us for top-tier web designing services that elevate your digital presence.
                            </Typography>

                            {/* Services Grid2 */}
                            <Grid2 container spacing={2}>
                                {services.map((service, index) => (
                                    <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
                                        <Box display="flex" alignItems="center" py={1}>
                                            <Box
                                                component="img"
                                                src={service.icon}
                                                alt={service.title}
                                                sx={{
                                                    width: 32,
                                                    height: 32,
                                                    mr: 2,
                                                    objectFit: 'contain'
                                                }}
                                            />
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: isMobile ? '0.95rem' : '1.05rem'
                                                }}
                                            >
                                                {service.title}
                                            </Typography>
                                        </Box>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default Streams;
