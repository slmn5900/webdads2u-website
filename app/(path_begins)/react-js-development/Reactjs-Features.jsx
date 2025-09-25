// "use client";
// import React, { useState } from 'react';
// import { FaReact } from "react-icons/fa";
// import "../../../styles/reports.scss";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// const ReactTabsWithIcons = () => {
//   const [activeTab, setActiveTab] = useState('step1');

//   const tabsData = [
//     {
//       eventKey: "step1",
//       title: "Single Way Data Flow",
//       content: "In React js development, Single-Way Data Flow ensures a clear and efficient flow of information. The unidirectional data flow enhances predictability, simplifies debugging, and boosts application stability. By adhering to this paradigm, React.js enables developers to create more manageable and scalable web applications, fostering a robust development experience.",
//       imageSrc: "webdads/images/react-js-development/call_tracking.jpg",
//       alt: "call_tracking"
//     },
//     {
//       eventKey: "step2",
//       title: "Virtual Document Object Model",
//       content: "In React js development, personalize web content with dynamic components. React’s efficient updates through the virtual DOM ensure seamless, customized experiences. Elevate your online presence and engage your audience effectively with React.js, the key to impactful and tailored web development. Experience our expert React.js solutions.",
//       imageSrc: "webdads/images/react-js-development/custome_reporting.jpg",
//       alt: "custome_reporting"
//     },
//     {
//       eventKey: "step3",
//       title: "Personalized Web Content",
//       content: "In React js development, personalize web content effortlessly. React’s dynamic components and state management enable tailored user experiences. Efficient updates through the virtual DOM ensure seamless, personalized content delivery. Elevate your online presence with React.js for impactful, customized web experiences.",
//       imageSrc: "webdads/images/react-js-development/Personalised-Web-Content.jpg",
//       alt: "Personalised-Web-Content"
//     },
//     {
//       eventKey: "step4",
//       title: "Page Speed Optimization",
//       content: "Enhance page speed in React js development with optimized rendering. Leveraging the virtual DOM and efficient component updates, React ensures swift and seamless user experiences. Prioritize performance to create blazing-fast web applications, boosting overall user satisfaction and engagement.",
//       imageSrc: "webdads/images/react-js-development/page-speed-optimization.jpg",
//       alt: "page-speed-optimization"
//     },
//     {
//       eventKey: "step5",
//       title: "Dynamic User Interfaces",
//       content: "In the realm of React js development, Dynamic User Interfaces flourish with seamless flow. React’s component-based structure, coupled with a virtual DOM, empowers developers to craft responsive interfaces. This dynamic synergy ensures optimal user experiences, making React.js a cornerstone for building engaging web applications with unparalleled interactivity and responsiveness.",
//       imageSrc: "webdads/images/react-js-development/page-speed-optimization.jpg",
//       alt: "page-speed-optimization"
//     }
//   ];

//   return (
//     <section className="reacttabswithicons-main">
//       <div className="container">
//         <div className="row justify-content-between text-center reacttabsWitheact">
//           <div className="col-12">
//             <h2 className="appdev-head">React Tabs with Icons</h2>
//             <p className="appdev-para">Step through each tab to learn more</p>
//           </div>
//         </div>

//         <div className="row respoonsive-tabs-react">
//           <div className="col-12">
//             <div className="tabs">
//               <div className="tab-list d-flex flex-wrap mb-3 justify-content-center">
//                 {tabsData.map(tab => (
//                   <div
//                     key={tab.eventKey}
//                     className={`tab-title ${activeTab === tab.eventKey ? 'active' : ''} col-sm-12 col-md-2 col-lg-2 flex-fill `}
//                     onClick={() => setActiveTab(tab.eventKey)}
//                   >
//                     <div>
//                       <FaReact size={24} />
//                     </div>
//                     <span className="ml-2 ">{tab.title}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="tab-content">
//                 {tabsData.map(tab => (
//                   tab.eventKey === activeTab && (
//                     <div key={tab.eventKey} className="row">
//                       <div className="col-12 col-md-6 align-self-center">
//                         <h2>{tab.title}</h2>
//                         <p>{tab.content}</p>
//                         <a href="/">Read More <MdOutlineKeyboardArrowRight /></a>
//                       </div>
//                       <div className="col-12 col-md-6">
//                         <img
//                           src={tab.imageSrc}
//                           alt={tab.alt}
//                           className="img-fluid"
//                         />
//                       </div>
//                     </div>
//                   )
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReactTabsWithIcons;
// 'use client';
// import React, { useState } from 'react';
// import { Box, Tabs, Tab, Grid2, Typography, Button, useTheme, useMediaQuery, Container } from '@mui/material';
// import { FaReact } from 'react-icons/fa';
// import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

// const ReactTabsWithIcons = () => {
//     const [activeTab, setActiveTab] = useState('step1');
//     const theme = useTheme();
//     const isSmall = useMediaQuery(theme.breakpoints.down('md'));

