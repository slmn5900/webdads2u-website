<<<<<<< HEAD

'use client';
import React from 'react';
import {
    AppBar, Box, Toolbar, Typography, Menu, MenuItem, IconButton, Button, Stack,
    Tooltip, CssBaseline, Drawer, useMediaQuery, useTheme, Accordion, AccordionSummary,
    AccordionDetails,
    Link
} from '@mui/material';
=======
'use client';
import React from 'react';
import { AppBar, Box, Toolbar, Typography, Menu, MenuItem, IconButton, Button, Stack, Tooltip, CssBaseline, Drawer, useMediaQuery, useTheme, Accordion, AccordionSummary, AccordionDetails, Link, CircularProgress } from '@mui/material';
>>>>>>> a0d19cc (Initial commit)
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
<<<<<<< HEAD
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

import { About, servicesDropdownDatas, Work } from './Headers/headerData'
=======
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

import { About, servicesDropdownDatas, Work } from './Headers/headerData';
>>>>>>> a0d19cc (Initial commit)

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0, target: window ? window() : undefined });
    return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
<<<<<<< HEAD
    window: PropTypes.func,
=======
    window: PropTypes.func
>>>>>>> a0d19cc (Initial commit)
};

export default function Header(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
<<<<<<< HEAD

=======
    const [isClient, setIsClient] = React.useState(false);
>>>>>>> a0d19cc (Initial commit)
    const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);
    const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
    const [workAnchorEl, setWorkAnchorEl] = React.useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

<<<<<<< HEAD
=======
    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <Box height="60px" display="flex" alignItems="center" justifyContent="center">
                <CircularProgress size={24} />
            </Box>
        );
    }
>>>>>>> a0d19cc (Initial commit)
    const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
    const handleMenuClose = (setter) => () => setter(null);

    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
