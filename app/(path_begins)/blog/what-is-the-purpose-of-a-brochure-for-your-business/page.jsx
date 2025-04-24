import React from 'react';
import dynamic from 'next/dynamic';
// import UnderConstructions from './UnderConstructions';
const UnderConstructions = dynamic(() => import('./UnderConstructions'), { ssr: false });
export const metadata = {
    title: 'Best Web Design Company In Chennai',
    description: 'Creating stunning online experiences, our web design company blends creativity with technical expertise to bring your vision to life. Reach us today!'
};
const page = () => {
    return (
        <div>
            <UnderConstructions />
        </div>
    );
};

export default page;
