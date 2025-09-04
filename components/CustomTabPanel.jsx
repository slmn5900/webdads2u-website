// 'use client';
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// // Custom Tab Panel component
// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} style={{ display: value === index ? 'block' : 'none' }}>
//             {value === index && (
//                 <Box
//                     sx={{
//                         p: 3,
//                         display: 'flex',
//                         flexWrap: 'wrap',
//                         justifyContent: 'center'
//                     }}
//                 >
//                     {children}
//                 </Box>
//             )}
//         </div>
//     );
// }

// CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired
// };

// // Accessibility properties for tabs
// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`
//     };
// }

// // Updated tab data with multiple images per tab
// const tabData = [
//     {
//         label: 'All',
//         images: [
//             '/webdads/images/home/tabs/Atgomart_19399ef691_213353aeac.webp',
//             '/webdads/images/home/tabs/iritube-portfolio-website-1_2133361f1d.webp',
//             '/webdads/images/home/tabs/pridermx-portfolio-website_1528c5a78.jpg',
//             '/webdads/images/home/tabs/racepro-1_2133480bb0.jpg',
//             '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp',
//             '/webdads/images/home/tabs/Ramwellness-portfolio-website_1150a915e.jpg',
//             '/webdads/images/home/tabs/RMP_1940935de7_213287b7e9.webp',
//             '/webdads/images/home/tabs/Securitaz_19411882b6_21326af134.webp'
//         ]
//     },
//     {
//         label: 'Website',
//         images: [
//             '/webdads/images/home/tabs/Securitaz_19411882b6_21326af134.webp',
//             '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp',
//             '/webdads/images/home/tabs/RMP_1940935de7_213287b7e9.webp',
//             '/webdads/images/home/tabs/Atgomart_19399ef691_213353aeac.webp',
//             '/webdads/images/home/tabs/Ramwellness-portfolio-website_1150a915e.jpg',
//             '/webdads/images/home/tabs/pridermx-portfolio-website_1528c5a78.jpg'
//         ]
//     },
//     {
//         label: 'Letter Head',
//         images: [
//             '/webdads/images/home/tabs/nivas-portfolio-letterhead_114718981website01.jpg',
//             '/webdads/images/home/tabs/aarthi-homes-portfolio-letterhead_114822db4website02.jpg',
//             '/tabs/arcman-kitchen-interior-portfolio-letterhead_114941dd7website03.png'
//         ]
//     },
//     {
//         label: 'Business Card',
//         images: [
//             '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp',
//             '/webdads/images/home/tabs/chennai-interior-portfolio-businesscard_1527f12f5website002.jpg',
//             '/webdads/images/home/tabs/nivas-industries-portfolio-businesscard_1522a5b85website001.jpg',
//             '/webdads/images/home/tabs/arcmen-kitchens-interiors-portfolio-businesscard_152605de3website003.jpg',
//             '/webdads/images/home/tabs/relife-medical-system-portfolio-businesscard_152411317website004.jpg'
//         ]
//     },
//     {
//         label: 'Logo',
//         images: [
//             '/webdads/images/home/tabs/racepro-1_2133480bb0.jpg',
//             '/webdads/images/home/tabs/rajvision_193793ba94logo1.jpg',
//             '/webdads/images/home/tabs/monarch-mockup-logo_11560818blogo2.jpg',
//             '/webdads/images/home/tabs/oil-sep-mockup-logo_115468e14logo3.jpg',
//             '/webdads/images/home/tabs/computer-garage-mockup-logo_1518c7cf4logo12333.jpg',
//             '/webdads/images/home/tabs/v2-photograph-mockup-logo_1155ef2fblogo5.jpg'
//         ]
//     }
// ];

// export default function BasicTabs() {
//     const [value, setValue] = React.useState(0);
//     const [imagesToShow, setImagesToShow] = React.useState(3); // Track number of images to show

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//         setImagesToShow(3); // Reset images to show when switching tabs
//     };

//     const handleLoadMore = () => {
//         setImagesToShow((prev) => prev + 3); // Load 3 more images
//     };

