// "use client"

// import React from 'react';
// import { Box, Grid2, Typography, TextField, Button, Link } from '@mui/material';
// import { motion } from 'framer-motion';
// import EmailIcon from '@mui/icons-material/Email';
// import CallIcon from '@mui/icons-material/Call';


// export default function ReadyToBrand() {
//     return (
//         <Box

//             sx={{
//                 width: { xs: '100%', md: '1080px' },
//                 // height: '384px',
//                 position: 'relative',
//                 mx: 'auto',
//                 py:5
//             }}
//         >
//             <Grid2 container spacing={2}>
//                 {/* Left side text */}
//                 <Grid2 size={{ xs: 12, md: 6 }} sx={{ position: 'relative', height: '100%' }}>
//                     <Box position="relative" top={0} left={0}>
//                         <Typography
//                             variant="h4"
//                             fontWeight={600}
//                             fontFamily="Poppins"
//                             gutterBottom
//                         >
//                             Ready to Become a World-Class Brand?
//                         </Typography>
//                         <Typography
//                             sx={{ mt: 3, maxWidth: 384 }}
//                             fontSize={18}
//                             fontFamily="Poppins"
//                         >
//                             Let's discuss how we can help you achieve your goals. Fill out the form below and we'll get back to you within 24 hours.
//                         </Typography>
//                         <Box mt={4}>
//                             <Box mb={1}>
//                                 <Box component={Link} display="flex" alignItems="center" href="mailto:info@webdads2u.com" sx={{textDecoration: 'none'}}>
//                                     <EmailIcon sx={{ color: '#262250', mr: 1 }} />
//                                     <Typography
//                                         fontSize={20}
//                                         fontWeight={600}
//                                         fontFamily="Poppins"
//                                         sx={{ color: '#262250',  }}
//                                     >
//                                         info@webdads2u.com
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                             <Box >
//                                 <Box component={Link} display="flex" alignItems="center" href="tel:8825607550" sx={{textDecoration:"none"}}>

//                                     <CallIcon sx={{ color: '#262250', mr: 1 }} />
//                                     <Typography
//                                         fontSize={20}
//                                         fontWeight={600}
//                                         fontFamily="Poppins"
//                                         sx={{ color: '#262250' }}
//                                     >
//                                         8825607550
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Grid2>

//                 {/* Right side form */}
//                 <Grid2 size={{ xs: 12, md: 6 }} sx={{ position: 'relative', height: '100%' }}>
//                     <Box
//                         component={motion.div}
//                         initial={{ opacity: 0, x: 50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         position="relative"
//                         top={16}
//                         left={0}
//                         sx={{ width: 553 }}
//                     >
//                         <Grid2 container spacing={2}>
//                             <Grid2 size={{ xs: 12, md: 6 }}>
//                                 <Typography variant="caption" fontFamily="Poppins" gutterBottom>
//                                     First Name
//                                 </Typography>
//                                 <TextField fullWidth variant="standard" />
//                             </Grid2>
//                             <Grid2 size={{ xs: 12, md: 6 }}>
//                                 <Typography variant="caption" fontFamily="Poppins" gutterBottom>
//                                     Last Name
//                                 </Typography>
//                                 <TextField fullWidth variant="standard" />
//                             </Grid2>
//                             <Grid2 size={{ xs: 12, md: 6 }}>
//                                 <Typography variant="caption" fontFamily="Poppins" gutterBottom>
//                                     Email
//                                 </Typography>
//                                 <TextField fullWidth variant="standard" />
//                             </Grid2>
//                             <Grid2 size={{ xs: 12, md: 6 }}>
//                                 <Typography variant="caption" fontFamily="Poppins" gutterBottom>
//                                     Phone Number
//                                 </Typography>
//                                 <TextField fullWidth variant="standard" />
//                             </Grid2>
//                             <Grid2 size={{ xs: 12, md: 12 }}>
//                                 <Typography variant="caption" fontFamily="Poppins" gutterBottom>
//                                     Message
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     multiline
//                                     rows={3}
//                                     placeholder="Write your message..."
//                                     variant="standard"
//                                 />
//                             </Grid2>
//                             <Grid2 size={{ xs: 12, md: 6 }}>
//                                 <Button
//                                     variant="contained"
//                                     size="small"
//                                     sx={{ backgroundColor: '#d32f2f', px: 4, py: 1.5, fontFamily: 'Poppins' }}
//                                 >
//                                     Send a Message
//                                 </Button>
//                             </Grid2>
//                         </Grid2>
//                     </Box>
//                 </Grid2>
//             </Grid2>
//         </Box>
//     );
// }
"use client"

