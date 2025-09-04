import React, { useContext } from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';

export default function CrmDevelopment() {
    const items = [
        {
            img: '/webdads/images/crm/strategy-crm.png',
            title: 'Strategic CRM',
            desc: 'Strategic CRM focuses on long-term planning and customer relationship development. It integrates technology to align business goals with customer needs, enhancing overall efficiency.'
        },
        {
            img: '/webdads/images/crm/analytical-crm.png',
            title: 'Analytical CRM',
            desc: 'Analytical CRM leverages data analysis to gain insights into customer behavior, preferences, and trends. It empowers small businesses to make informed decisions and deliver personalized experiences.'
        },
        {
            img: '/webdads/images/crm/operational-crm.png',
            title: 'Operational CRM',
            desc: 'Operational CRM streamlines day-to-day customer-facing processes, such as sales, marketing, and service automation. The best CRM for small businesses optimizes operational efficiency.'
        },
        {
            img: '/webdads/images/crm/collabrative-crm.png',
            title: 'Collaborative CRM',
            desc: 'Collaborative CRM emphasizes cross-departmental communication and teamwork to enhance customer relationships. It ensures a unified approach, where teams share customer information seamlessly.'
        }
    ];

    const { design_section } = useContext(MenuContext);

    return (
        <Box
            sx={{
                background: '#ecfcf9e6',
                pt: '50px',
                pb: '50px'
            }}
        >
            <Container>
                {/* Title + Description + Image */}
                <Box textAlign="center">
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#262250',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '30px',
                            fontWeight: 600
                        }}
                    >
                        {design_section ? design_section?.title : 'CRM DEVELOPMENT SOLUTION'}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '18px',
                            width: { xs: '100%', md: '80%' },
                            mx: 'auto',
                            color: '#7a7a7a',
                            pb: '20px'
                        }}
                    >
                        {design_section
                            ? design_section?.description
                            : 'Boost efficiency, streamline processes, and enhance customer relationships seamlessly. Empower your business with our tailored CRM development solutions – Best CRM for small businesses.'}
                    </Typography>
                    <Box
                        component="img"
                        src={design_section ? design_section?.img : '/webdads/images/crm/crm-mockup.jpg'}
                        alt={design_section?.alt}
                        sx={{
                            height: { xs: 'auto', md: 267 },
                            width: { xs: '100%', md: 600 },
                            maxWidth: '100%'
                        }}
                    />
                </Box>

                {/* 4 CRM Cards */}
                <Grid2 container spacing={3} sx={{ pt: 5 }}>
                    {items.map((item, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Box
                                sx={{
                                    background: '#fff',
                                    p: '10px',
                                    textAlign: 'center',
                                    height: '400px',
                                    transition: 'box-shadow 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)'
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.img}
                                    alt={item.title}
                                    sx={{
                                        maxWidth: '100%',
                                        height: 'auto'
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: '25px',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: 600,
                                        mt: 1
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: '17px',
                                        color: '#000',
                                        pt: 1,
                                        textAlign: 'center'
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
