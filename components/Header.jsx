
// import React from 'react';
// import {
//     AppBar,
//     Box,
//     Toolbar,
//     Typography,
//     Menu,
//     MenuItem,
//     IconButton,
//     Button,
//     Stack,
//     Tooltip,
//     CssBaseline,
//     Grid2,
//     Drawer,
//     useMediaQuery,
//     useTheme,
//     Accordion,
//     AccordionSummary,
//     AccordionDetails,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MenuIcon from '@mui/icons-material/Menu';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import PropTypes from 'prop-types';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import PhoneIcon from '@mui/icons-material/Phone';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import XIcon from '@mui/icons-material/X';
// import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
// import { About, servicesDropdownDatas, Work } from './Headers/headerData';

// function ElevationScroll(props) {
//     const { children, window } = props;
//     const trigger = useScrollTrigger({
//         disableHysteresis: true,
//         threshold: 0,
//         target: window ? window() : undefined,
//     });

//     return React.cloneElement(children, {
//         elevation: trigger ? 4 : 0,
//     });
// }

// ElevationScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     window: PropTypes.func,
// };

// const servicesDropdownData = servicesDropdownDatas;

// export default function Header(props) {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//     const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);
//     const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
//     const [workAnchorEl, setWorkAnchorEl] = React.useState(null);
//     const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

//     const handleAboutMenuOpen = (event) => setAboutAnchorEl(event.currentTarget);
//     const handleAboutMenuClose = () => setAboutAnchorEl(null);
//     const handleServicesMenuOpen = (event) => setServicesAnchorEl(event.currentTarget);
//     const handleServicesMenuClose = () => setServicesAnchorEl(null);
//     const handleWorkMenuOpen = (event) => setWorkAnchorEl(event.currentTarget);
//     const handleWorkMenuClose = () => setWorkAnchorEl(null);
//     const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//     return (
//         <>
//             <CssBaseline />
//             <ElevationScroll {...props}>
//                 <AppBar color="default" sx={{ backgroundColor: '#fff', color: '#000', px: { xs: 0, md: 2 } }} >

//                     <Toolbar sx={{ justifyContent: { xs: "space-between", sm: "space-between", md: "space-between", lg: "space-between" } }}>
//                         {isMobile && (

//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={toggleMobileMenu}
//                                 color="inherit"
//                             // sx={{ mr: "auto" }}
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                         )}
//                         <Stack direction="row" alignItems="center" spacing={2} sx={{ ml: "auto" }}>
//                             <img src="/webdads2u-logo-1 1.png" alt="Logo" height="40" />
//                         </Stack>

//                         {!isMobile && (
//                             <>
//                                 <Stack direction="row" spacing={1} alignItems="center" >
//                                     <Button onClick={handleAboutMenuOpen} endIcon={<ArrowDropDownIcon />} sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }}>
//                                         About
//                                     </Button>
//                                     <Menu anchorEl={aboutAnchorEl} open={Boolean(aboutAnchorEl)} onClose={handleAboutMenuClose} PaperProps={{ sx: { width: "min-content" } }}>
//                                         <Grid2 container spacing={1} sx={{ px: 2 }}>
//                                             {About.map((service) => (
//                                                 <Grid2 size={{ xs: 12, sm: 12, md: 12 }} key={service.label}>
//                                                     <MenuItem onClick={handleAboutMenuClose} sx={{ textAlign: "start", fontSize: "12px", fontFamily: "Poppins", pl: 0 }}>
//                                                         <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ mr: 1 }} />
//                                                         {service.name}
//                                                     </MenuItem>
//                                                 </Grid2>
//                                             ))}
//                                         </Grid2>
//                                     </Menu>

