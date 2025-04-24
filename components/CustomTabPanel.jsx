'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; // Import the Button component

// Custom Tab Panel component
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} style={{ display: value === index ? 'block' : 'none' }}>
            {value === index && (
                <Box
                    sx={{
                        p: 3,
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

// Accessibility properties for tabs
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

// Updated tab data with multiple images per tab
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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [imagesToShow, setImagesToShow] = React.useState(3); // Track number of images to show

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setImagesToShow(3); // Reset images to show when switching tabs
    };

    const handleLoadMore = () => {
        setImagesToShow((prev) => prev + 3); // Load 4 more images
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    {tabData.map((tab, index) => (
                        <Tab label={tab.label} {...a11yProps(index)} key={index} />
                    ))}
                </Tabs>
            </Box>
            {tabData.map((tab, index) => (
                <CustomTabPanel value={value} index={index} key={index}>
                    {tab.images.slice(0, imagesToShow).map((imageUrl, imgIndex) => (
                        <Box
                            key={imgIndex}
                            sx={{
                                width: '400px',
                                height: 'auto',
                                m: 1,
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <img src={imageUrl} alt={`${tab.label} ${imgIndex + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
                        </Box>
                    ))}
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        {imagesToShow < tab.images.length && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button variant="outlined" onClick={handleLoadMore}>
                                    Load More
                                </Button>
                            </Box>
                        )}
                    </div>
                </CustomTabPanel>
            ))}
        </Box>
    );
}
