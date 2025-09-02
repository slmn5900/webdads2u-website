import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

export default function BannerRight() {
    const { header_section } = useContext(MenuContext);
    const image = header_section?.img;
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}
        >
            <motion.div
                initial={{ opacity: 0, rotate: -2 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    type: 'spring',
                    stiffness: 100
                }}
            >
                <Box
                    component={motion.img}
                    src={image}
                    alt="Hero Banner"
                    sx={{ width: '100%', maxWidth: 600, height: '400px', position: 'absolute', top: 20, right: 0 ,objectFit:"contain"}}
                    animate={{
                        y: [0, -15, 0] // move up and back down
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            </motion.div>
        </Box>
    );
}
