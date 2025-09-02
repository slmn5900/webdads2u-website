'use client'; // if you're using Next.js App Router
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

export default function HerosectionRightside({images}) {
    return (
        <div>
            <Box
                component={motion.img}
                src={images}
                alt="Hero Banner"
                sx={{ width: '100%', maxWidth: 500 }}
                animate={{  
                    y: [0, -15, 0], // move up and back down
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}
