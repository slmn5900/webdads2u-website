// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { CiClock1 } from 'react-icons/ci';

// const initialPosts = [
//     {
//         id: 1,
//         title: 'SEO Algorithm Updates for the Year 2023',
//         date: 'November 17, 2023',
//         excerpt: 'Home Blog SEO SEO Algorithm Updates for the Year 2023...',
//         link: '/seo-algorithm-updates-for-the-year-2023/',
//         imgSrc: '/webdads/images/home/card-container-images/seo-algorithm-updates-for-the-year-2023_20240d03e2.avif',
//         alt: 'SEO Algorithm Updates'
//     },
//     {
//         id: 2,
//         title: 'Introduction to Python – A developer perspective',
//         date: 'December 2, 2023',
//         excerpt: 'We choose to develop our code base in Python. Most...',
//         link: '/introduction-to-python-a-developer-perspective/',
//         // imgSrc: '/webdads/images/home/card-container-images/introduction-to-python–A-developer-perspective.avif',
//         imgSrc: '/webdads/images/home/card-container-images/introduction_to_python_A_developer_perspective.avif',
//         alt: 'Introduction to Python'
//     },
//     {
//         id: 3,
//         title: 'What is CRM Software Development',
//         date: 'March 19, 2024',
//         excerpt: 'Home Blog CRM and ERP What is CRM software development...',
//         link: '/what-is-crm-software-development/',
//         imgSrc: '/webdads/images/home/card-container-images/crm-webdads.avif',
//         alt: 'CRM Software Development'
//     }
// ];

// const CardContainer = () => {
//     const [posts, setPosts] = useState(initialPosts);
//     // const [page, setPage] = useState(1);

//     return (
//         <>
//             <div className='container'>
//                 <div className="row pt-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
//                     <div className="elementor-element elementor-element-d32b387 blog-sec elementor-widget elementor-widget-text-editor" data-id="d32b387" data-element_type="widget" data-widget_type="text-editor.default">
// <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
//     <p className='landing-page-card-blog-para-p'>Our Latest Blog</p>
//     <h3 className='landing-page-card-blog-para-h3'>
//         Connect with us for experiencing the best <span >IT Solutions</span>
//     </h3>

// </div>
//                     </div>
//                 </div>
//             </div>
//             <section className="container py-3">
//                 <div className="row">
//                     {posts.map((post) => (
//                         <div key={post.id} className="col-sm-6 col-md-4 mb-4">
//                             <div className="landing-page-card-post-grid card">
//                                 <div className="landing-page-card-post-thumbnail">
//                                     <div>
//                                         <Link href={post.link} passHref style={{ textDecoration: 'none' }}>
//                                             <div className="entry-overlay">
//                                                 <i className="fas fa-long-arrow-alt-right"></i>
//                                             </div>
//                                             <Image
//                                                 src={post.imgSrc}
//                                                 alt={post.alt}
//                                                 width={900}
//                                                 height={490}
//                                                 className="img-fluid"
//                                                 loading="lazy"
//                                             />
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="post-content content">
//                                     <h2 className="post-title">
//                                         <Link href={post.link} passHref style={{ textDecoration: 'none', fontFamily: `Poppins, Sans-serif`, fontSize: '22px', fontWeight: '600', color: `#08203A` }}>
//                                             {post.title}
//                                         </Link>
//                                     </h2>
//                                     <p className="post-date" style={{ color: '#929292', fontSize: '12px' }}>
//                                         <CiClock1 style={{ fontSize: '18px' }} /> {post.date}
//                                     </p>
//                                     <p className="post-excerpt" style={{ color: '#666', fontFamily: 'Poppins, Sans-serif', fontSize: '16px', fonWeight: '400', margin: '15px 0 20px 0' }}>
//                                         {post.excerpt}
//                                     </p>
//                                     <Link href={post.link} passHref a className="read-more" style={{ textDecoration: 'none' }}>
//                                         {/* <a className="read-more">Read More</a> */}
//                                         <button className="landing-page-card-btn" style={{ backgroundColor: `#08203A`, color: 'white', padding: '10px', borderRadius: '5px', width: '150px', fontSize: '18px', fontWeight: '600' }}>
//                                             Read More
//                                         </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 {/* {page < 3 && ( // Simulate 3 pages of posts
//         <div className="load-more-button-wrap text-center">
//           <button className="btn btn-primary" onClick={handleLoadMore}>
//             Load More
//           </button>
//         </div>
//       )} */}
//             </section>
//         </>
//     );
// };

// export default CardContainer;
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Grid2, Typography, Card, CardMedia, CardContent, Button, Box, Avatar } from '@mui/material';
import { CiClock1 } from 'react-icons/ci';
import { motion } from 'framer-motion';

