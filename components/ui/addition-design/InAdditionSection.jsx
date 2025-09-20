import React, { useContext } from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';

import ArrowList from './ArrowList';
import { MenuContext } from '../../../layout/context/menucontext';

const InAdditionSection = () => {
    const { list_section } = useContext(MenuContext);
    const image = list_section?.img;
    const alt = list_section.bg_alt;
    const title = list_section.title;
    const list = list_section.lists;

    return (
        <Box
            sx={{
                py: 5,
                background: `url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '500px', // Minimum height
                height: { xs: 'auto', md: '500px' }, // Responsive height
                display: 'flex',
                alignItems: 'center'
            
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container spacing={3}>
                    <ArrowList content={{ title, list }} />
                </Grid2>
            </Container>
        </Box>
    );
};

export default InAdditionSection;
