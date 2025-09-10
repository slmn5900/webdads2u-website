import { Box, Container, Grid2 } from '@mui/material';
import React, { useContext } from 'react';
import ImageBox from '../../../../components/ui/ImageBox';
import GraphicLogoRight from '../../../../components/ui/Graphic-Logo-Design/GraphicLogoRight';
import { MenuContext } from '../../../../layout/context/menucontext';

export default function WhyChooseus() {
    const { pagedata } = useContext(MenuContext);
    const title = pagedata?.checkbox2?.title;
    const description = pagedata?.checkbox2?.description;
    const image = pagedata?.checkbox2?.img;
    const lists = pagedata?.checkbox2?.lists;
    const alt = pagedata?.checkbox2?.alt;

    return (
        <>
            <Box sx={{ height: '100%', minHeight: '60vh', my: 'auto' }}>
                <Container>
                    <Grid2 container>
                        <ImageBox image={image} alt={alt} />
                        <GraphicLogoRight content={{ title, description, lists }} />
                    </Grid2>
                </Container>
            </Box>
        </>
    );
}