//     return (
//         <Box sx={{ width: '100%', marginTop: { xs: '120px', md: '60px' } }}>
//             <Box
//                 sx={{
//                     borderBottom: 1,
//                     borderColor: 'divider',
//                     display: 'flex',
//                     justifyContent: 'center'
//                 }}
//             >
//                 <Tabs
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         flexDirection: { xs: 'column', sm: 'row' } // Adjust flex direction based on screen size
//                     }}
//                     className="home-taps-business"
//                     value={value}
//                     onChange={handleChange}
//                     aria-label="basic tabs example"
//                     centered
//                 >
//                     {tabData.map((tab, index) => (
//                         <Tab label={tab.label} {...a11yProps(index)} key={index} />
//                     ))}
//                 </Tabs>
//             </Box>
//             {tabData.map((tab, index) => (
//                 <CustomTabPanel value={value} index={index} key={index}>
//                     {tab.images.slice(0, imagesToShow).map((imageUrl, imgIndex) => (
//                         <Box
//                             key={imgIndex}
//                             sx={{
//                                 width: '400px',
//                                 height: 'auto',
//                                 m: 1,
//                                 display: 'flex',
//                                 justifyContent: 'center'
//                             }}
//                         >
//                             <img src={imageUrl} alt={`${tab.label} ${imgIndex + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
//                         </Box>
//                     ))}
//                     <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
//                         {imagesToShow < tab.images.length && (
//                             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//                                 <Button variant="outlined" onClick={handleLoadMore}>
//                                     Load More
//                                 </Button>
//                             </Box>
//                         )}
//                     </div>
//                 </CustomTabPanel>
//             ))}
//         </Box>
//     );
// }
// =============================================
// =============================================
// =============================================
// =============================================
// =============================================
// =============================================
// =============================================
// =============================================
// =============================================
// =============================================
// =============================================
// =============================================
// 'use client';
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// // Custom Tab Panel component
// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} style={{ display: value === index ? 'block' : 'none' }}>
//             {value === index && (
//                 <Box
//                     sx={{
//                         p: 3,
//                         display: 'flex',
//                         flexWrap: 'wrap',
//                         justifyContent: 'center'
//                     }}
//                 >
//                     {children}
//                 </Box>
//             )}
//         </div>
//     );
// }

// CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired
// };

// // Accessibility properties for tabs
// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`
//     };
// }

// // Updated tab data with multiple images per tab
// const tabData = [
//     {
//         label: 'All',
//         images: [
//             '/webdads/images/home/tabs/Atgomart_19399ef691_213353aeac.webp',
//             '/webdads/images/home/tabs/iritube-portfolio-website-1_2133361f1d.webp',
//             '/webdads/images/home/tabs/pridermx-portfolio-website_1528c5a78.jpg',
//             '/webdads/images/home/tabs/racepro-1_2133480bb0.jpg',
//             '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp',
//             '/webdads/images/home/tabs/Ramwellness-portfolio-website_1150a915e.jpg',
//             '/webdads/images/home/tabs/RMP_1940935de7_213287b7e9.webp',
//             '/webdads/images/home/tabs/Securitaz_19411882b6_21326af134.webp'
//         ]
//     },
//     {
//         label: 'Website',
//         images: [
//             '/webdads/images/home/tabs/Securitaz_19411882b6_21326af134.webp',
//             '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp',
//             '/webdads/images/home/tabs/RMP_1940935de7_213287b7e9.webp',
//             '/webdads/images/home/tabs/Atgomart_19399ef691_213353aeac.webp',
//             '/webdads/images/home/tabs/Ramwellness-portfolio-website_1150a915e.jpg',
//             '/webdads/images/home/tabs/pridermx-portfolio-website_1528c5a78.jpg'
//         ]
//     },
//     {
//         label: 'Letter Head',
//         images: [
//             '/webdads/images/home/tabs/nivas-portfolio-letterhead_114718981website01.jpg',
//             '/webdads/images/home/tabs/aarthi-homes-portfolio-letterhead_114822db4website02.jpg',
//             '/tabs/arcman-kitchen-interior-portfolio-letterhead_114941dd7website03.png'
//         ]
//     },
//     {
//         label: 'Business Card',
//         images: [
//             '/webdads/images/home/tabs/Raj-vision_19408aaa2d_21327a6aba.webp',
//             '/webdads/images/home/tabs/chennai-interior-portfolio-businesscard_1527f12f5website002.jpg',
//             '/webdads/images/home/tabs/nivas-industries-portfolio-businesscard_1522a5b85website001.jpg',
//             '/webdads/images/home/tabs/arcmen-kitchens-interiors-portfolio-businesscard_152605de3website003.jpg',
//             '/webdads/images/home/tabs/relife-medical-system-portfolio-businesscard_152411317website004.jpg'
//         ]
//     },
//     {
//         label: 'Logo',
//         images: [
//             '/webdads/images/home/tabs/racepro-1_2133480bb0.jpg',
//             '/webdads/images/home/tabs/rajvision_193793ba94logo1.jpg',
//             '/webdads/images/home/tabs/monarch-mockup-logo_11560818blogo2.jpg',
//             '/webdads/images/home/tabs/oil-sep-mockup-logo_115468e14logo3.jpg',
//             '/webdads/images/home/tabs/computer-garage-mockup-logo_1518c7cf4logo12333.jpg',
//             '/webdads/images/home/tabs/v2-photograph-mockup-logo_1155ef2fblogo5.jpg'
//         ]
//     }
// ];

