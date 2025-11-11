'use client';

import React from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

// Footer data
const leftLinks = [
  'Work',
  'Contact Us',
  'Career',
  'Blog',
  'Privacy Policy',
  'Terms & Conditions',
  'Refund Policy',
];

const rightLinks = [
  {
    title: 'Website Development',
    items: [
      'Web Portal Development',
      'WordPress Web Development',
      'ReactJs Web Development',
      'PHP Web Development',
      'Custom Web Development',
    ],
    subTitle: 'Web Design',
    subItems: [
      'HTML5 Website Design',
      'Domain Registration',
      'Hosting',
      'Custom Web Design',
      'Responsive Website',
      'UI/UX Design',
      'Website Redesign',
      'Website Maintenance',
    ],
  },
  {
    title: 'SEO Services',
    items: [
      'Digital Marketing',
      'PPC Service',
      'E-Commerce SEO Service',
      'Local SEO Service',
      'Off Page SEO',
      'Link Building Service',
      'Content Writing Service',
    ],
    subTitle: 'Branding Design',
    subItems: [
     
      'Brochure Design',
      'Social Media Design',
      'Corporate Gifts Design',
      'Business Card Design',
      'Letterhead Design',
    ],
  },
  {
    title: 'Mobile App Development',
    items: [
      'iOS App Development',
      'Android App Development',
      'Flutter App Development',
      'React Native App Development',
      'Mobile App UI/UX Design',
    ],
    subTitle: 'CRM & ERP Development',
    subItems: ['Customized CRM', 'Customized ERP'],
    subTitle2: 'E-Commerce Development',
    subItems2: ['WooCommerce', 'Opencart', 'Shopify'],
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#222222',
        color: '#fff',
        pt: 8,
        pb: 4,
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Container maxWidth="xl">
        {/* Logo */}
        {/* <Box
          sx={{
            mb: 6,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={160}
            height={50}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Box> */}

        {/* Footer Content */}
        <Grid container spacing={4}>
          {/* Left Column (col-4) */}
          <Grid item xs={12} md={4}>
            <Box>
              {leftLinks.map((item, index) => (
                <MuiLink
                  key={index}
                  href="#"
                  underline="none"
                  sx={{
                    display: 'block',
                    color: '#bfbfbf',
                    fontSize: '14px',
                    mb: 1,
                    '&:hover': { color: '#fff' },
                  }}
                >
                  {item}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Right Column (col-8) */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {rightLinks.map((section, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  {/* Main Title */}
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1.5, color: '#fff' }}
                  >
                    {section.title}
                  </Typography>

                  {/* Items */}
                  {section.items.map((item, i) => (
                    <MuiLink
                      href="#"
                      key={i}
                      underline="none"
                      sx={{
                        display: 'block',
                        color: '#bfbfbf',
                        fontSize: '14px',
                        mb: 0.8,
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      {item}
                    </MuiLink>
                  ))}

                  {/* Subsection 1 */}
                  {section.subTitle && (
                    <>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          mt: 3,
                          mb: 1.5,
                          color: '#fff',
                        }}
                      >
                        {section.subTitle}
                      </Typography>
                      {section.subItems.map((subItem, j) => (
                        <MuiLink
                          href="#"
                          key={j}
                          underline="none"
                          sx={{
                            display: 'block',
                            color: '#bfbfbf',
                            fontSize: '14px',
                            mb: 0.8,
                            '&:hover': { color: '#fff' },
                          }}
                        >
                          {subItem}
                        </MuiLink>
                      ))}
                    </>
                  )}

                  {/* Subsection 2 (E-Commerce below CRM & ERP) */}
                  {section.subTitle2 && (
                    <>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          mt: 3,
                          mb: 1.5,
                          color: '#fff',
                        }}
                      >
                        {section.subTitle2}
                      </Typography>
                      {section.subItems2.map((subItem2, k) => (
                        <MuiLink
                          href="#"
                          key={k}
                          underline="none"
                          sx={{
                            display: 'block',
                            color: '#bfbfbf',
                            fontSize: '14px',
                            mb: 0.8,
                            '&:hover': { color: '#fff' },
                          }}
                        >
                          {subItem2}
                        </MuiLink>
                      ))}
                    </>
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            borderTop: '1px solid #333',
            mt: 6,
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '14px', color: '#bfbfbf' }}>
            © 2025 by WEBDADS2U PVT LTD.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.5, mt: { xs: 2, sm: 0 } }}>
            {['ri_facebook-fill.png', 'ri_instagram-fill.png', 'mdi_youtube.png', 'prime_twitter.png', 'tabler_world-www.png'].map((icon, index) => (
                <img
                key={index}
                src={`images/${icon}`}
                alt={icon}
                style={{
                    background: '#000000',
                    padding: '10px',
                    borderRadius: '20px',
                    width: '40px',
                    height: '40px',
                    objectFit: 'contain',
                    cursor: 'pointer',
                }}
                />
            ))}
         </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
