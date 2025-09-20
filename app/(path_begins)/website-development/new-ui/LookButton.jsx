import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery, styled } from '@mui/material';

const LookBtnContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    border: '2px solid #ececec',
    alignItems: 'center',
    padding: '15px',
    gap: '14px',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '10px',
        padding: '12px'
    },
    position: 'relative',
    top: -40
}));

const LookBtnButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#6243a4',
    borderRadius: '5px',
    padding: '15px 25px',
    fontSize: '16px',
    color: '#fff',
    fontWeight: 600,
    border: 'none',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#4d3485'
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: '0px 20px',
        fontSize: '15px'
    }
}));

const LookBtnText = styled(Typography)(({ theme }) => ({
    color: '#4a0909',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '17px',
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: '16px'
    }
}));

const LookButton = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <LookBtnContainer>
            <Box>
                <LookBtnText variant="body1">Looking for Immersive Frontends?</LookBtnText>
            </Box>
            <Box>
                <LookBtnButton variant="contained" href="/contact-us" fullWidth={isMobile} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                    Talk To Our UI/UX Consultants
                </LookBtnButton>
            </Box>
        </LookBtnContainer>
    );
};

export default LookButton;
