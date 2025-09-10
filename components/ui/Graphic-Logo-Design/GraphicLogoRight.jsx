import React from 'react';
import { Grid2, Typography, Box, useTheme } from '@mui/material';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { Height, WidthFull } from '@mui/icons-material';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

const GraphicLogoRight = ({ content }) => {
    const theme = useTheme();
    const { pagedata } = useContext(MenuContext);

    const { title, description, lists } = content;
    // const title = pagedata?.list_section?.title;
    // const lists = pagedata?.list_section?.lists || [];

    // const benefits = [
    //     'To enhance audience engagement, it is recommended to produce high-quality images of your products or services.',
    //     "We provide services for creating eye-catching graphic designs that help you retain your client's interest and engagement.",
    //     'Promoting your brand is crucial for the growth of your business.',
    //     'Using an interactive graphic can be a great way to increase sales.',
    //     'Building consumer trust in your brand is crucial for establishing a strong reputation in the marketplace.'
    // ];

    return (
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
            <Typography
                variant="h5"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: theme.palette.text.primary
                }}
            >
                {' '}
                {title}
            </Typography>

            {description && <Box component={'p'}>{description}</Box>}

            {lists?.map((list, index) => (
                <Grid2 container spacing={2} key={index} sx={{ mb: 2.5 }}>
                    <Grid2 xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 2
                            }}
                        >
                            <Box
                                sx={{
                                    color: theme.palette.primary.main,
                                    mt: '2px', // Perfect icon alignment
                                    flexShrink: 0
                                }}
                            >
                                <IoMdCheckboxOutline size={20} />
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.6,
                                    color: 'black',
                                    textAlign: 'left',
                                    fontWeight: '500'
                                }}
                            >
                                {list}
                            </Typography>
                        </Box>
                    </Grid2>
                </Grid2>
            ))}
        </Grid2>
    );
};

export default GraphicLogoRight;