const initialPosts = [
    {
        id: 1,
        title: 'SEO Algorithm Updates for the Year 2023',
        date: 'November 17, 2023',
        excerpt: 'Home Blog SEO SEO Algorithm Updates for the Year 2023...',
        link: '/seo-algorithm-updates-for-the-year-2023/',
        imgSrc: '/webdads/images/home/card-container-images/seo-algorithm-updates-for-the-year-2023_20240d03e2.avif',
<<<<<<< HEAD
        alt: 'SEO Algorithm Updates',
=======
        alt: 'SEO Algorithm Updates'
>>>>>>> a0d19cc (Initial commit)
    },
    {
        id: 2,
        title: 'Introduction to Python – A developer perspective',
        date: 'December 2, 2023',
        excerpt: 'We choose to develop our code base in Python. Most...',
        link: '/introduction-to-python-a-developer-perspective/',
        imgSrc: '/webdads/images/home/card-container-images/introduction_to_python_A_developer_perspective.avif',
<<<<<<< HEAD
        alt: 'Introduction to Python',
=======
        alt: 'Introduction to Python'
>>>>>>> a0d19cc (Initial commit)
    },
    {
        id: 3,
        title: 'What is CRM Software Development',
        date: 'March 19, 2024',
        excerpt: 'Home Blog CRM and ERP What is CRM software development...',
        link: '/what-is-crm-software-development/',
        imgSrc: '/webdads/images/home/card-container-images/crm-webdads.avif',
<<<<<<< HEAD
        alt: 'CRM Software Development',
    },
=======
        alt: 'CRM Software Development'
    }
>>>>>>> a0d19cc (Initial commit)
];

const CardContainer = () => {
    return (
        <>
<<<<<<< HEAD
            <Box sx={{ py: 7 }}>

                {/* Header Section */}
                <Container sx={{ textAlign: 'center', py: 7 }}>
                    <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <p className='landing-page-card-blog-para-p' style={{ fontFamily: "Poppins" }}>Our Latest Blog</p>
                        <h3 className='landing-page-card-blog-para-h3'>
                            Connect with us for experiencing the best <span >IT Solutions</span>
                        </h3>

                    </div>
                </Container>
=======
            <Box sx={{ py: { xs: 0, md: 1 }, px: { xs: 0, md: 7 }, mb: { xs: 0, sm: 2 } }}>
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', py: { xs: 3, md: 4 } }}>
                    <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <p className="landing-page-card-blog-para-p" style={{ fontFamily: 'Poppins' }}>
                            Our Latest Blog
                        </p>
                        <h3 className="landing-page-card-blog-para-h3">
                            Connect with us for experiencing the best <span>IT Solutions</span>
                        </h3>
                    </div>
                </Box>
>>>>>>> a0d19cc (Initial commit)

                {/* Card Section */}
                <Container>
                    <Grid2 container spacing={4}>
                        {initialPosts.map((post, index) => (
                            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
<<<<<<< HEAD
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <Link href={post.link} passHref>
                                            <CardMedia
                                                component="div"
                                                sx={{ position: 'relative', height: 200 }}
                                            >
                                                <Image
                                                    src={post.imgSrc}
                                                    alt={post.alt}
                                                    fill
                                                    style={{ objectFit: 'cover', borderRadius: '4px 4px 0 0' }}
                                                />
=======
                                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <Link href={post.link} passHref>
                                            <CardMedia component="div" sx={{ position: 'relative', height: 200 }}>
                                                <Image src={post.imgSrc} alt={post.alt} fill style={{ objectFit: 'cover', borderRadius: '4px 4px 0 0' }} />
>>>>>>> a0d19cc (Initial commit)
                                            </CardMedia>
                                        </Link>
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography
                                                component={Link}
                                                href={post.link}
                                                sx={{
                                                    textDecoration: 'none',
                                                    color: '#08203A',
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: '20px',
<<<<<<< HEAD
                                                    fontWeight: 600,
=======
                                                    fontWeight: 600
>>>>>>> a0d19cc (Initial commit)
                                                }}
                                            >
                                                {post.title}
                                            </Typography>

<<<<<<< HEAD

                                            <Typography
                                                sx={{ display: 'flex', alignItems: 'center', color: '#929292', mt: 1, fontSize: '14px', gap: 2 }}
                                            >
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src="/webdads/images/home/testimonial/client-review-4.avif"
                                                    sx={{ width: 24, height: 24 }}
                                                /> <Link href="/" style={{ textDecoration: "none",fontSize:"15px" }}>Webdads2u</Link>
=======
                                            <Typography sx={{ display: 'flex', alignItems: 'center', color: '#929292', mt: 1, fontSize: '14px', gap: 3 }}>
                                                <Avatar alt="Remy Sharp" src="/webdads/images/home/testimonial/client-review-4.avif" sx={{ width: 24, height: 24 }} />{' '}
                                                <Link href="/" style={{ textDecoration: 'none', fontSize: '15px' }}>
                                                    Webdads2u
                                                </Link>
>>>>>>> a0d19cc (Initial commit)
                                                <CiClock1 style={{ fontSize: '18px', marginRight: '5px' }} /> {post.date}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: '16px',
                                                    fontWeight: 400,
                                                    color: '#666',
<<<<<<< HEAD
                                                    my: 2,
=======
                                                    my: 2
>>>>>>> a0d19cc (Initial commit)
                                                }}
                                            >
                                                {post.excerpt}
                                            </Typography>

                                            <Link href={post.link} passHref>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        backgroundColor: '#08203A',
                                                        color: '#fff',
                                                        px: 3,
                                                        py: 1,
                                                        borderRadius: '5px',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
<<<<<<< HEAD
                                                        textTransform: 'none',
=======
                                                        textTransform: 'none'
>>>>>>> a0d19cc (Initial commit)
                                                    }}
                                                >
                                                    Read More
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
            </Box>
        </>
    );
};

export default CardContainer;
