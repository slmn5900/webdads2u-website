"use client"
import React, { useEffect, useState } from 'react'
import WhyChooseWEBDADS2U from '../web-development-company/landingpage/ReusabelComponents/Why-Choose-WEBDADS2U.jsx'
import ContactCTA from '../web-development-company/landingpage/ReusabelComponents/Contact-form.jsx'
import Footer from '../web-development-company/landingpage/ReusabelComponents/Footer.jsx'
import TestimonialsSlider from '../web-development-company/landingpage/ReusabelComponents/TestimonialsSlider.jsx'
import GoogleReviews from '../web-development-company/landingpage/ReusabelComponents/Discover.jsx'
import HeroSection from '../web-development-company/landingpage/ReusabelComponents/Herosections.jsx'
import GradientSwiper from '../web-development-company/landingpage/ReusabelComponents/GradientSwiper.jsx'
import { Box } from '@mui/material'
import NeedERP from '../web-development-company/landingpage/ReusabelComponents/NeedERP.jsx'

export default function AppDevelopment() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch("/api/app-development.json");
      // if (!response.ok) {
      //   throw Error("Failed to fetch data");
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
    <Box sx={{overflow:'hidden'}}>
      <HeroSection data={data} />
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

