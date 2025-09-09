
'use client';
import React, { useEffect } from 'react';
import HeroSectionProps from './Herosections/HeroSection';
import { Box } from '@mui/material';
import GridLines from './Herosections/GridLines';
const heroProps = {
    tagline: 'Wordpress',
    heading: 'Empowering Businesses through Web Solutions',
    description: 'Masters of Cutting-Edge Technology in Web Solutions',
    email: 'info@webdads2u.com',
    phone: '88256 07550',
    button1: 'Get Start',
    button2: 'Whatsapp',
    images: ['/webdadsNewImages/webdevelopment/Arcmen mockup images 3.png', '/webdadsNewImages/webdevelopment/Arcmen mockup images 3.png', '/webdadsNewImages/webdevelopment/Arcmen mockup images 3.png']
};

export default function Herosections({ data }) {
    const response = data?.header;
    console.log(response, 'header');
    const images = response?.gallery?.images;
    const heading = response?.title;
    const tagline = response?.badge?.text;
    const description = response?.subtitle;
    const Contact = response?.contact_info;
    const alt = response?.alt || '';
    console.log(alt, 'imageeeeeee');
    return (
        <Box
        //  sx={{ height: "auto", maxHeight: "calc(100vh - 45px)" }}
        >
            <GridLines />
            <HeroSectionProps tagline={tagline} heading={heading} description={description} email={Contact?.email} phone={Contact?.phone} button1={heroProps?.button1} button2={heroProps?.button2} images={images} alt={alt} />
        </Box>
    );
}
