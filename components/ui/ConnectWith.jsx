// import React from 'react';
// import { Grid2, Typography, Box, useTheme, useMediaQuery, Container } from '@mui/material';
// import { Twitter as TwitterIcon, Instagram as InstagramIcon, LinkedIn as LinkedInIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import FacebookIcon from '@mui/icons-material/Facebook';
// const ConnectWith = () => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//     return (
//         <Box
//             sx={{
//                 backgroundColor: '#1d1616',
//                 py: 8,
//                 px: 2
//             }}
//         >
//             <Container maxWidth="lg">
//                 <Grid2 container spacing={4} justifyContent="center">
//                     <Grid2 item xs={12} md={8} textAlign="center">
//                         <Typography
//                             variant={isMobile ? 'h4' : 'h3'}
//                             gutterBottom
//                             sx={{
//                                 fontWeight: 700,
//                                 color: 'white',
//                                 mb: 3
//                             }}
//                         >
//                             Connect with Us on Social Media
//                         </Typography>

//                         <Typography
//                             variant="body1"
//                             sx={{
//                                 fontSize: isMobile ? '1rem' : '1.1rem',
//                                 color: 'white',
//                                 mb: 4,
//                                 lineHeight: 1.6
//                             }}
//                         >
//                             
//                         </Typography>

//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 gap: 2,
//                                 flexWrap: 'wrap'
//                             }}
//                         >
//                             {[
//                                 { icon: <FacebookIcon fontSize="medium" />, name: 'Facebook' },
//                                 { icon: <TwitterIcon fontSize="medium" />, name: 'Twitter' },
//                                 { icon: <InstagramIcon fontSize="medium" />, name: 'Instagram' },
//                                 { icon: <LinkedInIcon fontSize="medium" />, name: 'LinkedIn' },
//                                 { icon: <YouTubeIcon fontSize="medium" />, name: 'YouTube' }
//                             ].map((social, index) => (
//                                 <Box
//                                     key={index}
//                                     sx={{
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         alignItems: 'center',
//                                         transition: 'transform 0.3s',
//                                         '&:hover': {
//                                             cursor:'pointer',
//                                             transform: 'translateY(-5px)'
//                                         }
//                                     }}
//                                 >
//                                     <Box
//                                         sx={{
//                                             backgroundColor: 'transparent',
//                                             color: 'white',
//                                             width: 40,
//                                             height: 40,
//                                             border: '1px solid white',
//                                             borderRadius: '50%',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             mb: 1
//                                         }}
//                                     >
//                                         {social.icon}
//                                     </Box>
//                                 </Box>
//                             ))}
//                         </Box>
//                     </Grid2>
//                 </Grid2>
//             </Container>
//         </Box>
//     );
// };

// export default ConnectWith;

'use client';
import React from 'react';
import { Grid2, Typography, Box, useTheme, useMediaQuery, Container } from '@mui/material';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { useContext } from 'react';
import { MenuContext } from '../../layout/context/menucontext';

function ConnectWith() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { pagedata } = useContext(MenuContext);
    const titles = pagedata?.connect_section?.title
    const descriptions = pagedata?.connect_section?.description
    const icons = pagedata?.connect_section?.icon || []

    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/webdads/images/common/responsive-img.png)`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                py: 8,
                px: 2
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container spacing={4} justifyContent="center">
                    <Grid2 size={{ xs: 12 }} textAlign="center">
                        <Typography
                            variant={isMobile ? 'h4' : 'h3'}
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                color: 'white',
                                mb: 3
                            }}
                        > {titles}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: isMobile ? '1rem' : '1.1rem',
                                color: 'white',
                                mb: 4,
                                lineHeight: 1.6
                            }}
                        >
                           {descriptions}
                        </Typography>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Grid2 container alignItems="center" justifyContent="space-between" spacing={3}>
                            <Grid2 size={{ xs: 12, md: 3 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                                <Box component="img" src="/webdads/images/common/social-arrow.svg" alt="social arrow" loading="lazy" sx={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid2>

                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: 2,
                                        '& a': {
                                            color: 'white',
                                            fontSize: isMobile ? '1.5rem' : '1.75rem',
                                            transition: 'transform 0.3s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 50,
                                            height: 50,
                                            border: '1px solid white',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                cursor: 'pointer',
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)'
                                            }
                                        }
                                    }}
                                >
                                    {[
                                        { icon: <FaFacebookF />, url: 'https://www.facebook.com/Webdads2u' },
                                        { icon: <FaTwitter />, url: 'https://x.com/webdads2u' },
                                        { icon: <FaYoutube />, url: 'https://www.youtube.com/webdads2u' },
                                        { icon: <IoLogoInstagram />, url: 'https://www.instagram.com/webdads2u/' }
                                    ].map((social, index) => (
                                        <Box key={index} component="a" href={social.url} target="_blank" rel="noopener noreferrer">
                                            {social.icon}
                                        </Box>
                                    ))}
                                </Box>
                            </Grid2>

                            <Grid2 size={{ xs: 12, md: 3 }} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                                <Box component="img" src="/webdads/images/common/social-arrow.svg" alt="social arrow" loading="lazy" sx={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default ConnectWith;
