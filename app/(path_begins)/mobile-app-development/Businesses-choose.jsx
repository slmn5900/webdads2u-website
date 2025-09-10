import { Box, Container, Grid2 } from '@mui/material';
import React, { useContext } from 'react';
import GraphicLogoRight from '../../../components/ui/Graphic-Logo-Design/GraphicLogoRight';
import ImageBox from '../../../components/ui/ImageBox';
import { MenuContext } from '../../../layout/context/menucontext';
export default function Businesseschoose() {
    const { list_section } = useContext(MenuContext);
    const lists = list_section.lists;
    const title = list_section.title;
    return (
        <Container sx={{ marginBottom: { md: 4 } }}>
            <Grid2 container>
                <GraphicLogoRight content={{ title, lists }} />
                <ImageBox image={list_section?.img} />
            </Grid2>
        </Container>
    );
}
