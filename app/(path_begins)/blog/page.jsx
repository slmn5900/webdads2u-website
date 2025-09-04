import React from 'react';
import dynamic from 'next/dynamic';
const UnderConstruction = dynamic(() => import('./UnderConstructions'), { ssr: false });

export const metadata = {
    title: 'Best Web Design Company In Chennai',
    description: 'Creating stunning online experiences, our web design company blends creativity with technical expertise to bring your vision to life. Reach us today!'
};
const Page = () => {
    return (
        // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        //     <div style={{ width: '300px', height: '300px' }}>
        //         <Lottie animationData={UnderConstruction} loop autoplay />
        //     </div>
        <div>
            <UnderConstruction />
        </div>
    );
};

export default Page;
