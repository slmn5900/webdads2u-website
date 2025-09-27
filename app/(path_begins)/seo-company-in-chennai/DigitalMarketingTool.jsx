import { Container, Grid2, Box, Typography } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';
import { useContext } from 'react';
export default function DigitalMarketingTool() {
    const { pagedata } = useContext(MenuContext);
    const titles = pagedata?.seo_sheer?.title;
    const imgs = pagedata?.seo_sheer?.img;
    const list = pagedata?.seo_sheer?.lists || [];

    // const tools = [
    //     {
    //         img: '/webdads/images/seo-development/Helps.png',
    //         title: 'Helps to Understand Search Behaviour'
    //     },
    //     {
    //         img: '/webdads/images/seo-development/get-to-know.png',
    //         title: 'Get to Know Customer Needs'
    //     },
    //     {
    //         img: '/webdads/images/seo-development/Appropiate.png',
    //         title: 'Appropiate Content'
    //     },
    //     {
    //         img: '/webdads/images/seo-development/Analyze.png',
    //         title: 'Analyze, Implement and Repeat strategy'
    //     }
    // ];

    return (
        <Box
            sx={{
                background: { xs: 'black', md: `#f5f5f5 url(/webdads/images/seo-development/bubbles-bg.webp) no-repeat center center` },
                backgroundSize: 'contain',
                pt: { xs: 6, md: 12 },
                pb: { xs: 6, md: 12 }
            }}
        >
            <Container maxWidth="lg">
                {/* Heading */}

                <Typography
                    variant="h2"
                    sx={{
                        color: '#fff',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: { xs: '24px', md: '25px' },
                        fontWeight: 600,
                        textAlign: 'center',
                        p: 2
                    }}
                >
                    {' '}
                    {titles}
                </Typography>

                {/* Tools Grid2 */}
                <Grid2 container spacing={1}>
                    {list.map((tool, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Box sx={{ textAlign: 'center', width: '100%', maxWidth: '300px' }}>
                                <Box
                                    component="img"
                                    src={tool.img}
                                    alt={tool.title}
                                    sx={{
                                        maxWidth:{ xs:"50px",md:'100%'},
                                        height: 'auto',
                                        mr: 'auto',
                                        alignItems: 'center'
                                    }}
                                />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: '#fff',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: { xs: '18px', md: '14px' },
                                        fontWeight: 600,
                                        width: '100%',
                                        maxWidth: '400px',
                                        pt: 2,
                                        textAlign: 'center'
                                    }}
                                >
                                    {tool.title}
                                </Typography>
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
