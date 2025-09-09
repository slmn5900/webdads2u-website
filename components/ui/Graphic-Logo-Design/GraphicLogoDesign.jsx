import { Box, Container, Grid2 } from '@mui/material';
import React, { useContext } from 'react';
import ImageBox from '../ImageBox';
import GraphicLogoRight from './GraphicLogoRight';
import { MenuContext } from '../../../layout/context/menucontext';

export default function GraphicLogoDesign() {
    const { list_section } = useContext(MenuContext);
    console.log(list_section, 'amazing_section');
    const title = list_section?.title;
    const description = list_section?.description;
    const image = list_section?.img;
    const lists = list_section?.lists;
    const alt = list_section?.alt;
    return (
        <Box sx={{ py: { xs: 2, md: 0 } }}>
            <Container>
                <Grid2 container>
                    <ImageBox image={image} alt={alt} />
                    <GraphicLogoRight content={{ title, description, lists }} />
                </Grid2>
            </Container>
        </Box>
    );
}
