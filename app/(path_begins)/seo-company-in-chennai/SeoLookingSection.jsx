import { Container, Grid2, Box, Typography, Button } from '@mui/material';
import { FaChartBar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdContentPasteSearch } from 'react-icons/md';
import { MenuContext } from '../../../layout/context/menucontext';
import { useContext } from 'react';
import InsightsIcon from '@mui/icons-material/Insights';

export default function SeoLookingSection() {
    const { pagedata } = useContext(MenuContext);
    const titles1 = pagedata?.seo_looking?.title1
    const titles2 = pagedata?.seo_looking?.title2
    const descriptions = pagedata?.seo_looking?.description
    const imgs = pagedata?.seo_looking?.img
    const list = pagedata?.seo_looking?.lists || []
    return (
        <Box
            sx={{
                pt: { xs: 4, md: 8 },
                pb: { xs: 4, md: 8 },
                backgroundColor: 'transparent' // same as original section background
            }}
        >
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Column */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#e30e26',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '20px',
                                    fontWeight: 500
                                }}
                            >
                                {titles1}
                            </Typography>

                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#0a1f5f',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: { xs: '28px', md: '36px' },
                                    fontWeight: 700,
                                    textTransform: 'capitalize',
                                    mt: 1
                                }}
                            >
                                {titles2}
                            </Typography>

                            <Typography
                                sx={{
                                    color: '#333',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '28px',
                                    mt: 2
                                }}
                            >
                                {descriptions}
                            </Typography>
                        </Box>


                        {/* [
                            {
                                icon: <FaChartBar />,
                                title: 'Performance',
                                desc: 'Slow pages, too-large CSS or HTML'
                            },
                            {
                                icon: <FaLocationDot />,
                                title: 'Localization',
                                desc: 'All issues with hrefiang, language'
                            },
                            {
                                icon: <MdContentPasteSearch />,
                                title: 'Content Quality',
                                desc: 'Unconsolidated duplicate page'
                            }
                        ] */}

                        {/* Performance Blocks */}

                        {list.map((item) => (
                            <Box
                                key={`${item.title}-${item.desc}`} // Stable unique key
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    pb: 1,
                                    mt: 3
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        background: '#871752',
                                        borderRadius: '50%',
                                        mr: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.icon}
                                        alt={item.title}
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            objectFit: 'contain'
                                        }}
                                    />
                                </Box>

                                <Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            color: '#0a1f5f'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#000',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 400
                                        }}
                                    >
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}



                        {/* {list.map((item) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    pb: 1,
                                    mt: 3
                                }}
                            >
                                <Box
                                    component="p"
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        background: '#871752',
                                        textAlign: 'center',
                                        borderRadius: '50%',
                                        mr: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        '& svg': {
                                            color: '#fff',
                                            fontSize: 20
                                        }
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            color: '#0a1f5f'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#000',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: 400
                                        }}
                                    >
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        ))} */}

                        {/* Contact Button */}
                        <Box mt={4}>
                            <Button
                                variant="contained"
                                href="/contact-us"
                                sx={{
                                    color: '#ffffff',
                                    background: 'linear-gradient(90deg, #871752 0%, #262250 50%)',
                                    borderRadius: '30px',
                                    padding: '13px 40px',
                                    border: '0px',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #262250 0%, #871752 100%)'
                                    }
                                }}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Grid2>

                    {/* Right Column */}
                    <Grid2 size={{ xs: 12, md: 6 }} item xs={12} md={6}>
                        <Box textAlign="center">
                            <Box
                                component="img"
                                src={imgs}
                                alt="SEO Graph"
                                sx={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: 2
                                }}
                            />
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
