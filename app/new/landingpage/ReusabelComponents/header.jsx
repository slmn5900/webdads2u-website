// "use client";

// import React from "react";
// import { Box, Button } from "@mui/material";
// import PhoneIcon from '@mui/icons-material/Phone';

// export default function CustomGradientBarButton() {
//     return (
//         <Box
//             sx={{
//                 position: "relative",
//                 width: { xs: "100%", sm: 528 },
//                 height: 59,
//                 bgcolor: "white",
//                 borderRadius: "65px",
//                 boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.12)",
//                 border: "1px solid rgba(0, 0, 0, 0.12)",
//                 px: 3,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 overflow: "hidden",
//                 zIndex: 4,
//                 // py:4
//             }}
//         >
//             {/* Left Logo */}
//             <Box
//                 component="img"
//                 src="/webdads2u-logo-1 1.png"
//                 alt="Webdads2u Logo"
//                 sx={{
//                     height: 30,
//                     ml: 1,
//                     objectFit: "contain",
//                 }}
//             />

//             {/* Right "Get Started" Button */}
//             <Button
//                 variant="contained"
//                 size="small"
//                 sx={{
//                     borderRadius: "60px",
//                     bgcolor: "red",
//                     px: 4,
//                     height: 40,
//                     textTransform: "uppercase",
//                     fontWeight: 500,
//                     fontSize: 14,
//                     fontFamily: "Roboto, sans-serif",
//                     letterSpacing: "0.05em",
//                     "&:hover": {
//                         bgcolor: "darkred",
//                     },
//                 }}
//             >
//            Contact Us
//             </Button>
//         </Box>
//     );
// }

"use client";

import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';

export default function CustomGradientBarButton() {
    return (
        <Box
            sx={{
                position: "relative",
                width: { xs: "100%", sm: 528 },
                height: 59,
                bgcolor: "white",
                borderRadius: "65px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.12)",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                px: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden",
                zIndex: 4,
            }}
        >
            {/* Left Logo */}
            <Box
                component="img"
                src="/webdads2u-logo-1 1.png"
                alt="Webdads2u Logo"
                sx={{
                    height: 30,
                    ml: 1,
                    objectFit: "contain",
                }}
            />

            {/* Desktop Button */}
            <Button
                variant="contained"
                size="small"
                sx={{
                    display: { xs: "none", sm: "inline-flex" },
                    borderRadius: "60px",
                    bgcolor: "red",
                    px: 4,
                    height: 40,
                    textTransform: "uppercase",
                    fontWeight: 500,
                    fontSize: 14,
                    fontFamily: "Roboto, sans-serif",
                    letterSpacing: "0.05em",
                    "&:hover": {
                        bgcolor: "darkred",
                    },
                }}
            >
                Contact Us
            </Button>

            {/* Mobile Phone Icon */}
            <IconButton
                sx={{
                    display: { xs: "flex", sm: "none" },
                    bgcolor: "red",
                    color: "white",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    ml: 2,
                    "&:hover": {
                        bgcolor: "darkred",
                    },
                }}
                aria-label="call"
            >
                <PhoneIcon />
            </IconButton>
        </Box>
    );
}
