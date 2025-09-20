// import { Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useContext } from 'react';
// import { MenuContext } from '../../../layout/context/menucontext';

// export default function BannerRight() {
//     const { header_section } = useContext(MenuContext);
//     const image = header_section?.img;
//     const alt = header_section?.img_alt || null;
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 height: '100%',
//                 position: 'absolute',
//                 top: '50px',
//                 bottom: '50px',
//                 right: 0
//             }}
//         >
//             <motion.div
//                 initial={{ opacity: 0, rotate: -2 }}
//                 animate={{ opacity: 1, rotate: 0 }}
//                 transition={{
//                     duration: 0.8,
//                     delay: 0.2,
//                     type: 'spring',
//                     stiffness: 100
//                 }}
//             >
//                 <Box
//                     component={motion.img}
//                     src={image}
//                     alt={alt}
//                     sx={{ width: '100%', maxWidth: { md: 600, lg: 800 }, height: { sm: '300px', md: '400px', lg: '400px' }, position: 'absolute', top: 20, right: { xs: 0, md: 0, lg: -20 }, objectFit: 'contain' }}
//                     animate={{
//                         y: [0, -15, 0] // move up and back down
//                     }}
//                     transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: 'easeInOut'
//                     }}
//                 />
//             </motion.div>
//         </Box>
//     );
// }

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

export default function BannerRight() {
    const { header_section } = useContext(MenuContext);
    const image = header_section?.img;
    const alt = header_section?.img_alt || '';

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end', // push image to right
                alignItems: 'center',
                height: '100%',
                position: 'relative', // relative container instead of absolute
                pr: { xs: 0, md: 4, lg: 0 }, // padding-right for spacing
                right: 0
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
                    alt={alt}
                    sx={{
                        width: '100%',
                        maxWidth: { xs: 300, sm: 400, md: 500, lg: 700 },
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                    animate={{
                        y: [0, -15, 0] // floating effect
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
