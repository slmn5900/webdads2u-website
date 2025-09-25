// 'use client';
// import React from 'react';
// import { Box, Typography, Container, Grid2, useMediaQuery } from '@mui/material';

// const TechnologyStackSection = () => {
//     const isMobile = useMediaQuery('(max-width:600px)');
//     const isTablet = useMediaQuery('(max-width:900px)');

//     // Technology stack data
//     const leftColumn = [
//         { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410102/webdads2u/web-design/icons/php.png', align: 'end' },
//         { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410099/webdads2u/web-design/icons/dot-net.png', align: 'center' },
//         { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410095/webdads2u/web-design/icons/mysql.png', align: 'end' },
//         { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410092/webdads2u/web-design/icons/sql-server.png', align: 'center' }
//     ];

//     const centerColumn = [
//         { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758089169/webdads2u/web-design/icons/stream.png', align: 'center' },
//         { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410106/webdads2u/web-design/icons/technology-stack.png', align: 'center', isMain: true },
//         { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410089/webdads2u/web-design/icons/joomla.png', align: 'center' }
//     ];

//     const rightColumn = [
//         { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410079/webdads2u/web-design/icons/mango-db.png', align: 'start' },
//         { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410082/webdads2u/web-design/icons/stream-icon-angular.png', align: 'center' },
//         { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410086/webdads2u/web-design/icons/stream-icon-wordpress.png', align: 'start' },
//         // { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410092/webdads2u/web-design/icons/sql-server.png', align: 'start' }
//     ];

//     return (
//         <Box
//             component="section"
//             sx={{
//                 backgroundColor: 'background.paper'
//             }}
//         >
//             {/* Header Section */}
//             <Grid2 container justifyContent="center">
//                 <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
//                     <Typography
//                         variant="h3"
//                         sx={{
//                             fontFamily: '"Poppins", Sans-serif',
//                             fontWeight: 800,
//                             fontSize: isMobile ? '1.5rem' : '2.2rem',
//                             background: 'linear-gradient(to right, #34a7be 40%, #024397)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                             backgroundClip: 'text',
//                             textFillColor: 'transparent',
//                             textAlign: 'center',
//                             mb: 3
//                         }}
//                     >
//                         Technology Stack
//                     </Typography>
//                     <Typography
//                         sx={{
//                             color: '#5A5A5A',
//                             maxWidth: '90%',
//                             lineHeight: 1.5,
//                             mx: 'auto',
//                             fontSize: isMobile ? '0.9rem' : '1.2rem'
//                         }}
//                     >
//                         From comprehensive brand strategy solutions, to smaller, one-off boutique logo identities, webdads2u delivers unique and memorable brands, designed to differentiate your business and propel you into the future.
//                     </Typography>
//                 </Grid2>
//             </Grid2>

//             {/* Technology Grid2 */}
//             <Grid2 container spacing={isMobile ? 2 : 4}>
//                 {/* Left Column */}
//                 <Grid2 size={{ xs: 12, md: 4 }}>
//                     {leftColumn.map((tech, index) => (
//                         <Box
//                             key={index}
//                             sx={{
//                                 display: 'flex',
//                                 justifyContent: tech.align === 'center' ? 'center' : tech.align === 'end' ? 'flex-end' : 'flex-start',
//                                 py: isMobile ? 2 : 5,
//                                 py: isMobile ? 2 : 4,
//                                 mt: isMobile ? 0 : index === 0 ? 0 : 4
//                             }}
//                         >
//                             <Box
//                                 component="img"
//                                 src={tech.src}
//                                 alt=""
//                                 sx={{
//                                     maxWidth: '100%',
//                                     height: 'auto',
//                                     ...(isMobile && { maxHeight: tech.isMain ? 120 : 60 }),
//                                     animation: 'zoomInOut 5s infinite ease-in-out',
//                                     '@keyframes zoomInOut': {
//                                         '0%, 100%': {
//                                             transform: 'scale(1)'
//                                         },
//                                         '50%': {
//                                             transform: 'scale(1.3)'
//                                         }
//                                     }
//                                 }}
//                             />
//                         </Box>
//                     ))}
//                 </Grid2>

