'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Typography, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/LatestBlog.css';
import { MdNavigateNext } from "react-icons/md";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const initialPosts = [
  {
    id: 1,
    type: 'Technology',
    title: 'SEO Algorithm Updates for the Year 2023',
    date: 'November 17, 2023',
    excerpt: 'We begin by analyzing your individual profile and goals...',
    link: '/seo-algorithm-updates-for-the-year-2023/',
    imgSrc: '/webdads/images/home/card-container-images/seo-algorithm-updates-for-the-year-2023_20240d03e2.avif',
    alt: 'SEO Algorithm Updates',
  },
  {
    id: 2,
    type: 'Technology',
    title: 'Introduction to Python – A developer perspective',
    date: 'December 2, 2023',
    excerpt: 'We choose to develop our code base in Python. Most...',
    link: '/introduction-to-python-a-developer-perspective/',
    imgSrc: '/webdads/images/home/card-container-images/introduction_to_python_A_developer_perspective.avif',
    alt: 'Introduction to Python',
  },
  {
    id: 3,
    type: 'Technology',
    title: 'What is CRM Software Development',
    date: 'March 19, 2024',
    excerpt: 'We explore CRM software development and its importance...',
    link: '/what-is-crm-software-development/',
    imgSrc: '/webdads/images/home/card-container-images/crm-webdads.avif',
    alt: 'CRM Software Development',
  },
];

const LatestBlog = () => {
  const sliderRef = useRef(null);

  const desktopSettings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const mobileSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="latest-blog-wrapper">
      <Box sx={{ py: { xs: 2, md: 4 }, px: { xs: 0, md: 7 } }}>
        <Box sx={{ textAlign: 'center', py: { xs: 0, md: 4 } }}>
          <p className="landing-page-p" style={{ fontFamily: 'Poppins' }}>
            Our Latest Blog
          </p>
          <h3 className="landing-page-h3">
            Connect with us for experiencing the best <span>IT Solutions</span>
          </h3>
        </Box>
        <Container sx={{ display: { xs: 'none', md: 'block' } }}>
          <Slider {...desktopSettings}>
            {initialPosts.map((post) => (
              <Card key={post.id} sx={{ mx: 2, display: 'flex', flexDirection: 'column', minHeight: '480px', boxShadow: 'none', background: 'white' }}>
                <Link href={post.link} passHref>
                  <CardMedia sx={{ position: 'relative', height: 250 }}>
                    <Image src={post.imgSrc} alt={post.alt} fill style={{ objectFit: 'contain' }} />
                  </CardMedia>
                </Link>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: '#929292', mt: 1, mb: 3, fontSize: '14px', gap: 1 }}>
                    <Typography sx={{ color: '#262250', fontWeight: '500' }}>{post.type}</Typography>
                    <Typography>{post.date}</Typography>
                  </Box>

                  <Typography component={Link} href={post.link} sx={{ textDecoration: 'none', color: '#08203A', fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 600, mt: 2 }}>
                    {post.title}
                  </Typography>

                  <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400, color: '#666', my: 2 }}>
                    {post.excerpt}
                  </Typography>

                  <Link href={post.link} passHref style={{ textDecoration: 'none', color: '#253B7A' }}>
                    Learn More <MdNavigateNext />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Container>
        <Container sx={{ display: { xs: 'block', md: 'none' } }}>
          <Slider ref={sliderRef} {...mobileSettings}>
            {initialPosts.map((post) => (
              <Card key={post.id} sx={{ mx: 2, display: 'flex', flexDirection: 'column', boxShadow: 'none', background: 'white' }}>
                <Link href={post.link} passHref>
                  <CardMedia sx={{ position: 'relative', height: 220 }}>
                    <Image src={post.imgSrc} alt={post.alt} fill style={{ objectFit: 'contain' }} />
                  </CardMedia>
                </Link>

                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: '#929292', fontSize: '14px', gap: 2, pb: 2 }}>
                    <Typography sx={{ color: '#262250', fontWeight: '500' }}>{post.type}</Typography>
                    <Typography sx={{ fontSize: '12px' }}>{post.date}</Typography>
                  </Box>

                  <Typography component={Link} href={post.link} sx={{ textDecoration: 'none', color: '#08203A', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600 }}>
                    {post.title}
                  </Typography>

                  <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 400, color: '#666', my: 2 }}>
                    {post.excerpt}
                  </Typography>

                  <Link href={post.link} passHref style={{ textDecoration: 'none', color: '#253B7A' }}>
                    Learn More <MdNavigateNext />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </Slider>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
            <Button onClick={() => sliderRef.current?.slickPrev()} sx={{ minWidth: 40, height: 40, borderRadius: '50%', backgroundColor: '#f0f0f0', '&:hover': { backgroundColor: '#ddd' } }}>
              <FiArrowLeft />
            </Button>
            <Button onClick={() => sliderRef.current?.slickNext()} sx={{ minWidth: 40, height: 40, borderRadius: '50%', backgroundColor: '#f0f0f0', '&:hover': { backgroundColor: '#ddd' } }}>
              <FiArrowRight />
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default LatestBlog;
