import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
export default function Description() {
    const { header_section } = useContext(MenuContext);
    console.log(header_section, 'header_section');
    const words = header_section?.description;

    console.log(words, 'words');
    return (
        <Box sx={{ width: { xs: '300px', sm: '300px', md: '600px' }, display: 'flex', flexWrap: 'wrap' }}>
            <Typography component="span" sx={{ color: 'white', fontSize: { xs: '15px', md: '20px' } }}>
                {words}
            </Typography>
        </Box>
    );
}
