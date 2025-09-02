'use client';

import { Container, Grid2, Typography, Box } from '@mui/material';

const CreatingProcess = () => {
    const processSteps = [
        { number: '01', img: '/webdads/images/webdesign/Requirement.png', title: 'Requirement Gathering' },
        { number: '02', img: '/webdads/images/webdesign/planning.png', title: 'planning' },
        { number: '03', img: '/webdads/images/webdesign/UX-Strategy.png', title: 'ux strategy' },
        { number: '04', img: '/webdads/images/webdesign/wireframe.png', title: 'wireframe creation' },
        { number: '05', img: '/webdads/images/webdesign/Building-Prototype.png', title: 'building prototype' },
        { number: '06', img: '/webdads/images/webdesign/pen-icon.png', title: 'creating visual design' },
        { number: '07', img: '/webdads/images/webdesign/Final-Branding.png', title: 'final branding' }
    ];

    const expectations = [
        {
            img: '/webdads/images/webdesign/standard.png',
            title: 'Design Standards',
            text: 'Embrace our Design Standards for exceptional web designing services. We uphold meticulous design principles, ensuring visually stunning and functional websites that elevate your online presence. With a focus on user experience, we set the standard for impactful and engaging digital solutions.'
        },
        {
            img: '/webdads/images/webdesign/security.png',
            title: 'Security',
            text: 'Security is at the core of everything we do at webdads2u Technologies...'
        },
        {
            img: '/webdads/images/webdesign/unique.png',
            title: 'Unique Creation',
            text: 'Our commitment to unique creations sets us apart...'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_70,h_70,dpr_1.5/f_auto,q_auto/v1704460504/industrial-standard/industrial-standard.png?_i=AA',
            title: 'Industrial Standards',
            text: 'Adhering to industry standards is a cornerstone of our approach...'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/images/c_scale,w_63,h_53,dpr_1.5/f_auto,q_auto/v1704460637/colour-capability/colour-capability.png?_i=AA',
            title: 'Colour Compatibility',
            text: 'Understanding the importance of branding consistency...'
        }
    ];

    return (
        <Box component="section" sx={{ py: 5 }} className="creating-process">
            <Container>
                {/* Process Section */}
                <Grid2 container spacing={2} sx={{ alignItems: 'center' }} textAlign={'center'}>
                    <Grid2 size={{ xs: 12 }} item>
                        <Typography variant="h2" component="h2" gutterBottom>
                            Our Website Creating Process
                        </Typography>
                    </Grid2>

                    {processSteps.map((step, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index} sx={{ mt: 2 }}>
                            <Box className="require-box" sx={{ textAlign: 'center', p: 2 }}>
                                <Typography variant="h5" component="h5">
                                    {step.number}
                                </Typography>
                                <Box component="img" src={step.img} alt="" sx={{ maxWidth: '100%', height: 'auto', my: 2 }} />
                                <Typography variant="h6" component="h6">
                                    {step.title}
                                </Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>

                {/* Expectations Section */}
                <Grid2 container spacing={4} sx={{ pt: 8 }}>
                    <Grid2 size={{ xs: 12 }} item>
                        <Typography variant="h2" component="h2" gutterBottom>
                            What Enterprises can expect from webdads2u Technologies?
                        </Typography>
                    </Grid2>

                    {expectations.map((item, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Box className="webdesign-standards-technologies-section" sx={{ p: 2 }}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box component="img" src={item.img} alt="" sx={{ maxWidth: 70, height: 'auto', mb: 2 }} />
                                    <Typography variant="h4" component="h4" gutterBottom>
                                        {item.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body1" component="p">
                                    {item.text}
                                </Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
};

export default CreatingProcess;
