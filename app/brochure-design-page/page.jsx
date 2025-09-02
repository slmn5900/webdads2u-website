<<<<<<< HEAD
"use client"

import React, { useEffect, useState } from 'react'
import WhyChooseWEBDADS2U from '../new/landingpage/ReusabelComponents/Why-Choose-WEBDADS2U'
import ContactCTA from '../new/landingpage/ReusabelComponents/Contact-form'
import Footer from '../new/landingpage/ReusabelComponents/Footer'
import ProjectShowcase from '../new/landingpage/ReusabelComponents/Highlights'
import TestimonialsSlider from '../new/landingpage/ReusabelComponents/TestimonialsSlider'
import GoogleReviews from '../new/landingpage/ReusabelComponents/Discover'
import HeroSection from '../new/landingpage/ReusabelComponents/Herosections'
import GradientSwiper from '../new/landingpage/ReusabelComponents/GradientSwiper'
import TechOrbitSection from "../new/landingpage/ReusabelComponents/TechOrbitSection"
import { Box } from '@mui/material'
import LogoDesignSection from "../Lading-page/ResuabelComponent/LogoDesignSection"

export default function page() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        try {
            const response = await fetch("/api/Brichure.json");
            // if (!response.ok) {
            //   throw new Error("Failed to fetch data");
            // }
            const data = await response.json();

            setData(data)
            console.log(data, "parsed JSON data>>>>>");
        } catch (error) {
            console.error("Error fetching JSON:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <HeroSection data={data} />
            <Box >

                <GradientSwiper data={data} />
            </Box>
            <WhyChooseWEBDADS2U data={data} />
            <TestimonialsSlider data={data} />
            <GoogleReviews data={data} />
            <ProjectShowcase data={data} />
            <ContactCTA data={data} />
            <LogoDesignSection data={data}/>
            <Footer /></div>
    )
=======
// import React from 'react'
// import Broucher from './Broucher'

// export const metadata = {
//     title: 'Web Development Company | Webdads2u',
//     description: 'Looking for a professional web development company? We build fast, responsive, SEO-friendly websites tailored to your business needs. Get a free quote today',
//     keywords:
//         'app development company,mobile app development company,custom app development,android app development services,ios app development company'
// };

// export const Page = () => {
//     return (
//         <>
//             <Broucher />
//         </>
//     )
// }

import React from 'react';
import Broucher from './Broucher';

export const metadata = {
    title: 'Web Development Company | Webdads2u',
    description: 'Looking for a professional web development company? We build fast, responsive, SEO-friendly websites tailored to your business needs. Get a free quote today',
    keywords: 'app development company,mobile app development company,custom app development,android app development services,ios app development company'
};

export default function Page() {
    return <Broucher />;
>>>>>>> a0d19cc (Initial commit)
}
