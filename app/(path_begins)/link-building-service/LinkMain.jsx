"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './link-building-service.css';

// Dynamically import each component with SSR set to false
const Fqlinkbuildingservice = dynamic(() => import('./Fq-link-building-service'), { ssr: false });
const Lookinglinkbuilding = dynamic(() => import('./Looking-Link-Building'), { ssr: false });
const Webdadlinkbuilding = dynamic(() => import('./Webdad-Link-Building'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Domainauthorityimprovements = dynamic(() => import('./Domain-authority-improvements'), { ssr: false });
const Improvedkeywordrankings = dynamic(() => import('./Improved-keyword-rankings'), { ssr: false });
const Increasedwebsitetraffic = dynamic(() => import('./Increased-website-traffic'), { ssr: false });
const Powerfulwhitehat = dynamic(() => import('./Powerful-Whitehat'), { ssr: false });
const Buildingimportant = dynamic(() => import('./Building-Important'), { ssr: false });
const Linkbuildingservicebanner = dynamic(() => import('./link-building-service-banner'), { ssr: false });

const LinkMain = () => {
  return (
    <div>
      <Linkbuildingservicebanner /> 
      <Powerfulwhitehat /> 
      <Buildingimportant /> 
      <Increasedwebsitetraffic /> 
      <Improvedkeywordrankings /> 
      <Domainauthorityimprovements />
<<<<<<< HEAD
      <SocialMedia />
      <Webdadlinkbuilding />
      <Lookinglinkbuilding />
      <Fqlinkbuildingservice />
=======
      <Webdadlinkbuilding />
      <Lookinglinkbuilding />
      <Fqlinkbuildingservice />
      <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
    </div>
  );
}

export default LinkMain;
