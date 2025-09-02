import { Box, Container, Grid2, Typography } from '@mui/material';
import React, { useContext } from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { MenuContext } from '../../../layout/context/menucontext';

export default function ArrowList({ content }) {
    const { list_section } = useContext(MenuContext);
    const designServices = content?.lists;
    // const title = content?.title;
    const { title, list } = content;
    console.log(content, 'content');

    return (
        <Grid2 size={{ xs: 12, md: 6 }} item>
            <Box sx={{ mb: 3 }}>
                <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: '1.5rem'
                    }}
                >
                    {title}
                </Typography>
            </Box>
            <Grid2 container spacing={2}>
                {list?.map((service, index) => (
                    <Grid2 size={{ xs: 6 }} key={index}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', color: '#8b8a8b', fontWeight: '600' }}>
                            <DoubleArrowIcon sx={{ color: 'blue', mr: 1 }} /> {service}
                        </Typography>
                    </Grid2>
                ))}
            </Grid2>
        </Grid2>
    );
}
