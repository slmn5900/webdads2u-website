// import React, { useState } from 'react';
// import { Box, Container, Grid2, Typography, Tabs, Tab, useTheme, useMediaQuery, styled, Link } from '@mui/material';
// import { MenuContext } from '../../../layout/context/menucontext';
// import { useContext } from 'react';
// const SectionWrapper = styled(Box)(({ theme }) => ({
//     paddingTop: theme.spacing(7.5),
//     paddingBottom: theme.spacing(7.5),
//     '& h5': {
//         color: '#e30e26',
//         fontFamily: "'Poppins', Sans-serif",
//         fontSize: '20px',
//         fontWeight: 500
//     },
//     '& h2': {
//         color: '#0a1f5f',
//         fontFamily: "'Poppins', Sans-serif",
//         fontSize: '36px',
//         fontWeight: 700,
//         textTransform: 'capitalize',
//         [theme.breakpoints.down('sm')]: {
//             fontSize: '28px'
//         }
//     },
//     '& p': {
//         color: '#333',
//         fontFamily: "'Poppins', Sans-serif",
//         fontSize: '16px',
//         fontWeight: 400,
//         lineHeight: '28px'
//     }
// }));

// const UnlockSeo = styled(Box)(({ theme }) => ({
//     color: '#333',
//     fontFamily: "'Poppins', Sans-serif",
//     fontSize: '18px',
//     fontWeight: 400,
//     borderLeft: '5px solid',
//     paddingLeft: theme.spacing(1.25)
// }));

// const StyledTabs = styled(Tabs)(({ theme }) => ({
//     '& .MuiTabs-indicator': {
//         display: 'none'
//     },
//     '& .MuiTabs-flexContainer': {
//         gap: 10,
//         [theme.breakpoints.down('md')]: {
//             flexWrap: 'wrap'
//         }
//     }
// }));

// const StyledTab = styled(Tab)(({ theme }) => ({
//     width: '220px',
//     border: 'none',
//     backgroundColor: '#e5ecfe',
//     borderRadius: '10px',
//     padding: theme.spacing(3.125),
//     textTransform: 'none',
//     '&.Mui-selected': {
//         background: 'linear-gradient(90deg, #864ad1 0%, #c47be8 61%)',
//         '& h6': {
//             color: '#fff'
//         },
//         '& img': {
//             filter: 'brightness(0) invert(1)'
//         }
//     },
//     [theme.breakpoints.down('md')]: {
//         width: 'calc(50% - 8px)',
//         padding: theme.spacing(2)
//     },
//     [theme.breakpoints.down('sm')]: {
//         width: '100%'
//     }
// }));

// const TabContentBox = styled(Box)(({ theme }) => ({
//     boxShadow: '7px 5px 30px 0px rgba(0, 0, 0, 0.12)',
//     padding: theme.spacing(3.5),
//     borderRadius: '10px',
//     marginTop: theme.spacing(2)
// }));

// const ContentBox = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     gap: theme.spacing(4),
//     [theme.breakpoints.down('md')]: {
//         flexDirection: 'column'
//     },
//     '& .cont': {
//         width: '50%',
//         [theme.breakpoints.down('md')]: {
//             width: '100%'
//         },
//         '& img': {
//             width: '100% !important',
//             height: 'auto !important',
//             animation: 'image_upDown2 2s infinite alternate'
//         }
//     }
// }));

// const TabLabel = ({ icon, text }) => (
//     <Box sx={{ textAlign: 'center' }}>
//         <img src={icon} alt={text} style={{ width: '60px', height: '60px' }} />
//         <br />
//         <Typography
//             variant="h6"
//             sx={{
//                 fontFamily: "'Poppins', Sans-serif",
//                 fontSize: '18px',
//                 fontWeight: 600,
//                 color: 'inherit',
//                 lineHeight: '30px'
//             }}
//         >
//             {text}
//         </Typography>
//     </Box>
// );

// function Seotab() {
//     const [value, setValue] = useState('Website SEO Copywriting');
//     const theme = useTheme();
//     const isMd = useMediaQuery(theme.breakpoints.up('md'));

//     const { pagedata } = useContext(MenuContext);
//     console.log(pagedata, 'pageData');
//     const titles1 = pagedata?.seo_help_section?.title1;
//     const titles2 = pagedata?.seo_help_section?.title2;
//     const descriptions = pagedata?.seo_help_section?.description;
//     const items = pagedata?.seo_help_section?.tab || [];
//     const cards = pagedata?.seo_help_section?.tab.map((item) => item?.content) || [];
//     console.log(
//         cards.map((item) => item),
//         'cards>>>>'
//     );
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//     return (
//         <SectionWrapper>
//             <Container>
//                 <Grid2 container spacing={4} sx={{ mb: 4 }}>
//                     <Grid2 size={{ xs: 12, md: 6 }}>
//                         <Box>
//                             <Typography variant="h5">{titles1}</Typography>
//                             <Typography variant="h2">{titles2}</Typography>
//                         </Box>
//                     </Grid2>
//                     <Grid2 size={{ xs: 12, md: 6 }}>
//                         <UnlockSeo>
//                             <Typography>{descriptions}</Typography>
//                         </UnlockSeo>
//                     </Grid2>
//                 </Grid2>

