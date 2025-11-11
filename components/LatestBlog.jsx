'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Typography, Card, CardMedia, CardContent, Button, Box, Avatar } from '@mui/material';
import { CiClock1 } from 'react-icons/ci';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/LatestBlog.css';
import { PiGreaterThanBold } from "react-icons/pi";

const initialPosts = [
  {
    id: 1,
    type: 'Technology',
    title: 'SEO Algorithm Updates for the Year 2023',
    date: 'November 17, 2023',
    excerpt: 'We begin by analyzing your individual profile and goals to identify the ideal destination...',
    link: '/seo-algorithm-updates-for-the-year-2023/',
    imgSrc: '/webdads/images/home/card-container-images/seo-algorithm-updates-for-the-year-2023_20240d03e2.avif',
    alt: 'SEO Algorithm Updates'
  },
  {
    id: 2,
    type: 'Technology',
    title: 'Introduction to Python – A developer perspective',
    date: 'December 2, 2023',
    excerpt: 'We choose to develop our code base in Python. Most...',
    link: '/introduction-to-python-a-developer-perspective/',
    imgSrc: '/webdads/images/home/card-container-images/introduction_to_python_A_developer_perspective.avif',
    alt: 'Introduction to Python'
  },
  {
    id: 3,
    type: 'Technology',
    title: 'What is CRM Software Development',
    date: 'March 19, 2024',
    excerpt: 'We explore CRM software development and its importance...',
    link: '/what-is-crm-software-development/',
    imgSrc: '/webdads/images/home/card-container-images/crm-webdads.avif',
    alt: 'CRM Software Development'
  }
];

const LatestBlog = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: { xs: 2, md: 4 }, px: { xs: 0, md: 7 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', py: { xs: 3, md: 4 } }}>
        <p className="landing-page-p" style={{ fontFamily: 'Poppins' }}>
          Our Latest Blog
        </p>
        <h3 className="landing-page-h3">
          Connect with us for experiencing <br />the best <span>IT Solutions</span>
        </h3>
      </Box>

      {/* Carousel Section */}
      <Container>
        <Slider {...settings}>
          {initialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  mx: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '480px',
                  boxShadow: 'none',
                  background: 'white',
              
                }}
              >
                <Link href={post.link} passHref>
                  <CardMedia component="div" sx={{ position: 'relative', height: 250 }}>
                    <Image
                      src={post.imgSrc}
                      alt={post.alt}
                      fill
                      style={{ objectFit: 'cover', borderRadius: '4px 4px 0 0' }}
                    />
                  </CardMedia>
                </Link>

                <CardContent sx={{ flexGrow: 1 }}>

                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#929292',
                      mt: 1,
                      fontSize: '14px',
                      gap: 1,
                    }}
                  >
                    {/* <Avatar
                      alt="Webdads2u"
                      src="/webdads/images/home/testimonial/client-review-4.avif"
                      sx={{ width: 30, height: 30 }}
                    />{' '} */}
                    <Typography sx={{color: '#262250', fontWeight:'500'}}>{post.type}</Typography>
                    {/* <CiClock1 style={{ fontSize: '18px', marginRight: '5px' }} />  */}
                    {post.date}
                  </Typography>

                  <Typography
                    component={Link}
                    href={post.link}
                    sx={{
                      textDecoration: 'none',
                      color: '#08203A',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                    }}
                  >
                    {post.title}
                  </Typography>

                  

                  <Typography
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#666',
                      my: 2,
                    }}
                  >
                    {post.excerpt}
                  </Typography>

                  <Link href={post.link} passHref style={{textDecoration:'none', color:'#253B7A'}}>
                    
                      Learn More <PiGreaterThanBold />
                   
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default LatestBlog;
