import React, { useContext } from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import ImageBox from './ImageBox';
import ContentBox from './ContentBox';
import { MenuContext } from '../../layout/context/menucontext';

const WhyChooseSection = () => {
    const { amazing_section } = useContext(MenuContext);
    console.log(amazing_section, 'amazing');
    const img = amazing_section?.img;
    const title = amazing_section?.title;
    const description = amazing_section?.description;
    return (
        <Box sx={{ py: 5 }}>
            <Container>
                <Grid2 container alignItems="center" spacing={4}>
                    <ImageBox image={img} />
                    <ContentBox content={{ title: title, description: description }} />
                </Grid2>
            </Container>
        </Box>
    );
};

export default WhyChooseSection;