//                                     <Button onClick={handleServicesMenuOpen} endIcon={<ArrowDropDownIcon />} sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }}>
//                                         Services
//                                     </Button>
//                                     <Menu anchorEl={servicesAnchorEl} open={Boolean(servicesAnchorEl)} onClose={handleServicesMenuClose} PaperProps={{ sx: { width: '100vw', maxWidth: 'none', left: '0 !important', right: '0 !important', padding: 2, marginTop: "15px", maxHeight: "calc(100% - 59px)", height: "auto" } }}>
//                                         <Grid2 container spacing={5} sx={{ px: 2 }}>
//                                             {servicesDropdownData.map((service) => (
//                                                 <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }} key={service.label}>
//                                                     <Box sx={{ height: "50px" }}>
//                                                         <Box display="flex" gap={2}>
//                                                             <Box sx={{ textAlign: "center" }}>
//                                                                 <img src={service.icon} alt="Logo" width="30" />
//                                                             </Box>
//                                                             <Typography variant="subtitle1" fontWeight={600} fontSize="14px" my="auto" fontFamily="Poppins">
//                                                                 {service.label}
//                                                             </Typography>
//                                                         </Box>
//                                                     </Box>
//                                                     {service.items.map((item) => (
//                                                         <MenuItem key={item.label} onClick={handleServicesMenuClose} sx={{ textAlign: "start", fontSize: "12px", fontFamily: "Poppins", pl: 0 }}>
//                                                             <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ mr: 1 }} />
//                                                             {item.label}
//                                                         </MenuItem>
//                                                     ))}
//                                                 </Grid2>
//                                             ))}
//                                         </Grid2>
//                                     </Menu>

//                                     <Button onClick={handleWorkMenuOpen} endIcon={<ArrowDropDownIcon />} sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }}>
//                                         Work
//                                     </Button>
//                                     <Menu anchorEl={workAnchorEl} open={Boolean(workAnchorEl)} onClose={handleWorkMenuClose} PaperProps={{ sx: { width: "min-content" } }}>
//                                         <Grid2 container spacing={1} sx={{ px: 2 }}>
//                                             {Work.map((service) => (
//                                                 <Grid2 size={{ xs: 12, sm: 12, md: 12 }} key={service.label}>
//                                                     <MenuItem onClick={handleWorkMenuClose} sx={{ textAlign: "start", fontSize: "12px", fontFamily: "Poppins", pl: 0 }}>
//                                                         <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ mr: 1 }} />
//                                                         {service.name}
//                                                     </MenuItem>
//                                                 </Grid2>
//                                             ))}
//                                         </Grid2>
//                                     </Menu>

//                                     <Button sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }}>
//                                         Contact Us
//                                     </Button>
//                                 </Stack>

//                                 <Stack direction="row" spacing={1} alignItems="center">
//                                     <Tooltip title="Facebook">
//                                         <IconButton size="small">
//                                             <FacebookOutlinedIcon fontSize='small' />
//                                         </IconButton>
//                                     </Tooltip>
//                                     <Tooltip title="Instagram">
//                                         <IconButton size="small">
//                                             <InstagramIcon fontSize='small' />
//                                         </IconButton>
//                                     </Tooltip>
//                                     <Tooltip title="Threads">
//                                         <IconButton size="small">
//                                             <XIcon fontSize='small' />
//                                         </IconButton>
//                                     </Tooltip>
//                                     <Tooltip title="LinkedIn">
//                                         <IconButton size="small">
//                                             <LinkedInIcon fontSize='small' />
//                                         </IconButton>
//                                     </Tooltip>
//                                     <Button variant="contained" sx={{ background: "linear-gradient(90deg,#871752 0%,#262250 50%)", textTransform: "capitalize", fontFamily: "Poppins", }}>
//                                         Get Quotes
//                                     </Button>
//                                     <Stack direction="row" spacing={1} alignItems="center">
//                                         <Box sx={{ background: "linear-gradient(90deg,#871752 0%,#262250 50%)", color: "white", borderRadius: "50%", height: "32px", width: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                                             <PhoneIcon fontSize="small" sx={{ color: "white" }} />
//                                         </Box>
//                                         <Typography variant="body2" sx={{ fontFamily: "Poppins", color: "#262250", fontSize: "12px", }}>
//                                             <span style={{ fontWeight: "500" }}>Feel free to contact us </span> <br /><strong style={{ fontWeight: "600", fontSize: "15px" }}>+91-8825607550</strong>
//                                         </Typography>
//                                     </Stack>
//                                 </Stack>
//                             </>
//                         )}


//                         {/* {isMobile && (
//                             <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleMobileMenu}>
//                                 <MenuIcon />
//                             </IconButton>
//                         )} */}

//                     </Toolbar>
//                 </AppBar>
//             </ElevationScroll >
//             <Toolbar />

//             <Drawer anchor="left" open={mobileMenuOpen} onClose={toggleMobileMenu} >
//                 <Box sx={{ width: 250 }} role="presentation">
//                     <Accordion>
//                         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                             <Typography>About</Typography>
//                         </AccordionSummary>
//                         <AccordionDetails>
//                             {About.map((service) => (
//                                 <MenuItem key={service.label} onClick={toggleMobileMenu}>
//                                     {service.name}
//                                 </MenuItem>
//                             ))}
//                         </AccordionDetails>
//                     </Accordion>

