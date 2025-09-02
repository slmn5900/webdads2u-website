<<<<<<< HEAD
import React from 'react';
// import UnderConstructions from './UnderConstructions';
import dynamic from 'next/dynamic';
const UnderConstructions = dynamic(() => import('./UnderConstructions'), { ssr: false });
export const metadata = {
    title: 'Best Corporate Gifts Design Company In Chennai',
    description: 'Webdads2u is the top choice for a corporate gifts design company in chennai. We provide the best creative flyer designing services in chennai.',
    keyword: 'best corporate gifts design company in chennai,best corporate gifts design company,best corporate gifts design'
};
const page = () => {
    return (
        <div>
            <UnderConstructions />
        </div>
    );
};

export default page;
=======

import CorporateGiftDesign from './CorporateGiftDesign'

export default function Page() {
  return (
    
        <CorporateGiftDesign />
  
  )
}
>>>>>>> a0d19cc (Initial commit)
