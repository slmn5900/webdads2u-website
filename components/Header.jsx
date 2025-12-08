'use client';
import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  useMediaQuery,
  useTheme,
  Link,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
// import WebdadsLogo from '../app/assets/webdads2u-new-logo.jpg'

import WebdadsLogo from '../public/images/webdads2u-new-logo.jpg'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { About, servicesDropdownDatas, Work } from './Headers/headerData';
import { usePathname } from 'next/navigation';
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

/* -------------------- SCROLL BEHAVIOR -------------------- */

function ElevationScroll(props) {
  const { children } = props;
  const pathname = usePathname();
  const isHome = pathname === '/';

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

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
      // background: isMobile
      //   ? '#ffffff'
      //   : isHome
      //   ? trigger
      //     ? '#ffffff'
      //     : '#000000'
      //   : '#ffffff',
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


/* ------------------------ HEADER ------------------------- */

export default function Header(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isClient, setIsClient] = React.useState(false);
  const [menuOverlayOpen, setMenuOverlayOpen] = React.useState(false);

  React.useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return (
      <Box height="60px" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size={24} />
      </Box>
    );
  }

  const closeOverlay = () => setMenuOverlayOpen(false);

  return (
    <>
      <CssBaseline />

    {/* <video
      className="santa-walk-video"
      src="/images/santa-animation.mp4"
      autoPlay
      loop
      muted
      playsInline
    /> */}

      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: 'space-between' }}>

            {/* LOGO */}
            <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center' }}>
              {/* <img
                src={WebdadsLogo}
                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757406731/webdads2u/logo.svg"
                alt="Logo"
                height="40"
              /> */}
              <img
                src="/images/webdads-new-logo.png"
                alt="Logo"
                height="40"
              />

            </Box>

            {/* DESKTOP NAVIGATION */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>

                <Link
                  href="#"
                  onClick={(e) => {e.preventDefault(); setMenuOverlayOpen(true);setTimeout(() => {router.push("/about");}, 300);}}
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <Typography sx={{ fontSize: 16, fontWeight: 500 }}>About</Typography>
                </Link>

                <Link
                  href="#"
                  onClick={(e) => {e.preventDefault(); setMenuOverlayOpen(true);setTimeout(() => {router.push("/about");}, 300);}}
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Services</Typography>
                </Link>

                <Link
                  href="#"
                  onClick={(e) => {e.preventDefault(); setMenuOverlayOpen(true);setTimeout(() => {router.push("/about");}, 300);}}
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Works</Typography>
                </Link>

                <Link href="/contact-us" style={{ textDecoration: 'none', color: '#000' }}>
                  <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Reach us</Typography>
                </Link>

                {/* GET QUOTES BUTTON */}
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

                {/* HAMBURGER NEXT TO BUTTON */}
                <IconButton
                  color="inherit"
                  onClick={() => setMenuOverlayOpen(true)}
                  sx={{ ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>

              </Box>
            )}

            {/* MOBILE HAMBURGER */}
            {isMobile && (
              <IconButton color="inherit" onClick={() => setMenuOverlayOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}

          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Toolbar />

{/* ------------------- FULL SCREEN MENU ------------------- */}
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

        {/* ================= TOP BLACK HEADER ================= */}
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
          {/* LEFT LOGO */}
          <Box component={Link} href="/" onClick={closeOverlay}>
            <img
              src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757406867/webdads2u/footer-logo.avif"
              alt="Logo"
              height="50"
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* CLOSE ICON */}
          <IconButton onClick={closeOverlay} sx={{ color: "#fff" }}>
            <CloseIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>

        {/* ================= MAIN CONTENT ================= */}
        <Box sx={{ px: { xs: 3, md: 10 }, pt: 6, pb: 6 }}>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 3fr 1fr" },
              gap: 8,
            }}
          >
            {/* ---------- LEFT NAV (HOME, ABOUT…) ---------- */}
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

            {/* ---------- CENTER SERVICE COLUMNS ---------- */}
            <Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                  gap: 6,
                }}
              >

                {/* ===== COLUMN 1 ===== */}
                <Box>
                  {/* WEBSITE DEVELOPMENT */}
                  <Typography sx={{ fontWeight: 700, mb: 1, fontSize:18, fontColor:'#000000' }}>
                    WEBSITE DEVELOPMENT
                  </Typography>
                  {servicesDropdownDatas[0].items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={closeOverlay}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography sx={{ fontSize: 14, mb: 0.7, color: "#444444", fontWeight:500 }}>
                        {item.label}
                      </Typography>
                    </Link>
                  ))}

                  {/* WEB DESIGN */}
                  <Box mt={3}>
                    <Typography sx={{ fontWeight: 700, mb: 1, fontSize:18, fontColor:'#000000' }}>
                      WEB DESIGN
                    </Typography>
                    {servicesDropdownDatas[1].items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        onClick={closeOverlay}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography sx={{ fontSize: 14, mb: 0.7, color: "#444444", fontWeight:500  }}>
                          {item.label}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </Box>

                {/* ===== COLUMN 2 ===== */}
                <Box>
                  {/* SEO SERVICES */}
                  <Typography sx={{ fontWeight: 700, mb: 1, fontSize:18, fontColor:'#000000' }}>
                    SEO SERVICES
                  </Typography>
                  {servicesDropdownDatas[2].items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={closeOverlay}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography sx={{ fontSize: 14, mb: 0.7,  color: "#444444", fontWeight:500  }}>
                        {item.label}
                      </Typography>
                    </Link>
                  ))}

                  {/* BRANDING DESIGN */}
                  <Box mt={3}>
                    <Typography sx={{ fontWeight: 700, mb: 1,fontSize:18, fontColor:'#000000' }}>
                      BRANDING DESIGN
                    </Typography>
                    {servicesDropdownDatas[3].items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        onClick={closeOverlay}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography sx={{ fontSize: 14, mb: 0.7,  color: "#444444", fontWeight:500  }}>
                          {item.label}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </Box>

                {/* ===== COLUMN 3 ===== */}
                <Box>
                  {/* MOBILE APP DEVELOPMENT */}
                  <Typography sx={{ fontWeight: 700, mb: 1,fontSize:18, fontColor:'#000000' }}>
                    MOBILE APP DEVELOPMENT
                  </Typography>
                  {servicesDropdownDatas[4].items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={closeOverlay}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography sx={{ fontSize: 14, mb: 0.7,  color: "#444444", fontWeight:500  }}>
                        {item.label}
                      </Typography>
                    </Link>
                  ))}

                  {/* CRM & ERP */}
                  <Box mt={3}>
                    <Typography sx={{ fontWeight: 700, mb: 1, fontSize:18, fontColor:'#000000' }}>
                      CRM & ERP DEVELOPMENT
                    </Typography>
                    {servicesDropdownDatas[5].items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        onClick={closeOverlay}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography sx={{ fontSize: 14, mb: 0.7,  color: "#444444", fontWeight:500  }}>
                          {item.label}
                        </Typography>
                      </Link>
                    ))}
                  </Box>

                  {/* E-COMMERCE */}
                  <Box mt={3}>
                    <Typography sx={{ fontWeight: 700, mb: 1, fontSize:18, fontColor:'#000000' }}>
                      E-COMMERCE DEVELOPMENT
                    </Typography>
                    {servicesDropdownDatas[6].items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        onClick={closeOverlay}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography sx={{ fontSize: 14, mb: 0.7,  color: "#444444", fontWeight:500  }}>
                          {item.label}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* ---------- WORKS COLUMN ---------- */}
            <Box>
              <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 2,fontSize:18, fontColor:'#000000' }}>
                WORKS
              </Typography>
              {Work.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  onClick={closeOverlay}
                  style={{ textDecoration: "none" }}
                >
                  <Typography sx={{ fontSize: 14, mb: 0.7,  color: "#444444", fontWeight:500  }}>
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>

          {/* ================= FOOTER ================= */}
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
            {/* LEFT LOGO */}
            <Box>
              <img
                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757406731/webdads2u/logo.svg"
                height="55"
              />
              <Typography sx={{ fontSize: 12, color: "#666", mt: 1 }}>
                © 2025 WEBdADS2U PVT LTD.
              </Typography>
            </Box>

            {/* ADDRESS */}
            <Box sx={{ width: '70%' }}>
              <Typography sx={{ fontWeight: 700, mb: 1, fontSize: 18 }}>INDIA</Typography>
              <Typography sx={{ fontSize: 14, color: "#000000", fontWeight:400 }}>
                FIRST FLOOR, 2ND PORTION, 36, Saraswathi Nagar  
                Main Rd, Saraswathi Nagar, Thirumalaiyoyal,  
                Chennai, Tamil Nadu 600062
              </Typography>
            </Box>

            {/* SOCIAL ICONS */}
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
