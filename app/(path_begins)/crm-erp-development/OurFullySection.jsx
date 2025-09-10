import { Box, Container, Grid2, Typography } from '@mui/material';
import { FaCircleCheck } from 'react-icons/fa6';

export default function OurFullySection() {
    return (
        <Box
            sx={{
                background: '#2167fb',
                backgroundImage: "url('/webdads/images/crm/pattern-8.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
                pt: { xs: 4, md: 7.5 }, // 60px
                pb: { xs: 6, md: 12.5 } // 100px
            }}
        >
            <Container>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Image */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box component="img" src="/webdads/images/crm/erp-image.jpg" alt="ERP" sx={{ width: '100%', borderRadius: 1 }} />
                    </Grid2>

                    {/* Right Content */}
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                color: '#fff',
                                mb: 3,
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            Our Fully Integrated and Customizable Modules for ERP Systems
                        </Typography>

                        {/* Two Column Checklist */}
                        <Grid2 container spacing={2} sx={{ justifyContent: 'space-around' }}>
                            <Grid2 item>
                                {['Customer Web Portal', 'Finance', 'Procurement', 'Manufacturing', 'Inventory Management', 'Workforce Management', 'Ecommerce'].map((item, index) => (
                                    <Typography
                                        key={index}
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            mb: 1
                                        }}
                                    >
                                        <FaCircleCheck /> {item}
                                    </Typography>
                                ))}
                            </Grid2>

                            <Grid2 item>
                                {['Order Management', 'Warehouse Management', 'Supply Chain Management', 'CRM & Sales', 'Marketing Automation', 'Distribution'].map((item, index) => (
                                    <Typography
                                        key={index}
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            mb: 1
                                        }}
                                    >
                                        <FaCircleCheck /> {item}
                                    </Typography>
                                ))}
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
