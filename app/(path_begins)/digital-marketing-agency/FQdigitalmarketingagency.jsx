// import React from 'react'
// import Accordion from 'react-bootstrap/Accordion';

// function Fqdigitalmarketingagency() {
//   return (
//     <section className='Fqdigitalmarketingagency-main'>
//                     <div className="container">
//                 <div className="row justify-content-start align-items-start">
//                     <div className="col-sm-12 col-md-12 col-lg-4 fqdigitalmarketingagency">
//                         <h1>Frequently Asked Questions</h1>
//                         <p>Certainly! Here are five frequently asked questions (FAQs) about Social Media Marketing with their corresponding answers:</p>

//                     </div>
//                     <div className="col-sm-12 col-md-12 col-lg-6">

//                     <div className='fqdigitalmarketingagency-Accordion'>
//                             <Accordion defaultActiveKey="0" flush>
//                             <Accordion.Item eventKey="0">
//                                 <Accordion.Header>What is Social Media Marketing (SMM)?</Accordion.Header>
//                                 <Accordion.Body>
//                                 – Social Media Marketing (SMM) involves using social media platforms like Facebook, Instagram, Twitter, and LinkedIn to promote products or services. It encompasses various strategies such as creating engaging content, running ads, and engaging with followers to achieve marketing objectives.
//                                 </Accordion.Body>
//                             </Accordion.Item>
//                             <Accordion.Item eventKey="1">
//                                 <Accordion.Header>Why is Social Media Marketing important for businesses?</Accordion.Header>
//                                 <Accordion.Body>
//                                 – Social Media Marketing is crucial for businesses as it provides an opportunity to reach a large audience, engage with potential customers, build brand awareness, drive website traffic, and increase sales. It also allows businesses to gather valuable insights into consumer behavior and preferences.
//                                 </Accordion.Body>
//                             </Accordion.Item>
//                             <Accordion.Item eventKey="2">
//                                 <Accordion.Header>How can businesses measure the success of their Social Media Marketing efforts?</Accordion.Header>
//                                 <Accordion.Body>
//                                 – Businesses can measure the success of their Social Media Marketing efforts by tracking metrics such as reach, engagement, website traffic, leads generated, and conversions. Tools like Facebook Insights, Instagram Insights, and Google Analytics provide valuable data for analyzing performance.
//                                 </Accordion.Body>
//                             </Accordion.Item>
//                             <Accordion.Item eventKey="3">
//                                 <Accordion.Header>What are the benefits of hiring a Social Media Marketing agency?</Accordion.Header>
//                                 <Accordion.Body>
//                                 – Hiring a Social Media Marketing agency can offer several benefits, including access to expertise and industry knowledge, time-saving, strategic planning, creative content creation, and campaign optimization. Agencies can also provide valuable insights and analytics to improve ROI.
//                                 </Accordion.Body>
//                             </Accordion.Item>
//                             <Accordion.Item eventKey="4">
//                                 <Accordion.Header>How can businesses stay updated with the latest trends in Social Media Marketing?</Accordion.Header>
//                                 <Accordion.Body>
//                                 – Businesses can stay updated with the latest trends in Social Media Marketing by following industry blogs, attending webinars and conferences, joining online communities, following social media influencers, and continuously monitoring changes and updates on social media platforms.
//                                 </Accordion.Body>
//                             </Accordion.Item>
//                         </Accordion>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//     </section>
//   )
// }

// export default Fqdigitalmarketingagency;

'use client';

import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Grid2, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const faqs = [
    {
        q: 'What is Social Media Marketing (SMM)?',
        a: 'Social Media Marketing (SMM) involves using social media platforms like Facebook, Instagram, Twitter, and LinkedIn to promote products or services. It encompasses strategies such as creating engaging content, running ads, and engaging with followers to achieve marketing objectives.'
    },
    {
        q: 'Why is Social Media Marketing important for businesses?',
        a: 'Social Media Marketing is crucial as it helps businesses reach a large audience, engage with potential customers, build brand awareness, drive website traffic, and increase sales. It also provides valuable insights into consumer behavior and preferences.'
    },
    {
        q: 'How can businesses measure the success of their Social Media Marketing efforts?',
        a: 'Success can be measured by tracking metrics like reach, engagement, website traffic, leads, and conversions. Tools such as Facebook Insights, Instagram Insights, and Google Analytics help analyze performance.'
    },
    {
        q: 'What are the benefits of hiring a Social Media Marketing agency?',
        a: 'Hiring an agency gives access to expertise, strategic planning, creative content, campaign optimization, and valuable analytics. This saves time and improves ROI.'
    },
    {
        q: 'How can businesses stay updated with the latest trends in Social Media Marketing?',
        a: 'Businesses can stay updated by following industry blogs, attending webinars, joining online communities, following influencers, and monitoring platform updates.'
    }
];

function Fqdigitalmarketingagency() {
    return (
        <section className="Fqdigitalmarketingagency-main">
            <Container>
                <Grid2 container spacing={4} alignItems="flex-start">
                    {/* Left Content */}
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <Typography variant="h4" gutterBottom fontWeight={700}>
                                Frequently Asked Questions
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Certainly! Here are five frequently asked questions (FAQs) about Social Media Marketing with their corresponding answers:
                            </Typography>
                        </motion.div>
                    </Grid2>

                    {/* Right Accordion */}
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Box className="fqdigitalmarketingagency-accordion">
                            {faqs.map((item, index) => (
                                <motion.div key={index} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                                    <Accordion disableGutters elevation={2} sx={{ mb: 2, borderRadius: 2 }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                                            <Typography fontWeight={600}>{item.q}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography color="text.secondary">{item.a}</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </motion.div>
                            ))}
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </section>
    );
}

export default Fqdigitalmarketingagency;
