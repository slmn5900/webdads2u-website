import { Container, Grid2, Box, Typography } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';
import { useContext } from 'react';
export default function SeoProcessSection() {

    const { pagedata } = useContext(MenuContext);
    const our = pagedata?.our_process?.title
    const imgs = pagedata?.our_process?.img

    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                pt: { xs: 4, md: 8 },
                pb: { xs: 4, md: 8 }
            }}
        >
            <Container>
                <Grid2 container justifyContent="center">
                    <Grid2 size={{ xs: 12 }}>
                        <Box textAlign="center">
                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#0a1f5f',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: { xs: '28px', md: '36px' },
                                    fontWeight: 700,
                                    textTransform: 'capitalize',
                                    mb: 3
                                }}
                            >
                                {our}
                            </Typography>

                            <Box
                                component="img"
                                src={imgs}
                                alt="Our Process"
                                sx={{
                                    maxWidth: '100%',
                                    height: 'auto'
                                }}
                            />
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
