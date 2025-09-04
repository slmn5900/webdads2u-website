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
//                     ©️ 2025. All Rights Reserved. Designed and Developed by WEBDADS2U PVT LTD
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
    { icon: <FacebookIcon sx={{ color: "white" }} />, delay: 0 },
    { icon: <TwitterIcon sx={{ color: "white" }} />, delay: 0.1 },
    { icon: <LinkedInIcon sx={{ color: "white" }} />, delay: 0.2 },
    { icon: <InstagramIcon sx={{ color: "white" }} />, delay: 0.3 },
    { icon: <YouTubeIcon sx={{ color: "white" }} />, delay: 0.4 },
];

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box component="footer" sx={{ bgcolor: "#f4f4f5", py: 5, px: 2, width: "100%", position: "relative" }}>
            <Grid2 container spacing={4} justifyContent="center" alignItems="center">


                {/* Social Icons Section */}
                <Grid2 size={{ xs: 12, sm: 4 }} >
                    <Grid2 container spacing={2} justifyContent="center">
                        {socialIcons.map(({ icon, delay }, i) => (
                            <Grid2 item key={i}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay }}
                                >
                                    <IconButton
                                        sx={{
                                            width: 44,
                                            height: 44,
                                            bgcolor: "#262250",
                                            borderRadius: "50%",
                                            "&:hover": { bgcolor: "#262250" },
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
                <Grid2 size={{ xs: 12, sm: 4 }} textAlign={{ xs: "start", sm: "start", md: "center" }}>
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
                                width: { xs: 150, sm: 180, md: 200 },
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </motion.div>
                </Grid2>



                {/* Navigation Links Section */}
                <Grid2 size={{ xs: 12, sm: 4, md: 4 }} >
                    <Grid2 container spacing={1} position={"relative"} justifyContent={{ sm: "start", sm: "start", md: "end" }}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 4 }}  >
                            <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                                Contact
                            </Typography>
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    bgcolor: "#1e1b4b",
                                    borderRadius: "50%",
                                    position: "absolute",
                                    left: 240,
                                    top: 12,
                                    display: { xs: "none", sm: "none", md: "block" }
                                }}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
                            <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                                FAQ
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, md: 12 }} textAlign={{ xs: "start", sm: "start", md: "center" }} sx={{ ml: { xs: 0, sm: 0, md: 5 } }} >
                            <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: 400 }}>
                                Terms & Conditions
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Grid2>

                {/* Footer Bottom Line */}
                <Grid2 size={{ xs: 12 }} textAlign="center">
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            fontSize: "0.875rem",
                            fontFamily: "Roboto",
                            // mt: 3,
                        }}
                    >
                        ©️ 2025. All Rights Reserved. Designed and Developed by WEBDADS2U PVT LTD
                    </Typography>
                </Grid2>
            </Grid2>

        </Box>
    );
};

export default Footer;
