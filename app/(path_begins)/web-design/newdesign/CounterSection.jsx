import React, { useState, useEffect } from 'react';
import { Grid2, Typography, Box, Container, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CounterItem = ({ value, label }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (inView) {
            const duration = 2000;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                setCount(Math.floor(progress * value));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        }
    }, [inView, value]);

    return (
        <Grid2 size={{ xs: 6, sm: 3 }} ref={ref}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                <Box
                    sx={{
                        textAlign: 'center',
                        p: 2
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            color: '#002060',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.6rem' },
                            lineHeight: 1
                        }}
                    >
                        {count}+
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mt: 1,
                            fontWeight: 500,
                            color: theme.palette.text.primary,
                            fontSize: { xs: '1rem', md: '1.25rem' }
                        }}
                    >
                        {label}
                    </Typography>
                </Box>
            </motion.div>
        </Grid2>
    );
};

const CounterSection = () => {
    const counters = [
        { value: 160, label: 'Projects' },
        { value: 160, label: 'Projects' },
        { value: 160, label: 'Projects' },
        { value: 160, label: 'Projects' }
    ];

    return (
        <Box
            sx={{
                pt: 4,
                backgroundColor: 'background.paper'
            }}
        >
            <Grid2 container spacing={2} justifyContent="center">
                {counters.map((counter, index) => (
                    <CounterItem key={index} value={counter.value} label={counter.label} />
                ))}
            </Grid2>
        </Box>
    );
};

export default CounterSection;
