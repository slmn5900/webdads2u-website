import React from 'react';
// import UnderConstructions from './UnderConstructions';
import dynamic from 'next/dynamic';
const UnderConstructions = dynamic(() => import('./UnderConstructions'), { ssr: false });

export const metadata = {
    title: 'Pongal Celebrate In Webdads2u | Culturals',
    description: "At Webdads2u,we joyfully celebrate Pongal, honoring Tamil culture with traditional rituals, team unity, and gratitude for nature's bounty.",
    keyword: 'pongal function,office celebration '
};
const page = () => {
    return (
        <div>
            <UnderConstructions />
        </div>
    );
};

export default page;
