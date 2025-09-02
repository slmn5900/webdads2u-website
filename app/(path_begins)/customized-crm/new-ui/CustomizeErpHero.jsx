import { Box, Container, Grid2, Typography, Button } from '@mui/material';

export default function CustomizeErpHero() {
    return (
        <Box
            component="section"
            sx={{
                background: 'linear-gradient(90deg, rgba(41,174,170,1) 49%, rgba(187,252,198,1) 100%)',
                py: { xs: 6, md: 8 }
            }}
        >
            <Container>
                <Grid2 container alignItems="center" spacing={4}>
                    {/* Left Content */}
                    <Grid2 size={{ xs: 12, md: 7 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '28px', md: '45px' },
                                color: '#fff',
                                fontWeight: 700,
                                mb: 2
                            }}
                        >
                            Customized CRM Development
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '16px', md: '18px' },
                                color: '#fff',
                                fontWeight: 500,
                                mb: 3
                            }}
                        >
                            At Webdads2u, we are offering open-source CRM as well as cloud-based CRM and CRM apps for every business.
                        </Typography>
                        <Button
                            variant="contained"
                            href="/contact-us/"
                            sx={{
                                background: '#fff',
                                borderRadius: '50px',
                                color: '#29aeaa',
                                fontSize: '18px',
                                fontWeight: 500,
                                px: 4,
                                py: 1.5,
                                border: '2px solid #fff',
                                '&:hover': {
                                    background: 'transparent',
                                    border: '2px solid #fff',
                                    color: '#fff'
                                }
                            }}
                        >
                            Contact us
                        </Button>
                    </Grid2>

                    {/* Right Image */}
                    <Grid2 size={{ xs: 12, md: 5 }}>
                        <Box
                            component="img"
                            src="/webdads/images/customized-crm/CRM.png"
                            alt="CRM Software Development Company In Chennai"
                            sx={{
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