<<<<<<< HEAD
                <AppBar color="default" sx={{ backgroundColor: '#fff', color: '#000', px: { xs: 0, md: 2 } }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        {isMobile && (
                            <IconButton onClick={() => setMobileMenuOpen(true)} color="inherit">
=======
                <AppBar color="default" sx={{ backgroundColor: '#fff', color: '#000', px: { xs: 0, sm: 0, md: 6, lg: 7 } }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        {isMobile && (
                            <IconButton sx={{ position: 'relative', left: -10 }} onClick={() => setMobileMenuOpen(true)} color="inherit">
>>>>>>> a0d19cc (Initial commit)
                                <MenuIcon />
                            </IconButton>
                        )}

<<<<<<< HEAD
                        <Box sx={{ mr: { xs: "67px", sm: "67px", md: "0px" } }} component={Link} href="/">
=======
                        <Box sx={{ m: { xs: 'auto', sm: '20px', md: '0px' } }} component={Link} href="/">
>>>>>>> a0d19cc (Initial commit)
                            <img src="/webdads2u-logo-1 1.png" alt="Logo" height="40" />
                        </Box>

                        {!isMobile && (
<<<<<<< HEAD
                            <Stack direction="row" alignItems="center" spacing={3}>
                                {/* Dropdown Menus */}
                                <React.Fragment>
                                    <Button
                                        onClick={handleMenuOpen(setAboutAnchorEl)}
                                        endIcon={<ArrowDropDownIcon />}
                                        sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }}
                                    >
                                        About
                                    </Button>
                                    <Menu anchorEl={aboutAnchorEl} open={Boolean(aboutAnchorEl)} onClose={handleMenuClose(setAboutAnchorEl)} PaperProps={{ sx: { width: "min-content", px: 2 } }}>
                                        {About.map((item) => (
                                            <Box component={Link} href={item.link} sx={{ textDecoration: "none", color: "black " }}>

                                                <MenuItem key={item.label} onClick={handleMenuClose(setAboutAnchorEl)} sx={{ fontSize: "13px", fontFamily: "Poppins" }}>
=======
                            <Stack direction="row" alignItems="center" spacing={2}>
                                {/* Dropdown Menus */}
                                <React.Fragment>
                                    <Button onMouseEnter={handleMenuOpen(setAboutAnchorEl)} endIcon={<ArrowDropDownIcon />} sx={{ color: 'black', textTransform: 'capitalize', fontFamily: 'Poppins', fontSize: { xs: 12, md: 10, lg: 15 } }}>
                                        About
                                    </Button>
                                    <Menu anchorEl={aboutAnchorEl} open={Boolean(aboutAnchorEl)} onClose={handleMenuClose(setAboutAnchorEl)} PaperProps={{ sx: { width: 'min-content', px: 2 } }}>
                                        {About.map((item, index) => (
                                            <Box key={index} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black ' }}>
                                                <MenuItem onClick={handleMenuClose(setAboutAnchorEl)} sx={{ fontSize: '13px', fontFamily: 'Poppins' }}>
>>>>>>> a0d19cc (Initial commit)
                                                    <KeyboardDoubleArrowRightRoundedIcon sx={{ mr: 1 }} fontSize="small" />
                                                    {item.name}
                                                </MenuItem>
                                            </Box>
                                        ))}
                                    </Menu>
                                </React.Fragment>

                                <React.Fragment>
<<<<<<< HEAD
                                    <Button
                                        onClick={handleMenuOpen(setServicesAnchorEl)}
                                        endIcon={<ArrowDropDownIcon />}
                                        sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }}
                                    >
=======
                                    <Button onMouseEnter={handleMenuOpen(setServicesAnchorEl)} endIcon={<ArrowDropDownIcon />} sx={{ color: 'black', textTransform: 'capitalize', fontFamily: 'Poppins', fontSize: { xs: 12, md: 10, lg: 15 } }}>
>>>>>>> a0d19cc (Initial commit)
                                        Services
                                    </Button>
                                    <Menu
                                        anchorEl={servicesAnchorEl}
                                        open={Boolean(servicesAnchorEl)}
                                        onClose={handleMenuClose(setServicesAnchorEl)}
                                        PaperProps={{
<<<<<<< HEAD
                                            sx: { width: '100vw', maxWidth: 'none', left: '0 !important', right: '0 !important', padding: 4, marginTop: "15px", maxHeight: "calc(100% - 59px)", height: "auto" }
=======
                                            sx: { width: '100vw', maxWidth: 'none', left: '0 !important', right: '0 !important', padding: 4, marginTop: '15px', maxHeight: 'calc(100% - 59px)', height: 'auto' }
>>>>>>> a0d19cc (Initial commit)
                                        }}
                                    >
                                        <Box display="flex" flexWrap="wrap" gap={5}>
                                            {servicesDropdownDatas.map((group) => (
                                                <Box key={group.label}>
                                                    <Box display="flex" gap={2}>
<<<<<<< HEAD
                                                        <Box sx={{ textAlign: "center" }}>
=======
                                                        <Box sx={{ textAlign: 'center' }}>
>>>>>>> a0d19cc (Initial commit)
                                                            <img src={group.icon} alt="Logo" width="30" />
                                                        </Box>
                                                        <Typography variant="subtitle1" fontWeight={600} fontSize="14px" my="auto" fontFamily="Poppins">
                                                            {group.label}
                                                        </Typography>
                                                    </Box>
                                                    {group.items.map((item) => (
<<<<<<< HEAD
                                                        <Box component={Link} href={item.link} sx={{ textDecoration: "none", color: "black " }}>

                                                            <MenuItem
                                                                key={item.label}
                                                                onClick={handleMenuClose(setServicesAnchorEl)}
                                                                sx={{ fontSize: "13px", fontFamily: "Poppins" }}
                                                            >
=======
                                                        <Box key={item.label} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black ' }}>
                                                            <MenuItem onClick={handleMenuClose(setServicesAnchorEl)} sx={{ fontSize: '13px', fontFamily: 'Poppins' }}>
>>>>>>> a0d19cc (Initial commit)
                                                                <KeyboardDoubleArrowRightRoundedIcon sx={{ mr: 1 }} fontSize="small" />
                                                                {item.label}
                                                            </MenuItem>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            ))}
                                        </Box>
                                    </Menu>
                                </React.Fragment>

                                <React.Fragment>
<<<<<<< HEAD
                                    <Button
                                        onClick={handleMenuOpen(setWorkAnchorEl)}
                                        endIcon={<ArrowDropDownIcon />}
                                        sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }}
                                    >
                                        Work
                                    </Button>
                                    <Menu anchorEl={workAnchorEl} open={Boolean(workAnchorEl)} onClose={handleMenuClose(setWorkAnchorEl)} PaperProps={{ sx: { width: "min-content", px: 2 } }}>
                                        {Work.map((item) => (
                                            <Box component={Link} href={item.link} sx={{ textDecoration: "none", color: "black " }}>

                                                <MenuItem key={item.label} onClick={handleMenuClose(setWorkAnchorEl)} sx={{ fontSize: "13px", fontFamily: "Poppins" }}>
=======
                                    <Button onMouseEnter={handleMenuOpen(setWorkAnchorEl)} endIcon={<ArrowDropDownIcon />} sx={{ color: 'black', textTransform: 'capitalize', fontFamily: 'Poppins', fontSize: { xs: 12, md: 10, lg: 15 } }}>
                                        Work
                                    </Button>
                                    <Menu anchorEl={workAnchorEl} open={Boolean(workAnchorEl)} onClose={handleMenuClose(setWorkAnchorEl)} PaperProps={{ sx: { width: 'min-content', px: 2 } }}>
                                        {Work.map((item) => (
                                            <Box key={item.label} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black ' }}>
                                                <MenuItem onClick={handleMenuClose(setWorkAnchorEl)} sx={{ fontSize: '13px', fontFamily: 'Poppins' }}>
>>>>>>> a0d19cc (Initial commit)
                                                    <KeyboardDoubleArrowRightRoundedIcon sx={{ mr: 1 }} fontSize="small" />
                                                    {item.name}
                                                </MenuItem>
                                            </Box>
                                        ))}
                                    </Menu>
                                </React.Fragment>
                                <Box component={Link} href="/contact-us">
<<<<<<< HEAD

                                    <Button sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }} >
                                        Contact Us
                                    </Button>
=======
                                    <Button sx={{ color: 'black', textTransform: 'capitalize', fontFamily: 'Poppins', fontSize: '15px' }}>Contact Us</Button>
>>>>>>> a0d19cc (Initial commit)
                                </Box>

                                {/* Socials + CTA */}
                                <Stack direction="row" spacing={1} alignItems="center">
                                    {[
<<<<<<< HEAD
                                        { Icon: FacebookOutlinedIcon, url: "https://www.facebook.com/Webdads2u" },
                                        { Icon: InstagramIcon, url: "https://www.instagram.com/webdads2u/" },
                                        { Icon: XIcon, url: "https://x.com/webdads2u" },
                                        { Icon: LinkedInIcon, url: "https://www.linkedin.com/company/webdads2u-private-limited/" }
                                    ].map(({ Icon, url }, idx) => (
                                        <Tooltip key={idx} title={Icon?.name?.replace('Icon', '')}>
                                            <IconButton
                                                size="small"
                                                component="a"
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
=======
                                        { Icon: FacebookOutlinedIcon, url: 'https://www.facebook.com/Webdads2u' },
                                        { Icon: InstagramIcon, url: 'https://www.instagram.com/webdads2u/' },
                                        { Icon: XIcon, url: 'https://x.com/webdads2u' },
                                        { Icon: LinkedInIcon, url: 'https://www.linkedin.com/company/webdads2u-private-limited/' }
                                    ].map(({ Icon, url }, idx) => (
                                        <Tooltip key={idx} title={Icon?.name?.replace('Icon', '')}>
                                            <IconButton size="small" component="a" href={url} target="_blank" rel="noopener noreferrer">
>>>>>>> a0d19cc (Initial commit)
                                                <Icon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    ))}

<<<<<<< HEAD
                                    <Box component={Link} href={"/contact-us"} sx={{ textDecoration: "none", color: "black " }}>
                                        <Button variant="contained" sx={{
                                            background: "linear-gradient(90deg,#871752 0%,#262250 50%)",
                                            textTransform: "capitalize",
                                            fontFamily: "Poppins"
                                        }}>
=======
                                    <Box component={Link} href={'/contact-us'} sx={{ textDecoration: 'none', color: 'black ' }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: 'linear-gradient(90deg,#871752 0%,#262250 50%)',
                                                textTransform: 'capitalize',
                                                fontFamily: 'Poppins'
                                            }}
                                        >
>>>>>>> a0d19cc (Initial commit)
                                            Get Quotes
                                        </Button>
                                    </Box>

                                    <Stack direction="row" spacing={1} alignItems="center">
<<<<<<< HEAD
                                        <Box sx={{
                                            background: "linear-gradient(90deg,#871752 0%,#262250 50%)",
                                            color: "white",
                                            borderRadius: "50%",
                                            height: "32px",
                                            width: "32px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Box component={Link} href="tel:+91-8825607550" sx={{ textDecoration: "none", color: "white" }}><PhoneIcon fontSize="small" /></Box>
                                        </Box>
                                        <Typography variant="body2" sx={{ fontFamily: "Poppins", color: "#262250", fontSize: "12px" }}>
                                            <span style={{ fontWeight: 500 }}> Feel free to contact us </span> <br />
                                            <Box component={Link} href="tel:+91-8825607550" sx={{ textDecoration: "none", color: "#262250" }}><strong style={{ fontWeight: 600, fontSize: "15px" }}>+91-8825607550</strong></Box>
=======
                                        <Box
                                            sx={{
                                                background: 'linear-gradient(90deg,#871752 0%,#262250 50%)',
                                                color: 'white',
                                                borderRadius: '50%',
                                                height: '32px',
                                                width: '32px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Box component={Link} href="tel:+91-88256 07550" sx={{ textDecoration: 'none', color: 'white' }}>
                                                <PhoneIcon fontSize="small" />
                                            </Box>
                                        </Box>
                                        <Typography variant="body2" sx={{ fontFamily: 'Poppins', color: '#262250', fontSize: '12px' }}>
                                            <span style={{ fontWeight: 500 }}> Feel free to contact us </span> <br />
                                            <Box component={Link} href="tel:+91-88256 07550" sx={{ textDecoration: 'none', color: '#262250' }}>
                                                <strong style={{ fontWeight: 600, fontSize: '15px' }}>+91-88256 07550</strong>
                                            </Box>
>>>>>>> a0d19cc (Initial commit)
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        )}
                    </Toolbar>
                </AppBar>
<<<<<<< HEAD
            </ElevationScroll >
=======
            </ElevationScroll>
>>>>>>> a0d19cc (Initial commit)
            <Toolbar />

            {/* Mobile Drawer */}
            <Drawer anchor="left" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                <Box sx={{ width: 280, p: 1, fontFamily: 'Poppins' }} role="presentation">
<<<<<<< HEAD
                    <Stack spacing={2}>
                        {/* About Section */}
                        <Accordion sx={{ boxShadow: "none", }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">About</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {About.map((item) => (
                                    <Box component={Link} href={item.link} sx={{ textDecoration: "none", color: "black " }}>

                                        <MenuItem key={item.label} onClick={() => setMobileMenuOpen(false)} sx={{ pl: 2 }}>
=======
                    <Stack spacing={0}>
                        {/* About Section */}
                        <Accordion sx={{ boxShadow: 'none' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">
                                    About
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {About.map((item) => (
                                    <Box key={item.label} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black ' }}>
                                        <MenuItem onClick={() => setMobileMenuOpen(false)} sx={{ pl: 2 }}>
>>>>>>> a0d19cc (Initial commit)
                                            <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ mr: 1, color: '#871752' }} />
                                            {item.name}
                                        </MenuItem>
                                    </Box>
                                ))}
                            </AccordionDetails>
                        </Accordion>

                        {/* Services */}
<<<<<<< HEAD
                        <Accordion defaultExpanded sx={{ boxShadow: "none", }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">Services</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ maxHeight: '60vh', overflowY: 'auto' }}>
                                {servicesDropdownDatas.map((group) => (
                                    <Box key={group.label} sx={{ mb: 2 }}>
=======
                        <Accordion defaultExpanded sx={{ boxShadow: 'none' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">
                                    Services
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ maxHeight: '60vh', overflowY: 'auto' }}>
                                {servicesDropdownDatas.map((group) => (
                                    <Box key={group.label} sx={{ mb: 0 }}>
>>>>>>> a0d19cc (Initial commit)
                                        <Typography variant="subtitle2" fontWeight={600} sx={{ color: '#871752', mb: 1 }}>
                                            {group.label}
                                        </Typography>
                                        <Stack spacing={0.5}>
                                            {group.items.map((item) => (
<<<<<<< HEAD
                                                <Box component={Link} href={item.link} sx={{ textDecoration: "none", color: "black " }}>

                                                    <MenuItem
                                                        key={item.label}
=======
                                                <Box key={item.label} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black ' }}>
                                                    <MenuItem
>>>>>>> a0d19cc (Initial commit)
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        sx={{
                                                            // pl: ,
                                                            fontSize: '12px',
                                                            fontFamily: 'Poppins',
                                                            '&:hover': {
<<<<<<< HEAD
                                                                backgroundColor: '#f2f2f2',
                                                            },
=======
                                                                backgroundColor: '#f2f2f2'
                                                            }
>>>>>>> a0d19cc (Initial commit)
                                                        }}
                                                    >
                                                        <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ color: '#262250' }} />
                                                        {item.label}
                                                    </MenuItem>
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Box>
                                ))}
                            </AccordionDetails>
                        </Accordion>

                        {/* Work */}
<<<<<<< HEAD
                        <Accordion sx={{ boxShadow: "none", }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">Work</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {Work.map((item) => (
                                    <Box component={Link} href={item.link} sx={{ textDecoration: "none", color: "black " }}>

                                        <MenuItem key={item.label} onClick={() => setMobileMenuOpen(false)} sx={{ pl: 2 }}>
=======
                        <Accordion sx={{ boxShadow: 'none' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">
                                    Work
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {Work.map((item) => (
                                    <Box key={item.label} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black ' }}>
                                        <MenuItem onClick={() => setMobileMenuOpen(false)} sx={{ pl: 2 }}>
>>>>>>> a0d19cc (Initial commit)
                                            <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ mr: 1, color: '#871752' }} />
                                            {item.name}
                                        </MenuItem>
                                    </Box>
                                ))}
                            </AccordionDetails>
                        </Accordion>

                        {/* Contact Us */}
                        <Box sx={{ mt: 2 }}>
<<<<<<< HEAD
                            <Box component={Link} href={"/contact-us"} sx={{ textDecoration: "none", color: "black " }}>

                                <MenuItem onClick={() => setMobileMenuOpen(false)} sx={{
                                    px: 2,
                                    py: 1.5,
                                    fontWeight: 600,
                                    color: '#262250',
                                    fontFamily: 'Poppins',
                                    background: 'linear-gradient(90deg,#871752 0%,#262250 100%)',
                                    color: '#fff',
                                    borderRadius: 1,
                                    justifyContent: 'center',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg,#6e1343 0%,#1e1a41 100%)',
                                    }
                                }}>
=======
                            <Box component={Link} href={'/contact-us'} sx={{ textDecoration: 'none', color: 'black ' }}>
                                <MenuItem
                                    onClick={() => setMobileMenuOpen(false)}
                                    sx={{
                                        px: 2,
                                        py: 1.5,
                                        fontWeight: 600,
                                        color: '#262250',
                                        fontFamily: 'Poppins',
                                        background: 'linear-gradient(90deg,#871752 0%,#262250 100%)',
                                        color: '#fff',
                                        borderRadius: 1,
                                        justifyContent: 'center',
                                        '&:hover': {
                                            background: 'linear-gradient(90deg,#6e1343 0%,#1e1a41 100%)'
                                        }
                                    }}
                                >
>>>>>>> a0d19cc (Initial commit)
                                    Contact Us
                                </MenuItem>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
}
