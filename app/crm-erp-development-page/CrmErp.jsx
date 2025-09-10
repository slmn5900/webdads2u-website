"use client"

import React, { useEffect, useState } from 'react'
import WhyChooseWEBDADS2U from '../web-development-company/landingpage/ReusabelComponents/Why-Choose-WEBDADS2U'
import ContactCTA from '../web-development-company/landingpage/ReusabelComponents/Contact-form'
import Footer from '../web-development-company/landingpage/ReusabelComponents/Footer'
import ProjectShowcase from '../web-development-company/landingpage/ReusabelComponents/Highlights'
import TestimonialsSlider from '../web-development-company/landingpage/ReusabelComponents/TestimonialsSlider'
import GoogleReviews from '../web-development-company/landingpage/ReusabelComponents/Discover'
import HeroSection from '../web-development-company/landingpage/ReusabelComponents/Herosections'
import GradientSwiper from '../web-development-company/landingpage/ReusabelComponents/GradientSwiper'
import { Box } from '@mui/material'
import NeedERP from '../web-development-company/landingpage/ReusabelComponents/NeedERP'

export default function CrmErp() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        try {
            const response = await fetch("/api/crm-erp.json");
            // if (!response.ok) {
            //   throw new Error("Failed to fetch data");
            // }
            const data = await response.json();
            setData(data)
            console.log(data, "parsed JSON data");
        } catch (error) {
            console.error("Error fetching JSON:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <HeroSection data={data} />a
            <Box >

                <GradientSwiper data={data} />
            </Box>
            <WhyChooseWEBDADS2U data={data} />
            <TestimonialsSlider data={data} />
            <GoogleReviews data={data} />
            <NeedERP data={data} />
            <ContactCTA data={data} />
            <Footer />
        </Box>
    )
}
