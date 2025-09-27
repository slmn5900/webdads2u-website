import React, { useContext } from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';
import Title from '../../../components/Title';
import Description from '../../../components/Description';

const Development = ({ data }) => {
    console.log(data, 'data????');
    const processItems = [
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012518/webdads2u/crm-erp-development/icons/process-automation.png',
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012518/webdads2u/crm-erp-development/icons/process-automation.png',
            title: 'Process Automation',
            desc: 'Business process automation across departments with loads of features and no process modifications.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012517/webdads2u/crm-erp-development/icons/enhanced-security.png',
            title: 'Enhanced Security',
            desc: 'Protects sensitive data and financial records from illegal access and reputation-damaging actions.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012516/webdads2u/crm-erp-development/icons/customer-services.png',
            title: 'Customer Service',
            desc: 'Deliver goods faster with increased productivity and effective inventory control to provide good customer service.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012515/webdads2u/crm-erp-development/icons/comprehensive-reporting.png',
            title: 'Comprehensive Reporting',
            desc: 'Providing full reporting on business cash flow statements, income statements, and balance sheets.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012515/webdads2u/crm-erp-development/icons/keeping-all-data-in-one-location.png',
            title: 'Keeping All Data in One Location',
            desc: 'Providing full reporting on business cash flow statements, income statements, and balance sheets.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012515/webdads2u/crm-erp-development/icons/regulatory-compliance.png',
            title: 'Regulatory Compliance',
            desc: 'Saves data in a single centralized location helping to simplify your business operations.'
        }
    ];
    const { pagedata } = useContext(MenuContext);
    const development_section = pagedata.development_section;

    return (
        <Box component="section" sx={{ pt: 5 }}>
            <Container>
                {/* Title & Description */}

                <Box textAlign="center" mb={4}>
                    <Title title={development_section.title} />
                    {/* <Typography
                        variant="h2"
                        sx={{
                            color: '#000',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: { xs: '24px', md: '30px' },
                            fontWeight: 600
                        }}
                    >
                        {development_section?.title}
                    </Typography> */}

                    <Description Des={development_section?.description} />
                    {/* <Typography
                        sx={{
                            fontSize: { xs: '16px', md: '18px' },
                            color: '#7a7a7a',
                            maxWidth: '700px',
                            mx: 'auto'
                        }}
                    >
                        {development_section?.description}
                    </Typography> */}
                </Box>

                {/* Content */}
                <Grid2 container spacing={4}>
                    {/* Left side list */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        {development_section?.lists?.map((item, index) => (
                            <Box key={index} display="flex" mb={3}>
                                <Box flexShrink={0}>
                                    <Box
                                        component="img"
                                        src={item.icon}
                                        alt={item.title}
                                        sx={{
                                            width: { xs: '50px', md: '60px' },
                                            height: 'auto'
                                        }}
                                    />
                                </Box>
                                <Box sx={{ pl: 1.5, pt: 1 }}>
                                    <Typography
                                        sx={{
                                            mb: 0,
                                            color: '#000',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '18px',
                                            fontWeight: 600
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#000',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '15px',
                                            fontWeight: 400
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Grid2>

                    {/* Right side image */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box component="img" src={development_section ? development_section?.img : '/webdads/images/crm/erp-enter.jpg'} alt={development_section?.alt} sx={{ width: '100%', borderRadius: 2 }} />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default Development;
