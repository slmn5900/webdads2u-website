'use client';
import React, { useEffect, useState } from 'react';
import { Grid2, Card, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../style/WebDesigningSection.css'

const CounterItem = ({ title, endValue }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    const data = [
        {label: 'Successful Projects'}
    ]

    useEffect(() => {
        if (inView) {
            const duration = 2000;
            const start = Date.now();

            const animate = () => {
                const elapsed = Date.now() - start;
                const progress = Math.min(elapsed / duration, 1);
                setCount(Math.floor(progress * endValue));
                if (progress < 1) requestAnimationFrame(animate);
            };

            animate();
        }
    }, [inView, endValue]);

    return (

        <Grid2 size={{ xs: 6, sm: 6, md: 3 }} ref={ref} >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <Card sx={{ textAlign: 'center', p: 5, background: "transparent" }} className='card-section-border'>
                    <div>
                          <Typography className='counter-title'>
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1, fontWeight: 500, fontFamily: 'Poppins, sans-serif' }} >
                            {title}
                        </Typography>
                      
                        <Box display="flex" justifyContent="center" alignItems="baseline">
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#08203A', fontFamily: 'Poppins, sans-serif' }} className='counter-value'>
                                {count}
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 800, color: '#08203A', fontFamily: 'Poppins, sans-serif' }} className='counter-sign'>
                                +
                            </Typography>
                        </Box>
                    </div>


                </Card>
            </motion.div>
        </Grid2>
    );
};

const Counter = () => {
    const counterDetails = [
        { title: 'Satisfied Clients', endValue: 150 },
        { title: 'Successful Projects', endValue: 250 },
        { title: 'Sales Closed', endValue: 300 },
        { title: 'Years of Experience', endValue: 10 }
    ];

    //  const counterDetailsMobile = [
    //     { title: <>Satisfied <br /> Clients</>, endValue: 150 },
    //     { title: <>Successful <br/> Projects</>, endValue: 250 },
    //     { title: <>Sales <br/> Closed</>, endValue: 300 },
    //     { title: <>Years of Experience</>, endValue: 10 }
    // ];
    const counterDetailsMobile = [
        { title: 'Satisfied Clients', endValue: 150 },
        { title: 'Successful Projects', endValue: 250 },
        { title: 'Sales Closed', endValue: 300 },
        { title: 'Years of Experience', endValue: 10 }
    ];

    return (
        <div>
            <Grid2 container spacing={0} justifyContent="center" sx={{ px: 2, backgroundColor: '#FCF9EA' }} className="Counter-section">
                {counterDetails.map((detail, index) => (
                    <CounterItem key={index} endValue={detail.endValue} title={detail.title} />
                ))}
            </Grid2>

            {/* // mobile */}



        </div>

    );
};

export default Counter;
