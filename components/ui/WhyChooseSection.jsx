import React, { useContext } from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import ImageBox from './ImageBox';
import ContentBox from './ContentBox';
import { MenuContext } from '../../layout/context/menucontext';

const WhyChooseSection = () => {
    const { amazing_section } = useContext(MenuContext);
    console.log(amazing_section, 'amazing');
    const img = amazing_section?.img;
    const alt = amazing_section?.img_alt;
    const title = amazing_section?.title;
    const description = amazing_section?.description;

    return (
        <Box sx={{ py: { xs: 0, md: 5 }, pb: { xs: 2, md: 0 } }}>
            <Container>
                <Grid2 container alignItems="center" spacing={4}>
                    <ImageBox image={img} alt={alt} />
                    <ContentBox content={{ title: title, description: description }} />
                </Grid2>
            </Container>
        </Box>
    );
};

export default WhyChooseSection;
