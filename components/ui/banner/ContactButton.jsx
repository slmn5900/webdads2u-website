// import { Button } from '@mui/material';
// import React from 'react';
// import { useContext } from 'react';
// import { MenuContext } from '../../../layout/context/menucontext';

// export default function ContactButton() {
//     const { header_section } = useContext(MenuContext);
//     const button = header_section?.button;
//      const bgImage = header_section?.bg_img || header_section?.img || header_section?.background_img;

//     const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;

//     return (
//         <>
//             <Button
//                 // variant="outlined"
//                 sx={{
//                     // backgroundColor: 'tra',
//                     fontWeight: 600,
//                     border: '2px solid #fff',
//                     borderRadius: '50px',
//                     color: 'black ',
//                     borderColor: 'white',
//                     '&:hover': {
//                         backgroundColor: 'transparent',
//                         color: 'white',
//                         borderColor: 'white'
//                     },
//                     transition: 'all 0.3s ease',
//                     py: 1,
//                     px: 2,
//                     mt: 2,
//                     letterSpacing: 0
//                 }}
//             >
//                 {button}
//             </Button>
//         </>
//     );
// }
import { Button } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

// Helper: check if background is "dark" (very rough for gradients/images)
const isDarkColor = (bg) => {
    if (!bg) return false;

    // Simple case: hex or rgb
    if (bg.startsWith('#')) {
        const hex = bg.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness < 128;
    }

    if (bg.startsWith('rgb')) {
        const [r, g, b] = bg.match(/\d+/g).map(Number);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness < 128;
    }

    // For gradients or images → assume dark by default
    return true;
};

export default function ContactButton() {
    const { header_section } = useContext(MenuContext);
    const button = header_section?.button;
    const bgImage = header_section?.bg_img || header_section?.img || header_section?.background_img;

    const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;

    // Decide text/border color
    const isDark = useMemo(() => isDarkColor(bgImage), [bgImage]);
    const textColor = isDark ? '#fff' : '#000';

    return (
        <Button
            href="/contact-us/"
            sx={{
                fontWeight: 600,
                border: `2px solid ${textColor}`,
                borderRadius: '50px',
                color: textColor,
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: textColor,
                    borderColor: textColor
                },
                transition: 'all 0.3s ease',
                py: 1,
                px: 2,
                mt: 2,
                letterSpacing: 0
            }}
        >
            {button}
        </Button>
    );
}
