import React from 'react';
import dynamic from 'next/dynamic';

const UnderConstructions = dynamic(() => import('./UnderConstructions'), { ssr: false });
export const metadata = {
    title: 'Why Web Designing Is Important',
    description: 'Why web designing is important.Web design is crucial for engaging users. It shapes their first impression, impacts usability, and influences conversions.',
    keyword: 'why web designing is important'
};
const page = () => {
    return (
        <div>
            <UnderConstructions />
        </div>
    );
};

export default page;
