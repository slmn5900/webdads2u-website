// 'use client';
// import { Container, Grid2, Box, styled } from '@mui/material';

// // Styled section component with background image
// const BrochureSection = styled(Box)(({ theme, image }) => ({
//     backgroundImage: image,
//     backgroundSize: 'cover',
//     height: '100%',
//     backgroundPosition: 'center',
//     overflowX: 'hidden',
//     backgroundRepeat: 'no-repeat',
//     position: 'relative',
//     padding: theme.spacing(7.5, 0, 10),

//     // default
//     minHeight: '50vh',

//     [theme.breakpoints.up('sm')]: {
//         minHeight: 'calc(100vh - 20px)'
//     },
//     [theme.breakpoints.up('md')]: {
//         minHeight: '50vh'
//     },
//     [theme.breakpoints.down('md')]: {
//         padding: theme.spacing(5, 0, 7.5) // Adjust for smaller screens
//     }
// }));

// // Content wrapper to position above the background
// const ContentWrapper = styled(Box)({
//     position: 'relative',
//     zIndex: 1
// });

// export default function Culturals() {
//     const bgImage = 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758372549/webdads2u/culturals/banner-image.jpg';

//     const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;

//     return (
//         <Box>
//             <BrochureSection image={image}>
//                 <Container maxWidth="lg" height="1000px">
//                     <ContentWrapper>
//                         <Grid2 container alignItems="center" spacing={4} sx={{ position: 'relative' }}></Grid2>
//                     </ContentWrapper>
//                 </Container>
//             </BrochureSection>

//             <Box component={'h3'} sx={{ textAlign: 'center', py: 3 }}>
//                 Pongal celebrate!
//             </Box>

//             <Box component={'body'}>
//                 Pongal is a vibrant and significant festival celebrated with great enthusiasm in Tamil Nadu, marking the harvest season. At Webdads2u, we recognize the importance of preserving and celebrating cultural traditions. Pongal, with its
//                 roots in ancient agrarian practices, symbolizes gratitude for nature’s bounty.
//             </Box>
//             <Box component={'body'}>
//                 During this time, families come together to prepare the traditional dish, ‘Pongal,’ a sweet rice delicacy offered to the Sun God. Homes are decorated with colorful rangolis, and cultural activities abound, reflecting the richness of
//                 Tamil heritage. At Webdads2u, we believe in integrating such cultural celebrations into our work culture, fostering a sense of unity and respect for traditions among our team members. Embracing these cultural values not only
//                 strengthens our bonds but also enhances our collective creativity and innovation.
//             </Box>
//         </Box>
//     );
// }

'use client';
import { Container, Grid2, Box, styled } from '@mui/material';

// Styled section component with background image
const BrochureSection = styled(Box)(({ theme, image }) => ({
    backgroundImage: image,
    backgroundSize: 'cover',
    height: '100%',
    backgroundPosition: 'center',
    overflowX: 'hidden',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    padding: theme.spacing(7.5, 0, 10),

    // default
    minHeight: '50vh',

    [theme.breakpoints.up('sm')]: {
        minHeight: 'calc(100vh - 20px)'
    },
    [theme.breakpoints.up('md')]: {
        minHeight: '50vh'
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(5, 0, 7.5) // Adjust for smaller screens
    }
}));

// Content wrapper to position above the background
const ContentWrapper = styled(Box)({
    position: 'relative',
    zIndex: 1
});

export default function Culturals() {
    const bgImage = 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758372549/webdads2u/culturals/banner-image.jpg';

    const image = bgImage?.startsWith('linear-gradient') ? bgImage : `url(${bgImage})`;

    const celebrationImages = [
        'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758372551/webdads2u/culturals/pongal-celebration-2.png',
        'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758372551/webdads2u/culturals/pongal-celebration.png',
        'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758372550/webdads2u/culturals/pongal-celebrations-3.png'
    ];

    return (
        <Box>
            {/* Hero Section */}
            <BrochureSection image={image}>
                <Container maxWidth="lg">
                    <ContentWrapper>
                        <Grid2 container alignItems="center" spacing={4} sx={{ position: 'relative' }}>
                            <Box component={'h1'} sx={{ textAlign: 'center', top: 50, bottom: 0, right: 0, left: 0, color: 'white', position: 'absolute ' }}>
                                Celebrations
                            </Box>
                        </Grid2>
                    </ContentWrapper>
                </Container>
            </BrochureSection>

            {/* Title */}
            <Box component={'h3'} sx={{ textAlign: 'center', py: 3 }}>
                 Pongal Celebration!
            </Box>

            {/* Description */}
            <Box component={'p'} sx={{ maxWidth: '1000px', mx: 'auto', px: 2, textAlign: 'center', pb: 4 }}>
                Pongal is a vibrant and significant festival celebrated with great enthusiasm in Tamil Nadu, marking the harvest season. At Webdads2u, we recognize the importance of preserving and celebrating cultural traditions. Pongal, with its
                roots in ancient agrarian practices, symbolizes gratitude for nature’s bounty.
            </Box>
            <Box component={'p'} sx={{ maxWidth: '1000px', mx: 'auto', px: 2, textAlign: 'center', pb: 4 }}>
                During this time, families come together to prepare the traditional dish, ‘Pongal,’ a sweet rice delicacy offered to the Sun God. Homes are decorated with colorful rangolis, and cultural activities abound, reflecting the richness of
                Tamil heritage. At Webdads2u, we believe in integrating such cultural celebrations into our work culture, fostering a sense of unity and respect for traditions among our team members. Embracing these cultural values not only
                strengthens our bonds but also enhances our collective creativity and innovation.
            </Box>

            {/* Celebration Images */}
            <Container maxWidth="lg" sx={{ pb: 5 }}>
                <Grid2 container spacing={4} justifyContent="center">
                    {celebrationImages.map((src, index) => (
                        <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                component="img"
                                src={src}
                                alt={`Pongal celebration ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    maxWidth: 300,
                                    height: 'auto',
                                    borderRadius: 2,
                                    boxShadow: 3
                                }}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
}
