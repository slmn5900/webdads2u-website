import React from 'react';
import dynamic from 'next/dynamic';
const UnderConstructionsComponent = dynamic(() => import('../../../components/common/UnderConstructionsComponent'), { ssr: false });

export const metadata = {
    title: 'Top 5 Brochure Design Company In Chennai 2024',
    description: 'Top 5 brochure design company in chennai 2024',
    keywords: 'top 5 brochure design company in chennai 2024'
};
const page = () => {
    return (
        <div>
            {/* <h1>about page</h1> */}
            <UnderConstructionsComponent />
        </div>
    );
};

export default page;