import React from 'react';
import { Box, Typography, TextField, Button, Link, useTheme, Grid2 } from '@mui/material';

import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function ReadyToBrand(data) {
    const theme = useTheme();
    console.log(data, "data>>>>")
    const contact = data.data.contact_section

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '1080px',
                mx: 'auto',
                py: 5,
                px: { xs: 2, sm: 3, md: 4 },
            }}
        >
            <Grid2 container spacing={4}>
                {/* Left side text */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Box>
                        <Typography
                            variant="h4"
                            fontWeight={600}
                            fontFamily="Poppins"
                            gutterBottom
                            sx={{ fontSize: { xs: 24, sm: 30, md: 34 } }}
                        >
                            {contact?.title}
                        </Typography>
                        <Typography
                            sx={{ mt: 3 }}
                            fontSize={18}
                            fontFamily="Poppins"
                        >

                            {contact?.description}                        </Typography>

                        <Box mt={4}>
                            <Box mb={2}>
                                <Link
                                    display="flex"
                                    alignItems="center"
                                    href="mailto:info@webdads2u.com"
                                    sx={{ textDecoration: 'none' }}
                                >
                                    <EmailIcon sx={{ color: '#262250', mr: 1 }} />
                                    <Typography
                                        fontSize={18}
                                        fontWeight={600}
                                        fontFamily="Poppins"
                                        sx={{ color: '#262250' }}
                                    >
                                        info@webdads2u.com
                                    </Typography>
                                </Link>
                            </Box>
                            <Box>
                                <Link
                                    display="flex"
                                    alignItems="center"
                                    href="tel:8825607550"
                                    sx={{ textDecoration: 'none' }}
                                >
                                    <CallIcon sx={{ color: '#262250', mr: 1 }} />
                                    <Typography
                                        fontSize={18}
                                        fontWeight={600}
                                        fontFamily="Poppins"
                                        sx={{ color: '#262250' }}
                                    >
                                        8825607550
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid2>

                {/* Right side form */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        sx={{
                            width: '100%',
                            maxWidth: '100%',
                            px: { xs: 0, md: 2 },
                        }}
                    >
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Typography variant="caption" fontFamily="Poppins" gutterBottom>
                                    First Name
                                </Typography>
                                <TextField fullWidth variant="standard" />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Typography variant="caption" fontFamily="Poppins" gutterBottom>
                                    Last Name
                                </Typography>
                                <TextField fullWidth variant="standard" />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Typography variant="caption" fontFamily="Poppins" gutterBottom>
                                    Email
                                </Typography>
                                <TextField fullWidth variant="standard" />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Typography variant="caption" fontFamily="Poppins" gutterBottom>
                                    Phone Number
                                </Typography>
                                <TextField fullWidth variant="standard" />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <Typography variant="caption" fontFamily="Poppins" gutterBottom>
                                    Message
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    placeholder="Write your message..."
                                    variant="standard"
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        backgroundColor: '#d32f2f',
                                        px: 4,
                                        py: 1.5,
                                        fontFamily: 'Poppins',
                                        fontSize: 16,
                                        textTransform: 'none',
                                    }}
                                >
                                    Send a Message
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
}
