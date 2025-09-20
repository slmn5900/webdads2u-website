import React, { useState } from 'react';
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
                            gap: 2// 🔹 equal spacing between tabs
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
    );
};

export default ResponsiveTabs;
