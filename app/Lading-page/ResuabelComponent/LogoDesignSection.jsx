<<<<<<< HEAD


// "use client";

// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { motion } from "framer-motion";
// import DrawIcon from "@mui/icons-material/Draw";
// import PaletteIcon from "@mui/icons-material/Palette";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// // Map string names to MUI icons
// const iconMap = {
//     "pen-square": DrawIcon,
//     "palette": PaletteIcon,
//     "check-circle": CheckCircleIcon,
// };

// export default function LogoDesignSection(data) {
//     console.log(data, "data>>>>")
//     const props = data?.data?.logo_design
//     console.log(props, "propsdsda")
//     const { title, description, features, icons, image } = props;
//     const LogoIcon = iconMap[icons?.logo] || DrawIcon;
//     const DesignIcon = iconMap[icons?.design] || PaletteIcon;
//     const FeatureIcon = iconMap[icons?.feature] || CheckCircleIcon;

//     return (
//         <Box
//             sx={{
//                 width: "100%",
//                 maxWidth: 1243,
//                 height: 320,
//                 position: "relative",
//                 display: "flex",
//                 mx: "auto",
//                 flexWrap: "wrap",
//             }}
//         >
//             {/* Left Section */}
//             <motion.div
//                 initial={{ x: -50, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//                 style={{ flex: "1 1 688px", maxWidth: 688 }}
//             >
//                 <Box
//                     sx={{
//                         height: 320,
//                         bgcolor: "#f4f4f5",
//                         p: 3,
//                         overflow: "hidden",
//                     }}
//                 >
//                     <Typography
//                         variant="h4"
//                         sx={{
//                             fontFamily: "Poppins",
//                             fontWeight: 600,
//                             color: "black",
//                             mb: 2,
//                             display: "flex",
//                             alignItems: "center",
//                             gap: 1,
//                         }}
//                     >
//                         <LogoIcon sx={{ fontSize: 28, color: "#E30E26" }} />
//                         {title}
//                     </Typography>

//                     <Typography
//                         sx={{
//                             fontFamily: "Poppins",
//                             fontSize: 16,
//                             color: "black",
//                             mb: 2,
//                         }}
//                     >
//                         {description}
//                     </Typography>

//                     {/* Divider */}
//                     <Box
//                         sx={{
//                             borderTop: "2px solid rgba(30,27,86,0.1)",
//                             my: 2,
//                             width: "100%",
//                         }}
//                     />

//                     {/* Features List */}
//                     <Box
//                         component="ul"
//                         sx={{
//                             p: 0,
//                             m: 0,
//                             listStyle: "none",
//                             mb: 3,
//                             maxHeight: 90,
//                             overflowY: "auto",
//                             pr: 1,
//                         }}
//                     >
//                         {features?.map((feature, idx) => (
//                             <Box
//                                 key={idx}
//                                 component="li"
//                                 sx={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: 1,
//                                     fontFamily: "Poppins",
//                                     fontSize: 14,
//                                     color: "black",
//                                     mb: 0.5,
//                                 }}
//                             >
//                                 <FeatureIcon sx={{ fontSize: 16, color: "#1E1B56" }} />
//                                 {feature}
//                             </Box>
//                         ))}
//                     </Box>

//                     <Button
//                         variant="contained"
//                         size="small"
//                         sx={{
//                             backgroundColor: "#E30E26",
//                             color: "white",
//                             fontFamily: "Poppins",
//                             fontSize: "10px",
//                             textTransform: "none",
//                             px: 2,
//                             py: 0.5,
//                             borderRadius: "4px",
//                             "&:hover": {
//                                 backgroundColor: "#c10c20",
//                             },
//                         }}
//                     >
//                         Know More
//                     </Button>
//                 </Box>
//             </motion.div>

