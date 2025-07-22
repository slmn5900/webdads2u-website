"use client";
import React from "react";
import {
    Box,
    Typography,
    Paper,
    useTheme,
    useMediaQuery,
    Grid2
} from "@mui/material";

import { motion } from "framer-motion";
import {
    AccessTime,
    CheckCircle,
    TrendingUp,
    EmojiEvents
} from "@mui/icons-material";
const cards = [
    {
        title: "Years of Experience",
        value: "10+",
        icon: <AccessTime sx={{ color: 'white' }} fontSize="large" />,
    },
    {
        title: "Sales Closed",
        value: "300+",
        icon: <CheckCircle sx={{ color: 'white' }} fontSize="large" />,
    },
    {
        title: "Successful Projects",
        value: "250+",
        icon: <TrendingUp sx={{ color: 'white' }} fontSize="large" />,
    },
    {
        title: "Satisfied Clients",
        value: "150+",
        icon: <EmojiEvents sx={{ color: 'white' }} fontSize="large" />,
    },
];

const MotionPaper = motion(Paper);
// const StatCard = ({
//     icon,
//     value,
//     label
// }) => (
//     <motion.div
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: 50 }}
//         transition={{ duration: 0.6 }}
//     >
//         <Paper
//             elevation={3}
//             sx={{
//                 p: 3,
//                 borderRadius: 3,
//                 textAlign: "center",
//                 height: "100%",
//                 background: "#fff",
//                 border: "1px solid rgba(0,0,0,0.05)"
//             }}
//         >
//             <Box color="primary.main" mb={2}>
//                 {icon}
//             </Box>
//             <Typography variant="h4" color="error">
//                 {value}
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary">
//                 {label}
//             </Typography>
//         </Paper>
//     </motion.div>
// );

export default function WhyChooseWEBDADS2U(data) {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));
    const response = data.data.why_choose_us
    console.log(response, "response")

    return (
        <Box px={isSm ? 2 : 6} py={6} bgcolor="#f9f9f9">
            <Grid2 container spacing={1} justifyContent="center">
                <Grid2 size={{ xs: 12 }} >
                    <Typography
                        variant="body1"
                        color="black"
                        fontWeight={600}
                        textAlign="start"
                        fontFamily="Poppins"
                    >
                        {response?.heading}
                    </Typography>
                </Grid2>

                <Grid2 size={{ sm: 12, md: 6 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={600}
                            fontFamily="Poppins"
                            gutterBottom
                            sx={{
                                background: "linear-gradient(90deg, #871752 0%, #262250 50%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                display: "inline-block"
                            }}
                        >
                            {response?.subheading}
                        </Typography>

                        <Typography variant="body1" mb={2}>
                            {response?.description}
                        </Typography>

                        <Box sx={{ gap: 3 }}>

                            {response?.services.map((item) =>
                            (

                                <Box mb={4} sx={{ display: "flex", gap: 2 }}>
                                    <Box >
                                        <img src={item?.icon} alt="" width={"30px"} />
                                    </Box>
                                    <Box>

                                        <Typography
                                            variant="h6"
                                            sx={{ color: "#1F167B" }}
                                            fontWeight={600}
                                            fontFamily="Poppins"
                                        >
                                            {item?.title}
                                        </Typography>
                                        <Typography variant="body1">
                                            {item?.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        {/* <Box mb={4} sx={{ display: "flex" }}>
                            <Box>
                                <img src="/webdads2new/slider_10283524 1.png" alt="" width={"30px"} />
                            </Box>
                            <Box>

                                <Typography
                                    variant="h6"
                                    sx={{ color: "#1F167B" }}
                                    fontWeight={600}
                                    fontFamily="Poppins"
                                >
                                    React App Optimization
                                </Typography>
                                <Typography variant="body1">
                                    Improve load times, performance, and SEO using React best
                                    practices.
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex" }}>
                            <Box >

                                <img src="/webdads2new/slider_10283524 1.png" alt="" width={"30px"} />
                            </Box>
                            <Box>

                                <Typography
                                    variant="h6"
                                    sx={{ color: "#1F167B" }}
                                    fontWeight={600}
                                    fontFamily="Poppins"
                                >
                                    Migration to React
                                </Typography>
                                <Typography variant="body1">
                                    Upgrade your existing website or application to React for
                                    enhanced performance.
                                </Typography>
                            </Box>
                        </Box> */}
                    </motion.div>
                </Grid2>

                <Grid2 size={{ sm: 12, md: 6 }}>
                    <Grid2 container spacing={3}>
                        <Box px={isSm ? 2 : 6} py={6}>
                            <Grid2 container spacing={3} justifyContent="center">
                                {response?.stats?.map((card, index) => (
                                    <Grid2 size={{ xs: 12, sm: 12, md: 6 }} key={index}>
                                        <MotionPaper
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            elevation={1}
                                            sx={{
                                                p: 2,
                                                borderRadius: 2,
                                                position: "relative",
                                                overflow: "hidden",
                                                // outline: "0.65px solid rgba(0,0,0,0.05)",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    width: 144,
                                                    height: 144,
                                                    top: 0,
                                                    left: -30,
                                                    // bgcolor: "red",
                                                    filter: "blur(32px)",
                                                    borderRadius: "50%",
                                                    zIndex: 0,
                                                }}
                                            />

                                            <Box
                                                sx={{
                                                    width: 56,
                                                    height: 56,
                                                    borderRadius: "50%",
                                                    background: "linear-gradient(to bottom, #e53935, #1a237e)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    // boxShadow: "0px 2px 9px rgba(0,0,0,0.19)",
                                                    mb: 3,

                                                    position: "relative",
                                                    zIndex: 1,
                                                }}
                                            >
                                              <img src={card.icon} alt="" />  
                                            </Box>

                                            <Typography
                                                variant="h4"
                                                sx={{ fontWeight: 400, zIndex: 1, color: "red", }}
                                            >
                                                {card.value}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{ color: "#1a237e", fontWeight: 500, fontFamily: "Poppins", zIndex: 1 }}
                                            >
                                                {card.label}
                                            </Typography>
                                        </MotionPaper>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Box>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box >
    );
}
