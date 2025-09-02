import { Box, Container } from '@mui/material';

export default function ErpProcessSection() {
    return (
        <Box component="section" sx={{ py: { xs: 4, md: 2 } }}>
            <Container maxWidth="md">
                <Box
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    <Box
                        component="img"
                        src="/webdads/images/crm/erp-process.png"
                        alt="ERP Process"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '1200px', // optional: limit max width
                            mx: 'auto',
                            display: 'block'
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
}
