// "use client";

// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// export default function GoogleReviews() {
//     const reviews = [
//         {
//             bgColor: "#f4f4f5",
//             textColor: "black",
//             opacityBlocks: 0.2,
//             name: "krishna Moorthy",
//             initial: "K",
//             reviewText:
//                 "Lorem ipsum dolor sit amet consectetur. Malesuada mauris erat amet semper in ut aliquam sagittis. Ipsum quis neque amet parturient lacus penatibus.",
//         },
//         {
//             bgColor: "#f4f4f5",
//             textColor: "black",
//             opacityBlocks: 0.6,
//             name: "krishna Moorthy",
//             initial: "K",
//             reviewText:
//                 "Lorem ipsum dolor sit amet consectetur. Malesuada mauris erat amet semper in ut aliquam sagittis. Ipsum quis neque amet parturient lacus penatibus.",
//         },
//         {
//             bgColor: "#f4f4f5",
//             textColor: "black",
//             opacityBlocks: 0.2,
//             name: "krishna Moorthy",
//             initial: "K",
//             reviewText:
//                 "Lorem ipsum dolor sit amet consectetur. Malesuada mauris erat amet semper in ut aliquam sagittis. Ipsum quis neque amet parturient lacus penatibus.",
//         },
//         {
//             bgColor: "#f4f4f5",
//             textColor: "black",
//             opacityBlocks: 0.2,
//             name: "krishna Moorthy",
//             initial: "K",
//             reviewText:
//                 "Lorem ipsum dolor sit amet consectetur. Malesuada mauris erat amet semper in ut aliquam sagittis. Ipsum quis neque amet parturient lacus penatibus.",
//         },
//         {
//             bgColor: "#f4f4f5",
//             textColor: "black",
//             opacityBlocks: 0.2,
//             name: "krishna Moorthy",
//             initial: "K",
//             reviewText:
//                 "Lorem ipsum dolor sit amet consectetur. Malesuada mauris erat amet semper in ut aliquam sagittis. Ipsum quis neque amet parturient lacus penatibus.",
//         },
//     ];

//     function ColoredBlocks({ opacity = 0.2 }) {
//         return (
//             <Box
//                 sx={{
//                     width: 96,
//                     height: 96,
//                     position: "absolute",
//                     left: { xs: 140, sm: 195 },
//                     top: -16,
//                     opacity: opacity,
//                     overflow: "hidden",
//                 }}
//             >
//                 <Box
//                     sx={{
//                         width: 96,
//                         height: 96,
//                         position: "absolute",
//                         left: 1.5,
//                         top: 0.5,
//                         bgcolor: "white",
//                     }}
//                 />
//                 <Box
//                     sx={{
//                         width: 64,
//                         height: 36,
//                         position: "absolute",
//                         left: 6.5,
//                         top: 0.5,
//                         bgcolor: "red",
//                     }}
//                 />
//                 <Box
//                     sx={{
//                         width: 20,
//                         height: 40,
//                         position: "absolute",
//                         left: 1.5,
//                         top: 26,
//                         bgcolor: "yellow",
//                     }}
//                 />
//                 <Box
//                     sx={{
//                         width: 44,
//                         height: 44,
//                         position: "absolute",
//                         left: 47.5,
//                         top: 38,
//                         bgcolor: "slategray",
//                     }}
//                 />
//                 <Box
//                     sx={{
//                         width: 64,
//                         height: 36,
//                         position: "absolute",
//                         left: 6.5,
//                         top: 55,
//                         bgcolor: "green",
//                     }}
//                 />
//             </Box>
//         );
//     }

