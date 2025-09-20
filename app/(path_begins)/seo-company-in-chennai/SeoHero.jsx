import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import Slider from '../../../components/common/Slider-image';
import { MenuContext } from '../../../layout/context/menucontext';
import { useContext } from 'react';

const SeoDevelopmentSection = styled(Box)(({ theme }) => ({
    backgroundImage: 'url(/webdads/images/seo-development/seo-slider.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: theme.spacing(7.5),
    paddingBottom: theme.spacing(6.25),
    height: '100%',
    minHeight: 'calc(100vh - 10px)'
}));

const HeroContent = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    '& img': {
        width: '75%',
        paddingTop: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            width: '90%'
        }
    }
}));

function SeoHero() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    const { pagedata } = useContext(MenuContext);
    const titles = pagedata?.header_section?.title;
    const descriptions = pagedata?.header_section?.description;

    return (
        <>
            <SeoDevelopmentSection>
                <Container>
                    <HeroContent>
                        <Typography
                            variant={isMd ? 'h2' : isSm ? 'h3' : 'h4'}
                            sx={{
                                color: '#b5dcff',
                                fontWeight: 700,
                                maxWidth: '60%',
                                margin: 'auto',
                                [theme.breakpoints.down('sm')]: {
                                    maxWidth: '90%'
                                }
                            }}
                        >
                            {titles}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#fff',
                                maxWidth: '60%',
                                margin: 'auto',
                                paddingTop: theme.spacing(2.5),
                                lineHeight: '30px',
                                fontSize: '20px',
                                [theme.breakpoints.down('sm')]: {
                                    maxWidth: '90%',
                                    fontSize: '16px',
                                    lineHeight: '24px'
                                }
                            }}
                        >
                            {descriptions}
                        </Typography>
                        <Box component="img" alt="seo company in chennai" src="https://res.cloudinary.com/dbpv95wd8/image/upload/v1756792678/webdads2u/seo-company-in-chennai/seo-company-in-chennai.png" width={'500px'} />
                    </HeroContent>
                </Container>
            </SeoDevelopmentSection>
        </>
    );
}

export default SeoHero;
