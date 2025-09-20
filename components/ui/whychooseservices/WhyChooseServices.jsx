import { Box, Container, Grid2 } from '@mui/material';
import React, { useContext } from 'react';
import ContentBox from '../ContentBox';
import WhyChooseUs from './WhyChooseUs';
import { MenuContext } from '../../../layout/context/menucontext';

export default function WhyChooseServices() {
    const { choose_section } = useContext(MenuContext);
    const title = choose_section?.title;
    const description = choose_section?.description;
    const contentSize = 5;
    const cardSize = 7;

    return (
        <Box sx={{ my: 4 }}>
            <Container>
                <Grid2 container spacing={4}>
                    <WhyChooseUs cardSize={cardSize} />
                    <ContentBox content={{ title: title, description: description, contentSize: contentSize }} />
                </Grid2>
            </Container>
        </Box>
    );
}
