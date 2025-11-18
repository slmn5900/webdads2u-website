'use client';
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { Inter } from "next/font/google";
import '../style/LatestBlog.css';
// Footer data with links
const leftLinks = [
  { name: 'Work', link: '/work' },
  { name: 'Contact Us', link: '/contact' },
  { name: 'Career', link: '/career' },
  { name: 'Blog', link: '/blog' },
  { name: 'Privacy Policy', link: '/privacy-policy' },
  { name: 'Terms & Conditions', link: '/terms-conditions' },
  { name: 'Refund Policy', link: '/refund-policy' },
];

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rightLinks = [
  {
    title: 'Website Development',
    items: [
      { name: 'Web Portal Development', link: '/services/web-portal' },
      { name: 'WordPress Web Development', link: '/services/wordpress' },
      { name: 'ReactJs Web Development', link: '/services/reactjs' },
      { name: 'PHP Web Development', link: '/services/php' },
      { name: 'Custom Web Development', link: '/services/custom-web' },
    ],
    subTitle: 'Web Design',
    subItems: [
      { name: 'HTML5 Website Design', link: '/services/html5-design' },
      { name: 'Domain Registration', link: '/services/domain-registration' },
      { name: 'Hosting', link: '/services/hosting' },
      { name: 'Custom Web Design', link: '/services/custom-design' },
      { name: 'Responsive Website', link: '/services/responsive-website' },
      { name: 'UI/UX Design', link: '/services/ui-ux' },
      { name: 'Website Redesign', link: '/services/website-redesign' },
      { name: 'Website Maintenance', link: '/services/website-maintenance' },
    ],
  },
  {
    title: 'SEO Services',
    items: [
      { name: 'Digital Marketing', link: '/services/digital-marketing' },
      { name: 'PPC Service', link: '/services/ppc' },
      { name: 'E-Commerce SEO Service', link: '/services/ecommerce-seo' },
      { name: 'Local SEO Service', link: '/services/local-seo' },
      { name: 'Off Page SEO', link: '/services/off-page-seo' },
      { name: 'Link Building Service', link: '/services/link-building' },
      { name: 'Content Writing Service', link: '/services/content-writing' },
    ],
    subTitle: 'Branding Design',
    subItems: [
      { name: 'Brochure Design', link: '/services/brochure' },
      { name: 'Social Media Design', link: '/services/social-media-design' },
      { name: 'Corporate Gifts Design', link: '/services/corporate-gifts' },
      { name: 'Business Card Design', link: '/services/business-card' },
      { name: 'Letterhead Design', link: '/services/letterhead' },
    ],
  },
  {
    title: 'Mobile App Development',
    items: [
      { name: 'iOS App Development', link: '/services/ios-app' },
      { name: 'Android App Development', link: '/services/android-app' },
      { name: 'Flutter App Development', link: '/services/flutter-app' },
      { name: 'React Native App Development', link: '/services/react-native-app' },
      { name: 'Mobile App UI/UX Design', link: '/services/mobile-ui-ux' },
    ],
    subTitle: 'CRM & ERP Development',
    subItems: [
      { name: 'Customized CRM', link: '/services/crm' },
      { name: 'Customized ERP', link: '/services/erp' },
    ],
    subTitle2: 'E-Commerce Development',
    subItems2: [
      { name: 'WooCommerce', link: '/woo-commerce' },
      { name: 'Opencart', link: '/opencart-development' },
      { name: 'Shopify', link: '/shopify-development' },
    ],
  },
];

const socialIcons = [
  { icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105556/webdads2u/mainpage/icons/ri-facebook-fill.png', link: 'https://www.facebook.com/Webdads2u' },
  { icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105553/webdads2u/mainpage/icons/ri-instagram-fill.png', link: 'https://www.instagram.com/webdads2u/' },
  { icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105550/webdads2u/mainpage/icons/mdi-youtube.png', link: 'https://www.youtube.com/webdads2u' },
  { icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105546/webdads2u/mainpage/icons/prime-twitter.png', link: 'https://www.facebook.com/Webdads2u' },
  { icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105542/webdads2u/mainpage/icons/tabler-world.png', link: 'https://www.webdads2u.com/' },
];

const Footer = () => {
  return (
    <div className='Footer-main'>
    <Box
      sx={{
        backgroundColor: '#222222',
        color: '#fff',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={4} className='left-footer-desktop'>
            <Box>
              {leftLinks.map((item, index) => (
                <MuiLink
                  key={index}
                  href={item.link}
                  underline="none"
                  sx={{
                    display: 'block',
                    color: '#999999',
                    fontSize: '14px',
                    mb: 1,
                    '&:hover': { color: '#fff' },
                  }}
                >
                  {item.name}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={8} className='footer-a-link'>
            <Grid container spacing={4}>
              {rightLinks.map((section, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1.5, color: '#fff' }}
                  >
                    {section.title}
                  </Typography>

                  {section.items.map((item, i) => (
                    <MuiLink
                      key={i}
                      href={item.link}
                      underline="none"
                      sx={{
                        display: 'block',
                        color: '#999999',
                        fontSize: '14px',
                        mb: 0.8,
                        '&:hover': { color: '#fff' },
                      }}
                    >
                      {item.name}
                    </MuiLink>
                  ))}

                  {section.subTitle && (
                    <>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mt: 3, mb: 1.5, color: '#fff' }}
                      >
                        {section.subTitle}
                      </Typography>
                      {section.subItems.map((subItem, j) => (
                        <MuiLink
                          key={j}
                          href={subItem.link}
                          underline="none"
                          sx={{
                            display: 'block',
                            color: '#999999',
                            fontSize: '14px',
                            mb: 0.8,
                            '&:hover': { color: '#fff' },
                          }}
                        >
                          {subItem.name}
                        </MuiLink>
                      ))}
                    </>
                  )}

                  {section.subTitle2 && (
                    <>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mt: 3, mb: 1.5, color: '#fff' }}
                      >
                        {section.subTitle2}
                      </Typography>
                      {section.subItems2.map((subItem2, k) => (
                        <MuiLink
                          key={k}
                          href={subItem2.link}
                          underline="none"
                          sx={{
                            display: 'block',
                            color: '#999999',
                            fontSize: '14px',
                            mb: 0.8,
                            '&:hover': { color: '#fff' },
                          }}
                        >
                          {subItem2.name}
                        </MuiLink>
                      ))}
                    </>
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>


            {/* mobile */}
           <Grid item xs={12} md={4} className='left-footer-mobile'>
            <Box>
              {leftLinks.map((item, index) => (
                <MuiLink
                  key={index}
                  href={item.link}
                  underline="none"
                  sx={{
                    display: 'block',
                    color: '#999999',
                    fontSize: '14px',
                    mb: 1,
                    '&:hover': { color: '#fff' },
                  }}
                >
                  {item.name}
                </MuiLink>
              ))}
            </Box>
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
          <Typography sx={{ fontSize: '14px', color: '#999999' }} className='desktop-copyrights'>
            © 2025 by WEBDADS2U PVT LTD.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.5, mt: { xs: 2, sm: 0 } }}>
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={item.icon}
                  alt={`icon-${index}`}
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
              </a>
            ))}
          </Box>

          <Typography sx={{ fontSize: '14px', color: '#999999' }} className='mobile-copyrights'>
            © 2025 by WEBDADS2U PVT LTD.
          </Typography>
        </Box>
      </Container>
    </Box>
    </div>
  );
};

export default Footer;