//     const tabsData = [
//         {
//             eventKey: 'step1',
//             title: 'Single Way Data Flow',
//             content:
//                 'In React js development, Single-Way Data Flow ensures a clear and efficient flow of information. The unidirectional data flow enhances predictability, simplifies debugging, and boosts application stability. By adhering to this paradigm, React.js enables developers to create more manageable and scalable web applications, fostering a robust development experience.',
//             imageSrc: 'webdads/images/react-js-development/call_tracking.jpg',
//             alt: 'call_tracking'
//         },
//         {
//             eventKey: 'step2',
//             title: 'Virtual Document Object Model',
//             content:
//                 'In React js development, personalize web content with dynamic components. React’s efficient updates through the virtual DOM ensure seamless, customized experiences. Elevate your online presence and engage your audience effectively with React.js, the key to impactful and tailored web development. Experience our expert React.js solutions.',
//             imageSrc: 'webdads/images/react-js-development/custome_reporting.jpg',
//             alt: 'custome_reporting'
//         },
//         {
//             eventKey: 'step3',
//             title: 'Personalized Web Content',
//             content:
//                 'In React js development, personalize web content effortlessly. React’s dynamic components and state management enable tailored user experiences. Efficient updates through the virtual DOM ensure seamless, personalized content delivery. Elevate your online presence with React.js for impactful, customized web experiences.',
//             imageSrc: 'webdads/images/react-js-development/Personalised-Web-Content.jpg',
//             alt: 'Personalised-Web-Content'
//         },
//         {
//             eventKey: 'step4',
//             title: 'Page Speed Optimization',
//             content:
//                 'Enhance page speed in React js development with optimized rendering. Leveraging the virtual DOM and efficient component updates, React ensures swift and seamless user experiences. Prioritize performance to create blazing-fast web applications, boosting overall user satisfaction and engagement.',
//             imageSrc: 'webdads/images/react-js-development/page-speed-optimization.jpg',
//             alt: 'page-speed-optimization'
//         },
//         {
//             eventKey: 'step5',
//             title: 'Dynamic User Interfaces',
//             content:
//                 'In the realm of React js development, Dynamic User Interfaces flourish with seamless flow. React’s component-based structure, coupled with a virtual DOM, empowers developers to craft responsive interfaces. This dynamic synergy ensures optimal user experiences, making React.js a cornerstone for building engaging web applications with unparalleled interactivity and responsiveness.',
//             imageSrc: 'webdads/images/react-js-development/page-speed-optimization.jpg',
//             alt: 'page-speed-optimization'
//         }
//     ];

//     const currentTab = tabsData.find((tab) => tab.eventKey === activeTab);

//     return (
//         <Container>
//             <Box component="section" py={2}>
//                 <Box textAlign="center" mb={4}>
//                     <Typography variant={{ xs: 'h5', md: 'h4' }} fontWeight={600} gutterBottom>
//                         React Tabs with Icons
//                     </Typography>
//                     <Typography variant="subtitle1" color="text.secondary">
//                         Step through each tab to learn more
//                     </Typography>
//                 </Box>

//                 {/* Tab headers */}
//                 <Tabs value={activeTab} onChange={(e, val) => setActiveTab(val)} centered variant={'scrollable'} scrollButtons="auto">
//                     {tabsData.map((tab) => (
//                         <Tab
//                             key={tab.eventKey}
//                             value={tab.eventKey}
//                             icon={<FaReact size={20} />}
//                             iconPosition="start"
//                             label={tab.title}
//                             sx={{
//                                 textTransform: 'none',
//                                 fontWeight: activeTab === tab.eventKey ? 600 : 400,
//                                 minHeight: 64
//                             }}
//                         />
//                     ))}
//                 </Tabs>

//                 {/* Tab content */}
//                 {currentTab && (
//                     <Grid2 container spacing={4} mt={3} alignItems="center">
//                         <Grid2 size={{ xs: 12, md: 6 }}>
//                             <Typography variant="h5" fontWeight={600} gutterBottom>
//                                 {currentTab.title}
//                             </Typography>
//                             <Typography variant="body1" color="text.secondary" paragraph>
//                                 {currentTab.content}
//                             </Typography>
//                             <Button variant="text" endIcon={<MdOutlineKeyboardArrowRight />} sx={{ fontWeight: 500 }}>
//                                 Read More
//                             </Button>
//                         </Grid2>
//                         <Grid2 size={{ xs: 12, md: 6 }}>
//                             <Box
//                                 component="img"
//                                 src={currentTab.imageSrc}
//                                 alt={currentTab.alt}
//                                 sx={{
//                                     width: '100%',
//                                     height: 'auto',
//                                     borderRadius: 2
//                                     // boxShadow: 3
//                                 }}
//                             />
//                         </Grid2>
//                     </Grid2>
//                 )}
//             </Box>
//         </Container>
//     );
// };

// export default ReactTabsWithIcons;
'use client';
import React, { useState } from 'react';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
    Container,Grid2
} from '@mui/material';
 // ✅ Import Grid2 correctly
