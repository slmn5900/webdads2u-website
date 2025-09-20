'use client';

import { Container, Grid2, Typography, Box, Tooltip } from '@mui/material';

const CreatingProcess = () => {
    const processSteps = [
        { number: '01', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410076/webdads2u/web-design/icons/requirement-gathering.png', title: 'Requirement Gathering' },
        { number: '02', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410073/webdads2u/web-design/icons/planning.png', title: 'planning' },
        { number: '03', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410069/webdads2u/web-design/icons/ux-strategy.png', title: 'ux strategy' },
        { number: '04', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410066/webdads2u/web-design/icons/wireframe.png', title: 'wireframe creation' },
        { number: '05', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410063/webdads2u/web-design/icons/building-prototype.png', title: 'building prototype' },
        { number: '06', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410060/webdads2u/web-design/icons/pen-icon.png', title: 'creating visual design' },
        { number: '07', img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410190/webdads2u/web-design/icons/final-branding.png', title: 'final branding' }
    ];

    const expectations = [
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410187/webdads2u/web-design/icons/design-standards.png',
            title: 'Design Standards',
            text: 'Embrace our Design Standards for exceptional web designing services. We uphold meticulous design principles, ensuring visually stunning and functional websites that elevate your online presence. With a focus on user experience, we set the standard for impactful and engaging digital solutions.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410183/webdads2u/web-design/icons/security.png',
            title: 'Security',
            text: 'Security is at the core of everything we do at webdads2u Technologies. We implement robust security measures to protect your enterprise data and user information. From encryption to regular audits and best practices, we prioritize ensuring airtight security across all our solutions, giving you peace of mind in an increasingly digital world.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410179/webdads2u/web-design/icons/unique-creation-security.png',
            title: 'Unique Creation',
            text: 'Our commitment to unique creations sets us apart. We specialize in crafting bespoke solutions tailored to your enterprise’s specific needs and preferences. Our team ensures that your digital footprint stands out in the crowd. Our focus on uniqueness extends to our web designing services, providing tailor-made solutions that align perfectly with your brand’s identity and objectives.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410176/webdads2u/web-design/icons/industrial-standard.png',
            title: 'Industrial Standards',
            text: 'Adhering to industry standards is a cornerstone of our approach. At webdads2u Technologies, we ensure that every project meets and often surpasses the established industrial norms. Our solutions are designed and developed with a focus on compliance, reliability, and scalability, aligning seamlessly with industry best practices.'
        },
        {
            img: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410172/webdads2u/web-design/icons/colour-capability.png',
            title: 'Colour Compatibility',
            text: 'Understanding the importance of branding consistency, we prioritize color compatibility in our designs. We maintain color harmony, reinforcing your enterprise’s brand recognition and credibility across all platforms. This attention to detail is reflected in our web designing services, ensuring cohesive and visually appealing digital experiences for your audience.'
        }
    ];

    return (
        <Box component="section" sx={{ py: 5 }} className="creating-process">
            <Container>
                {/* Process Section */}
                <Grid2 container spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }} textAlign={'center'}>
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
                                <Box component="img" src={step.img} alt="" sx={{ maxWidth: '100%', height: 'auto', my: 1 }} />
                                <Typography variant="h6" component="h6">
                                    {step.title}
                                </Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>

                {/* Expectations Section */}
                <Grid2 container spacing={4} sx={{ pt: 8 }}>
                    <Grid2 size={{ xs: 12 }}>
                        <Typography variant="h2" component="h2" gutterBottom>
                            What Enterprises can expect from webdads2u Technologies?
                        </Typography>
                    </Grid2>

                    {/* {expectations.map((item, index) => (
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
                    ))} */}
                    {expectations.map((item, index) => {
                        const words = item.text.split(' ');
                        const limitedText = words.slice(0, 30).join(' ');
                        const showTooltip = words.length > 30;

                        return (
                            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Box
                                    className="webdesign-standards-technologies-section"
                                    sx={{
                                        p: 2,
                                        height: '100%', // Ensures even height for all cards
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Box component="img" src={item.img} alt="" sx={{ maxWidth: 70, height: 'auto', mb: 2 }} />
                                        <Typography variant="h4" component="h4" gutterBottom>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                    <Tooltip title={showTooltip ? item.text : ''} arrow placement="top">
                                        <Typography
                                            variant="body1"
                                            component="p"
                                            sx={{
                                                flexGrow: 1, // Allows text to expand and fill available space
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3, // Limits to 3 lines
                                                WebkitBoxOrient: 'vertical'
                                            }}
                                        >
                                            {limitedText}
                                            {showTooltip && '...'}
                                        </Typography>
                                    </Tooltip>
                                </Box>
                            </Grid2>
                        );
                    })}
                </Grid2>
            </Container>
        </Box>
    );
};

export default CreatingProcess;
