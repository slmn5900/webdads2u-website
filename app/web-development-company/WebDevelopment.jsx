"use client"

import React, { useEffect, useState } from 'react'
import WhyChooseWEBDADS2U from './landingpage/ReusabelComponents/Why-Choose-WEBDADS2U'
import ContactCTA from './landingpage/ReusabelComponents/Contact-form'
import Footer from './landingpage/ReusabelComponents/Footer'
import ProjectShowcase from './landingpage/ReusabelComponents/Highlights'
import TestimonialsSlider from './landingpage/ReusabelComponents/TestimonialsSlider'
import GoogleReviews from './landingpage/ReusabelComponents/Discover'
import HeroSection from './landingpage/ReusabelComponents/Herosections'
import TechOrbitSection from "./landingpage/ReusabelComponents/TechOrbitSection"
import { Box } from '@mui/material'
import TrustedClients from './landingpage/ReusabelComponents/GradientSwiper'
import Head from 'next/head'


export default function WebDevelopment() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch("/api/webdevelopment.json");
      // if (!response.ok) {
      //   throw new Error("Failed to fetch data");
      // }
      const data = await response.json();
      setData(data)
      console.log(data, "parsed JSON data");
    } catch (error) {
      console.error("Error fetching JSON", error);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
   
      <Box sx={{ overflow: 'hidden' }}>
        <HeroSection data={data} />
        <Box >
          <TrustedClients wiper data={data} />
        </Box>
        <WhyChooseWEBDADS2U data={data} />
        <TestimonialsSlider data={data} />
        <GoogleReviews data={data} />
        <ProjectShowcase data={data} />
        <TechOrbitSection />
        <ContactCTA data={data} />``
        <Footer />
      </Box>
    </>
  )
}
