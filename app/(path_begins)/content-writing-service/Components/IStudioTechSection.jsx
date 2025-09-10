'use client';

import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
};

export default function IStudioTechSection() {
    const data = [
        {
            title: 'Design and catchiness',
            text: "Engaging and captivating content is the key to grabbing and retaining readers' attention. At our Content Writing Services, we specialize in crafting content that's not only catchy and interesting but also strategically designed to captivate your audience."
        },
        {
            title: 'Infographics',
            text: 'Harnessing the power of graphics to convey information is a prevalent trend in today’s marketing landscape. At iStudio Technologies Chennai, we leverage this strategy creatively and effectively to assist you in achieving your marketing objectives.'
        },
        {
            title: 'Additional methods',
            text: 'At our top-tier Content Writing Services, we don’t just stop at written content; we harness the potential of videos and similar methods to amplify your content reach. As the foremost content marketing company in Chennai.'
        },
        {
            title: 'Call to action',
            text: 'In every piece of content we craft, including our renowned Content Writing Services, we strategically place this crucial inclusion to entice potential buyers. It’s one of our primary goals, strategically positioned within the content to attract and engage your target audience.'
        }
    ];

    return (
        <Box
            component="section"
            sx={{
                background: '#ECFCF9E6',
                py: { xs: 6, md: 8 }
            }}
        >
            <Container>
                <Typography variant="h4" align="center" gutterBottom component={motion.h2} initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    Content Marketing With IStudio Technologies Chennai
                </Typography>

                <Grid2 container spacing={3} sx={{ mt: 2 }}>
                    {data.map((item, index) => (
                        <Grid2 item xs={12} sm={6} md={3} key={index}>
                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" custom={index} viewport={{ once: true }}>
                                <Box
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        boxShadow: 2,
                                        height: '100%',
                                        background: index % 2 === 0 ? 'white' : '#f0fdf4',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            boxShadow: 5
                                        }
                                    }}
                                >
                                    <Typography variant="h6" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.text}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
