

// 'use client'
// import React, { Fragment, useEffect, useState } from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
// import styles from '../style/home/Counter.module.css'; // Custom styles

// const CounterItem = ({ title, endValue }) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const duration = 2000; // Animation duration in milliseconds
//         const start = Date.now();

//         const animate = () => {
//             const elapsed = Date.now() - start;
//             const progress = Math.min(elapsed / duration, 1);
//             setCount(Math.floor(progress * endValue));

//             if (progress < 1) {
//                 requestAnimationFrame(animate);
//             }
//         };

//         animate();
//     }, [endValue]);

//     return (
//         <Col lg={3} md={6} xs={6}  className="text-center" style={{ background: '#F0F0F0' }}>
//             <div className={styles.counterCard}>
//                 <div className={styles.counterBody}>
//                     <div className="d-flex justify-content-center">
//                         <h2 className={styles.counterNumber} style={{color:"08203A",fontWeight:"700",fontFamily:`Poppins,Sans-serif`}}>{count}</h2>
//                         <span className={styles.counterSuffix} style={{color:"08203A",fontWeight:"800",fontFamily:`Poppins,Sans-serif`}}>+</span>
//                     </div>
//                     <p className={styles.counterTitle}>{title}</p>
//                 </div>
//             </div>
//         </Col>
//     );
// };

// const Counter = () => {
//     return (
//         <Row>
//             {counterDetails.map((detail, index) => (
//                 <Fragment key={index}>
//                     <CounterItem title={detail.title} endValue={detail.endValue} />
//                 </Fragment>
//             ))}
//         </Row>
//     );
// };

// const counterDetails = [
//     { title: 'Satisfied Clients', endValue: 150 },
//     { title: 'Successful Projects', endValue: 250 },
//     { title: 'Sales Closed', endValue: 300 },
//     { title: 'Years of Experience', endValue: 10 }
// ];

// export default Counter;


'use client';
import React, { useEffect, useState } from 'react';
import { Grid2, Card, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CounterItem = ({ title, endValue }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

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
        <Grid2 size={{ xs: 6, sm: 6, md: 3 }} ref={ref}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <Card sx={{ textAlign: 'center', p: 5, boxShadow: "none", background: "transparent" }}>
                    <Box display="flex" justifyContent="center" alignItems="baseline">
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#08203A', fontFamily: 'Poppins, sans-serif' }}>
                            {count}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#08203A', fontFamily: 'Poppins, sans-serif' }}>
                            +
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mt: 1, fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}>
                        {title}
                    </Typography>
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

    return (
        <Grid2 container spacing={0} justifyContent="center" sx={{  px: 2, backgroundColor: '#F0F0F0' }}>
            {counterDetails.map((detail, index) => (
                <CounterItem key={index} title={detail.title} endValue={detail.endValue} />
            ))}
        </Grid2>
    );
};

export default Counter;
