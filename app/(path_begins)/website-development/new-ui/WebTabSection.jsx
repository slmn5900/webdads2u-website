import React, { useState } from 'react';
import { Container, Box, Typography, Tabs, Tab, useTheme, useMediaQuery, styled } from '@mui/material';
import { FaAngular, FaLaravel, FaReact, FaBootstrap, FaJsSquare, FaJenkins } from 'react-icons/fa';
import { SiEmberdotjs, SiJquery, SiFastapi, SiFlask, SiRubyonrails, SiLumen, SiSpringboot } from 'react-icons/si';
import { RiNodejsLine } from 'react-icons/ri';

const WebsiteTabSection = styled('section')(({ theme }) => ({
    backgroundImage: "url('/webdads/images/website-development/website-tab-banner.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // width: '95%',
    borderTopRightRadius: '70px',
    borderBottomRightRadius: '70px',
    padding: theme.spacing(6, 25, 6, 20),
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(6, 15)
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(6, 10)
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(6, 3)
    }
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-indicator': {
        display: 'none'
    },
    '& .MuiTabs-flexContainer': {
        gap: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(1)
        }
    }
}));

const StyledTab = styled(Tab)(({ theme }) => ({
    minWidth: '150px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    '&.Mui-selected': {
        backgroundColor: 'transparent',
        border: 'none'
    },
    '&:hover': {
        border: 'none'
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: '120px',
        padding: theme.spacing(1)
    }
}));

const TabIcon = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
        fill: '#282552',
        fontSize: '50px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px'
        }
    }
}));

const TabContent = styled(Box)(({ theme }) => ({
    color: '#fff',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    lineHeight: '35px',
    padding: theme.spacing(3, 0),
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        lineHeight: '28px'
    }
}));

const WebTabSection = () => {
    const [activeKey, setActiveKey] = useState('ANGULAR JS');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const tabs = [
        {
            key: 'ANGULAR JS',
            icon: <FaAngular />,
            content:
                "AngularJS fuels our website's dynamic functionality, simplifying development through its robust features like two-way data binding and modular design. Its versatility enables scalable, user-centric experiences while streamlining maintenance. Our site benefits from AngularJS's power, ensuring an interactive and efficient interface for our users."
        },
        {
            key: 'LARAVEL',
            icon: <FaLaravel />,
            content:
                "Our website development relies on Laravel's robust framework. Laravel empowers us with efficient tools for crafting feature-rich, scalable websites. Leveraging its clean syntax and modular structure, we ensure a streamlined development process. With Laravel, we create websites that boast reliability, and a seamless user experience."
        },
        {
            key: 'REACT',
            icon: <FaReact />,
            content:
                "Our website's development hinges on React's versatile framework. React empowers us to create interactive, responsive web experiences efficiently. Leveraging its component-based architecture, we ensure modular, scalable development. With React, our websites boast speed, flexibility, and a modern user interface."
        },
        {
            key: 'BOOTSTRAP',
            icon: <FaBootstrap />,
            content:
                "Our website development relies on Bootstrap's powerful toolkit. Bootstrap enables us to create responsive, visually appealing websites with ease. Leveraging its grid system and pre-built components, we ensure a streamlined and efficient design process. With Bootstrap, our websites exhibit consistency, adaptability, and a polished user interface."
        },
        {
            key: 'EMBER JS',
            icon: <SiEmberdotjs />,
            content:
                'Our web development services thrive on Ember.js, a potent framework for crafting dynamic websites. Ember.js empowers our team to deliver high-quality thanks to its robust architecture. With Ember.js driving our development, we ensure exceptional user experiences and enhancing the value of our web development services.'
        },
        {
            key: 'JQUERY',
            icon: <SiJquery />,
            content:
                "In our suite of web development services, jQuery remains a fundamental tool for creating dynamic and responsive websites. Leveraging jQuery's versatile library. With jQuery driving our development, we ensure efficient DOM manipulation, and enhanced user experiences, enriching the scope of our web development services."
        }
    ];

    return (
        <WebsiteTabSection>
            <Container>
                <Box>
                    <Box mb={4}>
                        <Typography
                            variant={isMobile ? 'h4' : 'h2'}
                            sx={{
                                color: '#fff',
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 600,
                                lineHeight: '55px',
                                mb: 2
                            }}
                        >
                            Our Full-Stack Web
                            <br /> Development Services
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#fff',
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '18px',
                                lineHeight: '35px',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '16px',
                                    lineHeight: '28px'
                                }
                            }}
                        >
                            We specialize in end-to-end web development services, crafting dynamic, user-centric sites across platforms. Our expertise spans front-end and back-end technologies, delivering responsive designs that enhance user
                            experiences.
                        </Typography>
                    </Box>

                    <StyledTabs value={activeKey} onChange={(e, newValue) => setActiveKey(newValue)} variant="scrollable" scrollButtons="auto">
                        {tabs.map((tab) => (
                            <StyledTab
                                key={tab.key}
                                value={tab.key}
                                label={
                                    <Box sx={{ textAlign: 'center' }}>
                                        <TabIcon>{tab.icon}</TabIcon>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#fff',
                                                mt: 1,
                                                fontSize: isMobile ? '12px' : '14px'
                                            }}
                                        >
                                            {tab.key}
                                        </Typography>
                                    </Box>
                                }
                            />
                        ))}
                    </StyledTabs>

                    <TabContent>{tabs.find((tab) => tab.key === activeKey)?.content}</TabContent>
                </Box>
            </Container>
        </WebsiteTabSection>
    );
};

export default WebTabSection;
