import { Container, Grid2 } from '@mui/material';
import React, { useContext } from 'react';
import ImageBox from '../../../../components/ui/ImageBox';
import ArrowList from '../../../../components/ui/addition-design/ArrowList';
import { MenuContext } from '../../../../layout/context/menucontext';

export default function VariousIndustries() {
    const { list_section } = useContext(MenuContext);
    console.log(list_section, 'list_section');
    const title = list_section?.title;
    const list = list_section?.lists;
    const image = list_section?.img;
    return (
        <Container maxWidth="lg" sx={{ py: 0 }}>
            <Grid2 container spacing={4} alignItems="center">
                <ArrowList content={{ title, list }} />
                <ImageBox image={image} />
            </Grid2>
        </Container>
    );
}