// export default function BasicTabs() {
//     const [value, setValue] = React.useState(0);
//     const [imagesToShow, setImagesToShow] = React.useState(3); // Track number of images to show
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//         setImagesToShow(3); // Reset images to show when switching tabs
//     };

//     const handleLoadMore = () => {
//         setImagesToShow((prev) => prev + 3); // Load 3 more images
//     };

//     return (
//         <Box sx={{ width: '100%', pt: { xs: '158px', sm: "94px", md: '94px', lg: "0px" } }}>
//             <Box
//                 sx={{
//                     borderBottom: 1,
//                     borderColor: 'divider',
//                     display: 'flex',
//                     justifyContent: 'center'
//                 }}
//             >
//                 <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     aria-label="basic tabs example"
//                     variant={isMobile ? 'scrollable' : 'standard'}
//                     scrollButtons={isMobile ? 'auto' : false}
//                     allowScrollButtonsMobile
//                     centered={!isMobile}

//                     sx={{

//                         '& .MuiTabs-flexContainer': {
//                             justifyContent: isMobile ? 'flex-start' : 'center'
//                         }
//                     }}
//                 >
//                     {tabData.map((tab, index) => (
//                         <Tab sx={{ fontWeight: "600", fontFamily: "Poppins", color: "black", fontSize: "15px", letterSpacing: "2px" }} label={tab.label} {...a11yProps(index)} key={index} />
//                     ))}
//                 </Tabs>
//             </Box>
//             {tabData.map((tab, index) => (
//                 <CustomTabPanel value={value} index={index} key={index}>
//                     {tab.images.slice(0, imagesToShow).map((imageUrl, imgIndex) => (
//                         <Box
//                             key={imgIndex}
//                             sx={{
//                                 width: '400px',
//                                 maxWidth:'400px',
//                                 height: 'auto',
//                                 m: 1,
//                                 display: 'flex',
//                                 justifyContent: 'center'
//                             }}
//                         >
//                             <img src={imageUrl} alt={`${tab.label} ${imgIndex + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
//                         </Box>
//                     ))}
//                     <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
//                         {imagesToShow < tab.images.length && (
//                             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//                                 <Button variant="outlined" onClick={handleLoadMore} sx={{ color: "white", fontFamily: "Poppins", padding: 1, textTransform: "capitalize", fontWeight: "500" }}>
//                                     Load More
//                                 </Button>
//                             </Box>
//                         )}
//                     </div>
//                 </CustomTabPanel>
//             ))}
//         </Box>
//     );
// }

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
                pt: { xs: 20, sm: 6, md: 6, lg: 0 },
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
