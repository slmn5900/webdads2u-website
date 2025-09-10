'use client';
import { Box, Tooltip, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Phone, WhatsApp } from '@mui/icons-material';

const MotionBox = motion(Box);

export default function StickyContactIcons() {
    return (
        <Box
            component={motion.div}
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            sx={{
                position: 'fixed',
                top: 100,
                left: 0,
                display: 'flex',
                flexDirection: 'column',
                // gap: 1,
                zIndex: 1200
            }}
        >
            {/* Call Button */}
            <Tooltip title="Call Us">
                <MotionBox
                    component="a"
                    href="tel:+9188256 07550"
                    initial={{ width: 50 }}
                    whileHover={{ width: 150 }}
                    transition={{ duration: 0.3 }}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        overflow: 'hidden',
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 1.5,
                        py: 1,
                        borderTopRightRadius: 8,
                        // borderBottomRightRadius: 8,
                        boxShadow: 3,
                        cursor: 'pointer',
                        textDecoration: 'none',
                        gap: 1
                    }}
                >
                    <Phone />
                    <Typography variant="body2" noWrap sx={{ color: 'white' }}>
                        Call Us
                    </Typography>
                </MotionBox>
            </Tooltip>

            {/* WhatsApp Button */}
            <Tooltip title="Chat on WhatsApp">
                <MotionBox
                    component="a"
                    href="https://wa.me/88256 07550"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ width: 50 }}
                    whileHover={{ width: 170 }}
                    transition={{ duration: 0.3 }}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        overflow: 'hidden',
                        bgcolor: 'green',
                        color: 'white',
                        px: 1.5,
                        py: 1,
                        // borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                        boxShadow: 3,
                        cursor: 'pointer',
                        textDecoration: 'none',
                        gap: 1
                    }}
                >
                    <WhatsApp />
                    <Typography variant="body2" noWrap sx={{ color: 'white' }}>
                        WhatsApp
                    </Typography>
                </MotionBox>
            </Tooltip>
        </Box>
    );
}
