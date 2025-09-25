// 'use client';
// import { Box, IconButton, Tooltip, Typography } from '@mui/material';
// import { motion } from 'framer-motion';
// import { ArrowBackIos, ArrowForwardIos, Phone, WhatsApp } from '@mui/icons-material';
// import { useState } from 'react';

// const MotionBox = motion(Box);

// export default function StickyContactIcons() {
//     const [open, setOpen] = useState(true);

//     return (
//         <Box
//             component={motion.div}
//             initial={{ x: -80, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             sx={{
//                 position: 'fixed',
//                 top: 100,
//                 right: 0,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 zIndex: 1200
//             }}
//         >
//             {/* Toggle Arrow */}
//             <MotionBox
//                 initial={{ width: 50 }}
//                 whileHover={{ width: 50 }}
//                 sx={{
//                     alignItems: 'center',
//                     bgcolor: 'black',
//                     color: 'white',
//                     px: 1,
//                     // py: 1,
//                     borderTopLeftRadius: 8,
//                     borderBottomLeftRadius: open ? 0 : 8,
//                     boxShadow: 3,
//                     cursor: 'pointer',
//                     '&:hover': { bgcolor: 'darkgreen' }
//                     // display: 'block'
//                 }}
//             >
//                 <IconButton size="small" onClick={() => setOpen(!open)}>
//                     {open ? <ArrowBackIos fontSize="small" style={{ color: 'white' }} /> : <ArrowForwardIos fontSize="small" style={{ color: 'white' }} />}
//                 </IconButton>
//             </MotionBox>

//             {/* Call Button */}
//             {open && (
//                 <Tooltip title="Call Us">
//                     <MotionBox
//                         component="a"
//                         href="tel:+918825607550"
//                         onClick={(e) => e.stopPropagation()} // ✅ prevent arrow toggle
//                         initial={{ width: 50 }}
//                         whileHover={{ width: 150 }}
//                         transition={{ duration: 0.3 }}
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             overflow: 'hidden',
//                             bgcolor: 'green',
//                             color: 'white',
//                             px: 1.5,
//                             py: 1,
//                             // borderTopRightRadius: 8,
//                             boxShadow: 3,
//                             cursor: 'pointer',
//                             textDecoration: 'none',
//                             gap: 1,
//                             '&:hover': {
//                                 borderTopRightRadius: 8,
//                                 borderBottomRightRadius: 8
//                             }
//                         }}
//                     >
//                         <Phone />
//                         <Typography variant="body2" noWrap>
//                             Call Us
//                         </Typography>
//                     </MotionBox>
//                 </Tooltip>
//             )}

//             {/* WhatsApp Button */}
//             {open && (
//                 <Tooltip title="Chat on WhatsApp">
//                     <MotionBox
//                         component="a"
//                         href="https://wa.me/918825607550"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         onClick={(e) => e.stopPropagation()} // ✅ prevent arrow toggle
//                         initial={{ width: 50 }}
//                         whileHover={{ width: 170 }}
//                         transition={{ duration: 0.3 }}
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             overflow: 'hidden',
//                             bgcolor: 'green',
//                             color: 'white',
//                             px: 1.5,
//                             py: 1,
//                              borderBottomLeftRadius: 8,
//                             boxShadow: 3,
//                             cursor: 'pointer',
//                             textDecoration: 'none',
//                             gap: 1,
//                             '&:hover': {
//                                  borderTopLeftRadius: 8,
//                                  borderBottomLeftRadius: 8
//                             }
//                         }}
//                     >
//                         <WhatsApp />
//                         <Typography variant="body2" noWrap>
//                             WhatsApp
//                         </Typography>
//                     </MotionBox>
//                 </Tooltip>
//             )}
//         </Box>
//     );
// }
'use client';
import { Box, IconButton, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos, Phone, WhatsApp } from '@mui/icons-material';
import { useState } from 'react';
import theme from '../../Theme/theme';

const MotionBox = motion(Box);

export default function StickyContactIcons() {
    const [open, setOpen] = useState(true);
    const isMobile = useMediaQuery(theme.breakpoints.up('xs'));

    console.log(isMobile, 'ismobile');

    return (
        <Box
            component={motion.div}
            initial={{ x: 80, opacity: 0 }} // 👉 slide in from right
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            sx={{
                position: 'fixed',
                bottom: 100,
                right: 0,
                // bottom: isMobile ? 100 : 0,
                display: 'flex',
                flexDirection: 'column',
                zIndex: 1200,
                alignItems: 'flex-end' // align to right
            }}
        >
            {/* Toggle Arrow */}
            <MotionBox
                sx={{
                    bgcolor: 'black',
                    color: 'white',
                    px: 0.5,
                    borderTopLeftRadius: 8,
                    // borderBottomLeftRadius: 8,
                    boxShadow: 3,
                    cursor: 'pointer',
                    '&:hover': { bgcolor: 'darkgreen' }
                }}
            >
                <IconButton size="small" onClick={() => setOpen(!open)}>
                    {open ? (
                        <ArrowForwardIos fontSize="small" style={{ color: 'white' }} /> // 👉 points inside
                    ) : (
                        <ArrowBackIos fontSize="small" style={{ color: 'white' }} /> // 👉 points outside
                    )}
                </IconButton>
            </MotionBox>

            {/* Call Button */}
            {open && (
                <Tooltip title="Call Us" placement="left">
                    <MotionBox
                        component="a"
                        href="tel:+918825607550"
                        initial={{ width: 50 }}
                        whileHover={{ width: 150 }}
                        transition={{ duration: 0.3 }}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            overflow: 'hidden',
                            bgcolor: 'green',
                            color: 'white',
                            px: 1.5,
                            py: 1,
                            borderTopLeftRadius: 8,
                            // borderBottomLeftRadius: 8,
                            boxShadow: 3,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            gap: 1
                        }}
                    >
                        <Phone />
                        <Typography variant="body2" noWrap>
                            Call Us
                        </Typography>
                    </MotionBox>
                </Tooltip>
            )}

            {/* WhatsApp Button */}
            {open && (
                <Tooltip title="Chat on WhatsApp" placement="left">
                    <MotionBox
                        component="a"
                        href="https://wa.me/918825607550"
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
                            // borderTopLeftRadius: 8,
                            borderBottomLeftRadius: 8,
                            boxShadow: 3,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            gap: 1
                        }}
                    >
                        <WhatsApp />
                        <Typography variant="body2" noWrap>
                            WhatsApp
                        </Typography>
                    </MotionBox>
                </Tooltip>
            )}
        </Box>
    );
}
