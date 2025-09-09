

'use client';
import React, { useState } from 'react';
import { Tabs, Tab, Box, Button, useTheme, useMediaQuery, Grid2, styled } from '@mui/material';

// Styled components with fixed image dimensions
const ImageContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '250px', // Fixed height
    overflow: 'hidden',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.03)'
    },
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensures images fill container while maintaining aspect ratio
        display: 'block'
    },
    [theme.breakpoints.down('md')]: {
        height: '220px'
    },
    [theme.breakpoints.down('sm')]: {
        height: '180px'
    }
}));

// Styled components
const StyledTab = styled(Tab)(({ theme }) => ({
    fontWeight: 600,
    fontFamily: 'Poppins',
    color: theme.palette.text.primary,
    fontSize: '15px',
    letterSpacing: '2px',
    padding: theme.spacing(1, 2),
    minWidth: 'unset',
    [theme.breakpoints.down('sm')]: {
        fontSize: '13px',
        padding: theme.spacing(1)
    }
}));

// Tab panel component
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
            {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
        </div>
    );
}

// Tab data (same as your original)
const tabData = [
    {
        label: 'All',
        images: [
            '/webdads/images/home/tabs/Atgomart_19399ef691_213353aeac.webp',
            '/webdads/images/home/tabs/iritube-portfolio-website-1_2133361f1d.webp',
            '/webdads/images/home/tabs/pridermx-portfolio-website_1528c5a78.jpg',
            '/webdads/images/home/tabs/racepro-1_2133480bb0.jpg',
            '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp',
            '/webdads/images/home/tabs/Ramwellness-portfolio-website_1150a915e.jpg',
            '/webdads/images/home/tabs/RMP_1940935de7_213287b7e9.webp',
            '/webdads/images/home/tabs/Securitaz_19411882b6_21326af134.webp'
        ]
    },
    {
        label: 'Website',
        images: [
            '/webdads/images/home/tabs/Securitaz_19411882b6_21326af134.webp',
            '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp',
            '/webdads/images/home/tabs/RMP_1940935de7_213287b7e9.webp',
            '/webdads/images/home/tabs/Atgomart_19399ef691_213353aeac.webp',
            '/webdads/images/home/tabs/Ramwellness-portfolio-website_1150a915e.jpg',
            '/webdads/images/home/tabs/pridermx-portfolio-website_1528c5a78.jpg'
        ]
    },
    {
        label: 'Letter Head',
        images: [
            '/webdads/images/home/tabs/nivas-portfolio-letterhead_114718981website01.jpg',
            '/webdads/images/home/tabs/aarthi-homes-portfolio-letterhead_114822db4website02.jpg',
            '/tabs/arcman-kitchen-interior-portfolio-letterhead_114941dd7website03.png'
        ]
    },
    {
        label: 'Business Card',
        images: [
            '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp',
            '/webdads/images/home/tabs/chennai-interior-portfolio-businesscard_1527f12f5website002.jpg',
            '/webdads/images/home/tabs/nivas-industries-portfolio-businesscard_1522a5b85website001.jpg',
            '/webdads/images/home/tabs/arcmen-kitchens-interiors-portfolio-businesscard_152605de3website003.jpg',
            '/webdads/images/home/tabs/relife-medical-system-portfolio-businesscard_152411317website004.jpg'
        ]
    },
    {
        label: 'Logo',
        images: [
            '/webdads/images/home/tabs/racepro-1_2133480bb0.jpg',
            '/webdads/images/home/tabs/rajvision_193793ba94logo1.jpg',
            '/webdads/images/home/tabs/monarch-mockup-logo_11560818blogo2.jpg',
            '/webdads/images/home/tabs/oil-sep-mockup-logo_115468e14logo3.jpg',
            '/webdads/images/home/tabs/computer-garage-mockup-logo_1518c7cf4logo12333.jpg',
            '/webdads/images/home/tabs/v2-photograph-mockup-logo_1155ef2fblogo5.jpg'
        ]
    }
];

export default function PortfolioTabs() {
    const [value, setValue] = useState(0);
    const [visibleImages, setVisibleImages] = useState(6);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const handleChange = (_, newValue) => {
        setValue(newValue);
        setVisibleImages(6); // Reset on tab change
    };

    const loadMore = () => {
        setVisibleImages((prev) => prev + 3);
    };

    return (
        <Box
            sx={{
                width: '100%',
                pt: { xs: 5, sm: 6, md: 6, lg: 0 },
                mt: { xs: 0, sm: 6, md: 0 }
            }}
        >
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    overflowX: 'auto'
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant={isMobile ? 'scrollable' : 'standard'}
                    scrollButtons={isMobile ? 'auto' : false}
                    allowScrollButtonsMobile
                    centered={!isMobile}
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: theme.palette.primary.main,
                            height: 3
                        }
                    }}
                >
                    {tabData.map((tab, index) => (
                        <StyledTab key={index} label={tab.label} id={`tab-${index}`} aria-controls={`tabpanel-${index}`} />
                    ))}
                </Tabs>
            </Box>

            {tabData.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>
                    <Grid2 container spacing={2} justifyContent="center">
                        {tab.images.slice(0, visibleImages).map((img, imgIndex) => (
                            <Grid2 item key={imgIndex} xs={12} sm={6} md={4} lg={3}>
                                <ImageContainer>
                                    <img src={img} alt={`${tab.label}-${imgIndex}`} loading="lazy" />
                                </ImageContainer>
                            </Grid2>
                        ))}
                    </Grid2>

                    {visibleImages < tab.images.length && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Button
                                variant="contained"
                                onClick={loadMore}
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    textTransform: 'capitalize',
                                    px: 4,
                                    py: 1
                                }}
                            >
                                Load More
                            </Button>
                        </Box>
                    )}
                </TabPanel>
            ))}
        </Box>
    );
}
