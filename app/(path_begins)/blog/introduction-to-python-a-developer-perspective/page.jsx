import React from 'react';
import dynamic from 'next/dynamic';
const UnderConstructions = dynamic(() => import('./UnderConstructions'), { ssr: false });
// import UnderConstructions from './UnderConstructions';

export const metadata = {
    title: 'Best Corporate Gifts Design Company In Chennai',
    description: 'Webdads2u is the top choice for a corporate gifts design company in Chennai. We provide the best creative flyer designing services in Chennai.'
};
const page = () => {
    return (
        <div>
            <UnderConstructions />
        </div>
    );
};

export default page;
