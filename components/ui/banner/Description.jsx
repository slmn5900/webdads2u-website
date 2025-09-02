import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
export default function Description() {
    const { header_section } = useContext(MenuContext);

    const words = header_section?.description?.split(' ') || [];

    return (
        <Box sx={{ width: { xs: '300px', sm: '300px', md: '600px' }, display: 'flex', flexWrap: 'wrap' }}>
            {words.map((word, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ marginRight: '6pzx' }}>
                    <Typography component="span" sx={{ color: 'white', fontSize: { xs: '15px', md: '20px' } }}>
                        {word}
                    </Typography>
                </motion.span>
            ))}
        </Box>
    );
}