//             {/* Right Image Section */}
//             <motion.div
//                 initial={{ x: 50, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//                 style={{ flex: "1 1 475px", maxWidth: 475 }}
//             >
//                 <Box
//                     sx={{
//                         height: 320,
//                         position: "relative",
//                         overflow: "hidden",
//                         outline: "1px solid rgba(0,0,0,0.1)",
//                         ml: { xs: 0, md: 1 },
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             width: "100%",
//                             height: 460,
//                             position: "absolute",
//                             top: -67,
//                             left: 0,
//                             backgroundColor: "#fff",
//                             borderRadius: 4,
//                             // boxShadow: "0px 7px 7px rgba(0,0,0,0.05)",
//                             // outline: "2px solid rgba(0,0,0,0.05)",
//                             overflow: "hidden",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             px: 2,
//                         }}
//                     >
//                         <Box
//                             component="img"
//                             src={image?.file_name}
//                             alt={image?.alt_text}
//                             sx={{
//                                 width: 246,
//                                 height: 219,
//                                 objectFit: "cover",
//                             }}
//                         />
//                     </Box>
//                 </Box>
//             </motion.div>
//         </Box>
//     );
// }
"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import DrawIcon from "@mui/icons-material/Draw";
import PaletteIcon from "@mui/icons-material/Palette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Map string names to MUI icons
const iconMap = {
    "pen-square": DrawIcon,
    "palette": PaletteIcon,
    "check-circle": CheckCircleIcon,
=======
// 'use client';

// import React from 'react';
// import { Box, Typography, Button, Grid2 } from '@mui/material';
// import { motion } from 'framer-motion';
// import DrawIcon from '@mui/icons-material/Draw';
// import PaletteIcon from '@mui/icons-material/Palette';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// // Map string names to MUI icons
// const iconMap = {
//     'pen-square': DrawIcon,
//     palette: PaletteIcon,
//     'check-circle': CheckCircleIcon
// };

// export default function LogoDesignSection({ data }) {
//     const props = data?.logo_design;
//     console.log(props, 'props');
//     // if (!props) return null;

//     // const {
//     //     title = "",
//     //     description = "",
//     //     features = [],
//     //     icons = {},
//     //     image = {},
//     // } = props;

//     // const LogoIcon = iconMap[icons.logo] || DrawIcon;
//     // const DesignIcon = iconMap[icons.design] || PaletteIcon;
//     // const FeatureIcon = iconMap[icons.feature] || CheckCircleIcon;

//     return (
//         <Box sx={{ width: '100%', py: 4 }}>
//             <Grid2 container gap={3}>
//                 {props
//                     ? props.map((item) => (
//                           <Grid2
//                               key={item.id} // Don't forget to add a key prop
//                               sx={{
//                                   width: '100%',
//                                   maxWidth: 1243,
//                                   position: 'relative',
//                                   display: 'flex',
//                                   mx: 'auto',
//                                   flexWrap: { xs: 'wrap', md: 'nowrap' }, // Wrap on mobile, nowrap on tablet/laptop
//                                   px: { xs: 0, sm: 4, md: 2 }
//                               }}
//                           >
//                               {/* Left Section */}
//                               <motion.div
//                                   initial={{ x: -50, opacity: 0 }}
//                                   whileInView={{ x: 0, opacity: 1 }}
//                                   transition={{ duration: 0.6 }}
//                                   style={{
//                                       flex: '1 1 70%',
//                                       minWidth: { xs: '100%', md: '50%' }, // Full width on mobile, 50% on tablet/laptop
//                                       maxWidth: { xs: '100%', md: '688px' }
//                                   }}
//                               >
//                                   <Box
//                                       sx={{
//                                           bgcolor: '#f4f4f5',
//                                           p: 3,
//                                           overflow: 'hidden',
//                                           height: '100%' // Ensure full height
//                                       }}
//                                   >
//                                       <Typography
//                                           variant="h4"
//                                           sx={{
//                                               fontFamily: 'Poppins',
//                                               fontWeight: 600,
//                                               color: 'black',
//                                               mb: 2,
//                                               display: 'flex',
//                                               alignItems: 'center',
//                                               gap: 1
//                                           }}
//                                       >
//                                           {/* <LogoIcon sx={{ fontSize: 28, color: "#E30E26" }} /> */}
//                                           {item.title}
//                                       </Typography>

//                                       <Typography
//                                           sx={{
//                                               fontFamily: 'Poppins',
//                                               fontSize: 16,
//                                               color: 'black',
//                                               mb: 2
//                                           }}
//                                       >
//                                           {item.description}
//                                       </Typography>

//                                       {/* Divider */}
//                                       <Box
//                                           sx={{
//                                               borderTop: '2px solid rgba(30,27,86,0.1)',
//                                               my: 2,
//                                               width: '100%'
//                                           }}
//                                       />

//                                       {/* Features List */}
//                                       <Box
//                                           component="ul"
//                                           sx={{
//                                               p: 0,
//                                               m: 0,
//                                               listStyle: 'none',
//                                               mb: 3,
//                                               // maxHeight: 90,
//                                               overflowY: 'auto',
//                                               pr: 1
//                                           }}
//                                       >
//                                           {item?.features.map((feature, idx) => (
//                                               <Box
//                                                   key={idx}
//                                                   component="li"
//                                                   sx={{
//                                                       display: 'flex',
//                                                       alignItems: 'center',
//                                                       gap: 1,
//                                                       fontFamily: 'Poppins',
//                                                       fontSize: 14,
//                                                       color: 'black',
//                                                       mb: 0.5
//                                                   }}
//                                               >
//                                                   <CheckCircleIcon sx={{ fontSize: 16, color: '#1E1B56' }} />
//                                                   {feature}
//                                               </Box>
//                                           ))}
//                                       </Box>

//                                       <Button
//                                           variant="contained"
//                                           size="small"
//                                           sx={{
//                                               backgroundColor: '#E30E26',
//                                               color: 'white',
//                                               fontFamily: 'Poppins',
//                                               fontSize: '10px',
//                                               textTransform: 'none',
//                                               px: 2,
//                                               py: 0.5,
//                                               borderRadius: '4px',
//                                               '&:hover': {
//                                                   backgroundColor: '#c10c20'
//                                               }
//                                           }}
//                                       >
//                                           Know More
//                                       </Button>
//                                   </Box>
//                               </motion.div>

//                               {/* Right Image Section */}
//                               <motion.div
//                                   initial={{ x: 50, opacity: 0 }}
//                                   whileInView={{ x: 0, opacity: 1 }}
//                                   transition={{ duration: 0.6 }}
//                                   style={{
//                                       flex: '1 1 50%',
//                                       minWidth: { xs: '100%', md: '50%' }, // Full width on mobile, 50% on tablet/laptop
//                                       maxWidth: { xs: '100%', md: '475px' },
//                                       height: { xs: '300px', md: 'auto' } // Fixed height on mobile, auto on tablet/laptop
//                                   }}
//                               >
//                                 {console.log(item.image.file_name,"item")}
//                                   <Box
//                                       sx={{
//                                           height: '100%',
//                                           position: 'relative',
//                                           overflow: 'hidden',
//                                           outline: '1px solid rgba(0,0,0,0.1)'
//                                       }}
//                                   >
//                                       <Box
//                                           sx={{
//                                               width: '100%',
//                                               height: '100%',
//                                               position: 'absolute',
//                                               overflow: 'hidden',
//                                               display: 'flex',
//                                               alignItems: 'center',
//                                               justifyContent: 'center'
//                                           }}
//                                       >
//                                           <Box
//                                               component="img"
//                                               src={item?.image?.file_name}
//                                               alt={item.image?.alt_text || 'logo design image'}
//                                               sx={{
//                                                   width: '100%',
//                                                   height: '100%',
//                                                   objectFit: 'cover'
//                                               }}
//                                           />
//                                       </Box>
//                                   </Box>
//                               </motion.div>
//                           </Grid2>
//                       ))
//                     : ''}
//             </Grid2>
//         </Box>
//     );
// }
'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DrawIcon from '@mui/icons-material/Draw';
import PaletteIcon from '@mui/icons-material/Palette';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

// Map string names to MUI icons
const iconMap = {
    'pen-square': DrawIcon,
    palette: PaletteIcon,
    'check-circle': CheckCircleIcon
>>>>>>> a0d19cc (Initial commit)
};

export default function LogoDesignSection({ data }) {
    const props = data?.logo_design;
<<<<<<< HEAD

    if (!props) return null;

    const {
        title = "",
        description = "",
        features = [],
        icons = {},
        image = {},
    } = props;

    const LogoIcon = iconMap[icons.logo] || DrawIcon;
    const DesignIcon = iconMap[icons.design] || PaletteIcon;
    const FeatureIcon = iconMap[icons.feature] || CheckCircleIcon;

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 1243,
                // height: 320,
                position: "relative",
                display: "flex",
                mx: "auto",
                flexWrap: "wrap",
                mb:2,
                px:5
            }}
        >
            {/* Left Section */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{ flex: "1 1 688px", maxWidth: 688 }}
            >
                <Box
                    sx={{
                        // height: 320,
                        bgcolor: "#f4f4f5",
                        p: 3,
                        overflow: "hidden",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "Poppins",
                            fontWeight: 600,
                            color: "black",
                            mb: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <LogoIcon sx={{ fontSize: 28, color: "#E30E26" }} />
                        {title}
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: 16,
                            color: "black",
                            mb: 2,
                        }}
                    >
                        {description}
                    </Typography>

                    {/* Divider */}
                    <Box
                        sx={{
                            borderTop: "2px solid rgba(30,27,86,0.1)",
                            my: 2,
                            width: "100%",
                        }}
                    />

                    {/* Features List */}
                    <Box
                        component="ul"
                        sx={{
                            p: 0,
                            m: 0,
                            listStyle: "none",
                            mb: 3,
                            // maxHeight: 90,
                            overflowY: "auto",
                            pr: 1,
                        }}
                    >
                        {features.map((feature, idx) => (
                            <Box
                                key={idx}
                                component="li"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    fontFamily: "Poppins",
                                    fontSize: 14,
                                    color: "black",
                                    mb: 0.5,
                                }}
                            >
                                <FeatureIcon sx={{ fontSize: 16, color: "#1E1B56" }} />
                                {feature}
                            </Box>
                        ))}
                    </Box>

                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            backgroundColor: "#E30E26",
                            color: "white",
                            fontFamily: "Poppins",
                            fontSize: "10px",
                            textTransform: "none",
                            px: 2,
                            py: 0.5,
                            borderRadius: "4px",
                            "&:hover": {
                                backgroundColor: "#c10c20",
                            },
                        }}
                    >
                        Know More
                    </Button>
                </Box>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{ flex: "1 1 475px", maxWidth: 475 }}
            >
                <Box
                    sx={{
                        height: 320,
                        position: "relative",
                        overflow: "hidden",
                        // outline: "1px solid rgba(0,0,0,0.1)",
                        ml: { xs: 0, md: 1 },
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: 460,
                            position: "absolute",
                            top: -67,
                            left: 0,
                            // backgroundColor: "#fff",
                            borderRadius: 4,
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            px: 2,
                        }}
                    >
                        <Box
                            component="img"
                            src={image?.file_name}
                            alt={image?.alt_text || "logo design image"}
                            sx={{
                                width: 246,
                                height: 219,
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Box>
            </motion.div>
=======
    console.log(props,"props")
    if (!props) return null;

    return (
        <Box sx={{ width: '100%', py: 4 }}>
            <Swiper modules={[Autoplay]} spaceBetween={30} slidesPerView={1} autoplay={{ delay: 4000, disableOnInteraction: false }} style={{ maxWidth: '1243px', margin: '0 auto' }}>
                {props?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: { xs: 'wrap', md: 'nowrap' },
                                px: { xs: 0, sm: 4, md: 2 },
                                gap: 3
                            }}
                        >
                            {/* Left Section */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    flex: '1 1 70%',
                                    minWidth: '50%',
                                    maxWidth: '688px'
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: '#f4f4f5',
                                        p: 3,
                                        height: '100%'
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 600,
                                            color: 'black',
                                            mb: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontSize: 16,
                                            color: 'black',
                                            mb: 2
                                        }}
                                    >
                                        {item.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            borderTop: '2px solid rgba(30,27,86,0.1)',
                                            my: 2,
                                            width: '100%'
                                        }}
                                    />

                                    {/* Features List */}
                                    <Box
                                        component="ul"
                                        sx={{
                                            p: 0,
                                            m: 0,
                                            listStyle: 'none',
                                            mb: 3,
                                            overflowY: 'auto',
                                            pr: 1
                                        }}
                                    >
                                        {item?.features.map((feature, idx) => (
                                            <Box
                                                key={idx}
                                                component="li"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    color: 'black',
                                                    mb: 0.5
                                                }}
                                            >
                                                <CheckCircleIcon sx={{ fontSize: 16, color: '#1E1B56' }} />
                                                {feature}
                                            </Box>
                                        ))}
                                    </Box>

                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            backgroundColor: '#E30E26',
                                            color: 'white',
                                            fontFamily: 'Poppins',
                                            fontSize: '10px',
                                            textTransform: 'none',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: '4px',
                                            '&:hover': {
                                                backgroundColor: '#c10c20'
                                            }
                                        }}
                                    >
                                        Know More
                                    </Button>
                                </Box>
                            </motion.div>

                            {/* Right Section (Image) */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    flex: '1 1 50%',
                                    minWidth: '50%',
                                    maxWidth: '475px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        outline: '1px solid rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item?.image?.file_name}
                                        alt={item?.image?.alt_text || 'logo design image'}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Box>
                            </motion.div>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
>>>>>>> a0d19cc (Initial commit)
        </Box>
    );
}
