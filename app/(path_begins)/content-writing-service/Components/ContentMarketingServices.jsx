'use client';

import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Title from '../../../../components/Title';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
};

export default function ContentMarketingServices() {
    const services = [
        {
            title: 'Content Strategy Strategically Right',
            text: 'At our Content Writing Services, we tailor a bespoke content strategy exclusively for your business, designed to resonate with your audience and achieve your objectives effectively.'
        },
        {
            title: 'Creating Content Creating Magic',
            text: "At our Content Writing Services, we specialize in crafting custom content strategies tailored specifically to your business needs. Whether it's understanding your audience or achieving your goals, we ensure every aspect of our strategy aligns perfectly with your objectives."
        },
        {
            title: 'Developing Content Developing Success',
            text: 'As part of our comprehensive Content Writing Services, we create a meticulous content calendar that aligns seamlessly with your content strategy. From there, we initiate the development of your content, scripting the path to your success.'
        },
        {
            title: 'Optimizing Content Optimizing Victory',
            text: 'In our Content Writing Services, we seamlessly integrate SEO into your content creation process. This ensures that your content is automatically optimized to satisfy both search engines and users, enhancing its visibility and effectiveness.'
        },
        {
            title: 'Promoting Content Promoting You',
            text: "With our expansive network, we promote your content across all platforms as part of our Content Writing Services. This strategic approach elevates your brand's visibility, making it one of the most recognized names in its industry."
        },
        {
            title: 'Reporting Content Reporting Performance',
            text: 'At our Content Writing Services, our professional and experienced in-house team works diligently to craft captivating content that works like magic.'
        }
    ];

    return (
        <Box
            component="section"
            sx={{
                background: '#fff',
                py: { xs: 6, md: 8 }
            }}
        >
            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <Title title="Our Content Marketing Services in Chennai - Scripting Success, Building Brands" />
                </Box>
                {/* <Typography variant="h4" align="center" gutterBottom component={motion.h2} initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    Our Content Marketing Services in Chennai - Scripting Success, Building Brands
                </Typography> */}

                <Grid2 container spacing={3} sx={{ mt: 2 }}>
                    {services.map((service, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" custom={index} viewport={{ once: true }}>
                                <Box
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        boxShadow: 2,
                                        height: '100%',
                                        minHeight: 'calc(300px - 20px)',
                                        background: '#f9fafb',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        pt: 4,
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            boxShadow: 5,
                                            background: 'linear-gradient(135deg, #d1fae5, #ecfdf5)'
                                        }
                                    }}
                                >
                                    <Typography variant="h6" gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {service.text}
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
