import { Container, Grid2, Box, Typography, Button } from '@mui/material';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

export default function OurHandpickedSection() {
    const { pagedata } = useContext(MenuContext);
    const titles_1 = pagedata?.our_handpick?.title_1;
    const titles_2 = pagedata?.our_handpick?.title_2;
    const descriptions = pagedata?.our_handpick?.description;
    const buttons = pagedata?.our_handpick?.button;
    const list = pagedata?.our_handpick?.lists || [];

    return (
        <Box
            sx={{
                pt: { xs: 4, md: 8 },
                pb: { xs: 4, md: 8 }
            }}
        >
            <Container>
                {/* Heading + Text Row */}
                <Grid2 container spacing={4} alignItems="flex-start">
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#0a1f5f',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: { xs: '28px', md: '36px' },
                                fontWeight: 700,
                                textTransform: 'capitalize'
                            }}
                        >
                            {titles_1}
                            <br />
                            {titles_2}
                        </Typography>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            sx={{
                                color: '#333',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '28px',
                                mb: 2
                            }}
                        >
                            {descriptions}
                        </Typography>

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
                            {buttons}
                        </Button>
                    </Grid2>
                </Grid2>

                {/* Images Row */}
                <Grid2
                    container
                    spacing={2}
                    sx={{
                        pt: { xs: 2, md: 3 }
                    }}
                >
                    <Grid2 size={{ xs: 12, sm: 4, md: 2 }}>
                        {' '}
                        {list.map((item, index) => (
                            <Box sx={{ width: '100%' }} key={index}>
                                <Box component="img" src={item.img_2} sx={{ width: '100%', height: 'auto' }} />
                            </Box>
                        ))}{' '}
                    </Grid2>

                    <Grid2 size={{ xs: 12, sm: 4, md: 8 }}>
                        {' '}
                        {list.map((item, index) => (
                            <Box sx={{ width: '100%' }} key={index}>
                                <Box component="img" src={item.img_1} sx={{ width: '100%', height: 'auto' }} />
                            </Box>
                        ))}{' '}
                    </Grid2>

                    <Grid2 size={{ xs: 12, sm: 4, md: 2 }}>
                        {' '}
                        {list.map((item, index) => (
                            <Box sx={{ width: '100%' }} key={index}>
                                <Box component="img" src={item.img_3} sx={{ width: '100%', height: 'auto' }} />
                            </Box>
                        ))}{' '}
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