//                     <Accordion>
//                         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                             <Typography>Services</Typography>
//                         </AccordionSummary>
//                         <AccordionDetails>
//                             {servicesDropdownData.map((service) => (
//                                 <Box key={service.label}>
//                                     <Typography variant="subtitle2" fontWeight={600}>{service.label}</Typography>
//                                     {service.items.map((item) => (
//                                         <MenuItem key={item.label} onClick={toggleMobileMenu}>
//                                             {item.label}
//                                         </MenuItem>
//                                     ))}
//                                 </Box>
//                             ))}
//                         </AccordionDetails>
//                     </Accordion>

//                     <Accordion>
//                         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                             <Typography>Work</Typography>
//                         </AccordionSummary>
//                         <AccordionDetails>
//                             {Work.map((service) => (
//                                 <MenuItem key={service.label} onClick={toggleMobileMenu}>
//                                     {service.name}
//                                 </MenuItem>
//                             ))}
//                         </AccordionDetails>
//                     </Accordion>

//                     <MenuItem onClick={toggleMobileMenu}>Contact Us</MenuItem>
//                 </Box>
//             </Drawer>
//         </>
//     );
// }

'use client';
import React from 'react';
import {
    AppBar, Box, Toolbar, Typography, Menu, MenuItem, IconButton, Button, Stack,
    Tooltip, CssBaseline, Drawer, useMediaQuery, useTheme, Accordion, AccordionSummary,
    AccordionDetails
} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