//     // Simple Google logo SVG as React component
//     const GoogleLogo = () => (
//         <svg
//             width="70"
//             height="70"
//             viewBox="0 0 533.5 544.3"
//             xmlns="http://www.w3.org/2000/svg"
//             style={{ display: "block" }}
//         >
//             <path
//                 d="M533.5 278.4c0-18.6-1.5-36.5-4.3-53.9H272v101.9h146.8c-6.4 34.7-25.7 64.2-54.7 83.9v69.6h88.4c51.7-47.6 81.1-117.9 81.1-201.5z"
//                 fill="#4285F4"
//             />
//             <path
//                 d="M272 544.3c73.6 0 135.5-24.3 180.7-65.9l-88.4-69.6c-24.5 16.4-55.8 26-92.3 26-70.9 0-131-47.8-152.5-112.1H31.3v70.7c45.2 89.4 137.6 150.9 240.7 150.9z"
//                 fill="#34A853"
//             />
//             <path
//                 d="M119.5 321.7c-11.6-34.7-11.6-72 0-106.7v-70.7H31.3c-39.6 77.8-39.6 170.4 0 248.2l88.2-70.8z"
//                 fill="#FBBC05"
//             />
//             <path
//                 d="M272 107.7c38.4-.6 75.3 13.2 103.4 38.3l77.4-77.4C407.5 24.1 345.6 0 272 0 168.9 0 76.5 61.5 31.3 150.9l88.2 70.7c21.5-64.3 81.6-112 152.5-113.9z"
//                 fill="#EA4335"
//             />
//         </svg>
//     );

//     return (
//         <Box
//             sx={{
//                 maxWidth: 1240,
//                 mx: "auto",
//                 px: { xs: 2, sm: 3 },
//                 py: 6,
//             }}
//         >
//             {/* Title */}
//             <Typography
//                 sx={{
//                     color: "#312e81",
//                     fontFamily: "Poppins",
//                     fontWeight: 400,
//                     fontSize: { xs: "1.125rem", md: "1.25rem" },
//                     mb: 1,
//                     textAlign: "center",
//                     userSelect: "none",
//                 }}
//             >
//                 Google reviews
//             </Typography>

//             {/* Subtitle */}
//             <Typography
//                 sx={{
//                     maxWidth: 602,
//                     color: "#312e81",
//                     fontFamily: "Poppins",
//                     fontWeight: 600,
//                     fontSize: { xs: "1.5rem", md: "1.875rem" },
//                     textAlign: "center",
//                     mb: 4,
//                     mx: "auto",
//                     userSelect: "none",
//                 }}
//             >
//                 Discover how strong partnerships fuel great outcomes.
//             </Typography>

//             {/* Swiper slider */}
//             <Swiper
//                 modules={[Autoplay, Pagination, Navigation]}
//                 spaceBetween={24}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 // navigation
//                 autoplay={{ delay: 4000, disableOnInteraction: false }}
//                 breakpoints={{
//                     600: { slidesPerView: 1.2 },
//                     900: { slidesPerView: 2 },
//                     1200: { slidesPerView: 4 },
//                 }}
//                 style={{ paddingBottom: 40 }}
//             >
//                 {reviews.map((review, idx) => (
//                     <SwiperSlide key={idx}>
//                         <Box
//                             sx={{
//                                 bgcolor: "#F2F2F2",
//                                 borderRadius: 1,
//                                 height: 256,
//                                 p: 2,
//                                 position: "relative",
//                                 cursor: "pointer",
//                                 transition: "all 0.3s ease",

//                                 color: review.textColor,

//                                 "&:hover": {
//                                     bgcolor: review.textColor === "black" ? "#262250" : "#262250",
//                                     // boxShadow: "0 0 0 4px rgba(220, 38, 38, 0.7)",
//                                     color: "white"
//                                 },
//                             }}
//                         >
//                             {/* Google logo top-right */}
//                             <Box
//                                 sx={{
//                                     position: "absolute",
//                                     top: 2,
//                                     right: 0,
//                                     // width: 100,
//                                     // height: 100,
//                                 }}
//                                 aria-label="Google Logo"
//                                 role="img"
//                             >
//                                 <GoogleLogo />
//                             </Box>

