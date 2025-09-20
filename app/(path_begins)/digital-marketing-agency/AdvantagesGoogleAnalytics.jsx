'use client';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { LiaArrowRightSolid, LiaArrowLeftSolid } from 'react-icons/lia';
import { Box, Typography, Container, Paper, Grid2 } from '@mui/material';
import { motion } from 'framer-motion';

const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Advantagesgoogleaalytics() {
    return (
        <Box component="section" sx={{ py: { xs: 0, md: 10 }, background: 'linear-gradient(90deg,#701855 0%,#032060 100%)', display: { xs: 'none', md: 'block' } }}>
            <Container>
                {/* Header */}
                <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom color="white">
                        Advantages of Google Analytics
                    </Typography>
                    <Typography variant="body1" color="white" maxWidth="md" mx="auto">
                        Google Analytics offers invaluable insights into website performance, user behavior, and traffic sources, empowering Digital Marketing professionals to make data-driven decisions. Its robust features allow for comprehensive
                        analysis, goal tracking, and optimization to enhance online marketing strategies and maximize ROI.
                    </Typography>
                </Box>

                {/* Timeline */}
                <Timeline position="alternate">
                    {/* Item 1 */}
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="white">
                            Analyzing traffic sources is crucial in Digital Marketing to understand where website visitors are coming from, whether it’s organic search, social media, referrals, or paid campaigns. By identifying the most effective
                            channels, marketers can allocate resources effectively to optimize their strategies.
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LiaArrowLeftSolid />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>

                        <TimelineContent>
                            <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        // p: { xs: 2, md: 3 },
                                        borderRadius: 2,
                                        textAlign: 'center'
                                    }}
                                >
                                    <Grid2 container spacing={2} alignItems="center">
                                        <Grid2 size={{ xs: 12, sm: 2 }} sx={{ background: 'blue', p: 2, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                                            <Box textAlign="center">
                                                <img
                                                    src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757488277/webdads2u/digital-marketing-agency/icons/analyze-traffic-source.png"
                                                    alt="Analyze Traffic Source"
                                                    loading="lazy"
                                                    style={{
                                                        maxHeight: 50,
                                                        width: 'auto',
                                                        maxWidth: '100%'
                                                    }}
                                                />
                                            </Box>
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, sm: 10 }}>
                                            <Typography variant="h6" fontWeight={600} textAlign={'start'}>
                                                Analyze Traffic Source
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                </Paper>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Item 2 */}
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="white">
                            Creating a visual chart for traffic flow is essential in Digital Marketing to visually represent website traffic patterns and sources. Utilizing tools like Google Analytics or data visualization software, marketers can
                            analyze and interpret traffic data more effectively, aiding in strategic decision-making and optimization efforts.
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LiaArrowRightSolid />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>

                        <TimelineContent>
                            <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        // p: { xs: 2, md: 3 },
                                        borderRadius: 2,
                                        textAlign: 'center'
                                    }}
                                >
                                    <Grid2 container spacing={2} alignItems="center">
                                        <Grid2 size={{ xs: 12, sm: 2 }} sx={{ background: '#FE0C7E', p: 1, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                                            <Box textAlign="start">
                                                <img
                                                    src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757488273/webdads2u/digital-marketing-agency/icons/visual-chart.png"
                                                    alt="Visual Chart for Traffic Flow"
                                                    loading="lazy"
                                                    style={{
                                                        maxHeight: 50,
                                                        width: 'auto',
                                                        maxWidth: '100%'
                                                    }}
                                                />
                                            </Box>
                                        </Grid2>
                                        <Grid2 xsize={{ xs: 12, sm: 10 }}>
                                            <Typography variant="h6" fontWeight={600} textAlign={'start'}>
                                                Visual Chart for Traffic Flow
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                </Paper>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Item 3 */}
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="white">
                            Measuring the popularity of a specific page is integral to Digital Marketing strategies. By analyzing metrics like page views, time on page, and bounce rate, marketers can gauge user engagement and tailor content and
                            promotions to optimize performance and drive conversions.
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LiaArrowLeftSolid />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>

                        <TimelineContent>
                            <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        // p: { xs: 2, md: 3 },
                                        borderRadius: 2,
                                        textAlign: 'center'
                                    }}
                                >
                                    <Grid2 container spacing={2} alignItems="center">
                                        <Grid2 size={{ xs: 12, sm: 2 }} sx={{ background: '#AE56E1', p: 1, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                                            <Box textAlign="start">
                                                <img
                                                    src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757488269/webdads2u/digital-marketing-agency/icons/page.png"
                                                    alt="Popularity of Specific Page"
                                                    loading="lazy"
                                                    style={{
                                                        maxHeight: 50,
                                                        width: 'auto',
                                                        maxWidth: '100%'
                                                    }}
                                                />
                                            </Box>
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, sm: 10 }}>
                                            <Typography variant="h6" fontWeight={600} textAlign={'start'}>
                                                Popularity of Specific Page
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                </Paper>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Item 4 */}
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="white">
                            Understanding visitors’ information is crucial in Digital Marketing for crafting targeted campaigns and personalized experiences. By analyzing demographics, behaviour, and preferences, marketers can segment their audience
                            effectively and deliver relevant content and offers.
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LiaArrowRightSolid />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>

                        <TimelineContent>
                            <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        // p: { xs: 2, md: 3 },
                                        borderRadius: 2,
                                        textAlign: 'center'
                                    }}
                                >
                                    <Grid2 container spacing={2} alignItems="center">
                                        <Grid2 size={{ xs: 12, sm: 2 }} sx={{ background: '#006EBA', p: 1, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                                            <Box textAlign="start">
                                                <img
                                                    src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757488264/webdads2u/digital-marketing-agency/icons/visitor-information.png"
                                                    alt="Visitors Information"
                                                    loading="lazy"
                                                    style={{
                                                        maxHeight: 50,
                                                        width: 'auto',
                                                        maxWidth: '100%',
                                                        color: 'black'
                                                    }}
                                                />
                                            </Box>
                                        </Grid2>
                                        <Grid2 size={{ xs: 12, sm: 10 }}>
                                            <Typography variant="h6" fontWeight={600} sx={{ fontSize: { xs: 12, md: 20 } }} textAlign={'start'}>
                                                Visitors’ Information
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                </Paper>
                            </motion.div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        </Box>
    );
}
