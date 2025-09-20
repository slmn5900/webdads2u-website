import React from 'react';
import { Box, Grid2, Typography, Link, Container } from '@mui/material';

export default function Streams() {
    const items = [
        {
            href: '/customized-crm/',
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012514/webdads2u/crm-erp-development/icons/data-structure.png',
            title: 'Customized CRM'
        },
        {
            href: '/customized-erp/',
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758012514/webdads2u/crm-erp-development/icons/setting.png',
            title: 'Customized ERP'
        }
    ];

    return (
        <Box sx={{ py: 6, px: { xs: 2, md: 6 } }}>
            <Container>
                <Grid2 container spacing={3} alignItems="center">
                    {/* Title */}
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#000',
                                fontWeight: 700,
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >
                            Our Streams
                        </Typography>
                    </Grid2>

                    {/* Items */}
                    {items.map((item, index) => (
                        <Grid2 size={{ xs: 12, md: 4 }} key={index}  >
                            <Link href={item.href} underline="none" sx={{ textDecoration: 'none' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: "center",
                                        borderRadius: '10px',
                                        boxShadow: '0 0 10px 0 rgba(216, 214, 214, 0.7)',
                                        p: '17px',
                                        mr: { md: '50px', xs: 0 },
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundImage: 'linear-gradient(180deg, #4d32f7 0%, #17c9fc 100%)',
                                            '& h3': { color: '#fff' },
                                            '& img': {
                                                filter: 'brightness(0) invert(1) !important'
                                            }
                                        }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.img}
                                        alt={item.title}
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            objectFit: 'contain',
                                            transition: 'filter 0.3s ease'
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            mb: 0,
                                            color: '#233961',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '24px',
                                            fontWeight: 500,
                                            pl: '20px',
                                            transition: 'color 0.3s ease'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Link>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