//                 {/* Center Column */}
//                 <Grid2 size={{ xs: 12, md: 4 }}>
//                     {centerColumn.map((tech, index) => (
//                         <Box
//                             key={index}
//                             sx={{
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 gap: 10,
//                                 ...(tech.isMain && {
//                                     py: isMobile ? 2 : 0,
//                                     '& img': {
//                                         maxWidth: isMobile ? '200px' : '300px',
//                                         height: 'auto'
//                                     }
//                                 }),
//                                 ...(!tech.isMain && { py: isMobile ? 2 : 5 }),
//                                 ...(index === 2 && { pt: isMobile ? 2 : 0, mt: isMobile ? 0 : 5 })
//                             }}
//                         >
//                             <Box
//                                 component="img"
//                                 src={tech.src}
//                                 alt="image"
//                                 sx={{
//                                     maxWidth: '100%',
//                                     height: 'auto',
//                                     ...(isMobile && { maxHeight: tech.isMain ? 120 : 60 }),
//                                     ...(index !== 1 && {
//                                         // Apply animation only if NOT the second item (index 1)
//                                         animation: 'zoomInOut 5s infinite ease-in-out',
//                                         '@keyframes zoomInOut': {
//                                             '0%, 100%': {
//                                                 transform: 'scale(1)'
//                                             },
//                                             '50%': {
//                                                 transform: 'scale(1.3)'
//                                             }
//                                         }
//                                     })
//                                 }}
//                             />
//                         </Box>
//                     ))}
//                 </Grid2>

//                 {/* Right Column */}
//                 <Grid2 size={{ xs: 12, md: 4 }}>
//                     {rightColumn.map((tech, index) => (
//                         <Box
//                             key={index}
//                             sx={{
//                                 display: 'flex',
//                                 justifyContent: tech.align === 'center' ? 'center' : 'flex-start',
//                                 py: isMobile ? 2 : 4,
//                                 mt: isMobile ? 0 : index === 0 ? 0 : 4
//                             }}
//                         >
//                             <Box
//                                 component="img"
//                                 src={tech.src}
//                                 alt=""
//                                 sx={{
//                                     maxWidth: '100%',
//                                     height: 'auto',
//                                     ...(isMobile && { maxHeight: tech.isMain ? 120 : 60 }),
//                                     animation: 'zoomInOut 5s infinite ease-in-out',
//                                     '@keyframes zoomInOut': {
//                                         '0%, 100%': {
//                                             transform: 'scale(1)'
//                                         },
//                                         '50%': {
//                                             transform: 'scale(1.3)'
//                                         }
//                                     }
//                                 }}
//                             />
//                         </Box>
//                     ))}
//                 </Grid2>
//             </Grid2>
//         </Box>
//     );
// };

// export default TechnologyStackSection;
'use client';
import React from 'react';
import { Box, Typography, Grid2 } from '@mui/material';

