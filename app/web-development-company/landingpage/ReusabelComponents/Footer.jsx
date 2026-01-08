// "use client";
// import { Box, Typography, IconButton, Stack, useTheme, useMediaQuery } from "@mui/material";
// import { motion } from "framer-motion";

// // MUI Icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// const socialIcons = [
//     { icon: <FacebookIcon sx={{ color: "white" }} />, delay: 0 },
//     { icon: <TwitterIcon sx={{ color: "white" }} />, delay: 0.1 },
//     { icon: <LinkedInIcon sx={{ color: "white" }} />, delay: 0.2 },
//     { icon: <InstagramIcon sx={{ color: "white" }} />, delay: 0.3 },
//     { icon: <YouTubeIcon sx={{ color: "white" }} />, delay: 0.4 },
// ];

// const Footer = () => {
//     const theme = useTheme();
//     const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

//     return (
//         <Box
//             component="footer"
//             sx={{
//                 width: "100%",
//                 bgcolor: "#f4f4f5",
//                 py: 4,
//                 px: 2,
//             }}
//         >
//             <Stack spacing={2} textAlign="center" sx={{ display: "flex" }}>

//                 {/* Social Icons */}
//                 <Stack direction="row" spacing={2} justifyContent="center" >
//                     {socialIcons.map(({ icon, delay }, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             transition={{ delay }}
//                         >
//                             <IconButton
//                                 sx={{
//                                     width: 44,
//                                     height: 44,
//                                     bgcolor: "#262250",
//                                     borderRadius: "50%",
//                                     "&:hover": { bgcolor: "#262250" },
//                                 }}
//                             >
//                                 {icon}
//                             </IconButton>
//                         </motion.div>
//                     ))}
//                 </Stack>
//                 {/* Logo */}
//                 <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <Box
//                         component="img"
//                         src="/webdads2new/webdads2u-logo-1 1 (1).png"
//                         alt="WebDads2U Logo"
//                         sx={{
//                             width: { xs: 150, sm: 180, md: 200 },
//                             height: "auto",
//                             objectFit: "contain",
//                         }}
//                     />
//                 </motion.div>



//                 {/* Navigation Links */}
//                 <Stack
//                     direction={{ xs: "column", sm: "row" }}
//                     spacing={2}
//                     justifyContent="center"
//                     alignItems="center"
//                 >
//                     <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
//                         Contact
//                     </Typography>
//                     <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
//                         FAQ
//                     </Typography>
//                     <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: 400 }}>
//                         Terms & Conditions
//                     </Typography>
//                 </Stack>

//                 {/* Copyright */}
//                 <Typography
//                     variant="body2"
//                     sx={{
//                         color: "text.secondary",
//                         fontSize: "0.875rem",
//                         fontFamily: "Roboto",
//                     }}
//                 >
//                     © 2025 by WEBDADS2U PVT LTD.
//                 </Typography>
//             </Stack>
//         </Box>
//     );
// };

// export default Footer;


"use client";
import { Box, Typography, IconButton, Grid2, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

// MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const socialIcons = [
    { icon: <FacebookIcon sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem", }, }} />, delay: 0 },
    { icon: <TwitterIcon sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem", }, }} />, delay: 0.1 },
    { icon: <LinkedInIcon sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem", }, }} />, delay: 0.2 },
    { icon: <InstagramIcon sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem", }, }} />, delay: 0.3 },
    { icon: <YouTubeIcon sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem", }, }} />, delay: 0.4 },
];

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box component="footer" sx={{ bgcolor: "#f4f4f5", py: { xs: 2, md: 3 }, px: { xs: 2, sm: 4, md: 8 }, width: "100%", position: "relative" }}>
            <Grid2 container spacing={{ xs: 1, sm: 3, md: 5 }} alignItems="center">
                {/* mobile view */}
                <Grid2 size={{ xs: 12, sm: 4 }} textAlign={{ xs: "start" }} display={{ xs: 'block', sm: 'none', md: 'none' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            component="img"
                            src="/webdads2new/webdads2u-logo-1 1 (1).png"
                            alt="WebDads2U Logo"
                            loading="lazy"
                            sx={{
                                width: { xs: 150 },
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </motion.div>
                </Grid2>
                {/* Social Icons Section */}
                <Grid2 size={{ xs: 12, sm: 4, md: 4 }}  >
                    <Grid2 container spacing={{ xs: 1, md: 2 }} justifyContent='start' >
                        {socialIcons.map(({ icon, delay }, i) => (
                            <Grid2 item key={i}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay }}
                                >
                                    <IconButton
                                        sx={{
                                            width: { xs: 22, sm: 25, md: 35 },
                                            height: { xs: 22, sm: 25, md: 35 },
                                            bgcolor: "#262250",
                                            borderRadius: "50%",
                                            "&:hover": { bgcolor: '#d32f2f' },
                                        }}
                                    >
                                        {icon}
                                    </IconButton>
                                </motion.div>
                            </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
                {/* Logo Section */}
                <Grid2 size={{ xs: 12, sm: 4, md: 4 }} textAlign={{ xs: "start", sm: "center", md: "center" }} display={{ xs: 'none', sm: 'block', md: 'block' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            component="img"
                            src="/webdadsNewImages/webdads2u-logo-1.svg"
                            alt="WebDads2U Logo"
                            loading="lazy"
                            sx={{
                                width: { xs: 100, sm: 150, md: 250 },
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </motion.div>
                </Grid2>



                <Grid2 size={{ xs: 12, sm: 4, md: 4 }} >

                    <Grid2 xs={12} sm={4} md={4} sx={{
                        textAlign: { xs: "start", sm: 'end', md: "end" }
                    }}>
                        {/* Contact • FAQ row */}
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1,
                            justifyContent: { xs: "flex-start", sm: 'flex-end', md: "flex-end" }
                        }}>
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: 550,
                                    fontSize: { xs: "0.9rem", sm: "1.3rem" },
                                }}
                            >
                                Contact
                            </Typography>
                            <Box
                                sx={{
                                    width: 4,
                                    height: 4,
                                    bgcolor: "#1e1b4b",
                                    borderRadius: "50%",
                                    display: { xs: "none", sm: "block" },
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: 550,
                                    fontSize: { xs: "0.9rem", sm: "1.3rem" },
                                }}
                            >
                                FAQ
                            </Typography>
                        </Box>

                        {/* Terms & Conditions row */}
                        <Typography
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: { xs: "0.9rem", sm: "0.95rem" },
                                textAlign: { xs: "start", sm: 'end', md: "end" }
                            }}
                        >
                            Terms & Conditions
                        </Typography>
                    </Grid2>
                </Grid2>
                <Grid2 size={{ xs: 12 }} textAlign="center">
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            fontSize: { xs: "0.6rem", md: "0.875rem" },
                            fontFamily: "Roboto",
                        }}
                    >
                        © 2026 by WEBDADS2U PVT LTD.
                    </Typography>
                </Grid2>

            </Grid2>

        </Box >


    );
};

export default Footer;
