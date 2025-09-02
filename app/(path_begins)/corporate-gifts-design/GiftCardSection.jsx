import React, { useContext } from 'react';
import { Box, Grid2, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ImageBox from '../../../components/ui/ImageBox';
import { MenuContext } from '../../../layout/context/menucontext';

export default function GiftCardSection() {
    const { list_section } = useContext(MenuContext);
    const img = list_section?.img;
    const lists = list_section?.lists;
    console.log(lists, 'lisre');
    return (
        <Box sx={{ py: 6, px: { xs: 2, md: 6 } }}>
            <Grid2 container spacing={4} alignItems="center">
                {/* Left Image */}
                <ImageBox image={img} />

                {/* Right Content */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: '#0d0d0d' }}>
                        Why does any business need professional Gift card design services?
                    </Typography>

                    <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                        Businesses benefit from Gifts Design services to elevate their brand image and strengthen client relationships. A thoughtfully crafted Corporate Gifts Design reflects professionalism and appreciation. It enables businesses to
                        make a lasting impression and stand out in a competitive market. Invest in Gifts Design services to leave a memorable mark on clients and partners.
                    </Typography>

                    <List>
                        {lists?.map((text, index) => (
                            <ListItem key={index} disableGutters>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <CheckCircleIcon sx={{ color: '#e63946' }} />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Grid2>
            </Grid2>
        </Box>
    );
}
