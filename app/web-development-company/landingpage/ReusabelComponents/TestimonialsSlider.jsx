
// "use client";

// import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const testimonials = [
//     { id: 1, content: "Excellent service, truly professional!" },
//     { id: 2, content: "Highly recommended. Reliable and consistent." },
//     { id: 3, content: "They understood our needs perfectly." },
// ];

// export default function TestimonialsSlider({ data }) {
//     console.log(data, "dataValues")
//     const voice = data?.voiceoftrust
//     const slider = data?.voiceoftrust?.carousel.cards
//     console.log(voice, "voice<>>>>>")
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <Box
//             sx={{
//                 width: "100%",
//                 // maxWidth: "1240px",
//                 height: "715px",
//                 position: "relative",
//                 // mx: "auto",
//                 py: 7,
//                 bgcolor: "#262250",
//             }}
//         >
//             <Box
//                 sx={{
//                     width: "974px",
//                     height: "575px",
//                     position: "absolute",
//                     top: "20px",
//                     left: "133px",
//                 }}
//             >
//                 {/* Heading */}
//                 <Typography
//                     variant="h4"
//                     fontFamily="Poppins"
//                     fontWeight={600}
//                     textAlign="center"
//                     sx={{ fontSize: "28px", width: "602px", mx: "auto", color: "white" }}
//                 >
//                     {voice?.title}
//                 </Typography>

//                 {/* Subtitle */}
//                 <Typography
//                     fontFamily="Poppins"
//                     sx={{
//                         position: "absolute",
//                         top: "104px",
//                         left: "362px",
//                         color: "white",
//                         fontSize: "20px",
//                     }}
//                 >
//                     {voice?.subtitle}
//                 </Typography>

//                 {/* Cards Layer */}
//                 <Box
//                     sx={{
//                         width: "974px",
//                         height: "384px",
//                         position: "absolute",
//                         top: "168px",
//                         left: 0,
//                     }}
//                 >
//                     {/* Left blurred image card */}
//                     <Box
//                         sx={{
// width: 240,
// height: 320,
// position: "absolute",
// top: "55.82px",
// left: "107.39px",
//                             transform: "rotate(-4.15deg)",
//                             backgroundImage: `url('/images/bg1.jpg')`, // Replace with your image
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                             filter: "blur(8px)",
//                             borderRadius: 2,
//                             zIndex: 1,
//                             overflow: "hidden",
//                             // Optional dark overlay
//                             "&::before": {
//                                 content: '""',
//                                 position: "absolute",
//                                 top: 0,
//                                 left: 0,
//                                 width: "100%",
//                                 height: "100%",
//                                 bgcolor: "rgba(0,0,0,0.3)",
//                                 borderRadius: 2,
//                                 pointerEvents: "none",
//                             },
//                         }}
//                     />

//                     {/* Right blurred image card */}
//                     <Box
//                         sx={{
//                             width: 240,
//                             height: 320,
//                             position: "absolute",
//                             top: "58.23px",
//                             left: "610.46px",
//                             transform: "rotate(-175.85deg)",
//                             backgroundImage: `url('/images/bg2.jpg')`, // Replace with your image
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                             filter: "blur(8px)",
//                             borderRadius: 2,
//                             zIndex: 1,
//                             overflow: "hidden",
//                             // Optional dark overlay
//                             "&::before": {
//                                 content: '""',
//                                 position: "absolute",
//                                 top: 0,
//                                 left: 0,
//                                 width: "100%",
//                                 height: "100%",
//                                 bgcolor: "rgba(0,0,0,0.3)",
//                                 borderRadius: 2,
//                                 pointerEvents: "none",
//                             },
//                         }}
//                     />