const TechnologyStackSection = () => {
    // Technology stack data
    const leftColumn = [
        { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410102/webdads2u/web-design/icons/php.png', align: 'end' },
        { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410099/webdads2u/web-design/icons/dot-net.png', align: 'center' },
        { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410095/webdads2u/web-design/icons/mysql.png', align: 'end' },
        // { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410092/webdads2u/web-design/icons/sql-server.png', align: 'center' }
    ];

    const centerColumn = [
        { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1758089169/webdads2u/web-design/icons/stream.png', align: 'center' },
        { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410106/webdads2u/web-design/icons/technology-stack.png', align: 'center', isMain: true },
        { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410089/webdads2u/web-design/icons/joomla.png', align: 'center' }
    ];

    const rightColumn = [
        { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410079/webdads2u/web-design/icons/mango-db.png', align: 'start' },
        { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410082/webdads2u/web-design/icons/stream-icon-angular.png', align: 'center' },
        { src: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1757410086/webdads2u/web-design/icons/stream-icon-wordpress.png', align: 'start' }
    ];

    return (
        <Box component="section" sx={{ backgroundColor: 'background.paper', py: { xs: 5, md: 8 } }}>
            {/* Header Section */}
            <Grid2 container justifyContent="center">
                <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: '"Poppins", Sans-serif',
                            fontWeight: 800,
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                            background: 'linear-gradient(to right, #34a7be 40%, #024397)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textAlign: 'center',
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Technology Stack
                    </Typography>
                    <Typography
                        sx={{
                            color: '#5A5A5A',
                            maxWidth: { xs: '95%', sm: '80%', md: '70%' },
                            lineHeight: 1.6,
                            mx: 'auto',
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' }
                        }}
                    >
                        From comprehensive brand strategy solutions, to smaller, one-off boutique logo identities, webdads2u delivers unique and memorable brands, designed to differentiate your business and propel you into the future.
                    </Typography>
                </Grid2>
            </Grid2>

            {/* Technology Grid */}
            <Grid2 container spacing={{ xs: 2, md: 4 }} mt={{ xs: 3, md: 6 }}>
                {/* Left Column */}
                <Grid2 size={{ xs: 12, md: 4 }}>
                    {leftColumn.map((tech, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: tech.align === 'center' ? 'center' : tech.align === 'end' ? 'flex-end' : 'flex-start',
                                py: { xs: 2, md: 4 },
                                mt: index > 0 ? { xs: 0, md: 4 } : 0
                            }}
                        >
                            <Box
                                component="img"
                                src={tech.src}
                                alt=""
                                sx={{
                                    maxWidth: { xs: '60px', sm: '80px', md: '100px' },
                                    height: 'auto',
                                    animation: 'zoomInOut 5s infinite ease-in-out',
                                    '@keyframes zoomInOut': {
                                        '0%, 100%': { transform: 'scale(1)' },
                                        '50%': { transform: 'scale(1.3)' }
                                    }
                                }}
                            />
                        </Box>
                    ))}
                </Grid2>

                {/* Center Column */}
                <Grid2 size={{ xs: 12, md: 4 }}>
                    {centerColumn.map((tech, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                py: { xs: 2, md: tech.isMain ? 0 : 4 },
                                mt: index === 2 ? { xs: 0, md: 4 } : 0
                            }}
                        >
                            <Box
                                component="img"
                                src={tech.src}
                                alt="tech-icon"
                                sx={{
                                    maxWidth: tech.isMain ? { xs: '150px', sm: '220px', md: '300px' } : { xs: '60px', sm: '80px', md: '100px' },
                                    height: 'auto',
                                    ...(index !== 1 && {
                                        animation: 'zoomInOut 5s infinite ease-in-out',
                                        '@keyframes zoomInOut': {
                                            '0%, 100%': { transform: 'scale(1)' },
                                            '50%': { transform: 'scale(1.3)' }
                                        }
                                    })
                                }}
                            />
                        </Box>
                    ))}
                </Grid2>

                {/* Right Column */}
                <Grid2 size={{ xs: 12, md: 4 }}>
                    {rightColumn.map((tech, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: tech.align === 'center' ? 'center' : 'flex-start',
                                py: { xs: 2, md: 4 },
                                mt: index > 0 ? { xs: 0, md: 4 } : 0
                            }}
                        >
                            <Box
                                component="img"
                                src={tech.src}
                                alt=""
                                sx={{
                                    maxWidth: { xs: '60px', sm: '80px', md: '100px' },
                                    height: 'auto',
                                    animation: 'zoomInOut 5s infinite ease-in-out',
                                    '@keyframes zoomInOut': {
                                        '0%, 100%': { transform: 'scale(1)' },
                                        '50%': { transform: 'scale(1.3)' }
                                    }
                                }}
                            />
                        </Box>
                    ))}
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default TechnologyStackSection;
