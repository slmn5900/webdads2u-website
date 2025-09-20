'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid2, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
    {
        id: 'tab-1',
        label: 'Information Architecture',
        desc: 'The core focus of our UI UX design and development services is usability. The design elements are created in a way that they guide the user base to their end goal.',
        color: 'linear-gradient(135deg, #42a5f5, #478ed1)',
        bordercolor: '#6B59FF'
    },
    {
        id: 'tab-2',
        label: 'Usability Testing',
        desc: 'We maintain writing clean codes to create value-driven, consumer-focussed interfaces that build ROI for our clients and promote user interaction.',
        color: 'linear-gradient(135deg, #66bb6a, #43a047)',
        bordercolor: '#73EEA9'
    },
    {
        id: 'tab-3',
        label: 'Visual Design',
        desc: 'We integrate a design philosophy into our interfaces that comprehend the psychology of the user, are visually appealing, and highly interactive.',
        color: 'linear-gradient(135deg, #ab47bc, #8e24aa)',
        bordercolor: '#DF2A6A'
    },
    {
        id: 'tab-4',
        label: 'Wireframe and Prototype',
        desc: 'The roadmap designed is elaborative and shows the positioning of design elements in detail. Clickable prototypes show the exact flow of the structure.',
        color: 'linear-gradient(135deg, #ffa726, #fb8c00)',
        bordercolor: '#FFAF45'
    },
    {
        id: 'tab-5',
        label: 'UI Development',
        desc: 'We align your vision into the design architecture, keeping in mind usability, functionality, and the interactive quotient of the design.',
        color: 'linear-gradient(135deg, #ef5350, #e53935)',
        bordercolor: '#897DC1'
    },
    {
        id: 'tab-6',
        label: 'Research and Strategy',
        desc: 'An in-depth analysis of business needs is done along with competition mapping to devise a strategic blueprint and determine design goals.',
        color: 'linear-gradient(135deg, #26c6da, #00acc1)',
        bordercolor: '#08A9F0'
    }
];

const CircleTabs = () => {
    const [activeTab, setActiveTab] = useState('tab-1');

    return (
        <Box component="section" sx={{ py: 6, px: 2 }}>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    mb: 4,
                    fontWeight: 'bold',
                    background: 'linear-gradient(90deg,#42a5f5,#ab47bc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '1.5rem', md: '2rem' }
                }}
            >
                Our Approach to UI UX Services
            </Typography>

            <Grid2 container justifyContent="center">
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: { xs: 260, md: 520 }, // smaller circle on mobile
                            height: { xs: 260, md: 520 },
                            mx: 'auto',
                            borderRadius: '50%',
                            border: '1px solid transparent',
                            background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #D26D6D, #D26D6D) border-box',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {/* Tabs positioned around the circle */}
                        {tabs.map((tab, index) => {
                            const angle = (index / tabs.length) * (2 * Math.PI);
                            const radius = window.innerWidth < 600 ? 210 : 250; // responsive radius
                            const x = radius * Math.cos(angle);
                            const y = radius * Math.sin(angle);

                            return (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{
                                        position: 'absolute',
                                        top: `calc(50% + ${y}px)`,
                                        left: `calc(50% + ${x}px)`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <Button
                                        onClick={() => setActiveTab(tab.id)}
                                        sx={{
                                            p: 2,
                                            borderRadius: '50%',
                                            textAlign: 'center',
                                            width: { xs: 60, md: 100 },
                                            height: { xs: 60, md: 100 },
                                            fontSize: { xs: '0.55rem', md: '0.8rem' },
                                            lineHeight: 1.2,
                                            fontWeight: 600,
                                            color: '#fff',
                                            whiteSpace: 'normal',
                                            background: activeTab === tab.id ? tab.color : 'linear-gradient(135deg,#e0e0e0,#bdbdbd)',
                                            boxShadow: activeTab === tab.id ? '0px 4px 15px rgba(0,0,0,0.25)' : 'none',
                                            transition: 'all 0.3s ease',
                                            border: `5px solid ${tab.bordercolor}`,
                                            '&:hover': {
                                                transform: 'scale(1.1)',
                                                background: tab.color
                                            }
                                        }}
                                    >
                                        {tab.label.split(' ').slice(0, 2).join(' ')}
                                    </Button>
                                </motion.div>
                            );
                        })}

                        {/* Circle Content */}
                        <Box
                            sx={{
                                width: { xs: 150, md: 300 },
                                height: { xs: 150, md: 300 },
                                borderRadius: '50%',
                                bgcolor: '#fff',
                                boxShadow: 6,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                p: 2
                            }}
                        >
                            <AnimatePresence mode="wait">
                                {tabs
                                    .filter((t) => t.id === activeTab)
                                    .map((t) => (
                                        <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    background: t.color,
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    mb: 1,
                                                    fontSize: { xs: 11, md: 17 }
                                                }}
                                            >
                                                {t.label}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'text.secondary',
                                                    fontSize: { xs: 9, md: 15 },
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {t.desc}
                                            </Typography>
                                        </motion.div>
                                    ))}
                            </AnimatePresence>
                        </Box>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default CircleTabs;
