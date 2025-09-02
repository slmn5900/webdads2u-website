import { Grid2, Box, Typography } from '@mui/material';

export default function WhyChooseUs({ cardSize }) {
    const items = [
        {
            img: '/webdads/images/brochuredesign/ecommerce-seo-audit-and-roadmap.webp',
            title: 'Creative Concept Development'
        },
        {
            img: '/webdads/images/brochuredesign/rich-snippet-optimisation.webp',
            title: 'Custom Design Solutions'
        },
        {
            img: '/webdads/images/brochuredesign/our-ecommerce-seo-1.webp',
            title: 'Compelling Content Creation'
        },
        {
            img: '/webdads/images/brochuredesign/ecommerce-website-designing-and-development.webp',
            title: 'High-Quality Printing'
        },
        {
            img: '/webdads/images/brochuredesign/on-page-seo-for-category-subcategory-pages.webp',
            title: 'Creative Excellence'
        },
        {
            img: '/webdads/images/brochuredesign/ecommerce-content-optimization.webp',
            title: 'Timely Delivery'
        }
    ];

    return (
        <Grid2 size={{ xs: 12, md: cardSize }}>
            <Grid2 container spacing={4}>
                {items.map((item, index) => (
                    <Grid2 size={{ xs: 6, md: 4 }} item key={index}>
                        <Box
                            className="why-choose-br"
                            sx={{
                                textAlign: 'center',
                                height:"200px"
                            }}
                        >
                            <Box
                                component="img"
                                src={item.img}
                                alt={item.title}
                                sx={{
                                    width: '100%',
                                    height: '120px',
                                    objectFit: 'contain'
                                }}
                            />
                            <Typography
                                variant="h6"
                                mt={1}
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '14px', sm: '16px' },
                                    color: '#4D4D4D',
                                    textAlign: 'center',
                                    lineHeight: 1.2
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Box>
                    </Grid2>
                ))}
            </Grid2>
        </Grid2>
    );
}