import { FaReact } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const ReactTabsWithIcons = () => {
    const [activeTab, setActiveTab] = useState('step1');
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));

    const tabsData = [
        {
            eventKey: 'step1',
            title: 'Single Way Data Flow',
            content:
                'In React js development, Single-Way Data Flow ensures a clear and efficient flow of information. The unidirectional data flow enhances predictability, simplifies debugging, and boosts application stability. By adhering to this paradigm, React.js enables developers to create more manageable and scalable web applications, fostering a robust development experience.',
            imageSrc: 'webdads/images/react-js-development/call_tracking.jpg',
            alt: 'call_tracking'
        },
        {
            eventKey: 'step2',
            title: 'Virtual Document Object Model',
            content:
                'In React js development, personalize web content with dynamic components. React’s efficient updates through the virtual DOM ensure seamless, customized experiences. Elevate your online presence and engage your audience effectively with React.js, the key to impactful and tailored web development. Experience our expert React.js solutions.',
            imageSrc: 'webdads/images/react-js-development/custome_reporting.jpg',
            alt: 'custome_reporting'
        },
        {
            eventKey: 'step3',
            title: 'Personalized Web Content',
            content:
                'In React js development, personalize web content effortlessly. React’s dynamic components and state management enable tailored user experiences. Efficient updates through the virtual DOM ensure seamless, personalized content delivery. Elevate your online presence with React.js for impactful, customized web experiences.',
            imageSrc: 'webdads/images/react-js-development/Personalised-Web-Content.jpg',
            alt: 'Personalised-Web-Content'
        },
        {
            eventKey: 'step4',
            title: 'Page Speed Optimization',
            content:
                'Enhance page speed in React js development with optimized rendering. Leveraging the virtual DOM and efficient component updates, React ensures swift and seamless user experiences. Prioritize performance to create blazing-fast web applications, boosting overall user satisfaction and engagement.',
            imageSrc: 'webdads/images/react-js-development/page-speed-optimization.jpg',
            alt: 'page-speed-optimization'
        },
        {
            eventKey: 'step5',
            title: 'Dynamic User Interfaces',
            content:
                'In the realm of React js development, Dynamic User Interfaces flourish with seamless flow. React’s component-based structure, coupled with a virtual DOM, empowers developers to craft responsive interfaces. This dynamic synergy ensures optimal user experiences, making React.js a cornerstone for building engaging web applications with unparalleled interactivity and responsiveness.',
            imageSrc: 'webdads/images/react-js-development/page-speed-optimization.jpg',
            alt: 'page-speed-optimization'
        }
    ];

    const currentTab = tabsData.find((tab) => tab.eventKey === activeTab);

    return (
        <Container>
            <Box component="section" py={5} >
                <Box textAlign="center" mb={4}>
                    <Typography
                        variant={isSmall ? 'h5' : 'h4'}
                        fontWeight={700}
                        color="#0a1f5f"
                        gutterBottom
                        sx={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Reactjs Features
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Avail the sheer benefits for your application
                    </Typography>
                </Box>

                {/* Tab headers */}
                <Tabs
                    value={activeTab}
                    onChange={(e, val) => setActiveTab(val)}
                  centered variant={'scrollable'} scrollButtons="auto"
                    sx={{
                        mb: 3,
                        '& .MuiTabs-flexContainer': {
                            // flexWrap: 'wrap',
                            // justifyContent: 'center',
                            gap: '12px'
                        },
                        '& .MuiTab-root': {
                            textTransform: 'none',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            backgroundColor: '#F8BA6A',
                            color: '#000',
                            borderRadius: '10px',
                            padding: '10px 20px',
                            transition: 'all 0.3s ease-in-out',
                            minHeight: 'unset',
                            '&:hover': {
                                backgroundColor: '#e0a95c'
                            }
                        },
                        '& .Mui-selected': {
                            backgroundImage:
                                'linear-gradient(126deg, #CD3F4A 51%, #F8BA6A 100%)',
                            color: '#fff !important',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        }
                    }}
                >
                    {tabsData.map((tab) => (
                        <Tab
                            key={tab.eventKey}
                            value={tab.eventKey}
                            icon={<FaReact size={20} />}
                            iconPosition="start"
                            label={tab.title}
                        />
                    ))}
                </Tabs>

                {/* Tab content */}
                {currentTab && (
                    <Grid2 container spacing={4} mt={3} alignItems="center">
                        <Grid2 size={{xs:12,md:6}} >
                            <Typography
                                variant="h5"
                                fontWeight={600}
                                gutterBottom
                                sx={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                {currentTab.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                paragraph
                                sx={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                {currentTab.content}
                            </Typography>
                            <Button
                                variant="text"
                                endIcon={<MdOutlineKeyboardArrowRight />}
                                sx={{ fontWeight: 500 }}
                            >
                                Read More
                            </Button>
                        </Grid2>
                        <Grid2 size={{xs:12,md:6}} >
                            <Box
                                component="img"
                                src={currentTab.imageSrc}
                                alt={currentTab.alt}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 2,
                                    // boxShadow: 3/
                                }}
                            />
                        </Grid2>
                    </Grid2>
                )}
            </Box>
        </Container>
    );
};

export default ReactTabsWithIcons;
