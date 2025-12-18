'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '../app/assets/Webdadsnewlogo.svg'; 

const MotionBox = motion(Box);

const LoadingComponent = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100vw"
            bgcolor="#fff"
        >
            <MotionBox
                sx={{ width: 150, mb: 3, position: 'relative' }}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
                <Image
                    src={Logo}
                    alt="Webdads Logo"
                    layout="responsive"
                    width={100}
                    height={100}
                />
            </MotionBox>
        </Box>
    );
};

export default LoadingComponent;
