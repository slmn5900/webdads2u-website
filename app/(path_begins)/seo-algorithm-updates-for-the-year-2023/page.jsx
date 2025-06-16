import React from 'react';
import dynamic from 'next/dynamic';
const UnderConstructionsComponent = dynamic(() => import("../../../components/common/UnderConstructionsComponent"), { ssr: false });
export const metadata = {
    title: 'SEO Algorithm Updates for the Year 2023',
    description: 'Stay updated with the major seo algorithm changes of 2023. Learn how these updates impact rankings, content strategy, and website performance',
    keywords: 'seo algorithm updates for the year 2023'
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
