<<<<<<< HEAD
"use client"
import React from 'react'
import Webhero from './Webhero'
import "./webdesign.scss"
const WebDesign = () => {
  return (
    <>
       <Webhero/>
    </>
  )
}

export default WebDesign
=======
'use client';
import React from 'react';
import Webhero from './Webhero';
import './webdesign.scss';
import WebDesignHero from './newdesign/WebDesignHero';
import TrustedBusinesses from './newdesign/TrustedBusinesses';
import WhyChooseUs from './newdesign/WhyChooseUs';
import CounterSection from './newdesign/CounterSection';
import WhyChooseFeatures from './newdesign/WhyChooseFeatures';
import TechnologyStackSection from './newdesign/TechnologyStackSection';
import PortfolioSection from './newdesign/PortfolioSection';
import Streams from './newdesign/Streams';
import CreatingProcess from './newdesign/CreatingProcess';

const WebDesign = () => {
    return (
        <>
            {/* <Webhero/> */}
            <WebDesignHero />
            <TrustedBusinesses />
            <WhyChooseUs />
            <CounterSection />
            <Streams />
            <WhyChooseFeatures />
            <TechnologyStackSection />
            <PortfolioSection />
            <CreatingProcess />
        </>
    );
};

export default WebDesign;
>>>>>>> a0d19cc (Initial commit)
