'use client';
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

export default function TheTimeFrame() {
    const card = [
        {
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756807977/webdads2u/mobile-app-development/icons/the-time-frame.png',
            title: 'The Time Frame',
            description: 'The cost of design increases when the project is time limited.'
        },
        {
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756807974/webdads2u/mobile-app-development/icons/the-complexity.png',
            title: 'The Complexity',
            description: 'Complex mobile apps require more effort from designers.'
        },
        {
            icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1756807968/webdads2u/mobile-app-development/icons/the-number-of-revisions.png',
            title: 'The Number Of Revisions',
            description: 'The more design revisions you want to get, the higher cost.'
        }
    ];

    return (
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }} gap={3} p={3}>
            {card.map((item, index) => (
                <MotionCard
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    sx={{
                        borderRadius: 3,
                        boxShadow: 3,
                        textAlign: 'center',
                        p: 2,
                        bg: '#F4FCFE'
                    }}
                >
                    <CardContent sx={{ display: 'flex', gap: 2, p: 0, alignItems: 'center', bg: '#F4FCFE' }}>
                        <Box
                            component="img"
                            src={item.icon}
                            alt={item.title.toLocaleLowerCase()}
                            sx={{
                                width: 60,
                                height: 60,
                                // mb: 2,
                                mx: 'auto'
                            }}
                        />
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </Box>
                    </CardContent>
                </MotionCard>
            ))}
        </Box>
    );
}
