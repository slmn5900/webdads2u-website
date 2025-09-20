// 'use client';
// import { Box, IconButton, Tooltip, Typography } from '@mui/material';
// import { motion } from 'framer-motion';
// import { ArrowBackIos, ArrowForwardIos, Phone, WhatsApp } from '@mui/icons-material';
// import { useState } from 'react';

// const MotionBox = motion(Box);

// export default function StickyContactIcons() {
//     const [open, setOpen] = useState(false);
//     return (
//         <Box
//             component={motion.div}
//             initial={{ x: -80, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             sx={{
//                 position: 'fixed',
//                 top: 100,
//                 left: 0,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 // gap: 1,
//                 zIndex: 1200
//             }}
//         >
//             <Box
//                 sx={{
//                     alignItems: 'center',
//                     overflow: 'hidden',
//                     bgcolor: 'black',
//                     color: 'white',
//                     px: 1,
//                     py: 1,
//                     borderTopRightRadius: 8,
//                     // borderBottomRightRadius: 8,
//                     boxShadow: 3,
//                     cursor: 'pointer',
//                     textDecoration: 'none',
//                     gap: 1,
//                     '&:hover': { bgcolor: 'darkgreen' }
//                 }}
//                 noWrap
//             >
//                 <IconButton size="small" onClick={() => setOpen(!open)}>
//                     {open ? <ArrowBackIos fontSize="small" style={{ color: 'white' }} /> : <ArrowForwardIos fontSize="small" style={{ color: 'white' }} />}
//                 </IconButton>
//             </Box>
//             {/* Call Button */}
//             {open && (
//                 <Tooltip title="Call Us">
//                     <MotionBox
//                         component="a"
//                         href="tel:+9188256 07550"
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
//                             borderTopRightRadius: 8,
//                             // borderBottomRightRadius: 8,
//                             boxShadow: 3,
//                             cursor: 'pointer',
//                             textDecoration: 'none',
//                             gap: 1
//                             // p:1
//                         }}
//                     >
//                         <Phone />
//                         <Typography variant="body2" noWrap sx={{ color: 'white' }}>
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
//                         href="https://wa.me/88256 07550"
//                         target="_blank"
//                         rel="noopener noreferrer"
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
//                             // borderTopRightRadius: 8,
//                             borderBottomRightRadius: 8,
//                             boxShadow: 3,
//                             cursor: 'pointer',
//                             textDecoration: 'none',
//                             gap: 1
//                         }}
//                     >
//                         <WhatsApp />
//                         <Typography variant="body2" noWrap sx={{ color: 'white' }}>
//                             WhatsApp
//                         </Typography>
//                     </MotionBox>
//                 </Tooltip>
//             )}
//         </Box>
//     );
// }
'use client';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBackIos, ArrowForwardIos, Phone, WhatsApp } from '@mui/icons-material';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function StickyContactIcons() {
    const [open, setOpen] = useState(false);

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
                zIndex: 1200
            }}
        >
            {/* Toggle Arrow */}
            <MotionBox
                initial={{ width: 50 }}
                whileHover={{ width: 50 }}
                sx={{
                    alignItems: 'center',
                    bgcolor: 'black',
                    color: 'white',
                    px: 1,
                    // py: 1,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: open ? 0 : 8,
                    boxShadow: 3,
                    cursor: 'pointer',
                    '&:hover': { bgcolor: 'darkgreen' }
                    // display: 'block'
                }}
            >
                <IconButton size="small" onClick={() => setOpen(!open)}>
                    {open ? <ArrowBackIos fontSize="small" style={{ color: 'white' }} /> : <ArrowForwardIos fontSize="small" style={{ color: 'white' }} />}
                </IconButton>
            </MotionBox>

            {/* Call Button */}
            {open && (
                <Tooltip title="Call Us">
                    <MotionBox
                        component="a"
                        href="tel:+918825607550"
                        onClick={(e) => e.stopPropagation()} // ✅ prevent arrow toggle
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
                            // borderTopRightRadius: 8,
                            boxShadow: 3,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            gap: 1,
                            '&:hover': {
                                borderTopRightRadius: 8,
                                borderBottomRightRadius: 8
                            }
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
                <Tooltip title="Chat on WhatsApp">
                    <MotionBox
                        component="a"
                        href="https://wa.me/918825607550"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // ✅ prevent arrow toggle
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
                            borderBottomRightRadius: 8,
                            boxShadow: 3,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            gap: 1,
                            '&:hover': {
                                borderTopRightRadius: 8,
                                borderBottomRightRadius: 8
                            }
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