//                 <Box>
//                     <StyledTabs value={value} onChange={handleChange} variant={isMd ? 'standard' : 'scrollable'} scrollButtons="auto" allowScrollButtonsMobile>
//                         {items.map((tabs, index) => (
//                             <StyledTab key={index} value={tabs.value} label={<TabLabel icon={tabs.icon} text={tabs.label.replace('<br />', '\n')} />} />
//                         ))}
//                     </StyledTabs>
//                     {console.log(cards, 'cards???')}
//                     <TabContentBox>
//                         {cards.map((item, index) => (
//                             <div key={index} role="tabpanel" hidden={value !== item.value}>
//                                 {value === item.value && (
//                                     <ContentBox>
//                                         <Box className="cont " sx={{ textAlign: 'start' }}>
//                                             <Typography variant="h2" sx={{ mb: 2, textAlign: 'start' }}>
//                                                 {item.title}
//                                             </Typography>
//                                             <Typography sx={{ mb: 2 }}>{item.text}</Typography>
//                                             <Link href="#" color="primary">
//                                                 Read more
//                                             </Link>
//                                         </Box>
//                                         <Box className="cont">
//                                             <img alt="" src={item.image} />
//                                         </Box>
//                                     </ContentBox>
//                                 )}
//                             </div>
//                         ))}
//                     </TabContentBox>
//                 </Box>
//             </Container>
//         </SectionWrapper>
//     );
// }

// export default Seotab;

import React, { useState, useContext, useEffect } from 'react';
import { Box, Container, Typography, Tabs, Tab, useTheme, useMediaQuery, styled, Link } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';

// ==== Styled Components ====
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

// ==== Component ====
function Seotab() {
    const { pagedata } = useContext(MenuContext);
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const titles1 = pagedata?.seo_help_section?.title1;
    const titles2 = pagedata?.seo_help_section?.title2;
    const descriptions = pagedata?.seo_help_section?.description;
    const items = pagedata?.seo_help_section?.tab || [];

    // ✅ Default to first tab value dynamically
    const [value, setValue] = useState(items.length > 0 ? items[0].value : '');

    useEffect(() => {
        if (items.length > 0 && !value) {
            setValue(items[0].value);
        }
    }, [items, value]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <SectionWrapper>
            <Container>
                {/* Header */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        mb: 7
                    }}
                >
                    <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 48%' } }}>
                        <Typography variant="h5">{titles1}</Typography>
                        <Typography variant="h2">{titles2}</Typography>
                    </Box>
                    <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 48%' } }}>
                        <UnlockSeo>
                            <Typography>{descriptions}</Typography>
                        </UnlockSeo>
                    </Box>
                </Box>

                {/* Tabs */}
                <Box>
                    <StyledTabs value={value} onChange={handleChange} variant={isMd ? 'standard' : 'scrollable'} scrollButtons="auto" allowScrollButtonsMobile>
                        {items.map((tab, index) => (
                            <StyledTab key={index} value={tab.value} label={<TabLabel icon={tab.icon} text={tab.label.replace('<br />', '\n')} />} />
                        ))}
                    </StyledTabs>

                    {/* Tab Content */}
                    <TabContentBox>
                        {items.map((tab, index) => (
                            <div key={index} role="tabpanel" hidden={value !== tab.value}>
                                {value === tab.value && (
                                    <ContentBox>
                                        <Box className="cont" sx={{ textAlign: 'start' }}>
                                            <Typography variant="h2" sx={{ mb: 2, textAlign: 'start' }}>
                                                {tab.content.title}
                                            </Typography>
                                            <Typography sx={{ mb: 2 }}>{tab.content.text}</Typography>
                                            <Box sx={{ color: 'blue', textDecoration: 'none' }} component={'a'} href="/seo-company-in-chennai/">
                                                Read More {`>`}
                                            </Box>
                                            {/* <Link href="#" color="primary">
                                                Read more
                                            </Link> */}
                                        </Box>
                                        <Box className="cont">
                                            <img alt="" src={tab.content.image} />
                                        </Box>
                                    </ContentBox>
                                )}
                            </div>
                        ))}
                    </TabContentBox>
                </Box>
            </Container>
        </SectionWrapper>
    );
}

export default Seotab;