//                             {/* Initial circle */}
//                             <Box
//                                 sx={{
//                                     width: 36,
//                                     height: 36,
//                                     position: "absolute",
//                                     left: 16,
//                                     top: 16,
//                                 }}
//                             >
//                                 <Box
//                                     sx={{
//                                         width: 36,
//                                         height: 36,
//                                         bgcolor: "#d4d4d8",
//                                         borderRadius: "50%",
//                                         position: "absolute",
//                                         top: 0,
//                                         left: 0,
//                                     }}
//                                 />
//                                 <Typography
//                                     sx={{
//                                         position: "absolute",
//                                         top: 4,
//                                         left: 12,
//                                         fontFamily: "Poppins",
//                                         fontWeight: 600,
//                                         fontSize: "1.125rem",
//                                         userSelect: "none",
//                                         pointerEvents: "none",
//                                         color: "black",
//                                     }}
//                                 >
//                                     {review.initial}
//                                 </Typography>
//                             </Box>

//                             {/* Name */}
//                             <Typography
//                                 sx={{
//                                     position: "absolute",
//                                     top: 22,
//                                     left: 58,
//                                     fontFamily: "Poppins",
//                                     fontWeight: 600,
//                                     fontSize: "1rem",
//                                     userSelect: "none",
//                                     pointerEvents: "none",
//                                     color: review.textColor,
//                                 }}
//                             >
//                                 {review.name}
//                             </Typography>

//                             {/* Colored blocks */}
//                             {/* <Box
//                                 sx={{
//                                     width: 96,
//                                     height: 96,
//                                     position: "absolute",
//                                     left: 195,
//                                     top: -16,
//                                     opacity: review.opacityBlocks,
//                                     overflow: "hidden",
//                                 }}
//                             >
//                                 <Box
//                                     sx={{
//                                         width: 96,
//                                         height: 96,
//                                         position: "absolute",
//                                         left: 1.5,
//                                         top: 0.5,
//                                         bgcolor: "white",
//                                     }}
//                                 />
//                                 <Box
//                                     sx={{
//                                         width: 64,
//                                         height: 36,
//                                         position: "absolute",
//                                         left: 6.5,
//                                         top: 0.5,
//                                         bgcolor: "red",
//                                     }}
//                                 />
//                                 <Box
//                                     sx={{
//                                         width: 20,
//                                         height: 40,
//                                         position: "absolute",
//                                         left: 1.5,
//                                         top: 26,
//                                         bgcolor: "yellow",
//                                     }}
//                                 />
//                                 <Box
//                                     sx={{
//                                         width: 44,
//                                         height: 44,
//                                         position: "absolute",
//                                         left: 47.5,
//                                         top: 38,
//                                         bgcolor: "slategray",
//                                     }}
//                                 />
//                                 <Box
//                                     sx={{
//                                         width: 64,
//                                         height: 36,
//                                         position: "absolute",
//                                         left: 6.5,
//                                         top: 55,
//                                         bgcolor: "green",
//                                     }}
//                                 />
//                             </Box> */}