//                     {/* Main testimonial slider */}
//                     <Box
//                         sx={{
//                             width: 320,
//                             height: 384,
//                             position: "absolute",
//                             top: "8px",
//                             left: "314.55px",
//                             border: "0.8px solid rgba(0,0,0,0.2)",
//                             bgcolor: "#312e81",
//                             borderRadius: 2,
//                             overflow: "hidden",
//                             zIndex: 2,
//                         }}
//                     >
//                         <Swiper
//                             slidesPerView={1}
//                             autoplay={{
//                                 delay: 3500,
//                                 disableOnInteraction: false,
//                             }}
//                             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//                             loop
//                             modules={[Autoplay]}
//                             style={{ height: "100%" }}
//                         >
//                             {slider.map((testimonial, index) => (
//                                 <SwiperSlide key={index}>
//                                     <Box
//                                         sx={{
//                                             p: 4,
//                                             height: "100%",
//                                             display: "flex",
//                                             alignItems: "center",
//                                             justifyContent: "center",
//                                             color: "white",
//                                             textAlign: "center",
//                                             fontFamily: "Poppins",
//                                             fontSize: 18,
//                                         }}
//                                     >
//                                         {testimonial.designation}
//                                     </Box>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </Box>
//                     {/* Custom Pagination Bar */}
//                     <Box
//                         sx={{
//                             position: "absolute",
//                             bottom: "-5rem",
//                             left: "403px",
//                             display: "flex",
//                             gap: "0.75rem",
//                             zIndex: 3,
//                             pt: 2
//                         }}
//                     >
//                         {testimonials.map((_, i) => (
//                             <Box
//                                 key={i}
//                                 sx={{
//                                     width: "48px",
//                                     height: "8px",
//                                     borderRadius: "10px",
//                                     backgroundColor:
//                                         i === activeIndex ? "#DC2626" : "rgba(212,212,212,0.3)",
//                                     transition: "all 0.3s",
//                                 }}
//                             />
//                         ))}
//                     </Box>
//                 </Box>


//             </Box>
//         </Box>
//     );
// }

"use client";

import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TestimonialsSlider({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const voice = data?.voiceoftrust;
    const slider = data?.voiceoftrust?.carousel.cards || [];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: "auto", sm: 'auto', md: "715px" },
                position: "relative",
                py: { xs: 5, md: 7 },
                bgcolor: "#262250",
                px: { xs: 2, sm: 4, md: 8 },
                boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    maxWidth: "100%",
                    mx: "auto",
                    position: "relative",
                    height: { xs: "auto", md: "575px" },
                }}
            >
                {/* Heading */}
                <Typography
                    variant="h4"
                    fontFamily="Poppins"
                    fontWeight={600}
                    textAlign="center"
                    sx={{
                        fontSize: { xs: "22px", sm: "26px", md: "28px" },
                        maxWidth: "602px",
                        mx: "auto",
                        color: "white",
                        mb: 2,
                    }}
                >
                    {voice?.title}
                </Typography>

                {/* Subtitle */}
                <Typography
                    fontFamily="Poppins"
                    sx={{
                        textAlign: "center",
                        color: "white",
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                        mb: { xs: 3, md: 0 },
                    }}
                >
                    {voice?.subtitle}
                </Typography>

                {/* Cards Section */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        mt: { xs: 4, md: 8 },
                    }}
                >
                    {/* Left blurred image */}

                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'block' },
                            width: 240,
                            height: 320,
                            position: "absolute",
                            top: "80px",
                            // left: "107.39px",
                            left: { md: "5%", lg: "20%" },
                            transform: "rotate(-4.15deg)",
                            backgroundImage: `url('/images/bg1.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "blur(8px)",
                            borderRadius: 2,
                            zIndex: 1,
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                bgcolor: "rgba(0,0,0,0.3)",
                                borderRadius: 2,
                            },
                        }}
                    />


                    {/* Right blurred image */}

                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'block' },
                            width: 200,
                            height: 280,
                            position: "absolute",
                            top: "100px",
                            right: { md: "5%", lg: "23%" },
                            transform: "rotate(-4.15deg)",
                            backgroundImage: `url('/images/bg2.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "blur(8px)",
                            borderRadius: 2,
                            zIndex: 1,
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                bgcolor: "rgba(0,0,0,0.3)",
                                borderRadius: 2,
                            },
                        }}
                    />


                    {/* Main slider card */}
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "320px" },
                            maxWidth: "100%",
                            height: { xs: "auto", sm: 250, md: "384px" },
                            border: "0.8px solid rgba(0,0,0,0.2)",
                            bgcolor: "#312e81",
                            borderRadius: 2,
                            zIndex: 2,
                            overflow: "hidden",
                        }}
                    >
                        <Swiper
                            slidesPerView={1}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            loop
                            modules={[Autoplay]}
                            style={{ height: "100%" }}
                        >
                            {slider.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            p: 4,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                            textAlign: "center",
                                            fontFamily: "Poppins",
                                            fontSize: { xs: 16, md: 18 },
                                            height: { xs: "auto", md: "100%" },
                                        }}
                                    >
                                        {testimonial.designation}
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Box>

                {/* Pagination Dots */}
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        justifyContent: "center",
                        gap: 1.5,
                    }}
                >
                    {slider.map((_, i) => (
                        <Box
                            key={i}
                            sx={{
                                width: "48px",
                                height: "8px",
                                borderRadius: "10px",
                                backgroundColor:
                                    i === activeIndex ? "#DC2626" : "rgba(212,212,212,0.3)",
                                transition: "all 0.3s",
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
