import React, { useContext } from 'react';
import ContentBox from '../../../../components/ui/ContentBox';
import ImageBox from '../../../../components/ui/ImageBox';
import { Container, Grid2 } from '@mui/material';
import LookButton from './LookButton';
import { MenuContext } from '../../../../layout/context/menucontext';

export default function OurStreams() {
    const { design_section } = useContext(MenuContext);
    const img = design_section?.img;
    const title = design_section?.title;
    const description = design_section?.description;
    const alt = design_section?.alt || '';
    console.log(img, 'img');
    return (
        <Container>
            <Grid2 container spacing={3}>
                <ContentBox content={{ title, description }} btn={false} />
                <ImageBox image={img} alt={alt} />
                <LookButton />
            </Grid2>
        </Container>
    );
}
