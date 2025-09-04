import { Box, Container, Grid2 } from '@mui/material';
import React, { useContext } from 'react';
import ContentBox from '../../../components/ui/ContentBox';
import ImageBox from '../../../components/ui/ImageBox';
import { MenuContext } from '../../../layout/context/menucontext';

export default function AllRoundTool() {
    const { amazing_section } = useContext(MenuContext);
    console.log(amazing_section, 'amazing_section');
    const title = amazing_section?.title;
    const description = amazing_section?.description;
    const image = amazing_section.img;
    const alt = amazing_section.alt;
    return (
        <Box>
            <Container>
                <Grid2 container spacing={3}>
                    <ContentBox content={{ title, description }} />
                    <ImageBox image={image} alt={alt} />
                </Grid2>
            </Container>
        </Box>
    );
}