import { About, servicesDropdownDatas, Work } from './Headers/headerData'

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0, target: window ? window() : undefined });
    return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function Header(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);
    const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
    const [workAnchorEl, setWorkAnchorEl] = React.useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
    const handleMenuClose = (setter) => () => setter(null);

    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar color="default" sx={{ backgroundColor: '#fff', color: '#000', px: { xs: 0, md: 2 } }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        {isMobile && (
                            <IconButton onClick={() => setMobileMenuOpen(true)} color="inherit">
                                <MenuIcon />
                            </IconButton>
                        )}

                        <Box sx={{mr:{xs:"67px",sm:"67px",md:"0px"}}}>
                            <img src="/webdads2u-logo-1 1.png" alt="Logo" height="40" />
                        </Box>

                        {!isMobile && (
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
                                            <MenuItem key={item.label} onClick={handleMenuClose(setAboutAnchorEl)} sx={{ fontSize: "13px", fontFamily: "Poppins" }}>
                                                <KeyboardDoubleArrowRightRoundedIcon sx={{ mr: 1 }} fontSize="small" />
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </React.Fragment>

                                <React.Fragment>
                                    <Button
                                        onClick={handleMenuOpen(setServicesAnchorEl)}
                                        endIcon={<ArrowDropDownIcon />}
                                        sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }}
                                    >
                                        Services
                                    </Button>
                                    <Menu
                                        anchorEl={servicesAnchorEl}
                                        open={Boolean(servicesAnchorEl)}
                                        onClose={handleMenuClose(setServicesAnchorEl)}
                                        PaperProps={{
                                            sx: { width: '100vw', maxWidth: 'none', left: '0 !important', right: '0 !important', padding: 4, marginTop: "15px", maxHeight: "calc(100% - 59px)", height: "auto" }
                                        }}
                                    >
                                        <Box display="flex" flexWrap="wrap" gap={5}>
                                            {servicesDropdownDatas.map((group) => (
                                                <Box key={group.label}>
                                                    <Box display="flex" gap={2}>
                                                        <Box sx={{ textAlign: "center" }}>
                                                            <img src={group.icon} alt="Logo" width="30" />
                                                        </Box>
                                                        <Typography variant="subtitle1" fontWeight={600} fontSize="14px" my="auto" fontFamily="Poppins">
                                                            {group.label}
                                                        </Typography>
                                                    </Box>
                                                    {group.items.map((item) => (
                                                        <MenuItem
                                                            key={item.label}
                                                            onClick={handleMenuClose(setServicesAnchorEl)}
                                                            sx={{ fontSize: "13px", fontFamily: "Poppins" }}
                                                        >
                                                            <KeyboardDoubleArrowRightRoundedIcon sx={{ mr: 1 }} fontSize="small" />
                                                            {item.label}
                                                        </MenuItem>
                                                    ))}
                                                </Box>
                                            ))}
                                        </Box>
                                    </Menu>
                                </React.Fragment>

                                <React.Fragment>
                                    <Button
                                        onClick={handleMenuOpen(setWorkAnchorEl)}
                                        endIcon={<ArrowDropDownIcon />}
                                        sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }}
                                    >
                                        Work
                                    </Button>
                                    <Menu anchorEl={workAnchorEl} open={Boolean(workAnchorEl)} onClose={handleMenuClose(setWorkAnchorEl)} PaperProps={{ sx: { width: "min-content", px: 2 } }}>
                                        {Work.map((item) => (
                                            <MenuItem key={item.label} onClick={handleMenuClose(setWorkAnchorEl)} sx={{ fontSize: "13px", fontFamily: "Poppins" }}>
                                                <KeyboardDoubleArrowRightRoundedIcon sx={{ mr: 1 }} fontSize="small" />
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </React.Fragment>

                                <Button sx={{ color: "black", textTransform: "capitalize", fontFamily: "Poppins", fontSize: "15px" }}>
                                    Contact Us
                                </Button>

                                {/* Socials + CTA */}
                                <Stack direction="row" spacing={1} alignItems="center">
                                    {[FacebookOutlinedIcon, InstagramIcon, XIcon, LinkedInIcon].map((Icon, idx) => (
                                        <Tooltip key={idx} title={Icon?.name?.replace('Icon', '')}>
                                            <IconButton size="small"><Icon fontSize="small" /></IconButton>
                                        </Tooltip>
                                    ))}

                                    <Button variant="contained" sx={{
                                        background: "linear-gradient(90deg,#871752 0%,#262250 50%)",
                                        textTransform: "capitalize",
                                        fontFamily: "Poppins"
                                    }}>
                                        Get Quotes
                                    </Button>

                                    <Stack direction="row" spacing={1} alignItems="center">
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
                                            <PhoneIcon fontSize="small" />
                                        </Box>
                                        <Typography variant="body2" sx={{ fontFamily: "Poppins", color: "#262250", fontSize: "12px" }}>
                                            <span style={{ fontWeight: 500 }}>Feel free to contact us </span><br />
                                            <strong style={{ fontWeight: 600, fontSize: "15px" }}>+91-8825607550</strong>
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        )}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />

            {/* Mobile Drawer */}
            <Drawer anchor="left" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                <Box sx={{ width: 280, p: 2, fontFamily: 'Poppins' }} role="presentation">
                    <Stack spacing={2}>
                        {/* About Section */}
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">About</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {About.map((item) => (
                                    <MenuItem key={item.label} onClick={() => setMobileMenuOpen(false)} sx={{ pl: 2 }}>
                                        <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ mr: 1, color: '#871752' }} />
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </AccordionDetails>
                        </Accordion>

                        {/* Services */}
                        <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">Services</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ maxHeight: '60vh', overflowY: 'auto' }}>
                                {servicesDropdownDatas.map((group) => (
                                    <Box key={group.label} sx={{ mb: 2 }}>
                                        <Typography variant="subtitle2" fontWeight={600} sx={{ color: '#871752', mb: 1 }}>
                                            {group.label}
                                        </Typography>
                                        <Stack spacing={0.5}>
                                            {group.items.map((item) => (
                                                <MenuItem
                                                    key={item.label}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    sx={{
                                                        pl: 2,
                                                        fontSize: '14px',
                                                        fontFamily: 'Poppins',
                                                        '&:hover': {
                                                            backgroundColor: '#f2f2f2',
                                                        },
                                                    }}
                                                >
                                                    <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ mr: 1, color: '#262250' }} />
                                                    {item.label}
                                                </MenuItem>
                                            ))}
                                        </Stack>
                                    </Box>
                                ))}
                            </AccordionDetails>
                        </Accordion>

                        {/* Work */}
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">Work</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {Work.map((item) => (
                                    <MenuItem key={item.label} onClick={() => setMobileMenuOpen(false)} sx={{ pl: 2 }}>
                                        <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ mr: 1, color: '#871752' }} />
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </AccordionDetails>
                        </Accordion>

                        {/* Contact Us */}
                        <Box sx={{ mt: 2 }}>
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
                                Contact Us
                            </MenuItem>
                        </Box>
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
}
