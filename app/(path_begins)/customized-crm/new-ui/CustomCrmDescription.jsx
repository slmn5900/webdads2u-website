import { Box, Container, Grid2 } from '@mui/material';
import React, { useContext } from 'react';
import ContentBox from '../../../../components/ui/ContentBox';
import ImageBox from '../../../../components/ui/ImageBox';
import { MenuContext } from '../../../../layout/context/menucontext';

export default function CustomCrmDescription() {
    const { design_section } = useContext(MenuContext);
    const title = design_section?.title;
    const description = design_section?.description;
    const image = design_section?.img;
    return (
        <Box>
            <Container>
                <Grid2 container spacing={3}>
                    <ContentBox content={{ title, description }} />

                    <ImageBox image={image} />
                </Grid2>
            </Container>
        </Box>
    );
}
