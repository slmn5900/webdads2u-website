import React from 'react';
// import UnderConstructions from './UnderConstructions';
import dynamic from 'next/dynamic';
const UnderConstructions = dynamic(() => import('./UnderConstructions'), { ssr: false });
export const metadata = {
    title: 'Best Web Design Company In Chennai',
    description: 'Creating stunning online experiences, our web design company blends creativity with technical expertise to bring your vision to life. Reach us today!',
    keyword: 'best web design company in chennai,web design company,web design company in chennai, web designing company in chennai, website design company in chennai, website company in chennai, top web design company in chennai'
};
const page = () => {
    return (
        <div>
            <UnderConstructions />
        </div>
    );  
};

export default page;
