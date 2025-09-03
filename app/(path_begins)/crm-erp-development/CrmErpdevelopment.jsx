"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import "./crmstyles.scss";

// Dynamically import each component with SSR set to false
const CrmHero = dynamic(() => import('./CrmHero'), { ssr: false });
const Wavecard = dynamic(() => import('./Wavecard'), { ssr: false });
const CrmerpFaq = dynamic(() => import('./CrmerpFaq'), { ssr: false });

const CrmErpdevelopment = () => {
  return (
    <>
      <CrmHero />
      <Wavecard />
      <CrmerpFaq />
    </>
  );
}

export default CrmErpdevelopment;
