'use client';
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Link,
} from '@mui/material';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { About, servicesDropdownDatas, Work } from './Headers/headerData';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import '../style/Herosection.css';

import Snowfall from 'react-snowfall';

const socialIcons = [
  { icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105556/webdads2u/mainpage/icons/ri-facebook-fill.png', link: 'https://www.facebook.com/Webdads2u' },
  { icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105553/webdads2u/mainpage/icons/ri-instagram-fill.png', link: 'https://www.instagram.com/webdads2u/' },
  { icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105550/webdads2u/mainpage/icons/mdi-youtube.png', link: 'https://www.youtube.com/webdads2u' },
  { icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105546/webdads2u/mainpage/icons/prime-twitter.png', link: 'https://www.facebook.com/Webdads2u' },
  { icon: 'https://res.cloudinary.com/dbpv95wd8/image/upload/v1763105542/webdads2u/mainpage/icons/tabler-world.png', link: 'https://www.webdads2u.com/' },
];


function ElevationScroll(props) {
  const { children } = props;
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return React.cloneElement(children, {
    className: isHome ? (!trigger ? 'appbar-dots' : 'no-dots') : 'white-header',
    elevation: trigger || !isHome ? 4 : 0,

    sx: {
      background: isMobile
        ? '#ffffff'
        : isHome
          ? trigger
            ? '#ffffff'
            : 'linear-gradient(to right, #fcf2ff, #ffffff)'
          : '#ffffff',
      color: '#000',
      transition: 'background 0.6s ease, box-shadow 0.4s ease, backdrop-filter 0.6s ease',
      backdropFilter: isHome && !trigger ? 'blur(6px)' : 'none',
      boxShadow: trigger || !isHome ? '0 3px 10px rgba(0,0,0,0.08)' : 'none',
      px: { xs: 0, sm: 0, md: 6, lg: 7 },
      py: 0.5,
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};



export default function Header(props) {
  const router = useRouter()
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  const closeOverlay = () => setMenuOverlayOpen(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);


  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => setTrigger(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src='https://assets.webdads2u.com/images/webdads2ulogo.png'
                alt="Logo"
                height="40"
              />

            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>

          <Link href="/about" style={{ textDecoration: 'none', color: '#000' }}>
                  <Typography sx={{ fontSize: 16, fontWeight: 500 }}>About</Typography>
                </Link>

                <Link
                  href="#"
                  onClick={(e) => { e.preventDefault(); setMenuOverlayOpen(true); setTimeout(() => { router.push("/about"); }, 300); }}
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Services</Typography>
                </Link>

                <Link
                  href="#"
                  onClick={(e) => { e.preventDefault(); setMenuOverlayOpen(true); setTimeout(() => { router.push("/about"); }, 300); }}
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Works</Typography>
                </Link>

                <Link href="/contact-us" style={{ textDecoration: 'none', color: '#000' }}>
                  <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Reach us</Typography>
                </Link>
                <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      border: '1px solid #000',
                      px: 2.5,
                      py: 0.8,
                      borderRadius: '6px',
                      fontSize: 15,
                      fontWeight: 500,
                      color: '#000',
                      cursor: 'pointer',
                    }}
                  >
                    Get quotes
                  </Box>
                </Link>
                <IconButton
                  color="inherit"
                  onClick={() => setMenuOverlayOpen(true)}
                  sx={{ ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>

              </Box>
            )}
            {isMobile && (
              <IconButton color="inherit" onClick={() => setMenuOverlayOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />

      <AnimatePresence>
        {menuOverlayOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ position: "fixed", inset: 0, zIndex: 2000 }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "#ffffff",
                color: "#000",
                overflowY: "auto",
                scrollbarWidth: "none",
              }}
            >

              <Snowfall
                count={200}
                speed={[0.5, 2]}
                radius={[1, 5]}
              />

              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#1e1e1e",
                  py: 2.5,
                  px: { xs: 3, md: 8 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box component={Link} href="/" onClick={closeOverlay}>
                  <img
                    src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1765197314/webdads2u/webdads2u-christmas-logo.png"
                    alt="Logo"
                    height="50"
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                <IconButton onClick={closeOverlay} sx={{ color: "#fff" }}>
                  <CloseIcon sx={{ fontSize: 32 }} />
                </IconButton>
              </Box>

              <Box sx={{ px: { xs: 3, md: 10 }, pt: 6, pb: 6 }}>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 3fr 1fr" },
                    gap: 8,
                  }}
                >
                  <Box>
                    {About.map((item, i) => (
                      <Link
                        key={i}
                        href={item.link}
                        onClick={closeOverlay}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontSize: 20,
                            fontWeight: 700,
                            mb: 2,
                            color: "#000",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                    ))}
                  </Box>

                  <Box>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                        gap: 6,
                      }}
                    >

                      <Box>
                        <Box>
                          <Typography
                            sx={{ fontWeight: 700, mb: 1, fontSize: 18, color: '#000000', cursor: 'pointer' }}
                            onClick={() => {
                              router.push('/website-development'); // navigate first
                              setTimeout(() => closeOverlay(), 50); // close overlay shortly after
                            }}
                          >
                            WEBSITE DEVELOPMENT
                          </Typography>
                        </Box>
                        {servicesDropdownDatas[0].items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.link}
                            onClick={closeOverlay}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography sx={{ fontSize: 14, mb: 0.7, color: "#444444", fontWeight: 500 }}>
                              {item.label}
                            </Typography>
                          </Link>
                        ))}

                        <Box mt={3}>
                          <Box>
                            <Typography
                              sx={{ fontWeight: 700, mb: 1, fontSize: 18, color: '#000000', cursor: 'pointer' }}
                              onClick={() => {
                                router.push('/web-design'); // navigate first
                                setTimeout(() => closeOverlay(), 50); // close overlay shortly after
                              }}
                            >
                              WEB DESIGN
                            </Typography>
                          </Box>
                          {servicesDropdownDatas[1].items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.link}
                              onClick={closeOverlay}
                              style={{ textDecoration: "none" }}
                            >
                              <Typography sx={{ fontSize: 14, mb: 0.7, color: "#444444", fontWeight: 500 }}>
                                {item.label}
                              </Typography>
                            </Link>
                          ))}
                        </Box>
                      </Box>

                      <Box>
                        <Box>
                          <Typography
                            sx={{ fontWeight: 700, mb: 1, fontSize: 18, color: '#000000', cursor: 'pointer' }}
                            onClick={() => {
                              router.push('/seo-company-in-chennai'); // navigate first
                              setTimeout(() => closeOverlay(), 50); // close overlay shortly after
                            }}
                          >
                            SEO SERVICES
                          </Typography>
                        </Box>
                        {servicesDropdownDatas[2].items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.link}
                            onClick={closeOverlay}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography sx={{ fontSize: 14, mb: 0.7, color: "#444444", fontWeight: 500 }}>
                              {item.label}
                            </Typography>
                          </Link>
                        ))}

                        <Box mt={3}>
                          <Box>
                            <Typography
                              sx={{ fontWeight: 700, mb: 1, fontSize: 18, color: '#000000', cursor: 'pointer' }}
                              onClick={() => {
                                router.push('/branding-design');
                                setTimeout(() => closeOverlay(), 50);
                              }}
                            >
                              BRANDING DESIGN
                            </Typography>
                          </Box>
                          {servicesDropdownDatas[3].items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.link}
                              onClick={closeOverlay}
                              style={{ textDecoration: "none" }}
                            >
                              <Typography sx={{ fontSize: 14, mb: 0.7, color: "#444444", fontWeight: 500 }}>
                                {item.label}
                              </Typography>
                            </Link>
                          ))}
                        </Box>
                      </Box>

                      <Box>
                        <Box>
                          <Typography
                            sx={{ fontWeight: 700, mb: 1, fontSize: 18, color: '#000000', cursor: 'pointer' }}
                            onClick={() => {
                              router.push('/mobile-app-development');
                              setTimeout(() => closeOverlay(), 50);
                            }}
                          >
                            MOBILE APP DEVELOPMENT
                          </Typography>
                        </Box>
                        {servicesDropdownDatas[4].items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.link}
                            onClick={closeOverlay}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography sx={{ fontSize: 14, mb: 0.7, color: "#444444", fontWeight: 500 }}>
                              {item.label}
                            </Typography>
                          </Link>
                        ))}

                        <Box mt={3}>
                          {/* <Typography sx={{ fontWeight: 700, mb: 1, fontSize: 18, fontColor: '#000000' }}>
                            CRM & ERP DEVELOPMENT
                          </Typography> */}
                          <Box>
                            <Typography
                              sx={{ fontWeight: 700, mb: 1, fontSize: 18, color: '#000000', cursor: 'pointer' }}
                              onClick={() => {
                                router.push('/crm-erp-development');
                                setTimeout(() => closeOverlay(), 50);
                              }}
                            >
                              CRM & ERP DEVELOPMENT
                            </Typography>
                          </Box>
                          {servicesDropdownDatas[5].items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.link}
                              onClick={closeOverlay}
                              style={{ textDecoration: "none" }}
                            >
                              <Typography sx={{ fontSize: 14, mb: 0.7, color: "#444444", fontWeight: 500 }}>
                                {item.label}
                              </Typography>
                            </Link>
                          ))}
                        </Box>
                        <Box mt={3}>
                          {/* <Typography sx={{ fontWeight: 700, mb: 1, fontSize: 18, fontColor: '#000000' }}>
                            E-COMMERCE DEVELOPMENT
                          </Typography> */}
                          <Box>
                            <Typography
                              sx={{ fontWeight: 700, mb: 1, fontSize: 18, color: '#000000', cursor: 'pointer' }}
                              onClick={() => {
                                router.push('/ecommerce-website-development');
                                setTimeout(() => closeOverlay(), 50);
                              }}
                            >
                              E-COMMERCE DEVELOPMENT
                            </Typography>
                          </Box>
                          {servicesDropdownDatas[6].items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.link}
                              onClick={closeOverlay}
                              style={{ textDecoration: "none" }}
                            >
                              <Typography sx={{ fontSize: 14, mb: 0.7, color: "#444444", fontWeight: 500 }}>
                                {item.label}
                              </Typography>
                            </Link>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box>

                    <Box>
                      <Typography
                        sx={{ fontWeight: 700, mb: 1, fontSize: 16, color: '#000000', cursor: 'pointer' }}
                        onClick={() => {
                          router.push('/works');
                          setTimeout(() => closeOverlay(), 50);
                        }}
                      >                                                    Work DEVELOPMENT
                      </Typography>
                    </Box>
                    {Work.map((item, i) => (
                      <Link
                        key={i}
                        href={item.link}
                        onClick={closeOverlay}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography sx={{ fontSize: 14, mb: 0.7, color: "#444444", fontWeight: 500 }}>
                          {item.name}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </Box>

                <Box
                  sx={{
                    borderTop: "1px solid #ddd",
                    mt: 6,
                    pt: 4,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 2fr 1fr" },
                    alignItems: "flex-start",
                    gap: 6,
                  }}
                >
                  <Box>
                    <img
                      src='https://res.cloudinary.com/dbpv95wd8/image/upload/v1765197314/webdads2u/webdads2u-christmas-logo.png'
                      height="55"
                    />
                    <Typography sx={{ fontSize: 12, color: "#666", mt: 1 }}>
                      © 2025 WEBdADS2U PVT LTD.
                    </Typography>
                  </Box>

                  {/* ADDRESS */}
                  <Box sx={{ width: '70%' }}>
                    <Typography sx={{ fontWeight: 700, mb: 1, fontSize: 18 }}>INDIA</Typography>
                    <Typography sx={{ fontSize: 14, color: "#000000", fontWeight: 400 }}>
                      FIRST FLOOR, 2ND PORTION, 36, Saraswathi Nagar
                      Main Rd, Saraswathi Nagar, Thirumalaiyoyal,
                      Chennai, Tamil Nadu 600062
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: 700, mb: 1 }}>FOLLOW US</Typography>
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
                  </Box>
                </Box>

              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
