import { Box, Container } from '@mui/material';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

export default function ErpProcessSection() {
    const { pagedata } = useContext(MenuContext);
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
                        src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1756536319/webdads2u/crm-erp-development/erp-software.png"
                        alt="erp software"
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
