
// // "use client";
// // import React from "react";
// // import { Box, Typography } from "@mui/material";
// // import Image from "next/image";

// // const center = { x: 450, y: 300 };

// // const techItems = [
// //     { name: "React JS", icon: "/react.png", x: 50, y: 220 },
// //     { name: "Next JS", icon: "/webdadsNewImages/webdevelopment/chart/Vector (1).png", x: 230, y: 150 },
// //     { name: "WordPress", icon: "/webdadsNewImages/webdevelopment/chart/Vector (2).png", x: 540, y: 150 },
// //     { name: "Node JS", icon: "/webdadsNewImages/webdevelopment/chart/Vector (3).png", x: 230, y: 300 },
// //     { name: "PHP", icon: "/webdadsNewImages/webdevelopment/chart/Vector (4).png", x: 540, y: 305 },
// //     { name: "Mongo DB", icon: "/mongodb.png", x: 700, y: 220 },
// // ];

// // export default function WebDevelopmentCircle() {
// //     return (
// //         <Box
// //             sx={{
// //                 position: "relative",
// //                 width: 900,
// //                 height: 600,
// //                 mx: "auto",
// //                 // mt: 5,
// //             }}
// //         >
// //             {/* SVG Connection Lines */}
// //             <svg
// //                 width="100%"
// //                 height="100%"
// //                 style={{
// //                     position: "absolute",
// //                     top: 0,
// //                     left: 0,
// //                     zIndex: 0,
// //                 }}
// //             >
// //                 {techItems.map((item, index) => (
// //                     <line
// //                         key={index}
// //                         x1={center.x}
// //                         y1={center.y}
// //                         x2={item.x + 65}
// //                         y2={item.y + 65}
// //                         stroke="#1E1B56"
// //                         strokeWidth={2}
// //                     />
// //                 ))}
// //             </svg>

// //             {/* Central Circle */}

// //             {/* <Box sx={{ position: "absolute", width: "200px ", height: "200px", border: "1px dashed black",borderRadius:"50%" }}> */}

// //             <Box
// //                 sx={{
// //                     position: "absolute",
// //                     top: center.y - 80,
// //                     left: center.x - 80,
// //                     width: 160,
// //                     height: 160,
// //                     borderRadius: "50%",
// //                     bgcolor: "#1E1B56",
// //                     color: "white",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     textAlign: "center",
// //                     fontFamily: "Poppins",
// //                     fontWeight: 600,
// //                     fontSize: 18,
// //                     zIndex: 2,

// //                     boxShadow: 6,
// //                     border: "1px dashed",
// //                     // padding:"4rem"
// //                 }}
// //             >
// //                 Web <br /> Development
// //             </Box>
// //             {/* </Box> */}

// //             {/* Outer Tech Items */}
// //             {techItems.map((item, index) => (
// //                 <Box
// //                     key={index}
// //                     // sx={{
// //                     //     position: "absolute",
// //                     //     top: item.y,
// //                     //     left: item.x,
// //                     //     width: 130,
// //                     //     height: 130,
// //                     //     borderRadius: "50%",
// //                     //     display: "flex",
// //                     //     alignItems: "center",
// //                     //     justifyContent: "center",
// //                     //     textAlign: "center",

// //                     //     zIndex: 2,
// //                     //     background: "white",
// //                     //     boxShadow: 3,
// //                     //     "&::before": {
// //                     //         content: '""',
// //                     //         position: "absolute",
// //                     //         top: 0,
// //                     //         left: 0,
// //                     //         width: "100%",
// //                     //         height: "100%",
// //                     //         borderRadius: "50%",
// //                     //         // background: `conic-gradient(#E30E26 0deg 180deg, #1E1B56 180deg 360deg)`,
// //                     //         zIndex: -1,
// //                     //     },
// //                     //     border:"1px solid red"

// //                     // }}
// //                     sx={{
// //                         position: "absolute",
// //                         top: item.y,
// //                         left: item.x,
// //                         width: 130,
// //                         height: 130,
// //                         borderRadius: "50%",
// //                         background: "white",
// //                         boxShadow: 3,
// //                         display: "flex",
// //                         alignItems: "center",
// //                         justifyContent: "center",
// //                         zIndex: 2,
// //                         overflow: "visible",

// //                         // Half border gradient with ::before
// //                         "&::before": {
// //                             content: '""',
// //                             position: "absolute",
// //                             // top: 0,
// //                             // left: 0,
// //                             top: "0",
// //                             left: "0%",
// //                             transform: "translate(30%, -50%)",

// //                             width: "100%",

