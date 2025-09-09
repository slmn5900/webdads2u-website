'use client';
import React from 'react';
import { AppBar, Box, Toolbar, Typography, Menu, MenuItem, IconButton, Button, Stack, Tooltip, CssBaseline, Drawer, useMediaQuery, useTheme, Accordion, AccordionSummary, AccordionDetails, Link, CircularProgress } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { About, servicesDropdownDatas, Work } from './Headers/headerData';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });
    return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func
};

export default function Header(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isClient, setIsClient] = React.useState(false);
    const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);
    const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);
    const [workAnchorEl, setWorkAnchorEl] = React.useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    const handleMenuOpen = (setter) => (event) => {
        setter(event.currentTarget);
    };

    const handleMenuClose = (setter) => () => {
        setter(null);
    };

    // Close dropdowns when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (aboutAnchorEl && !aboutAnchorEl.contains(event.target) && !event.target.closest('#about-button')) {
                setAboutAnchorEl(null);
            }
            if (servicesAnchorEl && !servicesAnchorEl.contains(event.target) && !event.target.closest('#services-button')) {
                setServicesAnchorEl(null);
            }
            if (workAnchorEl && !workAnchorEl.contains(event.target) && !event.target.closest('#work-button')) {
                setWorkAnchorEl(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
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
                <AppBar
                    color="default"
                    sx={{
                        backgroundColor: '#fff',
                        color: '#000',
                        px: { xs: 0, sm: 0, md: 6, lg: 7 }
                    }}
                >
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        {isMobile && (
                            <IconButton sx={{ position: 'relative', left: -10 }} onClick={() => setMobileMenuOpen(true)} color="inherit">
                                <MenuIcon />
                            </IconButton>
                        )}
                        <Box sx={{ m: { xs: 'auto', sm: '20px', md: '0px' } }} component={Link} href="/">
                            <img src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1757406731/webdads2u/logo.svg" alt="Logo" height="40" />
                        </Box>
                        {!isMobile && (
                            <Stack direction="row" alignItems="center" spacing={2}>
                                {/* About Dropdown */}
                                <Button
                                    id="about-button"
                                    onMouseEnter={handleMenuOpen(setAboutAnchorEl)}
                                    endIcon={<ArrowDropDownIcon />}
                                    sx={{
                                        color: 'black',
                                        textTransform: 'capitalize',
                                        fontFamily: 'Poppins',
                                        fontSize: { xs: 12, md: 10, lg: 15 }
                                    }}
                                >
                                    About
                                </Button>
                                <Menu anchorEl={aboutAnchorEl} open={Boolean(aboutAnchorEl)} onClose={handleMenuClose(setAboutAnchorEl)} onMouseLeave={handleMenuClose(setAboutAnchorEl)} PaperProps={{ sx: { width: 'min-content', px: 2 } }}>
                                    {About.map((item, index) => (
                                        <Box key={index} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black' }}>
                                            <MenuItem onClick={handleMenuClose(setAboutAnchorEl)} sx={{ fontSize: '13px', fontFamily: 'Poppins' }}>
                                                <KeyboardDoubleArrowRightRoundedIcon sx={{ mr: 1 }} fontSize="small" />
                                                {item.name}
                                            </MenuItem>
                                        </Box>
                                    ))}
                                </Menu>

                                {/* Services Dropdown */}
                                <Button
                                    id="services-button"
                                    onMouseEnter={handleMenuOpen(setServicesAnchorEl)}
                                    endIcon={<ArrowDropDownIcon />}
                                    sx={{
                                        color: 'black',
                                        textTransform: 'capitalize',
                                        fontFamily: 'Poppins',
                                        fontSize: { xs: 12, md: 10, lg: 15 }
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
                                            width: '100vw',
                                            maxWidth: 'none',
                                            left: '0 !important',
                                            right: '0 !important',
                                            padding: 4,
                                            marginTop: '15px',
                                            maxHeight: 'calc(100% - 59px)',
                                            height: 'auto'
                                        }
                                    }}
                                >
                                    <Box display="flex" flexWrap="wrap" gap={5}>
                                        {servicesDropdownDatas.map((group) => (
                                            <Box key={group.label}>
                                                <Box display="flex" gap={2}>
                                                    <Box sx={{ textAlign: 'center' }}>
                                                        <img src={group.icon} alt="Logo" width="30" />
                                                    </Box>
                                                    <Box component={Link} href={group.link} sx={{ textDecoration: 'none', color: 'black' }}>
                                                        <Typography variant="subtitle1" fontWeight={600} fontSize="14px" my="auto" fontFamily="Poppins">
                                                            {group.label}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                {group.items.map((item) => (
                                                    <Box key={item.label} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black' }}>
                                                        <MenuItem onClick={handleMenuClose(setServicesAnchorEl)} sx={{ fontSize: '13px', fontFamily: 'Poppins' }}>
                                                            <KeyboardDoubleArrowRightRoundedIcon sx={{ mr: 1 }} fontSize="small" />
                                                            {item.label}
                                                        </MenuItem>
                                                    </Box>
                                                ))}
                                            </Box>
                                        ))}
                                    </Box>
                                </Menu>

                                {/* Work Dropdown */}
                                <Button
                                    id="work-button"
                                    onMouseEnter={handleMenuOpen(setWorkAnchorEl)}
                                    endIcon={<ArrowDropDownIcon />}
                                    sx={{
                                        color: 'black',
                                        textTransform: 'capitalize',
                                        fontFamily: 'Poppins',
                                        fontSize: { xs: 12, md: 10, lg: 15 }
                                    }}
                                >
                                    Work
                                </Button>
                                <Menu anchorEl={workAnchorEl} open={Boolean(workAnchorEl)} onClose={handleMenuClose(setWorkAnchorEl)} onMouseLeave={handleMenuClose(setWorkAnchorEl)} PaperProps={{ sx: { width: 'min-content', px: 2 } }}>
                                    {Work.map((item) => (
                                        <Box key={item.label} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black' }}>
                                            <MenuItem onClick={handleMenuClose(setWorkAnchorEl)} sx={{ fontSize: '13px', fontFamily: 'Poppins' }}>
                                                <KeyboardDoubleArrowRightRoundedIcon sx={{ mr: 1 }} fontSize="small" />
                                                {item.name}
                                            </MenuItem>
                                        </Box>
                                    ))}
                                </Menu>

                                {/* Contact Us Button */}
                                <Box component={Link} href="/contact-us">
                                    <Button
                                        sx={{
                                            color: 'black',
                                            textTransform: 'capitalize',
                                            fontFamily: 'Poppins',
                                            fontSize: '15px'
                                        }}
                                    >
                                        Contact Us
                                    </Button>
                                </Box>

                                {/* Social Icons and CTA */}
                                <Stack direction="row" spacing={1} alignItems="center">
                                    {[
                                        {
                                            Icon: FacebookOutlinedIcon,
                                            url: 'https://www.facebook.com/Webdads2u'
                                        },
                                        {
                                            Icon: InstagramIcon,
                                            url: 'https://www.instagram.com/webdads2u/'
                                        },
                                        { Icon: XIcon, url: 'https://x.com/webdads2u' },
                                        {
                                            Icon: LinkedInIcon,
                                            url: 'https://www.linkedin.com/company/webdads2u-private-limited/'
                                        }
                                    ].map(({ Icon, url }, idx) => (
                                        <Tooltip key={idx} title={Icon?.name?.replace('Icon', '')}>
                                            <IconButton size="small" component="a" href={url} target="_blank" rel="noopener noreferrer">
                                                <Icon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    ))}
                                    <Box component={Link} href={'/contact-us'} sx={{ textDecoration: 'none', color: 'black' }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: 'linear-gradient(90deg,#871752 0%,#262250 50%)',
                                                textTransform: 'capitalize',
                                                fontFamily: 'Poppins'
                                            }}
                                        >
                                            Get Quotes
                                        </Button>
                                    </Box>
                                    <Stack direction="row" spacing={1} alignItems="center">
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
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily: 'Poppins',
                                                color: '#262250',
                                                fontSize: '12px'
                                            }}
                                        >
                                            <span style={{ fontWeight: 500 }}>Feel free to contact us</span> <br />
                                            <Box component={Link} href="tel:+91-88256 07550" sx={{ textDecoration: 'none', color: '#262250' }}>
                                                <strong style={{ fontWeight: 600, fontSize: '15px' }}>+91-88256 07550</strong>
                                            </Box>
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
                <Box sx={{ width: 280, p: 1, fontFamily: 'Poppins' }} role="presentation">
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
                                    <Box key={item.label} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black' }}>
                                        <MenuItem onClick={() => setMobileMenuOpen(false)} sx={{ pl: 2 }}>
                                            <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ mr: 1, color: '#871752' }} />
                                            {item.name}
                                        </MenuItem>
                                    </Box>
                                ))}
                            </AccordionDetails>
                        </Accordion>

                        {/* Services */}
                        <Accordion defaultExpanded sx={{ boxShadow: 'none' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">
                                    Services
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ maxHeight: '60vh', overflowY: 'auto' }}>
                                {servicesDropdownDatas.map((group) => (
                                    <Box key={group.label} sx={{ mb: 0 }}>
                                        <Typography variant="subtitle2" fontWeight={600} sx={{ color: '#871752', mb: 1 }}>
                                            {group.label}
                                        </Typography>
                                        <Stack spacing={0.5}>
                                            {group.items.map((item) => (
                                                <Box key={item.label} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black' }}>
                                                    <MenuItem
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        sx={{
                                                            fontSize: '12px',
                                                            fontFamily: 'Poppins',
                                                            '&:hover': {
                                                                backgroundColor: '#f2f2f2'
                                                            }
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
                        <Accordion sx={{ boxShadow: 'none' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#871752' }} />}>
                                <Typography fontWeight={600} color="#262250">
                                    Work
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {Work.map((item) => (
                                    <Box key={item.label} component={Link} href={item.link} sx={{ textDecoration: 'none', color: 'black' }}>
                                        <MenuItem onClick={() => setMobileMenuOpen(false)} sx={{ pl: 2 }}>
                                            <KeyboardDoubleArrowRightRoundedIcon fontSize="small" sx={{ mr: 1, color: '#871752' }} />
                                            {item.name}
                                        </MenuItem>
                                    </Box>
                                ))}
                            </AccordionDetails>
                        </Accordion>

                        {/* Contact Us */}
                        <Box sx={{ mt: 2 }}>
                            <Box component={Link} href={'/contact-us'} sx={{ textDecoration: 'none', color: 'black' }}>
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
