'use client';
import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Stack,
  CssBaseline,
  Drawer,
  useMediaQuery,
  useTheme,
  Link,
  CircularProgress,
} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { About, servicesDropdownDatas, Work } from './Headers/headerData';
import '../style/Herosection.css';
import { usePathname } from "next/navigation";


/* --------------------------------------------------
   UPDATE: HOME page = gradient + dots
           OTHER PAGES = solid white header
-------------------------------------------------- */
function ElevationScroll(props) {
  const { children } = props;
  const pathname = usePathname();
  const isHome = pathname === "/";

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return React.cloneElement(children, {
    className:
      isHome
        ? (!trigger ? "appbar-dots" : "no-dots")   // Home logic
        : "white-header",                          // Other pages

    elevation: trigger || !isHome ? 4 : 0,

    sx: {
      background: isHome
        ? (trigger ? "#ffffff" : "linear-gradient(to right, #fcf2ff, #ffffff)")
        : "#ffffff",

      color: "#000",
      transition:
        "background 0.6s ease, box-shadow 0.4s ease, backdrop-filter 0.6s ease",

      backdropFilter: isHome && !trigger ? "blur(6px)" : "none",

      boxShadow:
        trigger || !isHome ? "0 3px 10px rgba(0,0,0,0.08)" : "none",

      px: { xs: 0, sm: 0, md: 6, lg: 7 },
      py: 0.5,
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



/* --------------------------------------------------
   HEADER COMPONENT
-------------------------------------------------- */
export default function Header(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isClient, setIsClient] = React.useState(false);
  const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
  const [workAnchorEl, setWorkAnchorEl] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => setIsClient(true), []);

  const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
  const handleMenuClose = (setter) => () => setter(null);

  /* CLOSE DROPDOWNS WHEN CLICK OUTSIDE */
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutAnchorEl &&
        !aboutAnchorEl.contains(event.target) &&
        !event.target.closest("#about-button")
      )
        setAboutAnchorEl(null);

      if (
        servicesAnchorEl &&
        !servicesAnchorEl.contains(event.target) &&
        !event.target.closest("#services-button")
      )
        setServicesAnchorEl(null);

      if (
        workAnchorEl &&
        !workAnchorEl.contains(event.target) &&
        !event.target.closest("#work-button")
      )
        setWorkAnchorEl(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [aboutAnchorEl, servicesAnchorEl, workAnchorEl]);

  if (!isClient) {
    return (
      <Box height="60px" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size={24} />
      </Box>
    );
  }

  return (
    <>
      <CssBaseline />

      <ElevationScroll {...props}>
        <AppBar position="fixed" color="default">
          <Toolbar sx={{ justifyContent: "space-between" }}>

            {/* MOBILE MENU ICON */}
            {isMobile && (
              <IconButton
                sx={{ position: "relative", left: -10 }}
                onClick={() => setMobileMenuOpen(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* LOGO */}
            <Box
              sx={{ m: { xs: "auto", sm: "20px", md: "0px" } }}
              component={Link}
              href="/"
            >
              <img
                src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757406731/webdads2u/logo.svg"
                alt="Logo"
                height="40"
              />
            </Box>

            {/* DESKTOP MENU */}
            {!isMobile && (
              <Stack direction="row" alignItems="center" spacing={2}>

                {/* ABOUT */}
                <Button
                  id="about-button"
                  onMouseEnter={handleMenuOpen(setAboutAnchorEl)}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    color: "black",
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    fontSize: { xs: 12, md: 10, lg: 15 },
                  }}
                >
                  About
                </Button>

                <Menu
                  anchorEl={aboutAnchorEl}
                  open={Boolean(aboutAnchorEl)}
                  onClose={handleMenuClose(setAboutAnchorEl)}
                  onMouseLeave={handleMenuClose(setAboutAnchorEl)}
                  PaperProps={{ sx: { width: "min-content", px: 2 } }}
                >
                  {About.map((item, i) => (
                    <Box
                      key={i}
                      component={Link}
                      href={item.link}
                      sx={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem
                        onClick={handleMenuClose(setAboutAnchorEl)}
                        sx={{ fontSize: "13px", fontFamily: "Poppins" }}
                      >
                        <KeyboardDoubleArrowRightRoundedIcon
                          sx={{ mr: 1 }}
                          fontSize="small"
                        />
                        {item.name}
                      </MenuItem>
                    </Box>
                  ))}
                </Menu>

                {/* SERVICES */}
                <Button
                  id="services-button"
                  onMouseEnter={handleMenuOpen(setServicesAnchorEl)}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    color: "black",
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    fontSize: { xs: 12, md: 10, lg: 15 },
                  }}
                >
                  Services
                </Button>

                <Menu
                  anchorEl={servicesAnchorEl}
                  open={Boolean(servicesAnchorEl)}
                  onClose={handleMenuClose(setServicesAnchorEl)}
                  onMouseLeave={handleMenuClose(setServicesAnchorEl)}
                  PaperProps={{
                    sx: {
                      width: "100vw",
                      maxWidth: "none",
                      left: "0 !important",
                      right: "0 !important",
                      padding: 4,
                      marginTop: "15px",
                      maxHeight: "calc(100% - 59px)",
                      height: "auto",
                    },
                  }}
                >
                  <Box display="flex" flexWrap="wrap" gap={5}>
                    {servicesDropdownDatas.map((group) => (
                      <Box key={group.label}>
                        <Box display="flex" gap={2}>
                          <Box sx={{ textAlign: "center" }}>
                            <img src={group.icon} alt="Logo" width="30" />
                          </Box>
                          <Box
                            component={Link}
                            href={group.link}
                            sx={{ textDecoration: "none", color: "black" }}
                          >
                            <Typography
                              variant="subtitle1"
                              fontWeight={600}
                              fontSize="14px"
                              my="auto"
                              fontFamily="Poppins"
                            >
                              {group.label}
                            </Typography>
                          </Box>
                        </Box>

                        {group.items.map((item) => (
                          <Box
                            key={item.label}
                            component={Link}
                            href={item.link}
                            sx={{ textDecoration: "none", color: "black" }}
                          >
                            <MenuItem
                              onClick={handleMenuClose(setServicesAnchorEl)}
                              sx={{ fontSize: "13px", fontFamily: "Poppins" }}
                            >
                              <KeyboardDoubleArrowRightRoundedIcon
                                sx={{ mr: 1 }}
                                fontSize="small"
                              />
                              {item.label}
                            </MenuItem>
                          </Box>
                        ))}
                      </Box>
                    ))}
                  </Box>
                </Menu>

                {/* WORK */}
                <Button
                  id="work-button"
                  onMouseEnter={handleMenuOpen(setWorkAnchorEl)}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    color: "black",
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    fontSize: { xs: 12, md: 10, lg: 15 },
                  }}
                >
                  Work
                </Button>

                <Menu
                  anchorEl={workAnchorEl}
                  open={Boolean(workAnchorEl)}
                  onClose={handleMenuClose(setWorkAnchorEl)}
                  onMouseLeave={handleMenuClose(setWorkAnchorEl)}
                  PaperProps={{ sx: { width: "min-content", px: 2 } }}
                >
                  {Work.map((item) => (
                    <Box
                      key={item.label}
                      component={Link}
                      href={item.link}
                      sx={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem
                        onClick={handleMenuClose(setWorkAnchorEl)}
                        sx={{ fontSize: "13px", fontFamily: "Poppins" }}
                      >
                        <KeyboardDoubleArrowRightRoundedIcon
                          sx={{ mr: 1 }}
                          fontSize="small"
                        />
                        {item.name}
                      </MenuItem>
                    </Box>
                  ))}
                </Menu>

                {/* REACH US */}
                <Box component={Link} href="/contact-us">
                  <Button
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                    }}
                  >
                    Reach Us
                  </Button>
                </Box>

                {/* GET QUOTES */}
                <Box
                  component={Link}
                  href="/contact-us"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "transparent",
                      color: "#000",
                      fontFamily: "Poppins",
                      padding: "5px 32px",
                      border: "1px solid #000",
                      boxShadow: "none",
                      "&:hover": {
                        background: "#00000010",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Get Quotes
                  </Button>
                </Box>
              </Stack>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Toolbar />

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        {/* mobile menu content */}
      </Drawer>
    </>
  );
}
