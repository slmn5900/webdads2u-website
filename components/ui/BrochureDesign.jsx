import React, { useContext } from 'react';
import { Container, Grid2, Typography, Box, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import AnimatedScrollComponent from '../../components/ui/AnimatedScrollComponent';
import ImageBox from './ImageBox';
import { MenuContext } from '../../layout/context/menucontext';
import ContentBox from './ContentBox';
const BrochureDesign = () => {
    const isMobile = useMediaQuery('(max-width:900px)');
    const { design_section } = useContext(MenuContext);
    const img = design_section?.img;
    const title = design_section?.title;
    const description = design_section?.description;
    console.log(img, 'u33');

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid2 container spacing={4} alignItems="center">
                {/* Image Column - Left Side */}
                <ImageBox image={img} />

                {/* Content Column - Right Side */}
                <ContentBox content={{ title: title, description: description }} />
            </Grid2>
        </Container>
    );
};

export default BrochureDesign;
