// import React from 'react';

// function WordpressCard() {
//     return (
//         <section className="WordpressCard-main">
//             <div className="container">
//                 <div className="row WordpressCard">
//                     <div className="col-sm-12 col-md-4 col-lg-4 text-center">
//                         <div className="card p-2">
//                             <div>
//                                 <img src="webdads/images/wordpress-development/Wordpress-eCommerce-Solutions.png" alt="Wordpress-eCommerce-Solutions" className="img-fluid" loading="lazy" />
//                             </div>
//                             <div className="card-title">
//                                 <h1>Theme Utilization</h1>
//                             </div>
//                             <div className="card-body">
//                                 <p>We use advanced features built-in to help users set up, manage their website easier without technical skills.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-4 col-lg-4 text-center">
//                         <div className="card p-2" style={{ boxShadow: 'none' }}>
//                             <div>
//                                 <img src="webdads/images/wordpress-development/Wordpress-eCommerce-Solutions.png" alt="Wordpress-eCommerce-Solutions" className="img-fluid" loading="lazy" />
//                             </div>
//                             <div className="card-title">
//                                 <h1>Flexible and easy to customize</h1>
//                             </div>
//                             <div className="card-body">
//                                 <p>We build tools, widgets for important features for each website that allows a user to update and customize later.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-4 col-lg-4 text-center">
//                         <div className="card p-2">
//                             <div>
//                                 <img src="webdads/images/wordpress-development/Wordpress-eCommerce-Solutions.png" alt="Wordpress-eCommerce-Solutions" className="img-fluid" loading="lazy" />
//                             </div>
//                             <div className="card-title">
//                                 <h1>Extensions & Plugins</h1>
//                             </div>
//                             <div className="card-body">
//                                 <p>Using top-rated extensions and customize the extension to meet requirements from different projects.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default WordpressCard;
'use client';

import React from 'react';
import { Container, Grid2, Card, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const cards = [
    {
        title: 'Theme Utilization',
        desc: 'We use advanced features built-in to help users set up, manage their website easier without technical skills.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333860/webdads2u/wordpress-development/icons/theme-utilization-wordpress.png'
    },
    {
        title: 'Flexible and Easy to Customize',
        desc: 'We build tools, widgets for important features for each website that allows a user to update and customize later.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333850/webdads2u/wordpress-development/icons/flexible-and-easy-to-customize.png',
        noShadow: true // middle card with flat style
    },
    {
        title: 'Extensions & Plugins',
        desc: 'Using top-rated extensions and customizing them to meet requirements from different projects.',
        img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757333839/webdads2u/wordpress-development/icons/wordpress-plugin.png'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
};

export default function WordpressCard() {
    return (
        <section>
            <Container maxWidth="lg">
                <Grid2 container spacing={4} justifyContent="center">
                    {cards.map((card, i) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <motion.div custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardVariants}>
                                <Card
                                    sx={{
                                        p: 3,
                                        textAlign: 'center',
                                        borderRadius: 3,
                                        boxShadow: card.noShadow ? 'none' : 3,
                                        background: !card.noShadow ? '#F1FBFF' : 3,
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': card.noShadow ? {} : { transform: 'translateY(-6px)', boxShadow: 6 }
                                    }}
                                >
                                    <Box mb={2}>
                                        <img src={card.img} alt={card.title} loading="lazy" style={{ maxWidth: 80, margin: 'auto' }} />
                                    </Box>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.desc}
                                    </Typography>
                                </Card>
                            </motion.div>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </section>
    );
}