// //                             height: "100%",
// //                             borderRadius: "50%",
// //                             borderTop: "4px solid #E30E26",
// //                             borderBottom: "4px solid transparent",
// //                             borderLeft: "4px solid transparent",
// //                             borderRight: "4px solid transparent",
// //                             // borderImage: "linear-gradient(to right, #E30E26, #1E1B56) 1",
// //                             borderImageSlice: 1,
// //                             zIndex: 1,
// //                             pointerEvents: "none",
// //                             transform: "50% 50%"
// //                         },
// //                     }}
// //                 >
// //                     {/* <Box textAlign="center">
// //                         <Image
// //                             src={item.icon}
// //                             alt={item.name}
// //                             width={40}
// //                             height={40}
// //                             style={{ marginBottom: 8 , background: "linear-gradient(to right, #E30E26, #1E1B56) 1"}}
// //                         />
// //                         <Typography
// //                             fontWeight={600}
// //                             fontFamily="Poppins"
// //                             fontSize={14}
// //                             color="#1E1B56"
// //                         >
// //                             {item.name}
// //                         </Typography>
// //                     </Box> */}
// //                     <Box textAlign="center" position={"relative"}>
// //                         <Box sx={{
// //                             position: "absolute",
// //                             //  top: item.y - 20,
// //                             // left: item.x - 20,
// //                         }}>
// //                             <Box
// //                                 sx={{
// //                                     width: 60,
// //                                     height: 60,
// //                                     borderRadius: "50%",
// //                                     display: "flex",
// //                                     alignItems: "center",
// //                                     justifyContent: "center",
// //                                     margin: "0 auto 8px",
// //                                     background: "linear-gradient(to right, #E30E26, #1E1B56)",
// //                                 }}
// //                             >
// //                                 <Image
// //                                     src={item.icon}
// //                                     alt={item.name}
// //                                     width={30}
// //                                     height={30}
// //                                     style={{ objectFit: "contain" }}
// //                                 />
// //                             </Box>
// //                         </Box>
// //                         <Typography
// //                             fontWeight={600}
// //                             fontFamily="Poppins"
// //                             fontSize={14}
// //                             color="#1E1B56"
// //                         >
// //                             {item.name}
// //                         </Typography>
// //                     </Box>

// //                 </Box>
// //             ))}
// //         </Box>
// //     );
// // }



// "use client";
// import React from "react";
// import { Box, Typography } from "@mui/material";
// import Image from "next/image";

// const center = { x: 450, y: 300 };

// const techItems = [
//     { name: "React JS", icon: "/react.png", x: 50, y: 220 },
//     { name: "Next JS", icon: "/webdadsNewImages/webdevelopment/chart/Vector (1).png", x: 230, y: 150 },
//     { name: "WordPress", icon: "/webdadsNewImages/webdevelopment/chart/Vector (2).png", x: 540, y: 150 },
//     { name: "Node JS", icon: "/webdadsNewImages/webdevelopment/chart/Vector (3).png", x: 230, y: 300 },
//     { name: "PHP", icon: "/webdadsNewImages/webdevelopment/chart/Vector (4).png", x: 540, y: 305 },
//     { name: "Mongo DB", icon: "/mongodb.png", x: 700, y: 220 },
// ];

// export default function WebDevelopmentCircle() {
//     return (
//         <Box
//             sx={{
//                 position: "relative",
//                 width: 900,
//                 height: 600,
//                 mx: "auto",
//             }}
//         >
//             {/* Connection Lines */}
//             <svg
//                 width="100%"
//                 height="100%"
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     zIndex: 0,
//                 }}
//             >
//                 {techItems.map((item, index) => (
//                     <line
//                         key={index}
//                         x1={center.x}
//                         y1={center.y}
//                         x2={item.x + 65}
//                         y2={item.y + 65}
//                         stroke="#1E1B56"
//                         strokeWidth={2}
//                     />
//                 ))}
//             </svg>

//             {/* Center Circle */}
//             <Box
//                 sx={{
//                     position: "absolute",
//                     top: center.y - 80,
//                     left: center.x - 80,
//                     width: 160,
//                     height: 160,
//                     borderRadius: "50%",
//                     bgcolor: "#1E1B56",
//                     color: "white",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     textAlign: "center",
//                     fontFamily: "Poppins",
//                     fontWeight: 600,
//                     fontSize: 18,
//                     zIndex: 2,
//                     boxShadow: 6,
//                     border: "1px dashed white",
//                 }}
//             >
//                 Web <br /> Development
//             </Box>

//             {/* Tech Items */}
//             {techItems.map((item, index) => (
//                 <Box
//                     key={index}
//                     sx={{
//                         position: "absolute",
//                         top: item.y,
//                         left: item.x,
//                         width: 130,
//                         height: 130,
//                         borderRadius: "50%",
//                         background: "white",
//                         boxShadow: 3,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         flexDirection: "column",
//                         zIndex: 2,
//                         "&::before": {
//                             content: '""',
//                             position: "absolute",
//                             top: 0,
//                             left: 0,
//                             width: "100%",
//                             height: "100%",
//                             borderRadius: "50%",
//                             borderTop: "5px solid #E30E26",
//                             borderRight: "5px solid transparent",
//                             borderBottom: "5px solid transparent",
//                             borderLeft: "5px solid transparent",
//                             transform: "rotate(45deg)",
//                             zIndex: 1,
//                         },
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             width: 60,
//                             height: 60,
//                             borderRadius: "50%",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             background: "linear-gradient(to right, #E30E26, #1E1B56)",
//                             zIndex: 2,
//                             mb: 1,
//                         }}
//                     >
//                         <Image
//                             src={item.icon}
//                             alt={item.name}
//                             width={30}
//                             height={30}
//                             style={{ objectFit: "contain" }}
//                         />
//                     </Box>
//                     <Typography
//                         fontWeight={600}
//                         fontFamily="Poppins"
//                         fontSize={14}
//                         color="#1E1B56"
//                         zIndex={2}
//                     >
//                         {item.name}
//                     </Typography>
//                 </Box>
//             ))}
//         </Box>
//     );
// }


import { Box } from '@mui/material';
import React from 'react';

export default function TechOrbitSection() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <Box
                component="img"
                src="/webdadsNewImages/webdevelopment/Frame 1984078126.svg"
                alt="Tech Orbit"
                sx={{ pt: { xs: 2, md: 4 }, width: { xs: "350px", sm: 700, md: 1100, lg: 1100 } }}
            />
        </div>
    );
}

