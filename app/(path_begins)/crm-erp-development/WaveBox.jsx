import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';

export default function WaveBox() {
    const data = [
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012514/webdads2u/crm-erp-development/icons/crm-software-solutions.png',
            title: 'CRM Software Solutions',
            desc: 'Unlock business potential with our advanced CRM software. Tailored features enhance customer interactions, streamline workflows, and boost overall efficiency.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012514/webdads2u/crm-erp-development/icons/crm-maintenance.png',
            title: 'CRM Maintenance and Upgrades',
            desc: 'Ensure optimal performance with our CRM maintenance and upgrade services. Stay ahead with the latest features, security patches, and seamless system enhancements.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012514/webdads2u/crm-erp-development/icons/integration.png',
            title: 'CRM Integration Services',
            desc: 'Seamlessly connect your systems with our CRM integration services. Enhance data flow, improve communication, and achieve a unified view for better decision-making.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012523/webdads2u/crm-erp-development/icons/layer.png',
            title: 'CRM Process Automation Solutions',
            desc: 'Boost productivity with our CRM process automation solutions. Effortlessly streamline repetitive tasks, reduce manual errors, and enhance overall operational efficiency.',
            boxType: 'crm-box1' // For unique styles if needed
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012521/webdads2u/crm-erp-development/icons/crm-mobile-application.png',
            title: 'CRM Mobile Application',
            desc: 'Stay connected on the go with our CRM mobile application. Access real-time data, manage leads, and nurture customer relationships anytime, anywhere for increased agility.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012520/webdads2u/crm-erp-development/icons/crm-migration-solutions.png',
            title: 'CRM Migration Solutions',
            desc: 'Upgrade effortlessly with our CRM migration solutions. Seamlessly transition data, maintain system integrity, and ensure a smooth migration process for uninterrupted business operations.'
        }
    ];

    return (
        <Box
            sx={{
                background: '#2167fb',
                backgroundImage: "url('/webdads/images/crm/pattern-8.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
                pt: '60px',
                pb: '100px'
            }}
        >
            <Container>
                <Grid2 container spacing={3}>
                    {data.map((item, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Box
                                sx={{
                                    background: '#fff',
                                    p: '20px',
                                    borderRadius: '10px',
                                    height: "100%",
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        component="img"
                                        src={item.img}
                                        alt={item.title}
                                        sx={{
                                            width: '40px',
                                            height: '40px',
                                            objectFit: 'contain'
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 0,
                                            color: '#0e1011',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            pl: '10px'
                                        }}
                                    >
                                        {item?.title}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '18px',
                                        color: '#7a7a7a',
                                        pt: '10px'
                                    }}
                                >
                                    {item?.desc}
                                </Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