//                             {/* Review text */}
//                             <Box
//                                 sx={{
//                                     width: 224,
//                                     height: 160,
//                                     position: "absolute",
//                                     top: 87,
//                                     left: 20,
//                                     overflow: "hidden",
//                                 }}
//                             >
//                                 <Typography
//                                     sx={{
//                                         position: "absolute",
//                                         top: 1,
//                                         left: 1,
//                                         fontFamily: "Poppins",
//                                         fontWeight: 400,
//                                         fontSize: "1rem",
//                                         userSelect: "none",
//                                         pointerEvents: "none",
//                                         color: review.textColor,
//                                     }}
//                                 >
//                                     {review.reviewText}
//                                 </Typography>
//                             </Box>
//                         </Box>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </Box>
//     );
// }
"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function GoogleReviews(data) {
    console.log(data.data, "data")
    const google_reviews = data.data.google_reviews
    const reviews = [
        {
            bgColor: "#f4f4f5",
            textColor: "black",
            opacityBlocks: 0.2,
            name: "krishna Moorthy",
            initial: "K",
            reviewText:
                "Lorem ipsum dolor sit amet consectetur. Malesuada mauris erat amet semper in ut aliquam sagittis. Ipsum quis neque amet parturient lacus penatibus.",
        },
        {
            bgColor: "#f4f4f5",
            textColor: "black",
            opacityBlocks: 0.6,
            name: "krishna Moorthy",
            initial: "K",
            reviewText:
                "Lorem ipsum dolor sit amet consectetur. Malesuada mauris erat amet semper in ut aliquam sagittis. Ipsum quis neque amet parturient lacus penatibus.",
        },
        {
            bgColor: "#f4f4f5",
            textColor: "black",
            opacityBlocks: 0.2,
            name: "krishna Moorthy",
            initial: "K",
            reviewText:
                "Lorem ipsum dolor sit amet consectetur. Malesuada mauris erat amet semper in ut aliquam sagittis. Ipsum quis neque amet parturient lacus penatibus.",
        },
        {
            bgColor: "#f4f4f5",
            textColor: "black",
            opacityBlocks: 0.2,
            name: "krishna Moorthy",
            initial: "K",
            reviewText:
                "Lorem ipsum dolor sit amet consectetur. Malesuada mauris erat amet semper in ut aliquam sagittis. Ipsum quis neque amet parturient lacus penatibus.",
        },
        {
            bgColor: "#f4f4f5",
            textColor: "black",
            opacityBlocks: 0.2,
            name: "krishna Moorthy",
            initial: "K",
            reviewText:
                "Lorem ipsum dolor sit amet consectetur. Malesuada mauris erat amet semper in ut aliquam sagittis. Ipsum quis neque amet parturient lacus penatibus.",
        },
    ];

    // Simple Google logo SVG as React component
    const GoogleLogo = () => (
        <svg
            width="70"
            height="70"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflowX: "hidden" }}
        >
            <path
                d="M533.5 278.4c0-18.6-1.5-36.5-4.3-53.9H272v101.9h146.8c-6.4 34.7-25.7 64.2-54.7 83.9v69.6h88.4c51.7-47.6 81.1-117.9 81.1-201.5z"
                fill="#4285F4"
            />
            <path
                d="M272 544.3c73.6 0 135.5-24.3 180.7-65.9l-88.4-69.6c-24.5 16.4-55.8 26-92.3 26-70.9 0-131-47.8-152.5-112.1H31.3v70.7c45.2 89.4 137.6 150.9 240.7 150.9z"
                fill="#34A853"
            />
            <path
                d="M119.5 321.7c-11.6-34.7-11.6-72 0-106.7v-70.7H31.3c-39.6 77.8-39.6 170.4 0 248.2l88.2-70.8z"
                fill="#FBBC05"
            />
            <path
                d="M272 107.7c38.4-.6 75.3 13.2 103.4 38.3l77.4-77.4C407.5 24.1 345.6 0 272 0 168.9 0 76.5 61.5 31.3 150.9l88.2 70.7c21.5-64.3 81.6-112 152.5-113.9z"
                fill="#EA4335"
            />
        </svg>
    );

    return (
        <Box
            sx={{
                maxWidth: 1240,
                mx: "auto",
                px: { xs: 2, sm: 4, md:3},
                py: {xs:2, sm:4, md:4},
            }}
        >
            {/* Subtitle */}
            <Typography
                sx={{
                    maxWidth: 602,
                    color: "#312e81",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: { xs: "1.5rem", md: "1.875rem" },
                    textAlign: "center",
                    mb: 1,
                    mx: "auto",
                    userSelect: "none",
                }}
            >
                Discover how strong partnerships fuel great outcomes.
            </Typography>
            <Typography
                sx={{
                    color: "#312e81",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: { xs: "1.125rem", md: "1.25rem" },
                    mb: 2,
                    textAlign: "center",
                    userSelect: "none",
                }}
            >
                Google reviews
            </Typography>


            {/* Swiper slider */}
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // navigation
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    600: { slidesPerView: 2.5 },
                    900: { slidesPerView: 2 },
                    1200: { slidesPerView: 4 },
                }}
                style={{ paddingBottom: 40 }}
                
            >
                {google_reviews?.reviews?.map((review, idx) => (
                    <SwiperSlide key={idx}>
                        <Box
                            sx={{
                                bgcolor: "#F2F2F2", // light blur-ish default bg
                                borderRadius: 1,
                                height: 256,
                                p: 0,
                                position: "relative",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                color: review.textColor,
                                backdropFilter: "blur(5px)",
                                WebkitBackdropFilter: "blur(5px)",

                                // "&:hover": {
                                // bgcolor: "#FFFFFF",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                color: "#262250",
                                backdropFilter: "blur(5px)",
                                WebkitBackdropFilter: "blur(5px)",

                                "& .google-logo": {
                                    filter: "blur(1px)",
                                    // backgroundColor: "#F2F2F2",
                                    borderRadius: "8px",
                                    transition: "all 0.3s ease",
                                },
                                // },
                                "&:hover": {
                                    bgcolor: review.textColor === "black" ? "#262250" : "#262250",
                                    color: "white !important"
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    // your card styles...
                                    position: "relative",
                                    overflow: "hidden",  // <<< clip anything overflowing the card boundaries here
                                    // rest of styles
                                }}
                            >

                                <Box
                                    className="google-logo"
                                    sx={{
                                        position: "relative",
                                        top: -11,
                                        right: -12,
                                        width: 70,
                                        height: 70,
                                        borderRadius: 1,
                                        backgroundColor: "transparent",
                                        transition: "all 0.3s ease",
                                        zIndex: 1,
                                        ml: "auto",
                                        // overflow: "hidden", // removed to avoid clipping
                                    }}
                                    aria-label="Google Logo"
                                    role="img"
                                >
                                    <GoogleLogo />
                                </Box>
                            </Box>

                            {/* Initial circle */}
                            <Box
                                sx={{
                                    width: 36,
                                    height: 36,
                                    position: "absolute",
                                    left: 16,
                                    top: 16,
                                    zIndex: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        bgcolor: "#d4d4d8",
                                        borderRadius: "50%",
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: 4,
                                        left: 12,
                                        fontFamily: "Poppins",
                                        fontWeight: 600,
                                        fontSize: "1.125rem",
                                        userSelect: "none",
                                        pointerEvents: "none",
                                        color: "black",
                                        zIndex: 3,
                                    }}
                                >
                                    {review.initial}
                                </Typography>
                            </Box>

                            {/* Name */}
                            <Typography
                                sx={{
                                    position: "absolute",
                                    top: 22,
                                    left: 58,
                                    fontFamily: "Poppins",
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                    userSelect: "none",
                                    pointerEvents: "none",
                                    // color: review.textColor,
                                    zIndex: 2,
                                }}
                            >
                                {review.name}
                            </Typography>

                            {/* Review text */}
                            <Box
                                sx={{
                                    width: 224,
                                    height: 160,
                                    position: "absolute",
                                    top: 87,
                                    left: 20,
                                    overflow: "hidden",
                                    zIndex: 2,
                                }}
                            >
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: 1,
                                        left: 1,
                                        fontFamily: "Poppins",
                                        fontWeight: 400,
                                        fontSize: "1rem",
                                        userSelect: "none",
                                        pointerEvents: "none",
                                        // color: review.textColor,
                                    }}
                                >
                                    {review.review}
                                </Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
